import { useState } from "react"
import React from 'react'

export default function NavBar() {
    const [searchValue, setsearchValue] = useState('')

  
    const copytext = () => {
        navigator.clipboard.writeText(searchValue)
    }


    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/#">Kati Khanney</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/#">Calorie Counter</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="DietNutritionPlan.js">Diet & Nutrition Plans</a>
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
    )
}


