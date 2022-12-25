import { Input } from 'antd'
import React, { useState } from 'react'
import './Header.css'
import logo from '../../images/GPT-logo.png'
// import BannerVid from '../../assets/gpt-banner-video.mp4'

function Header() {
  const [clicked, setClicked]= useState(false)
  const [isShown, setIsShown]= useState(false)

  const handleClick = (event) =>{
    setClicked(!clicked)}

    const handleSearch = () =>{
        setIsShown(!isShown)
    }
  return (
    <div className='Header'>
        
        <a href="#home" className="logo">
            <img src={logo} alt='logo'/>
        </a>
        
        <nav className="navbar">
            <a href="#home">Apply Now</a>
            <a href="#about">Merch</a>
            <a href="#menu">Contact Us</a>
            
        </nav>

        <div className="icons">
            <div className="fas fa-search" id="search-btn" onClick={handleSearch}></div>
            <div onClick={handleClick} id='bars' className= {clicked ? "fas fa-times": "fas fa-bars"}></div>
            
        </div>

        <div id='extra-menu' className={clicked ? "#extra-menu active": "#extra-menu"}>
          <ul>
            <li><a>Apply Now</a></li>
            <li><a>About Us</a></li>
            <li style={{textDecoration:"underline", textDecorationColor:"blue"}}><i style={{paddingRight:"10px",color:"blue"}}className="fas fa-chevron-right"></i>Our Values</li>
            <li><i className='fas fa-caret-right' style={{color:"blue" , padding:"0 5px"}}></i><a>Women in Technology</a></li>
            <li><i className='fas fa-caret-right' style={{color:"blue" , padding:"0 5px"}}></i><a>Diversity & Inclusion</a></li>
            <li><i className='fas fa-caret-right' style={{color:"blue" , padding:"0 5px"}}></i>Generate Impact</li>
            <li><i className='fas fa-arrow-right' style={{color:"darkblue" , padding:"0 5px 0 18px", fontSize:"10px"}}></i><a>Social Impact</a></li>
            <li><i className='fas fa-arrow-right' style={{color:"darkblue" , padding:"0 5px 0 18px", fontSize:"10px"}}></i><a>Education</a></li>
            <li><i className='fas fa-caret-right' style={{color:"blue" , padding:"0 5px"}}></i><a>Entrepreneurial Culture</a></li>
            <li><a>Press</a></li>
            <li><a>Blog</a></li>
            <li><a>Podcast</a></li>
            <li><a>Events</a></li>
            <li><a>Videos</a></li>
            <li><a>Merch</a></li>
            <li><a>Contact Us</a></li>

          </ul>
        </div>


        <div id="search-form" className={isShown?"#search-form active":"#search-form"}>
            <input type="search" id="search-box" placeholder="search here"/>
        </div>
    </div>
  )
}

export default Header