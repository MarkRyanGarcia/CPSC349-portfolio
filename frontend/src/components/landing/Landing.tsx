import React from 'react';
import LandingHeader from './LandingHeader';

interface LandingProps {
    // Define your props here if needed
    // Example:
    // title?: string;
}

const Landing: React.FC<LandingProps> = () => {
    return (
        <>
            <LandingHeader />
            <div>
                test
            </div>
        </>
    );
};

export default Landing;