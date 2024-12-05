import React, { useState, useEffect } from 'react';
import HomePage from './pages/HomePage';
import NavbarComponent from './components/Navbar';
import FooterComponent from './components/Footer';

function App() {
    return (<>
        <NavbarComponent />
        <main>
            <HomePage />
        </main>
        <FooterComponent />
    </>);
}

export default App;