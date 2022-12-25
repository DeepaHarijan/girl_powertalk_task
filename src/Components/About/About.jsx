import React from 'react'
import './About.css'
import aboutimg from '../../images/home-about-girl-power-talk-min.png'

function About() {
  return (
    <div className='about'>
        <h1 class="heading"> <span>about </span> us</h1>

<div class="row">
    <div class="image">
        <img src={aboutimg} alt=""/>
    </div>

    <div class="content">
        <p>We believe that achieving true gender equality requires a radical shift in the way young women are mentored in the workplace. At Girl Power Talk, we are passionately dedicated to empowering women–as well as men and nonbinary individuals–with opportunities to learn confidently, feel valued, and build a career full of purpose.</p>
         <p className='quote'>“Let’s unlock your potential. Welcome to Girl Power Talk.“</p>
         <a href="#" class="btn">Learn More</a>
    </div>

    

</div>
    </div>
  )
}

export default About