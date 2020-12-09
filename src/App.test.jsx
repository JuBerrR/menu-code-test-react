import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
    it('Renders <App /> component correctly', () => {
        const app = render(<App />);

        expect(app).toMatchSnapshot();
    });
});
