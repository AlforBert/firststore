import React from 'react'
import './Nav.css';
import {FiHeart, FiShoppingCart } from 'react-icons/fi';
import { AiOutlineUserAdd } from "react-icons/ai";




const Nav = ({ handleInputChange, query }) => {
  return (
    <>
        <nav>
        <div className='nav-container'>
          <input type='text' 
          className='search-input'
          onChange={handleInputChange}
          value={query}
           placeholder='Enter Your Search shoes'/>
        </div> 
        <div className="profile-container">
          <a href='#'>
           <FiHeart className='react-icons'/>
          </a>
          <a href='#'>
           <FiShoppingCart className='react-icons'/>
          </a>
          <a href='#'>
           <AiOutlineUserAdd className='react-icons'/>
          </a>
        </div>
        </nav>
    </>
  )
}

export default Nav;