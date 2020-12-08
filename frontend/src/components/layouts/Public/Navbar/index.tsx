import './style.css';
import React from 'react';
import Logo from './img/pngegg.png';
import { Link } from 'react-router-dom';

const Index = (props: any) => {
    return (
        <React.Fragment>
            <div className="containerLayoutPublic">
                <div className="navbar">
                    <div className="logo-navbar">
                        <Link to="/public"><img src={Logo} className="logoNavbar" /></Link>
                    </div>
                    <div className="btn-navbar">
                        <ul>
                            <li><Link to="/communityRules">Community Rules</Link></li>
                            <li><Link to="/games">Games</Link></li>
                            <li><Link to="/login">Login</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Index;