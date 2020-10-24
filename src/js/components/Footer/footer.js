import React from 'react';
import './footer_styles.scss';

const Footer = () => {
    return (
        <div className="footer_wrapper">
            <ul>
                <li><img src="../../resources/icons/social_media/facebook.svg" alt="Facebook logo"/></li>
                <li><img src="../../resources/icons/social_media/instagram.svg" alt="Instagram logo"/></li>
                <li><img src="../../resources/icons/social_media/twitter.svg" alt="Twitter logo"/></li>
                <li><img src="../../resources/icons/social_media/github-logo.svg" alt="github logo"/></li>
            </ul>
        </div>
    );
}

export default Footer;