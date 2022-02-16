import * as React from 'react';
import NavigationBar from '../Components/NavigationBar';

export default function HomePage() {
    return (
        <>
            <NavigationBar />
            <div className="container">
                <div className="header-container">
                    <p className="header">Now steaming...</p>
                    <p className="sub-text">
                        baobros
                    </p>
                </div>
                <div className='socials'>
                    
                </div>
            </div>
        </>
    );
}