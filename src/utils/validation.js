import { Errors } from '../constants/index';

const checkIfSameCourse = ({ state, payload }) => {
    const { currentOrder } = state;
    const { courses } = state.orders[currentOrder];

    return courses.includes(payload.course);
};

const isWaiterNotHappy = ({ state, payload }) => {
    const { currentOrder } = state;
    const { dishes } = state.orders[currentOrder];

    if (
        (payload.dish.id === 4 && dishes.some(dish => dish.id === 7)) ||
        (payload.dish.id === 7 && dishes.some(dish => dish.id === 4))
    )
        return true;

    return false;
};

const checkIfCheesecakeOrdered = ({ state, payload }) => {
    const orders = Object.keys(state.orders);
    let cheesecakeOrdered = false;

    if (payload.dish.id === 11) {
        cheesecakeOrdered = orders.some(orderNumber => {
            const order = state.orders[orderNumber];

            return order.dishes.some(dish => dish.id === 11);
        });
    }
    return cheesecakeOrdered;
};

const checkOrderLength = ({ state }) => {
    const orders = Object.keys(state.orders);

    for (let i = 0; i < orders.length; i++) {
        if (state.orders[i].courses.length < 2) {
            return true;
        }
    }

    return false;
};

const checkIfOrderHasNoMains = ({ state }) => {
    const orders = Object.keys(state.orders);

    for (let i = 0; i < orders.length; i++) {
        if (!state.orders[i].courses.includes('mains')) {
            return true;
        }
    }

    return false;
};

const checkoutValidation = ({ state, payload }) => {
    if (checkIfSameCourse({ state, payload })) {
        return {
            error: Errors.SAME_COURSE,
        };
    }

    if (isWaiterNotHappy({ state, payload })) {
        return {
            error: Errors.WAITER,
        };
    }

    if (checkIfCheesecakeOrdered({ state, payload })) {
        return {
            error: Errors.CHEESECAKE,
        };
    }

    return true;
};

const orderValidation = ({ state }) => {
    if (checkOrderLength({ state })) {
        return {
            error: Errors.AT_LEAST_TWO_COURSES,
        };
    }

    if (checkIfOrderHasNoMains({ state })) {
        return {
            error: Errors.MUST_INCLUDE_MAINS,
        };
    }

    return true;
};

export { checkoutValidation, orderValidation };
