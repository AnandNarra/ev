import React, { useState } from 'react';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';

const WhatsAppToggle = () => {
    const [isOpen, setIsOpen] = useState(false);

    const whatsappNumber = '7032160046';
    const whatsappMessage = encodeURIComponent('Hi! I would like to rent a bike. Can you please help me with the details?');
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
            {/* Chat popup when open */}
            {isOpen && (
                <div className="whatsapp-popup animate-fade-in-up bg-white rounded-2xl shadow-2xl p-4 w-72 border border-gray-100">
                    <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                                <FaWhatsapp className="text-white text-xl" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-800 text-sm">Rent A Ride</h4>
                                <p className="text-xs text-green-500">Online Now</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-gray-400 hover:text-gray-600 transition-colors"
                        >
                            <FaTimes />
                        </button>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-3 mb-3">
                        <p className="text-sm text-gray-600">
                            👋 Hi there! Looking to rent a bike? Chat with us on WhatsApp for quick booking and support!
                        </p>
                    </div>
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]"
                    >
                        <FaWhatsapp className="text-xl" />
                        Start Chat
                    </a>
                </div>
            )}

            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`whatsapp-toggle-btn w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 ${isOpen
                        ? 'bg-gray-600 hover:bg-gray-700'
                        : 'bg-green-500 hover:bg-green-600 animate-pulse-subtle'
                    }`}
                aria-label={isOpen ? 'Close WhatsApp chat' : 'Open WhatsApp chat'}
            >
                {isOpen ? (
                    <FaTimes className="text-white text-2xl" />
                ) : (
                    <FaWhatsapp className="text-white text-3xl" />
                )}
            </button>
        </div>
    );
};

export default WhatsAppToggle;
