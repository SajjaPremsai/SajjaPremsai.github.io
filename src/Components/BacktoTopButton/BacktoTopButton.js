import React, { useState, useEffect } from 'react';

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div style={{ display: isVisible ? 'block' : 'none', position: 'fixed', zIndex: '1000', bottom: '50px', right: '50px' }}>
            <button
                onClick={scrollToTop}
                style={{
                    display: 'block',
                    height: '50px',
                    width: '50px',
                    fontSize: '30px',
                    backgroundColor: '#EC4D37',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    outline: 'none',
                    boxShadow: '0 2px 2px rgba(0, 0, 0, 0.3)'
                }}
            >
                &uarr;
            </button>
        </div>
    );
};

export default BackToTopButton;
