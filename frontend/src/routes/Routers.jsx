import React from 'react';
import Home from '../pages/Home';
import Services from '../pages/Services';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Contact from '../pages/Contact';
import Therapist from '../pages/Therapists/Therapist';
import TherapistDetails from '../pages/Therapists/TherapistDetails';
import { Routes, Route } from 'react-router-dom';

const Routers = () => {
  return <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/home" element={<Home />} />
    <Route path="/doctors" element={<Therapist />} />
    <Route path="/doctors/:id" element={<TherapistDetails />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<SignUp />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/services" element={<Services />} />
  </Routes>
}

export default Routers
