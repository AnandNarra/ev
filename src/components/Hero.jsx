import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaArrowDown } from 'react-icons/fa';

const Hero = () => {
    const [currentImage, setCurrentImage] = useState(0);

    const backgroundImages = [
        'https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=2940&auto=format&fit=crop', // Motorcycle on road
        'https://images.unsplash.com/photo-1558981285-6f0c94958bb6?q=80&w=2940&auto=format&fit=crop', // Sports bike closeup
        'https://images.unsplash.com/photo-1609630875171-b1321377ee65?q=80&w=2940&auto=format&fit=crop'  // Motorcycle adventure
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const whatsappNumber = '7032160046';
    const whatsappMessage = encodeURIComponent('Hi! I would like to book a bike. Can you please provide me with more details?');
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="relative h-screen w-full overflow-hidden">
            {/* Background Images with Transition */}
            {backgroundImages.map((image, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImage ? 'opacity-100' : 'opacity-0'
                        }`}
                    style={{
                        backgroundImage: `url(${image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
            ))}

            {/* Overlay */}
            <div className="overlay-dark" />

            {/* Content */}
            <div className="relative z-10 h-full flex items-center justify-center">
                <div className="container-custom px-4">
                    <div className="text-center animate-slide-up">
                        <div className="inline-block mb-4">
                            <span className="inline-flex items-center px-6 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm font-semibold">
                                🏍️ Premium Bike Rentals in Hyderabad
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-shadow-lg leading-tight">
                            Ride Your Dream
                            <br />
                            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                                Bike Today
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-100 mb-12 max-w-3xl mx-auto text-shadow">
                            Experience the freedom of self-driving bike rentals. Choose from our wide range of bikes and hit the road!
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up animation-delay-200">
                            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-primary text-lg px-10 py-4">
                                <FaWhatsapp className="text-2xl mr-3" />
                                Book Now on WhatsApp
                            </a>
                            <button onClick={() => scrollToSection('bikes')} className="btn-secondary text-lg px-10 py-4">
                                View Our Bikes
                                <FaArrowDown className="ml-3 animate-bounce" />
                            </button>
                        </div>


                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
                    <div className="w-1 h-3 bg-white rounded-full animate-pulse" />
                </div>
            </div>

            {/* Image Indicators */}
            <div className="absolute bottom-8 right-8 flex gap-2 z-20">
                {backgroundImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentImage(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentImage ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/75'
                            }`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Hero;

