import * as React from 'react';
import NavigationBar from '../Components/NavigationBar';
import TwitterLogo from 'Assets/twitter32.png';
import InstagramLogo from 'Assets/instagram-32.png';
import DiscordLogo from 'Assets/discord-2-32.png';
import BaobrosLogo from 'Assets/android-chrome-192x192.png';

export default function HomePage() {
    return (
        <>
            <div className="container">
                <div className="header-container">
                    <p className="header">Now steaming</p>
                    <p className="sub-text">
                        baobros
                    </p>
                </div>
                <div className="social-media-container">
                    <img src={BaobrosLogo} className="App-logo" alt="logo" />
                    <Socials />
                </div>
            </div>
        </>
    );
}

function Socials() {
    return (
        <div className="logos">
            <a href="https://twitter.com/baobrosnft/" target="_blank">
                <img src={TwitterLogo} className="App-logo" alt="logo"/>
            </a>
            <a href="https://www.instagram.com/baobrosnft/" target="_blank">
                <img src={InstagramLogo} className="App-logo" alt="logo" />
            </a>
            <a href="https://discordapp.com/channels/904258142240665640/904258142358097932" target="_blank">
                <img src={DiscordLogo} className="App-logo" alt="logo" />
            </a>
        </div>
    );
}