import React from 'react';
import "./CustomerSupport.css";

function CustomerSupport() {
    return (
        <div className="support">
            <div className="support-heading">
                <h1>We're here to help.</h1>
                <h3>Have an issue with an order or feedback for us? Our support team is here to help you 24/7!</h3>
            </div>
            <div className="support-cards">
                <div className="support-items">
                    <h2 className="support-title"><i class="fab fa-whatsapp"> WhatsApp</i></h2>
                    <h3 className="support-text"><a href="#">Click here</a> to chat with us on WhatsApp now</h3>
                </div>
                <div className="support-items">
                    <h2 className="support-title"><i class="far fa-envelope"> Email</i></h2>
                    <h3 className="support-text">Send us an email to <a href="#">cs@zhoop.in</a></h3>
                </div>
            </div>
        </div>
    )
}

export default CustomerSupport;
