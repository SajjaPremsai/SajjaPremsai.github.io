import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    return (
        <footer className="bg-dark text-center text-white py-3 footers">
            <div className="container">
                <div>
                    &copy; {new Date().getFullYear()} <span><span style={{ color: "#EC4D37" }}>P</span>rem Sai.</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
