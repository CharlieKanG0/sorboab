import * as React from 'react';
import NavigationBar from '../Components/NavigationBar';


export default function GalleryPage() {
    return (
        <>
            <NavigationBar />
            <div className="container">
                <div className="header-container">
                    <p className="header gradient-text">BaoBros Amazing Collection</p>
                    <p className="sub-text">
                        Each unique. Each beautiful. Discover your NFT today.
                    </p>
                </div>
            </div>
        </>
    );
}