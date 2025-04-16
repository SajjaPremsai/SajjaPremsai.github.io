import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    return (
        <footer className="bg-dark text-center text-white py-3 footers">
            <div className="container">
                <div>
                    &copy; {new Date().getFullYear()} Code_Demon__
                </div>
            </div>
        </footer>
    );
};

export default Footer;
