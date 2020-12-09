import React, { createContext, useContext, useReducer } from 'react';
import { checkoutValidation, orderValidation } from '../utils/validation';

const initialState = {
    orders: [
        {
            dishes: [],
            courses: [],
        },
        {
            dishes: [],
            courses: [],
        },
    ],
    currentOrder: 0,
    totalPrice: 0,
    error: undefined,
};

const menuReducer = (state, action) => {
    switch (action.type) {
        case 'addToCheckout': {
            const { error } = checkoutValidation({
                state,
                payload: action.payload,
            });
            if (error) {
                return {
                    ...state,
                    error,
                };
            }
            state.orders[state.currentOrder].dishes.push(action.payload.dish);
            state.orders[state.currentOrder].courses.push(action.payload.course);
            return {
                ...state,
                error: undefined,
                totalPrice: state.totalPrice + action.payload.dish.price,
            };
        }
        case 'removeFromCheckout': {
            const filteredDishesArray = state.orders[state.currentOrder].dishes.filter(
                dish => dish.id !== action.payload.dish.id
            );
            const filteredCoursesArray = state.orders[state.currentOrder].courses.filter(
                course => course !== action.payload.course
            );

            state.orders[state.currentOrder].dishes = filteredDishesArray;
            state.orders[state.currentOrder].courses = filteredCoursesArray;
            return {
                ...state,
                error: undefined,
                totalPrice: state.totalPrice - action.payload.dish.price,
            };
        }
        case 'changeCurrentOrder':
            return {
                ...state,
                currentOrder: action.payload,
            };
        case 'order': {
            const { error } = orderValidation({ state });
            if (error) {
                return {
                    ...state,
                    error,
                };
            }
            return {
                orders: [
                    {
                        dishes: [],
                        courses: [],
                    },
                    {
                        dishes: [],
                        courses: [],
                    },
                ],
                currentOrder: 0,
                totalPrice: 0,
                error: undefined,
            };
        }
        default:
            return { state };
    }
};

const MenuContext = createContext();

function MenuProvider(props) {
    const [menuState, dispatch] = useReducer(menuReducer, initialState);

    const actions = {
        addToCheckout: ({ dish, course }) => {
            dispatch({ type: 'addToCheckout', payload: { dish, course } });
        },
        removeFromCheckout: ({ dish, course }) => {
            dispatch({ type: 'removeFromCheckout', payload: { dish, course } });
        },
        changeCurrentOrder: currentOrderNumber => {
            dispatch({ type: 'changeCurrentOrder', payload: currentOrderNumber });
        },
        order: () => {
            dispatch({ type: 'order' });
        },
    };

    return (
        <MenuContext.Provider
            value={{
                menuState,
                menuActions: actions,
            }}
        >
            {props.children}
        </MenuContext.Provider>
    );
}

export { MenuProvider };
export const useMenu = () => useContext(MenuContext);
