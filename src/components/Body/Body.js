import React, { Component } from 'react';
import { Switch, Link} from 'react-router-dom';
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
                        <button className="download-body" type="button"><i className="fab fa-google-play"></i>
                        <Switch>
                            <Link exact to="/coming-soon" className="download-button">
                                Google Play
                            </Link>
                        </Switch>
                        </button>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Body;