import React from 'react';
import { render } from '@testing-library/react';
import Menu from './Menu';
import { MenuProvider } from '../../context/MenuContext';

describe('<Menu />', () => {
    it('Renders <Menu /> component successfully', () => {
        const { container } = render(
            <MenuProvider>
                <Menu />
            </MenuProvider>
        );
        expect(container.firstChild).toBeTruthy();
    });
});
