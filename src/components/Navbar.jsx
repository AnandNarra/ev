import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Scroll spy to detect active section
    useEffect(() => {
        const handleScrollSpy = () => {
            const sections = ['home', 'bike-preview', 'services', 'about', 'reviews', 'contact'];
            const scrollPosition = window.scrollY + 100;

            for (const sectionId of sections) {
                const element = document.getElementById(sectionId);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(sectionId);
                        break;
                    }
                }
            }
        };

        if (location.pathname === '/') {
            window.addEventListener('scroll', handleScrollSpy);
            handleScrollSpy(); // Initial check
            return () => window.removeEventListener('scroll', handleScrollSpy);
        }
    }, [location.pathname]);

    const scrollToSection = (id) => {
        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
        setIsOpen(false);
    };

    const isActive = (sectionId) => {
        return location.pathname === '/' && activeSection === sectionId;
    };

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-3' : 'bg-white/95 backdrop-blur-sm py-4'
            }`}>
            <div className="container-custom">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-3">
                        <img
                            src="/images/logo.png"
                            alt="Rent A Ride Logo"
                            className="h-16 w-auto object-contain"
                        />
                    </Link>
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <button
                            onClick={() => scrollToSection('home')}
                            className={`font-semibold transition-colors duration-200 ${isActive('home') ? 'text-primary-600 font-bold' : 'text-gray-700 hover:text-primary-600'}`}
                        >
                            Home
                        </button>
                        <Link to="/bikes" className="text-gray-700 hover:text-primary-600 font-semibold transition-colors duration-200">
                            Bikes
                        </Link>
                        <Link to="/attractions" className="text-gray-700 hover:text-primary-600 font-semibold transition-colors duration-200">
                            Attractions
                        </Link>
                        <button
                            onClick={() => scrollToSection('services')}
                            className={`font-semibold transition-colors duration-200 ${isActive('services') ? 'text-primary-600 font-bold' : 'text-gray-700 hover:text-primary-600'}`}
                        >
                            Services
                        </button>
                        <button
                            onClick={() => scrollToSection('about')}
                            className={`font-semibold transition-colors duration-200 ${isActive('about') ? 'text-primary-600 font-bold' : 'text-gray-700 hover:text-primary-600'}`}
                        >
                            About
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className={`font-semibold transition-colors duration-200 ${isActive('contact') ? 'text-primary-600 font-bold' : 'text-gray-700 hover:text-primary-600'}`}
                        >
                            Contact
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-gray-700 hover:text-primary-600 transition-colors duration-200"
                    >
                        {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden mt-4 py-4 border-t border-gray-200 animate-slide-down">
                        <div className="flex flex-col space-y-4">
                            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-primary-600 font-semibold text-left transition-colors duration-200">
                                Home
                            </button>
                            <Link to="/bikes" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-primary-600 font-semibold text-left transition-colors duration-200">
                                Bikes
                            </Link>
                            <Link to="/attractions" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-primary-600 font-semibold text-left transition-colors duration-200">
                                Attractions
                            </Link>
                            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-primary-600 font-semibold text-left transition-colors duration-200">
                                Services
                            </button>
                            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-primary-600 font-semibold text-left transition-colors duration-200">
                                About
                            </button>
                            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-primary-600 font-semibold text-left transition-colors duration-200">
                                Contact
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
