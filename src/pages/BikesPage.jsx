import React, { useEffect } from 'react';
import BikeFleet from '../components/BikeFleet';

const BikesPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-20">
            <BikeFleet />
        </div>
    );
};

export default BikesPage;
