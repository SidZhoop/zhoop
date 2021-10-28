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
                    <div className="support-items" style={{marginBottom: "15px", textAlign: "left"}}>
                        <h2 className="support-title"><i class="fab fa-whatsapp"> WhatsApp</i></h2>
                        <h3 className="support-text"><a href="https://wa.me/919632600298?text=Hello%20I%20have%20few%20questions%20regarding%20online%20ordering.%20Are%20you%20free%20to%20chat%20now%3F"className="support-via">Click here</a> to chat with us on<br/>
                        WhatsApp now</h3>
                    </div>
                    <div className="support-items" style={{marginBottom: "15px", textAlign: "right"}}>
                        <h2 className="support-title"><i className="far fa-envelope"> Email</i></h2>
                        <h3 className="support-text">Send us an email to<br/>
                        <a href="#"className="support-via">cs@zhoop.in</a></h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerSupport;
