import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <h2 className='logo'>CuriousHouse</h2>
            <div className='nav-links'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
            </div>
        </div>
    )
}

export default Navbar