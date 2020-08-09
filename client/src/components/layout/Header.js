import React from 'react';
import { Link } from 'react-router-dom';

 function Header() {    
    return (
        <div>
            <header style={headerStyle}>
                <h2> Troubleshooting Log! </h2>
                <Link style={linkStyle} to='/'>Home</Link> | <Link style={linkStyle} to='/about'>About</Link>
            </header>            
        </div>
    )
}

const linkStyle = {
    color: 'white',
    textDecoration: 'none'

}
const headerStyle = {
    background: '#333',
    color: 'red',
    textAlign: 'center',
    padding: '10px'
}

export default Header;