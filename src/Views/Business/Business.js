import React from 'react';
import "./Business.css";
import Input from './BusinessInput';

function Business() {
    return (
        <div>
            <div className="business">
                <form action="/action_page.php">

                    <Input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name"
                        autoComplete="off"
                    />
                    <Input
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Email"
                        autoComplete="off"
                    /><Input
                        type="text"
                        id="mobilenumber"
                        name="mobilenumber"
                        placeholder="Phone Number"
                        autoComplete="off"
                    />
                    <textarea className="message" placeholder="Messages" name="messages" row="5" cols="45"></textarea>
                    <input type="checkbox" id="privacy" name="policy" value="privacypolicy"/>
                    <label for="privacy"><a href="#" className="p">Privacy Policy</a></label>
                    <Input
                        type="submit"
                        value="Submit"
                    />
                </form>
            </div>
        </div>
    )
}

export default Business;
