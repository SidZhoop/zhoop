import React from 'react';
import {FooterContent_1, FooterContent_2} from "./FooterContent";
import { Switch, Link} from 'react-router-dom';
import "./Footer.css";
// import Zhoop from "../icons/zhoop.png";

function Footer() {
    // const [click, setClick] = useState(false);
    // function handleclick(){
    //     setTimeout(true);
    // }
        return(
            <div className="footer">
                <h2 style={{color: "#000"}}>ZHOOP Us</h2>
                <div className="footerContainer">
                    <div className="links">
                            {FooterContent_1.map((item, index)=> {
                                return(
                                    <Switch>
                                        <Link exact to={item.url}>
                                            <h5>{item.title}</h5>
                                        </Link>
                                    </Switch> 
                                )
                            })}
                    </div>
                    <div className="links">
                            {FooterContent_2.map((item, index)=> {
                                return(
                                    <div key={index}>
                                        <Switch>
                                            <Link exact to={item.url}>
                                            <h5>{item.title}</h5> 
                                            </Link>
                                        </Switch>
                                    </div>
                                )
                            })}
                    </div>
                    <div className="media">
                    <button className="download-footer" type="button"><i className="fab fa-google-play"></i>
                        <Switch>
                            <Link exact to="/coming-soon" className="download-button">
                                Google Play
                            </Link>
                        </Switch>
                    </button>
                            <div className="socialMedia">
                                <a href="https://www.facebook.com/106180358518415/"><i className="fab fa-facebook-f facebook"></i></a>
                                <a href="https://www.instagram.com/p/CVaOpzlv9KM/?utm_medium=share_sheet"><i className="fab fa-instagram instagram"></i></a>
                                <a href="#"><i className="fab fa-twitter twitter"></i></a>
                            </div>
                    </div>
                </div>
                <div className="copyright">
                    <p>© 2021, A Promptosol Technologies Private Limted Company</p>
                </div> 
            </div>
        )
}

export default Footer;