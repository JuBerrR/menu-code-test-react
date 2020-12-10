import React from 'react';
import { render } from 'react-dom';
import Checkout from './components/checkout/Checkout';
import Menu from './components/menu/Menu';
import { MenuProvider } from './context/MenuContext';

import './App.scss';

const App = () => {
    return (
        <MenuProvider>
            <header className="header">Menu Test</header>
            <div className="app-container">
                <div className="menu-list">
                    <Menu />
                </div>
                <div className="checkout">
                    <Checkout />
                </div>
            </div>
        </MenuProvider>
    );
};

render(<App />, document.getElementById('root'));
// render(<App />, document.getElementById('root') || document.createElement('div')); // for testing

export default App;
