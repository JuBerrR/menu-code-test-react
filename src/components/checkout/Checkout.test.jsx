import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Checkout from './Checkout';
import { MenuProvider } from '../../context/MenuContext';

describe('Checkout component', () => {
    it('Renders <Checkout /> component successfully', () => {
        const { container } = render(
            <MenuProvider>
                <Checkout />
            </MenuProvider>
        );
        expect(container.firstChild).toBeTruthy();
    });
    it('Renders order button correctly', () => {
        const checkout = render(
            <MenuProvider>
                <Checkout />
            </MenuProvider>
        );
        const button = checkout.getByTestId('order-button');
        expect(button).toBeTruthy();
        expect(button).toBeDisabled();
    });
    it('Renders select Diner 1(left) button correctly', () => {
        const checkout = render(
            <MenuProvider>
                <Checkout />
            </MenuProvider>
        );
        const button = checkout.getByTestId('select-diner-button left');
        expect(button).toBeTruthy();
        expect(button).toBeDisabled();
    });
    it('Renders select Diner 2(right) button correctly', () => {
        const checkout = render(
            <MenuProvider>
                <Checkout />
            </MenuProvider>
        );
        const button = checkout.getByTestId('select-diner-button right');
        expect(button).toBeTruthy();
        expect(button).not.toBeDisabled();
    });
});
