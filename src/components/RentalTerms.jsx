import React from 'react';
import { FaFileContract, FaIdCard, FaGasPump, FaClock, FaExclamationTriangle, FaTachometerAlt, FaUserShield, FaMapMarkedAlt } from 'react-icons/fa';
import { GiFullMotorcycleHelmet } from 'react-icons/gi';

const RentalTerms = () => {
    const terms = [
        {
            icon: <FaIdCard className="text-4xl text-primary-600" />,
            title: 'Documents Required',
            gradient: 'from-primary-500 to-primary-700',
            items: [
                'Original driving license to be submitted. If physical is not available, digital copy can be submitted by paying deposit of Rs.1000 which is refundable while returning the vehicle.',
                'Valid identity proof (Aadhaar/PAN).'
            ]
        },
        {
            icon: <FaGasPump className="text-4xl text-accent-600" />,
            title: 'Fuel Policy',
            gradient: 'from-accent-500 to-accent-700',
            items: [
                'Fuel is provided at a certain level and customer must return the vehicle at the same fuel level.'
            ]
        },
        {
            icon: <FaClock className="text-4xl text-orange-600" />,
            title: 'Delay Charges',
            gradient: 'from-orange-500 to-red-600',
            items: [
                'If the vehicle is returned late beyond the agreed rental time, additional hourly charges (up to first two hours of delay) will apply.',
                'Exceeding 2 hrs it is treated as next day and day charges will apply as per company policy.'
            ]
        },
        {
            icon: <FaFileContract className="text-4xl text-green-600" />,
            title: 'Extension Policy',
            gradient: 'from-green-500 to-emerald-700',
            items: [
                'To extend the rent for next day, customer should inform 6hrs before the end of ride.'
            ]
        },
        {
            icon: <FaTachometerAlt className="text-4xl text-indigo-600" />,
            title: 'Kilometer Limit',
            gradient: 'from-indigo-500 to-indigo-700',
            items: [
                'Each rental includes limited kilometers within 24 hours. Additional kilometers beyond the limit will be charged at ₹3 per kilometer.'
            ]
        },
        {
            icon: <FaUserShield className="text-4xl text-purple-600" />,
            title: 'Sub-letting Restriction',
            gradient: 'from-purple-500 to-purple-700',
            items: [
                'The rented vehicle must not be transferred, sublet, or driven by anyone other than the registered customer.'
            ]
        },
        {
            icon: <FaTachometerAlt className="text-4xl text-blue-600" />,
            title: 'Speed Limit',
            gradient: 'from-blue-500 to-cyan-600',
            items: [
                'Customers must adhere to traffic rules and speed limits. Fines or penalties due to over-speeding will be charged to the customer.'
            ]
        },
        {
            icon: <GiFullMotorcycleHelmet className="text-4xl text-yellow-600" />,
            title: 'Helmet Rule',
            gradient: 'from-yellow-500 to-orange-500',
            items: [
                'Helmet is mandatory for riders. Any penalty for not wearing a helmet will be borne by the customer.'
            ]
        },
        {
            icon: <FaMapMarkedAlt className="text-4xl text-red-600" />,
            title: 'Cross-Border Restriction',
            gradient: 'from-red-500 to-pink-600',
            items: [
                'The rented vehicle cannot be taken outside the permitted city/state limits without prior approval from Rent a Ride.'
            ]
        }
    ];

    return (
        <section id="rental-terms" className="section-padding bg-white">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full font-semibold text-sm mb-4">
                        Important Information
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Rental
                        <span className="gradient-text"> Terms & Conditions</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Please read and understand our rental terms before booking your bike.
                        These policies ensure a safe and smooth rental experience for everyone.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {terms.map((term, index) => (
                        <div
                            key={index}
                            className="card hover-lift group animate-scale-in"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className={`bg-gradient-to-br ${term.gradient} p-6 text-white rounded-t-2xl`}>
                                <div className="flex items-center gap-4 mb-3">
                                    {term.icon}
                                    <h3 className="text-2xl font-bold">{term.title}</h3>
                                </div>
                            </div>

                            <div className="p-6 bg-gray-50">
                                <ul className="space-y-3">
                                    {term.items.map((item, idx) => (
                                        <li key={idx} className="flex items-start text-gray-700">
                                            <span className="text-primary-600 mr-2 mt-1 flex-shrink-0">•</span>
                                            <span className="text-sm leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Important Notice */}
                <div className="mt-12 bg-gradient-to-r from-orange-50 to-red-50 border-l-4 border-orange-500 rounded-xl p-6">
                    <div className="flex items-start gap-4">
                        <FaExclamationTriangle className="text-3xl text-orange-500 flex-shrink-0 mt-1" />
                        <div>
                            <h4 className="text-xl font-bold text-gray-900 mb-2">Important Notice</h4>
                            <p className="text-gray-700 leading-relaxed">
                                By booking a bike with Rent a Ride, you agree to comply with all the above terms and conditions.
                                Violation of any terms may result in penalties, additional charges, or cancellation of your rental.
                                For any clarifications, please contact us before booking.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RentalTerms;
