import React from 'react';
import "./Business.css";

function Business() {
    return (
        <div>
            <div className="business">
                <form action="/action_page.php">
                    <input type="text" id="name" name="name" placeholder="Name?" autoComplete="off"/>

                    <input type="text" id="email" name="email" placeholder="Email" autoComplete="off"/>
                
                    <input type="text" id="mobilenumber" name="mobilenumber" placeholder="Phone number" autoComplete="off"/>

                    <input type="text" id="message" name="message" placeholder="Message" autoComplete="off"/>

                    <input type="checkbox" id="privacy" name="policy" value="privacypolicy"/>
                    <label for="privacy"><a href="#" className="p">Privacy Policy</a></label>

                    <input type="submit" value="Submit"/>
                </form>
            </div>
        </div>
    )
}

export default Business;
