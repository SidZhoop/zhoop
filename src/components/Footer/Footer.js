import React, { Component } from 'react';
import FooterContent from "./FooterContent";
import "./Footer.css";
import cs from '../CommingSoon/cs';
// import Zhoop from "../icons/zhoop.png";

function Footer() {
    // const [click, setClick] = useState(false);
    // function handleclick(){
    //     setTimeout(true);
    // }
        return(
            <div className="footer">
                <h2 style={{color: "#000"}}>ZHOOP Us</h2>
                {/* <div class="container footerContainer">
                    <div class="row row-cols-1 row-cols-sm-4 row-cols-md-4">
                        <div class="col logo">
                            <img src="https://img.icons8.com/pastel-glyph/64/000000/delivery-scooter--v3.png"/>
                        </div>
                        <div class="col">
                            <button type="button" class="btn btn-success"><i class="fab fa-whatsapp"></i>WhatsApp</button>
                            <a href="#">cs@zhoop.in</a>
                            <i class="fas fa-map-marker-alt"> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</i>
                        </div>
                        <div className="col links">
                            {FooterContent.map((item)=> {
                                return(
                                    <div>
                                        <h3>{item.title}</h3>
                                    </div>
                                )
                            })}
                        </div>
                        <div class="col">
                            <Button className="btn-download" variant="dark"><i class="fab fa-google-play"></i>Google Play</Button>
                            <div className="socialMedia">
                                <a href="#"><i class="fab fa-facebook-f facebook"></i></a>
                                <a href="#"><i class="fab fa-instagram instagram"></i></a>
                                <a href="#"><i class="fab fa-twitter twitter"></i></a>
                            </div>
                        </div>   
                    </div>
                </div> */}
                <div className="footerContainer">
                    <div className="links">
                            {FooterContent.map((item)=> {
                                return(
                                    <div>
                                        <h3>{item.title}</h3>
                                    </div>
                                )
                            })}
                    </div>
                    <div class="media">
                    <button className="download" type="button"><i class="fab fa-google-play"></i>Google Play</button>
                            <div className="socialMedia">
                                <a href="#"><i class="fab fa-facebook-f facebook"></i></a>
                                <a href="#"><i class="fab fa-instagram instagram"></i></a>
                                <a href="#"><i class="fab fa-twitter twitter"></i></a>
                            </div>
                    </div>
                </div>
                <div class="copyright">
                    <p>© 2021, A Promptosol Technologies Private Limted Company</p>
                </div> 
            </div>
        )
}

export default Footer;