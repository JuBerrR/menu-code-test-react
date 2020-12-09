import React from 'react';
import { useMenu } from '../../context/MenuContext';
import Error from '../error/Error';

import './Checkout.scss';

const Checkout = () => {
    const { menuState, menuActions } = useMenu();

    const { currentOrder, orders } = menuState;

    const totalPrice = <p className="total-bill-label"> Total bill is: {menuState.totalPrice} Eur </p>;

    return (
        <div className="checkout-container">
            <header className="checkout-header">
                <button
                    data-testid="select-diner-button left"
                    type="button"
                    className="select-diner-button left"
                    disabled={currentOrder === 0}
                    onClick={() => menuActions.changeCurrentOrder(0)}
                >
                    Diner 1
                </button>
                <button
                    data-testid="select-diner-button right"
                    type="button"
                    className="select-diner-button right"
                    disabled={currentOrder === 1}
                    onClick={() => menuActions.changeCurrentOrder(1)}
                >
                    Diner 2
                </button>
            </header>
            <div className="checkout-items">
                {orders[currentOrder].dishes.map((item, index) => (
                    <p key={index}>
                        <span>{item.name}</span>
                        <button
                            key={index}
                            type="button"
                            className="remove-item-button"
                            onClick={() =>
                                menuActions.removeFromCheckout({
                                    dish: item,
                                    course: orders[currentOrder].courses[index],
                                })
                            }
                        >
                            -
                        </button>
                    </p>
                ))}
            </div>
            <div className="checkout-footer">
                <div className="total-bill-label">{menuState.totalPrice !== 0 && totalPrice}</div>
                <button
                    data-testid="order-button"
                    disabled={menuState.orders[currentOrder].dishes.length === 0}
                    type="button"
                    className="order-button"
                    onClick={() => menuActions.order()}
                >
                    Order
                </button>
                <Error />
            </div>
        </div>
    );
};

export default Checkout;
