import React from "react";
import {Link} from 'react-router-dom';
// import About from '../pages/About';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import './header.css';



const Header = () => {
    return (
        <React.Fragment>
            <div className="title-banner">

                <h1 className="title"> Eden's BookStore</h1>

                                    {/* BOOTSTRAP NAV */}


                
                              
                {/* <container className="bootstrap-header">
                    <Nav variant="pills" defaultActiveKey="/home">
                        
                        <Nav.Item className="header" >
                            <Nav.Link href="/">BOOKS</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="header">
                            <Nav.Link href="/bookcase">BOOKCASE</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="header">
                            <Nav.Link href="/about">ABOUT</Nav.Link>
                        </Nav.Item>
                        </Nav>
                
                </container>      */}


                 <Nav variant="pills" defaultActiveKey="/home" className="header" className="header">
                    
                    <Nav.Item className="header" >
                        <Nav.Link href="/">BOOKS</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="header">
                        <Nav.Link href="/bookcase">BOOKCASE</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="header">
                        <Nav.Link href="/about">ABOUT</Nav.Link>
                    </Nav.Item>
                    </Nav> 


                                            {/* OLD NAV */}
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
