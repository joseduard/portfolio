import React from 'react';
import "./topbar.scss";
import {Person, Mail} from "@material-ui/icons"

export default function Topbar() {
    return (
        <div className='topbar'>
            <div className="wrapper">
                <div className="left">
                    <a href='#profil' className='logo'>Eduardo.dev</a>
                    <div className='itemContainer'>
                        <Person className='icon'/>
                        <span>+33 787066429</span>
                    </div>
                    <div className='itemContainer'>
                        <Mail className='icon'/>
                        <span>joseduardo.jep@gmail.com</span>
                    </div>
                </div> 
                <div className="right">
                    <div className="hamburger">
                        <span className='line1'></span>
                        <span className='line2'></span>
                        <span className='line3'></span>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
