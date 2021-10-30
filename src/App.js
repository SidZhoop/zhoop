import React from 'react';
import Body from './components/Body/Body';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import NavbarComp from './components/Navbar/NavbarComp';
import Business from './Views/Business/Business';
// import CovidMeasures from './Views/CovidMeasures';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AboutUs from './Views/AboutUs/About';
import ScrollToTop from './ScrollToTop';
import CustomerSupport from './Views/CustomerSupport/CustomerSupport';
import ComingSoon from './Views/ComingSoon/ComingSoon';

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
        <Route path="/customer-support">
          <CustomerSupport/>
        </Route>
        <Route path="/coming-soon">
          <ComingSoon/>
        </Route>
        <Route path="/zhoop" exact>
          <Body/>
          <Features/>
        </Route>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
