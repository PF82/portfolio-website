import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import Navbar from './Navbar'

const Layout = () => {
    return (
        <>
            <Navbar>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/services">Services</NavLink>
                    </li>
                    <li>
                        <NavLink to="/portfolio">Portfolio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/testimonials">Testimonials</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </Navbar>

            <Outlet />
        </>
    )
}

export default Layout