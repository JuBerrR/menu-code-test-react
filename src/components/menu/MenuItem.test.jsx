import React from 'react';
import { render } from '@testing-library/react';
import MenuItem from './MenuItem';
import { MenuProvider } from '../../context/MenuContext';

const menu = {
    starters: [
        {
            id: 1,
            name: 'Soup',
            price: 3,
        },
    ],
    mains: [
        {
            id: 5,
            name: 'Steak',
            price: 18,
        },
    ],
    desserts: [
        {
            id: 9,
            name: 'Sticky toffee',
            price: 18,
        },
    ],
};

describe('<MenuItem />', () => {
    it('Renders <MenuItem /> component correctly', () => {
        const menuItem = render(
            <MenuProvider>
                <MenuItem dishes={menu.starters} course="starters" />
                <MenuItem dishes={menu.mains} course="mains" />
                <MenuItem dishes={menu.desserts} course="desserts" />
            </MenuProvider>
        );
        expect(menuItem).toMatchSnapshot();
    });
});
