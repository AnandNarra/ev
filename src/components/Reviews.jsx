import React from 'react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const Reviews = () => {
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const [isPaused, setIsPaused] = React.useState(false);

    // Top reviews from business profile - now 4 reviews
    const topReviews = [
        {
            name: 'Rajesh Kumar',
            rating: 5,
            date: 'December 2024',
            review: 'Excellent service! The bike was in perfect condition and the staff was very helpful. Highly recommend for anyone looking to rent bikes in Chittoor.',
            avatar: 'RK'
        },
        {
            name: 'Priya Sharma',
            rating: 5,
            date: 'November 2024',
            review: 'Great experience! Doorstep delivery was very convenient. The bike was clean and well-maintained. Will definitely rent again!',
            avatar: 'PS'
        },
        {
            name: 'Arun Reddy',
            rating: 5,
            date: 'November 2024',
            review: 'Amazing bikes and affordable prices! The booking process was smooth and the team was very professional. Perfect for exploring Chittoor.',
            avatar: 'AR'
        },
        {
            name: 'Sneha Patel',
            rating: 5,
            date: 'October 2024',
            review: 'Best bike rental service in Chittoor! The bikes are well-maintained and the customer support is excellent. Highly satisfied with the service.',
            avatar: 'SP'
        }
    ];

    // Auto-slide functionality
    React.useEffect(() => {
        if (!isPaused) {
            const interval = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % topReviews.length);
            }, 4000); // Change slide every 4 seconds

            return () => clearInterval(interval);
        }
    }, [isPaused, topReviews.length]);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <section id="reviews" className="py-12 bg-gradient-to-br from-gray-50 via-white to-gray-50">
            <div className="container-custom">
                <div className="text-center mb-12">
                    <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full font-semibold text-sm mb-4">
                        Customer Reviews
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        What Our Customers
                        <span className="gradient-text"> Say</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Read reviews from our satisfied customers.
                    </p>
                </div>

                {/* Auto-sliding Reviews Carousel */}
                <div
                    className="relative max-w-4xl mx-auto"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                        >
                            {topReviews.map((review, index) => (
                                <div
                                    key={index}
                                    className="w-full flex-shrink-0 px-4"
                                >
                                    <div className="card hover-lift">
                                        <div className="p-8">
                                            <FaQuoteLeft className="text-4xl text-primary-200 mb-4" />

                                            {/* Rating Stars */}
                                            <div className="flex gap-1 mb-4">
                                                {[1, 2, 3, 4, 5].map((star) => (
                                                    <FaStar
                                                        key={star}
                                                        className={`text-xl ${star <= review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                                                    />
                                                ))}
                                            </div>

                                            {/* Review Text */}
                                            <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                                "{review.review}"
                                            </p>

                                            {/* Reviewer Info */}
                                            <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white font-bold">
                                                    {review.avatar}
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-gray-900">{review.name}</h4>
                                                    <p className="text-sm text-gray-500">{review.date}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Dots */}
                    <div className="flex justify-center gap-2 mt-6">
                        {topReviews.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                                        ? 'bg-primary-600 w-8'
                                        : 'bg-gray-300 hover:bg-gray-400'
                                    }`}
                                aria-label={`Go to review ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;
