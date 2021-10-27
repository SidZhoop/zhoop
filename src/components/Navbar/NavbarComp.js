import React, {useState} from 'react';
import {MenuItems} from "./MenuItems";
import { Switch, NavLink} from 'react-router-dom';
import "./Navbar.css";
import Zhoop from "../icons/zhoop.png";

function NavbarComp(){
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
        return(
            // <nav className="NavbarItems">
            //     <h1 className="navbar-logo">ZHOOP<i class="fas fa-shopping-cart"></i></h1>
            //     <div className="menu-icon">
            //         <Zoom in={true}>
            //             <Fab onClick={this.handleClick}>
            //                 {this.state.clicked ? <CloseIcon/>:<MenuIcon/>}
            //             </Fab>
            //         </Zoom>
            //     </div>
            //     <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
            //         <Button variant="light" className="login">Login/Sign up</Button>
            //         {MenuItems.map((item, index) => {
            //             return(
            //                 <li key={index}>
            //                     <a className={item.cName} href={item.url}>
            //                         {item.title}
            //                     </a>
            //                 </li>
            //             )
            //         })} 
            //     </ul>
            // </nav>
            // <Navbar className="NavbarItems" expand="lg">
            //     <Container>
            //         <Navbar.Brand href="#home">ZHOOP<i class="fas fa-shopping-cart"></i></Navbar.Brand>
            //         <Navbar.Toggle aria-controls="basic-navbar-nav" />
            //         <Navbar.Collapse id="basic-navbar-nav">
            //             <Nav className="me-auto">
            //                 {MenuItems.map((item, index) => {
            //                     return(
            //                         <li key={index}>
            //                             <Nav.Link className={item.cName} href={item.url}>{item.title}</Nav.Link>
            //                         </li>
            //                     )
            //                 })}
            //             </Nav>
            //         </Navbar.Collapse>
            //     </Container>
            // </Navbar>
            // <nav class="navbar fixed-top navbar-expand-lg navbar-light">
            //     <div class="container-fluid">
            //         <a class="navbar-brand brand" href="#">ZHOOP<i class="fas fa-shopping-cart"></i></a>
            //         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            //         <span class="navbar-toggler-icon"></span>
            //         </button>
            //         <div class="collapse navbar-collapse" id="navbarSupportedContent">
            //             <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            //                 {MenuItems.map((item, index) => {
            //                     return(
            //                         <li class="nav-item" key={index}>
            //                             <a class="nav-link active" aria-current="page" href={item.url}>{item.title}</a>
            //                         </li>
            //                     )
            //                 })}
            //             </ul>
            //         </div>
            //     </div>
            // </nav>
            <nav className="navbar fixed-top">
                <div className="nav-container">
                    <NavLink exact to="/" className="nav-logo">
                        <img className="zhoop" src={Zhoop}/>
                    </NavLink>

                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        {MenuItems.map((item, index) => {
                            return(
                                <li className="nav-item">
                                    <Switch>
                                        <NavLink exact to={item.url} activeClassName="active" className={item.cName} onClick={handleClick}>
                                            <h5>{item.title}</h5>
                                        </NavLink>
                                    </Switch>
                                </li>
                            )
                        })}
                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}/>
                    </div>
                </div>
            </nav>
        )
}

export default NavbarComp;
