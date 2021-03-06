import React, { Component } from 'react';
import FeaturesContent from "./FeaturesContent";
import "./Features.css";

class Features extends Component{
    render(){
        return(
            <div className="features" id="features-content">
                {FeaturesContent.map((item, index) =>{
                    return(
                        <div class="col featuresCard" key={index}>
                            {item.icon}
                            <h1>{item.title}</h1>
                            {/* <h4>{item.detail}</h4> */}
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Features;