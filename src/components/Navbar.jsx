import React from 'react';
import logo from '../assets/logo.svg';

const Navbar = () => {
    return (
        <nav
            style={{
                position: 'fixed',      
                top: 0,
                left: 0,
                width: '100vw',         
                boxSizing: 'border-box',
                display: 'flex',
                alignItems: 'center',
                padding: '0.2rem',
                backgroundColor: '#0047A8',
                color: 'white',
                zIndex: 1000,
            }}
        >
            <img src={logo} alt="CronoSana" style={{ height: '40px', marginRight: '20px' }} />
            <h2 style={{ margin: 0 }}>CronoSana</h2>
        </nav>

    );
};

export default Navbar;