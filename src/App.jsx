import React from 'react';

import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import AboutUs from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import OrganDonation from './pages/Donations/Organ';
import BloodDonation from './pages/Donations/Blood';
import FoodDonation from './pages/Donations/Food';
import FinancialSupport from './pages/Donations/Financial';
import Contact from './pages/Contact';
import Details from './pages/Projects/components/Details';

import './assets/styles/ui_style.scss';

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<AboutUs />} />
                <Route path='/services' element={<Services />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/projects/:id' element={<Details />} />
                <Route path='/donations/organ' element={<OrganDonation />} />
                <Route path='/donations/blood' element={<BloodDonation />} />
                <Route path='/donations/food' element={<FoodDonation />} />
                <Route path='/donations/financial' element={<FinancialSupport />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </>
    );
}

export default App;
