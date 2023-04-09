import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
    return (
        <div className='NavBar'>
            <div>
                <h1>Microblog</h1>
                <p>Get in the Rithm of blogging!</p>
            </div>
            
            <div className='NavBar-links'>
                <Link to='/'>Blog</Link>
                <Link to='/new'>Add a new post</Link>
            </div>
        </div>
    )
}

export default NavBar