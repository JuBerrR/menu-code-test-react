import React from 'react';
import { useMenu } from '../../context/MenuContext';

import './error.scss';

const Error = () => {
    const {
        menuState: { error },
    } = useMenu();
    return <div className="error-text">{error && <strong>{error}</strong>}</div>;
};

export default Error;
