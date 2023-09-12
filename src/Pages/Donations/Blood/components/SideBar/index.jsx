import React from 'react';

const SideBar = ({ handleSelection, selectedOption }) => {
    return (
        <div className='services-list'>
            <a href='#' onClick={() => handleSelection('info')} className={selectedOption === 'info' ? 'active' : ''}>
                Blood Donation
            </a>
            <a href='#' onClick={() => handleSelection('donars')} className={selectedOption === 'donars' ? 'active' : ''}>
                Become a Donar
            </a>
            <a href='#' onClick={() => handleSelection('find_donar')} className={selectedOption === 'find_donar' ? 'active' : ''}>
                Find Donars
            </a>
            <a href='#' onClick={() => handleSelection('banks')} className={selectedOption === 'banks' ? 'active' : ''}>
                Blood Banks
            </a>
        </div>
    );
};

export default SideBar;
