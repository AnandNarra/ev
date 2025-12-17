import React from 'react';
import { FaMotorcycle, FaCheckCircle, FaTools, FaHeadset } from 'react-icons/fa';
import { GiFullMotorcycleHelmet } from 'react-icons/gi';
import { MdSecurity } from 'react-icons/md';

const Services = () => {
    const services = [
        {
            icon: <FaMotorcycle className="text-5xl" />,
            title: 'Self-drive bike rentals',
            description: 'Rent bikes on your own terms. No driver needed, complete freedom to explore.',
            gradient: 'from-primary-500 to-primary-700',
            features: ['Flexible rental periods', 'Wide range of bikes', '100+ km included']
        },
        {
            icon: <GiFullMotorcycleHelmet className="text-5xl" />,
            title: 'Flexible pickup and return services',
            description: 'Doorstep delivery within 3kms radius of town premises for your convenience.',
            gradient: 'from-accent-500 to-accent-700',
            features: ['Doorstep delivery', 'Within 3kms radius', 'Convenient pickup']
        },
        {
            icon: <MdSecurity className="text-5xl" />,
            title: 'Free helmet provided',
            description: 'Safety is our priority. Get a clean, sanitized helmet with every rental.',
            gradient: 'from-orange-500 to-red-600',
            features: ['ISI certified helmets', 'Regular sanitization', 'Multiple sizes available']
        },
        {
            icon: <FaTools className="text-5xl" />,
            title: 'Well-maintained vehicles',
            description: 'All our bikes undergo regular maintenance and quality checks.',
            gradient: 'from-green-500 to-emerald-700',
            features: ['Regular servicing', 'Quality assurance', 'Clean & sanitized']
        },
        {
            icon: <FaCheckCircle className="text-5xl" />,
            title: 'Flexible plans',
            description: 'Choose from our 24-hour rental plans with affordable extra km charges.',
            gradient: 'from-purple-500 to-purple-700',
            features: ['24-hour rentals', 'Competitive pricing', 'Transparent costs']
        },
        {
            icon: <FaHeadset className="text-5xl" />,
            title: '24/7 Support',
            description: 'Our team is always available to assist you during your rental period.',
            gradient: 'from-blue-500 to-cyan-600',
            features: ['WhatsApp support', 'Quick response', 'Roadside assistance']
        }
    ];

    return (
        <section id="services" className="py-12 bg-white">
            <div className="container-custom">
                <div className="text-center mb-12">
                    <span className="inline-block px-4 py-2 bg-accent-100 text-accent-700 rounded-full font-semibold text-sm mb-4">
                        Our Services
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Everything You Need for a
                        <span className="gradient-text"> Perfect Ride</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        We offer comprehensive bike rental services with a focus on quality,
                        safety, and customer satisfaction.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="card hover-lift group animate-scale-in"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className={`bg-gradient-to-br ${service.gradient} p-8 text-white`}>
                                <div className="flex justify-between items-start mb-4">
                                    {service.icon}
                                    <span className="text-6xl opacity-20 font-bold">0{index + 1}</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                                <p className="text-white/90 text-sm leading-relaxed">{service.description}</p>
                            </div>

                            <div className="p-6 bg-gray-50">
                                <ul className="space-y-2">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center text-gray-700">
                                            <FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" />
                                            <span className="text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="mt-16 text-center bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-12">
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                        Ready to Hit the Road?
                    </h3>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        Book your bike now and experience the freedom of self-driving rentals
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://wa.me/7032160046?text=Hi!%20I%20would%20like%20to%20book%20a%20bike"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary text-lg"
                        >
                            Book on WhatsApp
                        </a>
                        <button
                            onClick={() => document.getElementById('bikes').scrollIntoView({ behavior: 'smooth' })}
                            className="btn-accent text-lg"
                        >
                            View Available Bikes
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
