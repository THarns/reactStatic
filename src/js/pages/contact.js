import React from 'react';
import Footer from '../components/Footer/footer.js';

import '../../scss/contact.scss';
import '../../scss/index.scss';

const Contact = () => {
    return (
        <div className="landing_wrapper contact_image">
            <div className="bg_container"></div>
            <h1>Contact</h1>
            <form name="form" method="post" action="form_send.php">
                <div className="labelText_container">
                  <label htmlFor="name">Name</label>
                  <input  type="text" name="visitor_name" maxLength="50" size="30" />
                </div>
                <div className="labelText_container">
                  <label htmlFor="email">Email</label>
                  <input  type="text" name="visitor_email" maxLength="80" size="30" />
                </div>
                <div className="textarea_container">
                  <label htmlFor="message">Message</label>
                  <textarea  name="visitor_message" maxLength="1000" cols="39" rows="10"></textarea>
                </div>
                <input type="submit" className="submit_contact_form_btn" value="Send Message" name="submit" />
            </form>
        </div>
    );
}

export default Contact;