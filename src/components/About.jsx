import React from 'react';
import { FaCheckCircle, FaMotorcycle, FaShieldAlt, FaClock } from 'react-icons/fa';

const About = () => {
    const features = [
        {
            icon: <FaMotorcycle className="text-4xl text-primary-600" />,
            title: 'Wide Selection',
            description: 'Choose from scooters to sports bikes and adventure motorcycles'
        },
        {
            icon: <FaShieldAlt className="text-4xl text-accent-600" />,
            title: 'Well Maintained',
            description: 'Regular service and safety checks on all vehicles'
        },
        {
            icon: <FaClock className="text-4xl text-primary-600" />,
            title: 'Flexible Hours',
            description: 'Open 7 AM to 10 PM daily for your convenience'
        },
        {
            icon: <FaCheckCircle className="text-4xl text-accent-600" />,
            title: 'Easy Booking',
            description: 'Quick booking process via WhatsApp'
        }
    ];

    return (
        <section id="about" className="section-padding bg-gradient-to-br from-gray-50 to-white">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full font-semibold text-sm mb-4">
                        About Us
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Your Trusted Partner for
                        <span className="gradient-text"> Self-Driving Bike Rentals</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        At Rent A Ride, we provide premium self-driving bike rentals in  Chittoor.
                        Whether you're commuting, exploring, or just need a ride for the day,
                        we've got the perfect bike for you.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="card p-6 text-center hover-lift animate-scale-in"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="flex justify-center mb-4">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>

                {/* Stats Section */}
                <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-3xl p-10 md:p-16 text-white animate-slide-up">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-5xl md:text-6xl font-bold mb-2">500+</div>
                            <div className="text-lg md:text-xl text-white/90">Happy Customers</div>
                        </div>
                        <div>
                            <div className="text-5xl md:text-6xl font-bold mb-2">6+</div>
                            <div className="text-lg md:text-xl text-white/90">Bike Models</div>
                        </div>
                        <div>
                            <div className="text-5xl md:text-6xl font-bold mb-2">100%</div>
                            <div className="text-lg md:text-xl text-white/90">Satisfaction</div>
                        </div>
                        <div>
                            <div className="text-5xl md:text-6xl font-bold mb-2">24/7</div>
                            <div className="text-lg md:text-xl text-white/90">Support</div>
                        </div>
                    </div>
                </div>

                {/* Why Choose Us */}
                <div className="mt-16 text-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Rent A Ride?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <div className="text-left">
                            <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                                <span className="text-2xl">💰</span>
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-3">Affordable Pricing</h4>
                            <p className="text-gray-600">
                                Starting at just ₹499 per day with transparent pricing. No hidden charges!
                            </p>
                        </div>
                        <div className="text-left">
                            <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center mb-4">
                                <span className="text-2xl">🛡️</span>
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-3">Safety First</h4>
                            <p className="text-gray-600">
                                All bikes are regularly serviced and sanitized. Free helmet included with every rental.
                            </p>
                        </div>
                        <div className="text-left">
                            <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                                <span className="text-2xl">📱</span>
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-3">Easy Process</h4>
                            <p className="text-gray-600">
                                Book instantly via WhatsApp. Simple documentation and quick delivery.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
