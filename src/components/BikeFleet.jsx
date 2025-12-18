import React, { useState } from 'react';
import { FaWhatsapp, FaRoad } from 'react-icons/fa';
import BookingModal from './BookingModal';

const BikeFleet = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedBike, setSelectedBike] = useState('');

    const handleBookClick = (bikeName) => {
        setSelectedBike(bikeName);
        setIsModalOpen(true);
    };

    const bikes = [
        {
            name: 'Honda Activa BS6',
            variant: 'Black',
            image: '/images/activa.png',
            kmRange: 100,
            price: 499,
            extraKm: 3,
            extraHour: 50,
            category: 'Scooter',
            color: 'Black',
            features: ['BS6 Engine', 'Fuel Efficient', 'Easy to Ride']
        },
        {
            name: 'TVS Jupiter 125',
            variant: 'Cement Grey',
            image: '/images/jupiter.png',
            kmRange: 100,
            price: 499,
            extraKm: 3,
            extraHour: 50,
            category: 'Scooter',
            color: 'Cement',
            features: ['125cc Engine', 'Comfortable Ride', 'Spacious Storage']
        },
        {
            name: 'Ather Rizta',
            variant: 'blue',
            image: '/images/Blue-Mono.png',
            kmRange: 80,
            price: 599,
            extraKm: 3,
            extraHour: 50,
            category: 'Electric Scooter',
            color: 'Violet',
            features: ['Electric', 'Fast Charging', 'Smart Features'],
            isElectric: true
        },
        {
            name: 'Hero HF Deluxe',
            variant: 'Black & Grey',
            image: '/images/hf-deluxe.png',
            kmRange: 100,
            price: 499,
            extraKm: 3,
            extraHour: 50,
            category: 'Commuter',
            color: 'Black and Grey',
            features: ['Fuel Efficient', 'Reliable', 'Low Maintenance']
        },
        {
            name: 'Yamaha R15 V3',
            variant: 'Black',
            image: '/images/r15.png',
            kmRange: 120,
            price: 899,
            extraKm: 4,
            extraHour: 70,
            category: 'Sport Bike',
            color: 'Black',
            features: ['155cc Engine', 'Racing Style', 'High Performance'],
            isPremium: true
        },
        {
            name: 'Royal Enfield Classic 350',
            variant: 'Stealth Black',
            image: '/images/royal-enfield.png',
            kmRange: 120,
            price: 999,
            extraKm: 4,
            extraHour: 70,
            category: 'Cruiser',
            color: 'Stealth Black',
            features: ['Classic Design', 'Powerful Engine', 'Long Range'],
            isPremium: true
        },
        {
            name: 'Royal Enfield Himalayan',
            variant: 'Black',
            image: '/images/himalayan.png',
            kmRange: 130,
            price: 1099,
            extraKm: 4,
            extraHour: 70,
            category: 'Adventure Bike',
            color: 'Black',
            features: ['411cc Engine', 'Off-Road Ready', 'Long Distance'],
            isPremium: true
        }
    ];

    return (
        <section id="bikes" className="section-padding bg-gradient-to-br from-gray-50 via-white to-gray-50">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full font-semibold text-sm mb-4">
                        Our Fleet
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Choose Your Perfect
                        <span className="gradient-text"> Ride</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        From scooters to sports bikes, we have a wide range of well-maintained bikes
                        to suit your needs and budget.
                    </p>
                </div>

                {/* Bikes Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {bikes.map((bike, index) => (
                        <div
                            key={index}
                            className="bike-card animate-scale-in"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Badge */}
                            {(bike.isPremium || bike.isElectric) && (
                                <div className="absolute top-3 right-3 z-10">
                                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-bold text-white ${bike.isPremium ? 'bg-gradient-to-r from-yellow-500 to-orange-500' : 'bg-gradient-to-r from-green-500 to-emerald-500'
                                        }`}>
                                        {bike.isPremium ? '⭐ PREMIUM' : '⚡ ELECTRIC'}
                                    </span>
                                </div>
                            )}

                            {/* Image */}
                            <div className="relative overflow-hidden bg-gray-100">
                                <img
                                    src={bike.image}
                                    alt={bike.name}
                                    className={bike.name === 'Ather Rizta' || bike.name === 'Royal Enfield Himalayan' ? 'bike-card-image-flipped' : 'bike-card-image'}
                                />
                                <div className="absolute top-3 left-3">
                                    <span className="inline-block px-2 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-700">
                                        {bike.category}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-4">
                                <h3 className="text-xl font-bold text-gray-900 mb-1">{bike.name}</h3>
                                <p className="text-sm text-gray-500 mb-3">{bike.variant}</p>

                                {/* Specs */}
                                <div className="mb-3">
                                    <div className="flex items-center text-sm text-gray-600">
                                        <FaRoad className="text-primary-600 mr-2" />
                                        <span>{bike.kmRange}km/24 hrs</span>
                                    </div>
                                </div>

                                {/* Features */}
                                <div className="mb-3">
                                    <div className="flex flex-wrap gap-1.5">
                                        {bike.features.map((feature, idx) => (
                                            <span
                                                key={idx}
                                                className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded-md"
                                            >
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Pricing */}
                                <div className="border-t border-gray-200 pt-3 mb-3">
                                    <div className="flex items-baseline justify-between mb-1">
                                        <div>
                                            <span className="text-2xl font-bold text-gray-900">₹{bike.price}</span>
                                            <span className="text-gray-500 text-sm ml-1">/24hrs</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Extras Section */}
                                <div className="bg-gray-50 rounded-lg p-3 mb-3">
                                    <h4 className="text-xs font-bold text-gray-700 mb-2">Extras</h4>
                                    <div className="space-y-1">
                                        {!bike.isElectric && (
                                            <div className="flex justify-between items-center text-xs">
                                                <span className="text-gray-600">Extra km charge:</span>
                                                <span className="font-semibold text-gray-900">₹{bike.extraKm}/km</span>
                                            </div>
                                        )}
                                        <div className="flex justify-between items-center text-xs">
                                            <span className="text-gray-600">Extra hour charge:</span>
                                            <span className="font-semibold text-gray-900">₹{bike.extraHour}/hr</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Book Button */}
                                <button
                                    onClick={() => handleBookClick(bike.name)}
                                    className="btn-primary w-full justify-center text-sm py-2.5"
                                >
                                    <FaWhatsapp className="text-lg mr-2" />
                                    Book This Bike
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Info */}
                <div className="mt-16 bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 md:p-12 border border-primary-100">
                    <div className="max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">📋 Rental Terms</h3>
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-start">
                                <span className="text-primary-600 mr-2">•</span>
                                <span>All prices are for 24-hour rental periods</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-primary-600 mr-2">•</span>
                                <span>Helmet provided free with every rental</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-primary-600 mr-2">•</span>
                                <span>Valid driving license required</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-primary-600 mr-2">•</span>
                                <span>Fuel charges extra as per actual consumption</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Booking Modal */}
            <BookingModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                bikeName={selectedBike}
            />
        </section>
    );
};

export default BikeFleet;
