import React, {useState, useEffect} from 'react';
import Body from './components/Body/Body';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import NavbarComp from './components/Navbar/NavbarComp';
import Business from './Views/Business/Business';
// import CovidMeasures from './Views/CovidMeasures';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AboutUs from './Views/AboutUs/About';
import BarLoader from "react-spinners/BarLoader";
import ScrollToTop from './components/CommingSoon/ScrollToTop';
import CustomerSupport from './Views/CustomerSupport/CustomerSupport';

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop/>
        <NavbarComp/>
        <Route path="/business">
          <Business/>
        </Route>
        {/* <Route path="/covid-19-measures">
          <CovidMeasures/>
        </Route>  */}
        <Route path="/about-us">
          <AboutUs/>
        </Route>
        <Route path="/zhoop" exact>
          <Body/>
          <Features/>
        </Route>
        {/* <Route>
          <CustomerSupport/>
        </Route> */}
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
