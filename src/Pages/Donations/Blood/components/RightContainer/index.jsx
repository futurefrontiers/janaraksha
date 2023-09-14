import React from 'react';

import Info from './info';
import DonarRegForm from './DonarRegForm';
import FindDonar from './FindDonar';
import BooldBanks from './BooldBanks';

const RightContainer = ({ selectedOption }) => {
    return (
        <>
            {selectedOption === 'info' ? <Info /> : null}
            {selectedOption === 'donars' ? <DonarRegForm /> : null}
            {selectedOption === 'find_donar' ? <FindDonar /> : null}
            {selectedOption === 'banks' ? <BooldBanks /> : null}
        </>
    );
};

export default RightContainer;
