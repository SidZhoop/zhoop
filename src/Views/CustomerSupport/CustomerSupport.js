import React from 'react';
import "./CustomerSupport.css";

function CustomerSupport() {
    return (
        <div className="support">
            <div className="support-boundary">
                <div className="support-heading">
                    <h1>We're here to help.</h1>
                    <h3>Have an issue with an order or feedback for us? Our support team is here to help you 24/7!</h3>
                </div>
                <div className="support-cards">
                    <div className="support-items-whatsapp">
                        <h2 className="support-title"><i className="fab fa-whatsapp"> WhatsApp</i></h2>
                        <h3 className="support-text-whatsapp"><a href="https://wa.me/919632600298?text=Hello%20I%20have%20few%20questions%20regarding%20online%20ordering.%20Are%20you%20free%20to%20chat%20now%3F"className="support-via">Click here</a> to chat with us on<br/>
                        WhatsApp now</h3>
                    </div>
                    <div className="support-items-email">
                        <h2 className="support-title"><i className="far fa-envelope"> Email</i></h2>
                        <h3 className="support-text-email">zhoop us on<br/>
                        cs@zhoop.in</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerSupport;
