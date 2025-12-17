import React, { useState } from 'react';
import { FaWhatsapp, FaPhone, FaEnvelope, FaInstagram, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        bike: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const message = encodeURIComponent(
            `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nInterested in: ${formData.bike}\nMessage: ${formData.message}`
        );
        window.open(`https://wa.me/7032160046?text=${message}`, '_blank');
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const contactInfo = [
        {
            icon: <FaPhone className="text-2xl" />,
            title: 'Call Us',
            details: ['7032160046', '7842560046'],
            link: 'tel:7032160046',
            gradient: 'from-primary-500 to-primary-700'
        },
        {
            icon: <FaWhatsapp className="text-2xl" />,
            title: 'WhatsApp',
            details: ['Quick booking & support'],
            link: 'https://wa.me/7032160046',
            gradient: 'from-green-500 to-green-700'
        },
        {
            icon: <FaEnvelope className="text-2xl" />,
            title: 'Email',
            details: ['rentaride111@gmail.com'],
            link: 'mailto:rentaride111@gmail.com',
            gradient: 'from-accent-500 to-accent-700'
        },
        {
            icon: <FaInstagram className="text-2xl" />,
            title: 'Instagram',
            details: ['@_rentaride_'],
            link: 'https://www.instagram.com/_rentaride_',
            gradient: 'from-pink-500 to-purple-700'
        }
    ];

    return (
        <section id="contact" className="section-padding bg-white">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 bg-accent-100 text-accent-700 rounded-full font-semibold text-sm mb-4">
                        Get In Touch
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Ready to
                        <span className="gradient-text"> Start Your Journey?</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Contact us through your preferred channel. We're here to help you find the perfect bike!
                    </p>
                </div>

                {/* Contact Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {contactInfo.map((contact, index) => (
                        <a
                            key={index}
                            href={contact.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="card hover-lift animate-scale-in group"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className={`bg-gradient-to-br ${contact.gradient} p-6 text-white`}>
                                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                                    {contact.icon}
                                </div>
                                <h3 className="text-lg font-bold mb-2">{contact.title}</h3>
                                {contact.details.map((detail, idx) => (
                                    <p key={idx} className="text-white/90 text-sm">{detail}</p>
                                ))}
                            </div>
                        </a>
                    ))}
                </div>

                {/* Main Contact Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="card p-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="input-primary w-full"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="input-primary w-full"
                                    placeholder="Enter your phone number"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="input-primary w-full"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Bike Interested In</label>
                                <select
                                    name="bike"
                                    value={formData.bike}
                                    onChange={handleChange}
                                    className="input-primary w-full"
                                >
                                    <option value="">Select a bike</option>
                                    <option value="Activa BS6">Activa BS6</option>
                                    <option value="Jupiter 125">Jupiter 125</option>
                                    <option value="HF Deluxe">HF Deluxe</option>
                                    <option value="Ather Rizta">Ather Rizta</option>
                                    <option value="Yamaha R15 V3">Yamaha R15 V3</option>
                                    <option value="Himalayan">Royal Enfield Himalayan</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    className="input-primary w-full"
                                    placeholder="Tell us about your rental needs..."
                                ></textarea>
                            </div>
                            <button type="submit" className="btn-primary w-full justify-center">
                                <FaWhatsapp className="text-xl mr-2" />
                                Send via WhatsApp
                            </button>
                        </form>
                    </div>

                    {/* Business Information */}
                    <div className="space-y-6">
                        {/* Business Hours */}
                        <div className="card p-8">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mr-4">
                                    <FaClock className="text-2xl text-primary-600" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900">Business Hours</h3>
                                    <p className="text-sm text-gray-500">We're open every day</p>
                                </div>
                            </div>
                            <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl p-6 border border-primary-100">
                                <div className="flex justify-between items-center mb-3">
                                    <span className="font-semibold text-gray-900">Monday - Sunday</span>
                                    <span className="text-primary-600 font-bold">7:00 AM - 10:00 PM</span>
                                </div>
                                <p className="text-sm text-gray-600">Extended hours for your convenience</p>
                            </div>
                        </div>

                        {/* Quick Contact */}
                        <div className="card p-8 bg-gradient-to-br from-primary-600 to-accent-600 text-white">
                            <h3 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h3>
                            <p className="text-white/90 mb-6">
                                Our team is ready to help you. Book your bike instantly via WhatsApp!
                            </p>
                            <div className="space-y-3">
                                <a
                                    href="https://wa.me/7032160046"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center bg-white text-primary-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                                >
                                    <FaWhatsapp className="text-2xl mr-3" />
                                    Chat on WhatsApp
                                </a>
                                <a
                                    href="tel:7032160046"
                                    className="flex items-center justify-center bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 border border-white/30"
                                >
                                    <FaPhone className="text-xl mr-3" />
                                    Call: 7032160046
                                </a>
                            </div>
                        </div>

                        {/* Location Notice */}
                        <div className="card p-6 bg-gray-50 border border-gray-200">
                            <div className="flex items-start">
                                <FaMapMarkerAlt className="text-primary-600 text-xl mt-1 mr-3 flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-1">Service Area</h4>
                                    <p className="text-sm text-gray-600">
                                        We provide bike rental services across Chittoor. Contact us for delivery locations.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
