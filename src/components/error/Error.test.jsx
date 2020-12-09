import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Error from './Error';
import { MenuProvider } from '../../context/MenuContext';

describe('Error component', () => {
    it('Renders <Error /> component successfully', () => {
        const { container } = render(
            <MenuProvider>
                <Error />
            </MenuProvider>
        );
        expect(container.firstChild).toBeTruthy();
    });
    // could not mock useContext to pass error, tried everything, but with no success
});
