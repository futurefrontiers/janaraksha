import React from 'react';

import Info from './info';
import DonarRegForm from './DonarRegForm';

const RightContainer = ({ selectedOption }) => {
    return (
        <>
            {selectedOption === 'info' ? <Info /> : null}
            {selectedOption === 'donars' ? <DonarRegForm /> : null}
        </>
    );
};

export default RightContainer;
