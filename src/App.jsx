import React from "react";

import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import AboutUs from "./pages/About";
import Projects from "./pages/Projects";
import BloodDonation from "./pages/Donations/Blood";
import Contact from "./pages/Contact";
import Details from "./pages/Projects/components/Details";
import Dashboard from "./Pages/Dashboard/Dashboard";

import Comming from './pages/Comming';

import './assets/styles/ui_style.scss';
import { LocationFilters } from './components/LocationFilters/LocationFilters';
import { Toaster } from 'react-hot-toast';

function App() {
    return (
        <>
            <Toaster />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<AboutUs />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/projects/:id' element={<Details />} />
                <Route path='/donations/organ' element={<Comming />} />
                <Route path='/donations/blood' element={<BloodDonation />} />
                <Route path='/donations/food' element={<Comming />} />
                <Route path='/donations/financial' element={<Comming />} />
                <Route path='/contact' element={<Contact />} />
                <Route path="/admin" element={<Dashboard />} />
                <Route path="/showcase/location-filter" Component={LocationFilters} />
            </Routes>
        </>
    );
}

export default App;
