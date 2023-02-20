import { useState } from "react"
import React from 'react'
import { Link } from "react-scroll";
import '../App.css';

export default function NavBar() {
    const [searchValue, setsearchValue] = useState('')


    const copytext = () => {
        navigator.clipboard.writeText(searchValue)
    }


    return (
        <div className="Navbar">
            <nav className="navbar navbar-expand-lg bg-body-tertiary  " >
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/" spy={true} smooth={true} offset={50} duration={500} >Kati Khanney</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="CalorieCounter" spy={true} smooth={true} offset={50} duration={500} >Calorie Counter</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="DietNutritionPlan" spy={true} smooth={true} offset={5} duration={500} >Diet & Nutrition Plans</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Membership
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/#">LOG IN</a></li>
                                    <li><a className="dropdown-item" href="/#">Join GYM</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="/#">Contact Us</a></li>
                                </ul>
                            </li>

                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" value={searchValue} onChange={e => setsearchValue(e.target.value)} type="search" placeholder="Search Calories" aria-label="Search" />
                            <button className="btn btn-outline-success" onClick={copytext} type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}


