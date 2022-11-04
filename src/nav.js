import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import { Outlet, Link } from 'react-router-dom';

function Nav(){
	return (
        <div>
		  <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
            <div className="container px-4 px-lg-5">
                <Link className="navbar-brand" to={'home'}>Blinkr: Intelligent summarizer</Link>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto my-2 my-lg-0">
                            <li className="nav-item"><Link className="nav-link" to={'home'}>home</Link></li>
                            <li className="nav-item"><Link className="nav-link" to={'gstart'}>Get Started</Link></li>
                        </ul>
                </div>
            </div>
        </nav>
        {this.props.children}
    </div>
		)
}
 export default Nav;