"use client";
import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 500) {
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
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-10 right-10 p-3 rounded-full bg-amber-800 text-white shadow-lg hover:bg-amber-700 transition-all duration-300 z-40 hover:cursor-pointer"
                    aria-label="العودة إلى الأعلى"
                >
                    <FaArrowUp className="h-5 w-5 animate-bounce hover:animate-none" />
                </button>
            )}
        </>
    );
};

export default BackToTopButton;