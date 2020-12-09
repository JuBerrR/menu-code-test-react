import React from 'react';
import { useMenu } from '../../context/MenuContext';

import './menuItem.scss';

const MenuItem = ({ dishes, course }) => {
    const { menuState, menuActions } = useMenu();

    const isCourseSelected = menuState.orders[menuState.currentOrder].courses.includes(course);

    return (
        <div className="menu-items-container">
            {dishes.map((dish, index) => (
                <span key={index}>
                    <button
                        type="button"
                        className="dish"
                        disabled={isCourseSelected}
                        onClick={() => menuActions.addToCheckout({ dish, course })}
                        key={index}
                    >
                        {dish.name}

                        <p className="dish-price">{dish.price} Eur</p>
                    </button>
                </span>
            ))}
        </div>
    );
};

export default MenuItem;
