import React, { Component } from 'react'
import "./Body.css";

class Body extends Component{
    render(){
        return(
            <div>
                <div className="body">
                    <div className="text">
                        <h1>Dairy and Groceries</h1>
                        <h1>delivered daily!</h1>
                        <h4>Open 5AM to late night everyday</h4>
                        <button className="download" type="button"><i class="fab fa-google-play"></i>Google Play</button>
                        {/* <Button className="btn-download" variant="dark"><i class="fab fa-google-play"></i>Google Play</Button> */}
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Body;