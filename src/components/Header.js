import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Features from './Features/Features';
import NavbarComp from './Navbar/NavbarComp';
import AboutUs from './Views/AboutUs/About';
import Business from './Views/Business/Business';
import Covid from './Views/CovidMeasures/covid';

class Header extends Component{
    render(){
        return(
            <div>
                <Router>
                    <NavbarComp/>
                    <div className="pages">
                        <Switch>
                            {/* <Route path="/features" component={Features} /> */}
                            <Route path="/business" component={Business}/>
                            {/* <Route path="/covid-19-measures" component={Covid}/> */}
                            <Route path="/about-us" component={AboutUs}/>
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
} 

export default Header;