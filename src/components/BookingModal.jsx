import React, { useState, useEffect } from 'react';
import { FaTimes, FaWhatsapp, FaCalendarAlt, FaClock, FaMapMarkerAlt, FaCheckCircle, FaPhone } from 'react-icons/fa';

const BookingModal = ({ isOpen, onClose, bikeName }) => {
    const [pickupDate, setPickupDate] = useState('');
    const [pickupTime, setPickupTime] = useState('11:00');
    const [dropoffDate, setDropoffDate] = useState('');
    const [dropoffTime, setDropoffTime] = useState('11:00');
    const [location, setLocation] = useState('Chittoor');
    const [destination, setDestination] = useState('');
    const [showTerms, setShowTerms] = useState(false);
    const [acceptedTerms, setAcceptedTerms] = useState(false);

    // Calculate duration in days
    const calculateDuration = () => {
        if (pickupDate && dropoffDate) {
            const pickup = new Date(pickupDate);
            const dropoff = new Date(dropoffDate);
            const diffTime = dropoff - pickup;
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            return diffDays > 0 ? diffDays : 1;
        }
        return 1;
    };

    // Set default dates on mount
    useEffect(() => {
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);

        setPickupDate(formatDateForInput(today));
        setDropoffDate(formatDateForInput(tomorrow));
        setShowTerms(false);
        setAcceptedTerms(false);
    }, [isOpen]);

    const formatDateForInput = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    const formatDateForDisplay = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-IN', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    };

    const handleBookNow = () => {
        if (!showTerms) {
            // Validate destination is filled
            if (!destination || destination.trim() === '') {
                alert('Please enter your destination.');
                return;
            }
            setShowTerms(true);
            return;
        }

        if (!acceptedTerms) {
            alert('Please accept the terms and conditions to proceed.');
            return;
        }

        const duration = calculateDuration();
        const message = encodeURIComponent(
            `Hi! I would like to book the ${bikeName}.\n\n` +
            `📅 Pickup: ${formatDateForDisplay(pickupDate)} at ${pickupTime}\n` +
            `📅 Dropoff: ${formatDateForDisplay(dropoffDate)} at ${dropoffTime}\n` +
            `📍 Pickup Location: ${location}\n` +
            `🎯 Destination: ${destination}\n` +
            `⏱️ Duration: ${duration} day(s)\n\n` +
            `I have read and accepted the terms and conditions.\n\n` +
            `Please confirm availability.`
        );
        const whatsappLink = `https://wa.me/7032160046?text=${message}`;
        window.open(whatsappLink, '_blank');
        onClose();
    };

    const timeOptions = [];
    for (let hour = 7; hour <= 22; hour++) {
        const hourStr = hour.toString().padStart(2, '0');
        timeOptions.push(`${hourStr}:00`);
        if (hour < 22) {
            timeOptions.push(`${hourStr}:30`);
        }
    }

    const locations = [
        'Chittoor',
        'Tirupati',
        'Madanapalle',
        'Puttur',
        'Srikalahasti'
    ];

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto animate-scale-in">
                {/* Header */}
                <div className="bg-gradient-to-r from-primary-600 to-primary-700 px-6 py-4 flex items-center justify-between sticky top-0 z-10">
                    <h2 className="text-xl font-bold text-white">
                        {showTerms ? 'Terms & Conditions' : 'Select Date & Time'}
                    </h2>
                    <button
                        onClick={onClose}
                        className="text-white/80 hover:text-white transition-colors"
                    >
                        <FaTimes className="text-xl" />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6">
                    {!showTerms ? (
                        <>
                            {/* Duration Display */}
                            <div className="mb-6">
                                <p className="text-gray-700 font-semibold">
                                    Ride Duration - ({calculateDuration()} day{calculateDuration() > 1 ? 's' : ''})
                                </p>
                            </div>

                            {/* Pickup Section */}
                            <div className="mb-6">
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Pickup
                                </label>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="relative">
                                        <input
                                            type="date"
                                            value={pickupDate}
                                            onChange={(e) => setPickupDate(e.target.value)}
                                            min={formatDateForInput(new Date())}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-700"
                                        />
                                    </div>
                                    <div className="relative">
                                        <select
                                            value={pickupTime}
                                            onChange={(e) => setPickupTime(e.target.value)}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-700 appearance-none bg-white"
                                        >
                                            {timeOptions.map((time) => {
                                                const hour = parseInt(time.split(':')[0]);
                                                const minute = time.split(':')[1];
                                                let displayHour = hour;
                                                let period = 'AM';

                                                if (hour === 0) {
                                                    displayHour = 12;
                                                } else if (hour === 12) {
                                                    period = 'PM';
                                                } else if (hour > 12) {
                                                    displayHour = hour - 12;
                                                    period = 'PM';
                                                }

                                                return (
                                                    <option key={`pickup-${time}`} value={time}>
                                                        {`${displayHour}:${minute} ${period}`}
                                                    </option>
                                                );
                                            })}
                                        </select>
                                        <FaClock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                                    </div>
                                </div>
                            </div>

                            {/* Dropoff Section */}
                            <div className="mb-6">
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Dropoff
                                </label>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="relative">
                                        <input
                                            type="date"
                                            value={dropoffDate}
                                            onChange={(e) => setDropoffDate(e.target.value)}
                                            min={pickupDate || formatDateForInput(new Date())}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-700"
                                        />
                                    </div>
                                    <div className="relative">
                                        <select
                                            value={dropoffTime}
                                            onChange={(e) => setDropoffTime(e.target.value)}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-700 appearance-none bg-white"
                                        >
                                            {timeOptions.map((time) => {
                                                const hour = parseInt(time.split(':')[0]);
                                                const minute = time.split(':')[1];
                                                let displayHour = hour;
                                                let period = 'AM';

                                                if (hour === 0) {
                                                    displayHour = 12;
                                                } else if (hour === 12) {
                                                    period = 'PM';
                                                } else if (hour > 12) {
                                                    displayHour = hour - 12;
                                                    period = 'PM';
                                                }

                                                return (
                                                    <option key={`dropoff-${time}`} value={time}>
                                                        {`${displayHour}:${minute} ${period}`}
                                                    </option>
                                                );
                                            })}
                                        </select>
                                        <FaClock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                                    </div>
                                </div>
                            </div>

                            {/* Location Section */}
                            <div className="mb-6">
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Pickup Location
                                </label>
                                <input
                                    type="text"
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                    placeholder="Enter pickup location"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-700"
                                />
                            </div>

                            {/* Destination Section */}
                            <div className="mb-8">
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Destination <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    value={destination}
                                    onChange={(e) => setDestination(e.target.value)}
                                    placeholder="Where are you planning to go?"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-700"
                                    required
                                />
                            </div>
                        </>
                    ) : (
                        <>
                            {/* Terms and Conditions */}
                            <div className="mb-6 max-h-96 overflow-y-auto bg-gray-50 rounded-lg p-4 border border-gray-200">
                                <h3 className="font-bold text-gray-900 mb-3">Please read and accept our terms:</h3>
                                <div className="space-y-3 text-sm text-gray-700">
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Documents Required:</h4>
                                        <ul className="list-disc list-inside space-y-1 ml-2">
                                            <li>Original driving license (or digital copy with ₹1000 refundable deposit)</li>
                                            <li>Valid identity proof (Aadhaar/PAN)</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Fuel Policy:</h4>
                                        <p>Fuel is provided at a certain level and customer must return the vehicle at the same fuel level.</p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Delay Charges:</h4>
                                        <p>Hourly charges for first 2 hours delay. Beyond 2 hours treated as next day.</p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Extension Policy:</h4>
                                        <p>Inform 6 hours before end of ride to extend rental.</p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Kilometer Limit:</h4>
                                        <p>limited km included per 24 hours. Extra km charged.</p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Important Rules:</h4>
                                        <ul className="list-disc list-inside space-y-1 ml-2">
                                            <li>No sub-letting or transferring to others</li>
                                            <li>Adhere to traffic rules and speed limits</li>
                                            <li>Helmet mandatory - penalties borne by customer</li>
                                            <li>No cross-border travel without prior approval</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Acceptance Checkbox */}
                            <div className="mb-6">
                                <label className="flex items-start cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={acceptedTerms}
                                        onChange={(e) => setAcceptedTerms(e.target.checked)}
                                        className="mt-1 w-5 h-5 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                                    />
                                    <span className="ml-3 text-sm text-gray-700">
                                        I have read and accept all the terms and conditions mentioned above.
                                    </span>
                                </label>
                            </div>
                        </>
                    )}

                    {/* Action Buttons */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <button
                            onClick={handleBookNow}
                            className={`btn-primary justify-center py-4 text-base sm:text-lg ${!acceptedTerms && showTerms ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            <FaWhatsapp className="text-xl sm:text-2xl mr-2 sm:mr-3" />
                            <span className="whitespace-nowrap">{showTerms ? 'Book on WhatsApp' : 'Book Now'}</span>
                        </button>
                        <a
                            href="tel:7032160046"
                            className="inline-flex items-center justify-center py-4 px-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl text-base sm:text-lg"
                        >
                            <FaPhone className="text-lg sm:text-xl mr-2 sm:mr-3" />
                            <span className="whitespace-nowrap">Call Us Now</span>
                        </a>
                    </div>

                    {showTerms && (
                        <button
                            onClick={() => setShowTerms(false)}
                            className="w-full mt-3 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                        >
                            Back to Details
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BookingModal;
