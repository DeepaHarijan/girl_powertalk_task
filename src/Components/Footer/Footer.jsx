import React from 'react'
import './Footer.css'
import logo from '../../images/GPT-logo.png'

function Footer() {
  return (
    <div>
        <div class="footer">
    <div class="share">
        <a href="" class="fab fa-facebook"></a>
        <a href="#" class="fab fa-twitter"></a>
        <a href="#" class="fab fa-instagram"></a>
        <a href="#" class="fab fa-linkedin"></a>
        <a href="#" class="fab fa-pinterest"></a>
    </div>

    <div class="links">
        <a href="#about">About</a>
        <a href="#team">Team</a>
        <a href="#company">Company</a>
        
    </div>

    <div class="credit"><img src={logo}/></div>
</div>
    </div>
  )
}

export default Footer