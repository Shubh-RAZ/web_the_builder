import { useState } from 'react';
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
                    <div className="navbar-list">Home()</div>
                    <div className="navbar-list">About us()</div>
                    <div className="navbar-list">Contact us()</div>
                    <div className="navbar-list">Projects()</div>
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
                            <div className="hamburger-phone-list">Home()</div>
                            <div className="hamburger-phone-list">Abot us()</div>
                            <div className="hamburger-phone-list">Contact us()</div>  
                            <div className="hamburger-phone-list">Projects()</div>    
                           
                        </div> : null }

                      { showPhoneMenu ?   <div className="jelly">
                            <img src="./jelly.gif"></img>
                        </div> : null }
                        </div> :null
                
        </div>
     );
}
 
export default Navbar;