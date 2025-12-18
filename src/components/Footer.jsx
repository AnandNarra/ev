import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaWhatsapp, FaPhone, FaEnvelope, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const navigate = useNavigate();
    const location = useLocation();

    const scrollToSection = (id) => {
        // If not on home page, navigate to home first
        if (location.pathname !== '/') {
            navigate('/');
            // Wait for navigation to complete, then scroll
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
    };

    return (
        <footer className="bg-gradient-to-br from-dark-800 to-dark-900 text-white">
            <div className="container-custom section-padding">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <div className="mb-4">
                            <img
                                src="/images/RAR Logo.png"
                                alt="Rent A Ride Logo"
                                className="h-20 w-auto object-contain"
                            />
                        </div>
                        <p className="text-gray-400 mb-6">
                            Your trusted partner for affordable and convenient bike rentals in Chittoor.
                            Ride safe, ride smart!
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="https://wa.me/7032160046"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-200"
                            >
                                <FaWhatsapp className="text-xl" />
                            </a>
                            <a
                                href="https://www.instagram.com/_rentaride_"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center hover:from-pink-600 hover:to-purple-700 transition-colors duration-200"
                            >
                                <FaInstagram className="text-xl" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-4">Quick Links</h4>
                        <ul className="space-y-3">
                            <li>
                                <button
                                    onClick={() => scrollToSection('home')}
                                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                                >
                                    Home
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection('about')}
                                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                                >
                                    About Us
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection('services')}
                                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                                >
                                    Services
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => navigate('/bikes')}
                                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                                >
                                    Our Bikes
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection('contact')}
                                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                                >
                                    Contact
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-bold mb-4">Our Services</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li className="flex items-start">
                                <span className="text-primary-500 mr-2">•</span>
                                Self Driving Bike Rentals
                            </li>
                            <li className="flex items-start">
                                <span className="text-primary-500 mr-2">•</span>
                                24-Hour Rental Plans
                            </li>
                            <li className="flex items-start">
                                <span className="text-primary-500 mr-2">•</span>
                                Free Helmet Included
                            </li>
                            <li className="flex items-start">
                                <span className="text-primary-500 mr-2">•</span>
                                Well-Maintained Fleet
                            </li>
                            <li className="flex items-start">
                                <span className="text-primary-500 mr-2">•</span>
                                24/7 Customer Support
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold mb-4">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <FaPhone className="text-primary-500 mt-1 mr-3 flex-shrink-0" />
                                <div>
                                    <a href="tel:7032160046" className="text-gray-400 hover:text-white transition-colors duration-200 block">
                                        7032160046
                                    </a>
                                    <a href="tel:7842560046" className="text-gray-400 hover:text-white transition-colors duration-200 block">
                                        7842560046
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <FaEnvelope className="text-primary-500 mt-1 mr-3 flex-shrink-0" />
                                <a href="mailto:rentaride111@gmail.com" className="text-gray-400 hover:text-white transition-colors duration-200">
                                    rentaride111@gmail.com
                                </a>
                            </li>
                            <li className="flex items-start">
                                <FaInstagram className="text-primary-500 mt-1 mr-3 flex-shrink-0" />
                                <a href="https://www.instagram.com/_rentaride_" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
                                    @_rentaride_
                                </a>
                            </li>
                            <li className="flex items-start">
                                <FaMapMarkerAlt className="text-primary-500 mt-1 mr-3 flex-shrink-0" />
                                <a href="https://maps.app.goo.gl/jtzGAN7bGRheCjNV8" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
                                    Chittoor, Andhra Pradesh
                                </a>
                            </li>
                        </ul>
                        <div className="mt-6 bg-gradient-to-r from-primary-600/20 to-accent-600/20 border border-primary-500/30 rounded-xl p-4">
                            <p className="text-sm font-semibold text-white mb-1">Business Hours</p>
                            <p className="text-sm text-gray-300">7:00 AM - 10:00 PM Daily</p>
                        </div>
                    </div>
                </div>

                {/* Terms and Conditions Section */}
                <div className="border-t border-gray-700 pt-8 mb-8">
                    <h3 className="text-lg font-bold text-white mb-4">Terms and Conditions</h3>
                    <div className="bg-gray-800 rounded-lg p-6 text-gray-300 text-sm space-y-4">
                        <div>
                            <h4 className="font-bold text-white mb-2">1. Rental Agreement</h4>
                            <p>By renting a bike from Rent A Ride, you agree to comply with all terms and conditions. The renter must be at least 18 years old with a valid driving license.</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-white mb-2">2. Security Deposit</h4>
                            <p>A refundable security deposit is required at the time of booking. The deposit will be refunded upon safe return of the vehicle in the same condition.</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-white mb-2">3. Usage Terms</h4>
                            <p>The bike is provided for personal use only. Commercial use, racing, or any illegal activities are strictly prohibited. The renter is responsible for all traffic violations and fines.</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-white mb-2">4. Fuel Policy</h4>
                            <p>Fuel is provided at a certain level and customer must return the vehicle at the same fuel level.</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-white mb-2">5. Damage and Liability</h4>
                            <p>The renter is responsible for any damage to the bike during the rental period. In case of accidents, the renter must inform us immediately and file a police report.</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-white mb-2">6. Cancellation Policy</h4>
                            <p>Cancellations made 24 hours before the rental start time will receive a full refund. Cancellations within 24 hours are non-refundable.</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-white mb-2">7. Late Returns</h4>
                            <p>Extra charges apply for late returns. Please contact us if you need to extend your rental period.</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-white mb-2">8. Kilometer Limit</h4>
                            <p>Each rental includes limited kilometers within 24 hours. Additional kilometers beyond the limit will be charged at ₹3 per kilometer.</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-700 pt-8">
                    <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                        <p className="text-gray-400 text-sm text-center">
                            © {currentYear} Rent A Ride. All rights reserved. Made with ❤️ in Chittoor.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
