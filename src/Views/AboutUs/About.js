import React from 'react';
import "./About.css";

function AboutUs() {
    return (
        <div>
            <div className="about">
                <div className="about-content">
                    <h1 style={{color: "#097EC3"}}>About Us</h1>
                    <h4>Launched in 2021, zhoop is Bhagalpur’s first and largest daily grocery delivery service.
                        Built on the unique habit of Indian household’s of getting everything fresh daily delivered at home. zhoop (accessible on website and android) is today fulfilling the entire grocery needs of a household every day before 7 am. We understand the needs and hassles of buying daily dairy & grocery items and are here to make things simple and easy (convenient) for our customers.
                    </h4>
                </div>
                <div>
                    {/* <img src="../icons/bag.png"/> */}
                </div>
            </div>
        </div>
    )
}

export default AboutUs;
