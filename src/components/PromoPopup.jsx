import React, { useState, useEffect } from 'react';
import { FaTimes, FaMotorcycle } from 'react-icons/fa';

const PromoPopup = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show popup after 2 seconds of page load
        const showTimer = setTimeout(() => {
            setIsVisible(true);
        }, 2000);

        // Auto-hide after 10 seconds
        const hideTimer = setTimeout(() => {
            setIsVisible(false);
        }, 12000); // 2s delay + 10s show = 12s total

        return () => {
            clearTimeout(showTimer);
            clearTimeout(hideTimer);
        };
    }, []);

    const handleClose = () => {
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
            <div className="relative bg-gradient-to-br from-yellow-400 via-orange-400 to-orange-500 rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-scale-in">
                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute top-3 right-3 z-10 w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-colors shadow-lg"
                    aria-label="Close"
                >
                    <FaTimes className="text-gray-800 text-lg" />
                </button>

                {/* Content */}
                <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                        <div>
                            <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-2">
                                Get
                                <br />
                                <span className="text-7xl md:text-8xl">20%</span>
                                <br />
                                <span className="text-4xl md:text-5xl">OFF</span>
                            </h2>
                        </div>
                        <div className="text-right">
                            <p className="text-sm font-semibold text-gray-800 mb-2">USE CODE</p>
                            <div className="bg-white/90 px-4 py-2 rounded-lg border-2 border-dashed border-gray-800">
                                <p className="text-xl md:text-2xl font-bold text-gray-900">HELLO2025</p>
                            </div>
                        </div>
                    </div>

                    {/* Bike Image */}
                    <div className="flex items-center justify-center mb-4">
                        <FaMotorcycle className="text-8xl text-gray-900 opacity-80" />
                    </div>

                    {/* Details */}
                    <div className="bg-white/90 rounded-lg p-4 text-center">
                        <p className="text-2xl font-bold text-gray-900 mb-1">upto ₹200</p>
                        <p className="text-sm text-gray-700">on your first booking</p>
                    </div>

                    {/* Call to Action */}
                    <div className="mt-4 text-center">
                        <a
                            href="https://wa.me/7032160046?text=Hi!%20I%20would%20like%20to%20use%20code%20HELLO2025%20for%2020%25%20off"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-gray-900 hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Book Now & Save!
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PromoPopup;
