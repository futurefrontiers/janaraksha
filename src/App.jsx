import React from 'react';

import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import AboutUs from './pages/About';
import Projects from './pages/Projects';
import BloodDonation from './pages/Donations/Blood';
import Contact from './pages/Contact';
import Details from './pages/Projects/components/Details';
import Dashboard from './Pages/Dashboard/Dashboard';
import TermsAndConditions from './Pages/TermsAndConditions';

import Comming from './pages/Comming';

import { LocationFilters } from './components/LocationFilters/LocationFilters';
import { Toaster } from 'react-hot-toast';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import Info from './pages/Donations/Blood/components/RightContainer/info';
import DonarRegForm from './pages/Donations/Blood/components/RightContainer/DonarRegForm';
import FindDonar from './pages/Donations/Blood/components/RightContainer/FindDonar';
import BooldBanks from './pages/Donations/Blood/components/RightContainer/BooldBanks';

function App() {
    return (
        <div className='wrapper'>
            <Toaster />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<AboutUs />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/projects/:id' element={<Details />} />
                <Route path='/donations/organ' element={<Comming />} />
                <Route path='/donations/blood' element={<BloodDonation />}>
                    <Route index element={<Info />} />
                    <Route path='/donations/blood/register' element={<DonarRegForm />} />
                    <Route path='/donations/blood/find' element={<FindDonar />} />
                    <Route path='/donations/blood/banks' element={<BooldBanks />} />
                </Route>
                <Route path='/donations/food' element={<Comming />} />
                <Route path='/donations/financial' element={<Comming />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/admin' element={<Dashboard />} />
                <Route path='/terms' element={<TermsAndConditions />} />
                <Route path='/privacyPolicy' element={<PrivacyPolicy />} />
                <Route path='/showcase/location-filter' Component={LocationFilters} />
            </Routes>
        </div>
    );
}

export default App;
