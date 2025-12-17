import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaArrowDown, FaPhone } from 'react-icons/fa';

const Hero = () => {
    const [currentImage, setCurrentImage] = useState(0);

    const backgroundImages = [
        'https://images.unsplash.com/photo-1622185135505-2d795003994a?q=80&w=2940&auto=format&fit=crop', // Biker riding on open road
        'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=2940&auto=format&fit=crop', // Modern sports bike
        'https://images.unsplash.com/photo-1547549082-6bc09f2049ae?q=80&w=2940&auto=format&fit=crop'  // Motorcycle rider sunset
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const whatsappNumber = '7032160046';
    const phoneNumber = '7032160046';
    const whatsappMessage = encodeURIComponent('Hi! I would like to book a bike in Chittoor. Can you please provide me with more details?');
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="relative h-[85vh] w-full overflow-hidden pt-16 md:pt-20">
            {/* Background Images with Transition */}
            {backgroundImages.map((image, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImage ? 'opacity-100' : 'opacity-0'
                        }`}
                    style={{
                        backgroundImage: `url(${image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center center',
                        backgroundRepeat: 'no-repeat',
                    }}
                />
            ))}

            {/* Overlay */}
            <div className="overlay-dark" />

            {/* Content */}
            <div className="relative z-10 h-full flex items-center justify-center">
                <div className="container-custom px-3 md:px-4">
                    <div className="text-center animate-slide-up">
                        <div className="inline-block mb-2 md:mb-3">
                            <span className="inline-flex items-center px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-[10px] md:text-sm font-semibold">
                                🏍️ Premium Bike Rentals in Chittoor
                            </span>
                        </div>

                        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-3 md:mb-4 text-shadow-lg leading-tight px-2">
                            Ride Your Dream
                            <br />
                            <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                                Bike Today
                            </span>
                        </h1>


                        {/* Price Badge */}
                        <div className="inline-block mb-3 md:mb-4 animate-pulse-subtle">
                            <span className="inline-flex items-center px-6 py-2.5 md:px-8 md:py-3.5 rounded-full bg-gradient-to-r from-yellow-400 via-orange-500 to-orange-600 text-white text-base md:text-xl lg:text-2xl font-extrabold shadow-2xl border-2 border-white/50 hover:scale-105 transition-transform duration-300" style={{
                                boxShadow: '0 0 30px rgba(251, 146, 60, 0.8), 0 0 60px rgba(251, 146, 60, 0.4), 0 10px 40px rgba(0, 0, 0, 0.3)'
                            }}>
                                <span className="animate-bounce inline-block mr-2">💰</span>
                                <span className="drop-shadow-lg">Price starts just @₹499</span>
                            </span>
                        </div>

                        <p className="text-xs sm:text-sm md:text-lg text-gray-100 mb-4 md:mb-6 max-w-2xl mx-auto text-shadow px-4">
                            Experience the freedom of self-driving bike rentals. Choose from our wide range of bikes and hit the road!
                        </p>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-2 md:gap-3 justify-center items-center animate-slide-up animation-delay-200 px-4">
                            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center text-[10px] sm:text-sm md:text-base px-3 py-2.5 sm:px-5 md:px-6 md:py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                <FaWhatsapp className="text-sm md:text-lg mr-1 sm:mr-2" />
                                <span className="whitespace-nowrap">Book on WhatsApp</span>
                            </a>
                            <button
                                onClick={() => scrollToSection('bike-preview')}
                                className="w-full sm:w-auto inline-flex items-center justify-center text-[10px] sm:text-sm md:text-base px-3 py-2.5 sm:px-5 md:px-6 md:py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                            >
                                <span className="whitespace-nowrap">View Available Bikes</span>
                                <FaArrowDown className="text-xs md:text-base ml-1 sm:ml-2" />
                            </button>
                        </div>

                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-5 h-8 border-2 border-white rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-white rounded-full animate-pulse" />
                </div>
            </div>

            {/* Image Indicators */}
            <div className="absolute bottom-6 right-6 flex gap-2 z-20">
                {backgroundImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentImage(index)}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentImage ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/75'
                            }`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Hero;

