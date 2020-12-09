import React from 'react';
import MenuItem from './MenuItem';

import menu from '../../../menu-data.json';

const Menu = () => (
    <div>
        <div>
            <h2>Starters</h2>
            <MenuItem dishes={menu.starters} course="starters" />
        </div>
        <div>
            <h2>Mains</h2>
            <MenuItem dishes={menu.mains} course="mains" />
        </div>
        <div>
            <h2>Desserts</h2>
            <MenuItem dishes={menu.desserts} course="desserts" />
        </div>
    </div>
);

export default Menu;
