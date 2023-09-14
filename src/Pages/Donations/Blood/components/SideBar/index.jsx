import React from 'react';

const SideBar = ({ handleSelection, selectedOption }) => {
    return (
        <div className='services-list'>
            <a onClick={() => handleSelection('info')} className={selectedOption === 'info' ? 'active' : ''}>
                Blood Donation
            </a>
            <a onClick={() => handleSelection('donars')} className={selectedOption === 'donars' ? 'active' : ''}>
                Become a Donar
            </a>
            <a onClick={() => handleSelection('find_donar')} className={selectedOption === 'find_donar' ? 'active' : ''}>
                Find Donars
            </a>
            <a onClick={() => handleSelection('banks')} className={selectedOption === 'banks' ? 'active' : ''}>
                Blood Banks
            </a>
        </div>
    );
};

export default SideBar;
