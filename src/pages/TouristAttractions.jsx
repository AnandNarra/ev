import React from 'react';
import { FaMapMarkerAlt, FaRoute } from 'react-icons/fa';

const TouristAttractions = () => {
    const temples = [
        {
            name: 'Tirumala Tirupati Devasthanams',
            description: 'World-famous temple of Lord Venkateswara, one of the richest and most visited pilgrimage sites in the world.',
            distance: '90 km from Chittoor',
            image: '/images/tirupati-temple.jpg'
        },
        {
            name: 'Kanipakam Vinayaka Temple',
            description: 'Ancient Ganesha temple known for its self-manifested idol that continuously grows in size.',
            distance: '12 km from Chittoor',
            image: '/images/kanipakam.jpg'
        },
        {
            name: 'Ardhagiri Anjaneya Swamy Temple',
            description: 'Temple dedicated to Lord Hanuman, situated on a hilltop offering panoramic views of the surroundings.',
            distance: '25 km from Chittoor',
            image: '/images/anjaneya-temple.jpg'
        },
        {
            name: 'Golden Temple Vellore',
            description: 'Magnificent temple dedicated to Goddess Lakshmi, known for its stunning golden architecture and intricate carvings.',
            distance: '45 km from Chittoor',
            image: '/images/golden-temple.jpg'
        },
        {
            name: 'Subramanya Swamy Temple Chittoor',
            description: 'Beautiful hilltop temple offering breathtaking top views of Chittoor city and surrounding landscapes.',
            distance: 'Within Chittoor city',
            image: '/images/subramanya-temple.jpg'
        },
        {
            name: 'ISKCON Tirupati',
            description: 'Modern spiritual center dedicated to Lord Krishna, featuring beautiful architecture and peaceful atmosphere.',
            distance: '70 km from Chittoor',
            image: '/images/iskcon-tirupati.jpg'
        }
    ];

    const touristPlaces = [
        {
            name: 'Puligundu Rock',
            description: 'Unique rock formation offering adventure activities and stunning views, perfect for trekking enthusiasts.',
            distance: '25 km from Chittoor',
            image: '/images/puligundu.jpg'
        },
        {
            name: 'Thalakona Waterfalls',
            description: 'Highest waterfall in Andhra Pradesh, surrounded by dense forest and natural beauty, ideal for nature lovers.',
            distance: '100 km from Chittoor',
            image: '/images/thalakona.jpg'
        },
        {
            name: 'Mamandur Waterfalls',
            description: 'Serene waterfall nestled in lush greenery, perfect for picnics and photography.',
            distance: '95 km from Chittoor',
            image: '/images/mamandur.jpg'
        },
        {
            name: 'Kaigal Waterfalls',
            description: 'Picturesque waterfall with crystal clear water, surrounded by scenic hills and forest trails. (75 km from CTR)',
            distance: '75 km from Chittoor',
            image: '/images/kaigal.jpg'
        },
        {
            name: 'Chandragiri Fort',
            description: 'Historic 11th-century fort with magnificent architecture, offering glimpses of Vijayanagara empire heritage.',
            distance: '60 km from Chittoor',
            image: '/images/chandragiri.jpg'
        },
        {
            name: 'Blueland Waterpark Tirupati',
            description: 'Modern water theme park with exciting rides and attractions, perfect for family entertainment.',
            distance: '68 km from Chittoor',
            image: '/images/blueland.jpg'
        }
    ];

    return (
        <section className="section-padding bg-gradient-to-br from-gray-50 via-white to-gray-50 pt-24">
            <div className="container-custom">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full font-semibold text-sm mb-4">
                        Explore Chittoor
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Tourist Attractions
                        <span className="gradient-text"> Near Chittoor</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Discover amazing temples and scenic destinations around Chittoor. Rent a bike and explore at your own pace!
                    </p>
                </div>

                {/* Temples Section */}
                <div className="mb-20">
                    <div className="flex items-center mb-8">
                        <div className="flex-grow h-px bg-gradient-to-r from-transparent via-primary-300 to-transparent"></div>
                        <h2 className="text-3xl font-bold text-gray-900 px-6">🛕 Temples Nearby</h2>
                        <div className="flex-grow h-px bg-gradient-to-r from-transparent via-primary-300 to-transparent"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {temples.map((temple, index) => (
                            <div
                                key={index}
                                className="card overflow-hidden hover-lift animate-scale-in"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={temple.image}
                                        alt={temple.name}
                                        className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                                        <FaRoute className="text-primary-600 text-xs" />
                                        <span className="text-xs font-semibold text-gray-700">{temple.distance}</span>
                                    </div>
                                </div>
                                <div className="p-5">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{temple.name}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{temple.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Tourist Places Section */}
                <div>
                    <div className="flex items-center mb-8">
                        <div className="flex-grow h-px bg-gradient-to-r from-transparent via-accent-300 to-transparent"></div>
                        <h2 className="text-3xl font-bold text-gray-900 px-6">🏞️ Tourist Places</h2>
                        <div className="flex-grow h-px bg-gradient-to-r from-transparent via-accent-300 to-transparent"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {touristPlaces.map((place, index) => (
                            <div
                                key={index}
                                className="card overflow-hidden hover-lift animate-scale-in"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={place.image}
                                        alt={place.name}
                                        className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                                        <FaRoute className="text-accent-600 text-xs" />
                                        <span className="text-xs font-semibold text-gray-700">{place.distance}</span>
                                    </div>
                                </div>
                                <div className="p-5">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{place.name}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{place.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-16 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12 text-center">
                    <h3 className="text-3xl font-bold text-white mb-4">Ready to Explore?</h3>
                    <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
                        Rent a bike from us and visit these amazing destinations at your convenience. Affordable rates and well-maintained bikes!
                    </p>
                    <a
                        href="/bikes"
                        className="inline-flex items-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                    >
                        <FaMapMarkerAlt />
                        View Our Bikes
                    </a>
                </div>
            </div>
        </section>
    );
};

export default TouristAttractions;
