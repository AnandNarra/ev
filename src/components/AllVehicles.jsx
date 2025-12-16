import React, { useState } from 'react';
import { FaWhatsapp, FaRoad, FaPhone } from 'react-icons/fa';
import BookingModal from './BookingModal';

const AllVehicles = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedBike, setSelectedBike] = useState('');

    const handleBookClick = (bikeName) => {
        setSelectedBike(bikeName);
        setIsModalOpen(true);
    };

    const phoneNumber = '7032160046';

    const bikes = [
        {
            name: 'Honda Activa BS6',
            variant: 'Black',
            image: '/images/activa.png',
            kmRange: 100,
            price: 499,
            extraKm: 3,
            extraHour: 20,
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
            extraHour: 20,
            category: 'Scooter',
            color: 'Cement',
            features: ['125cc Engine', 'Comfortable Ride', 'Spacious Storage']
        },
        {
            name: 'Hero HF Deluxe',
            variant: 'Black & Grey',
            image: '/images/hf-deluxe.png',
            kmRange: 100,
            price: 499,
            extraKm: 3,
            extraHour: 20,
            category: 'Commuter',
            color: 'Black and Grey',
            features: ['Fuel Efficient', 'Reliable', 'Low Maintenance']
        },
        {
            name: 'Ather Rizta',
            variant: 'Violet',
            image: '/images/ather.png',
            kmRange: 80,
            price: 599,
            extraKm: 3,
            extraHour: 25,
            category: 'Electric Scooter',
            color: 'Violet',
            features: ['Electric', 'Fast Charging', 'Smart Features'],
            isElectric: true
        },
        {
            name: 'Yamaha R15 V3',
            variant: 'Black',
            image: '/images/r15.png',
            kmRange: 120,
            price: 899,
            extraKm: 4,
            extraHour: 35,
            category: 'Sport Bike',
            color: 'Black',
            features: ['155cc Engine', 'Racing Style', 'High Performance'],
            isPremium: true
        },
        {
            name: 'Royal Enfield Himalayan',
            variant: 'Black',
            image: '/images/himalayan.png',
            kmRange: 130,
            price: 1099,
            extraKm: 4,
            extraHour: 45,
            category: 'Adventure Bike',
            color: 'Black',
            features: ['411cc Engine', 'Off-Road Ready', 'Long Distance'],
            isPremium: true
        }
    ];

    return (
        <section className="section-padding bg-gradient-to-br from-gray-50 via-white to-gray-50 mt-20">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full font-semibold text-sm mb-4">
                        Complete Fleet
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        All Available
                        <span className="gradient-text"> Vehicles</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Browse our complete collection of bikes and scooters. Find the perfect ride for your journey.
                    </p>
                </div>

                {/* Bikes Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {bikes.map((bike, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Badge */}
                            {(bike.isPremium || bike.isElectric) && (
                                <div className="absolute top-4 right-4 z-10">
                                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white ${bike.isPremium ? 'bg-gradient-to-r from-yellow-500 to-orange-500' : 'bg-gradient-to-r from-green-500 to-emerald-500'
                                        }`}>
                                        {bike.isPremium ? '⭐ PREMIUM' : '⚡ ELECTRIC'}
                                    </span>
                                </div>
                            )}

                            {/* Image */}
                            <div className="relative overflow-hidden h-48">
                                <img
                                    src={bike.image}
                                    alt={bike.name}
                                    className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-300"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-700">
                                        {bike.category}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-5">
                                <h3 className="text-xl font-bold text-gray-900 mb-1">{bike.name}</h3>
                                <p className="text-sm text-gray-500 mb-3">{bike.variant}</p>

                                {/* Specs */}
                                <div className="mb-3">
                                    <div className="flex items-center text-sm text-gray-600 mb-2">
                                        <FaRoad className="text-primary-600 mr-2" />
                                        <span>{bike.kmRange}km/24 hrs</span>
                                    </div>
                                </div>

                                {/* Features */}
                                <div className="mb-3">
                                    <div className="flex flex-wrap gap-2">
                                        {bike.features.map((feature, idx) => (
                                            <span
                                                key={idx}
                                                className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md"
                                            >
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Extras Section */}
                                <div className="bg-gray-50 rounded-lg p-3 mb-3">
                                    <h4 className="text-xs font-semibold text-gray-700 mb-2">Extras</h4>
                                    <div className="space-y-1 text-xs text-gray-600">
                                        <div className="flex justify-between">
                                            <span>Extra km charge:</span>
                                            <span className="font-semibold">₹{bike.extraKm}/km</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Extra hour charge:</span>
                                            <span className="font-semibold">₹{bike.extraHour}/hr</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Pricing */}
                                <div className="border-t border-gray-200 pt-3 mb-3">
                                    <div className="flex items-baseline justify-between">
                                        <div>
                                            <span className="text-2xl font-bold text-gray-900">₹{bike.price}</span>
                                            <span className="text-gray-500 text-sm ml-1">/24hrs</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="grid grid-cols-2 gap-2">
                                    <button
                                        onClick={() => handleBookClick(bike.name)}
                                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-3 rounded-lg transition-all duration-300 flex items-center justify-center"
                                    >
                                        <FaWhatsapp className="text-xl mr-1" />
                                        <span className="text-sm">WhatsApp</span>
                                    </button>
                                    <a
                                        href={`tel:${phoneNumber}`}
                                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-3 rounded-lg transition-all duration-300 flex items-center justify-center"
                                    >
                                        <FaPhone className="text-lg mr-1" />
                                        <span className="text-sm">Call Now</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
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

export default AllVehicles;
