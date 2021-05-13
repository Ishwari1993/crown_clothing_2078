import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import './header.styles.scss'

const header_component = () => {
    return (
        <div className = "header">
           <Link to = "/">
               <Logo className = "logo-container"/>
           </Link>

           <div className = "options">
               <Link to = "/shop" className = "option">SHOP</Link>
               <Link to = "/shop" className = "option">CONTACT</Link>
           </div>
            
        </div>
    )
}

export default header_component
