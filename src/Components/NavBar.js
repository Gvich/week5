import React from 'react';
import icon from "../image/icon.svg";

const NavBar = () => {
    return (
        <nav className="navbar mt-5 navbar-light container1">
            <div className="container-fluid">
                <a className="navbar-brand logo_name" href="/">
                    <img src={icon} alt="" width="30" height="24"
                         className="d-inline-block align-text-top"/>AIRSTAR
                </a>
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <a className="nav-link link-dark undline active" aria-current="page" href="#">Flights</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link link-dark undline" href="/forecast">Weather</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link link-dark undline" href="#">Login</a>
                    </li>
                    <li>
                        <a className="btn btn-outline-primary bg-gradient m-1" href="/login">Sign Up</a>
                    </li>
                    <li className="m-1">
                        <div className="dropdown">
                            <a className="btn btn-outline-primary bg-gradient dropdown-toggle" href="#" role="button"
                               id="dropdownMenuLink" data-toggle="dropdown" aria-expanded="false">
                                EN
                            </a>

                            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;