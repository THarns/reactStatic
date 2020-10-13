import React from 'react';
import './footer_styles.scss';

const Footer = () => {
    return (
        <div className="footer_wrapper">
            <ul>
                <li><img src="../../resources/icons/social_media/facebook.svg"/></li>
                <li><img src="../../resources/icons/social_media/instagram.svg"/></li>
                <li><img src="../../resources/icons/social_media/twitter.svg"/></li>
                <li><img src="../../resources/icons/social_media/youtube.svg"/></li>
            </ul>
        </div>
    );
}

export default Footer;