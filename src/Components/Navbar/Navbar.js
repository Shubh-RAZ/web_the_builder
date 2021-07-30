import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Assets/Logo'
import './Navbar.css'
const Navbar = () => {

    const [ showPhoneMenu , setPhoneMenu ] = useState(false)
    return ( 
        <div className="Navbar">
            <div className="navbar-desktop">
                <div className="logo-nav">
                    <Logo></Logo>
                </div>
                <div className="navbar-content">
                <Link to="/" style={{textDecoration:'none'}}> <div className="navbar-list">Home()</div> </Link>
                    <Link to="/bout" style={{textDecoration:'none'}}>  <div className="navbar-list">About us()</div> </Link>
                  <Link to="/reach" style={{textDecoration:'none'}}>  <div className="navbar-list">Contact us()</div> </Link>
                  <Link to="/projects" style={{textDecoration:'none'}}> <div className="navbar-list">Projects()</div> </Link>
                </div>
            </div>

            <div className="navbar-phone">
                <div className="logo-nav-phone">
                        <Logo></Logo>
                    </div>
                </div>

                <div className="hamburger" onClick={() => setPhoneMenu(!showPhoneMenu)}>
                    <div className={ showPhoneMenu ? "animateham" : "hamline" } ></div>
                    <div className={ showPhoneMenu ? "animateham" : "hamline" }></div>
                    <div className={ showPhoneMenu ? "animateham" : "hamline" }></div>
                </div>

                    <div className={showPhoneMenu ? "phone-menu" : "hidden-menu" }>
                       { showPhoneMenu ? <div className="phone-menu-content">
                       <Link to="/" style={{textDecoration:'none'}}>     <div className="hamburger-phone-list">Home()</div> </Link>
                       <Link to="/bout" style={{textDecoration:'none'}}>   <div className="hamburger-phone-list">Abot us()</div> </Link>
                       <Link to="/reach" style={{textDecoration:'none'}}>    <div className="hamburger-phone-list">Contact us()</div>  </Link>
                       <Link to="/projects" style={{textDecoration:'none'}}>   <div className="hamburger-phone-list">Projects()</div>    </Link>
                           
                        </div> : null }

                      { showPhoneMenu ?   <div className="jelly">
                            <img src="./jelly.gif"></img>
                        </div> : null }
                        </div> :null
                
        </div>
     );
}
 
export default Navbar;