import React, {useState} from 'react';
import {MenuItems} from "./MenuItems";
import { Switch, NavLink} from 'react-router-dom';
import "./Navbar.css";
import Zhoop from "../icons/zhoop.png";

function NavbarComp(){
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
        return(
            <nav className="navbar fixed-top">
                <div className="nav-container">
                    <NavLink exact to="/zhoop" className="nav-logo">
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
