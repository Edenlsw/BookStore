import React from "react";
import {Link} from 'react-router-dom';
// import About from '../pages/About';
import './header.css';


const Header = () => {
    return (
        <React.Fragment>
            <div className="title-banner">
                
                <h1 className="title"> WELCOME</h1>
                <div className="header">
                    
                    
                    <Link to="/">Home</Link>
                    <Link to="/bookcase" className="bookLink">Bookcase</Link>
                    <Link to="/about">About</Link>
                </div>
            </div>
            
        </React.Fragment>
    )
}



export default Header;
