import React from 'react'
import './Awards.css'
import award1 from '../../images/awards/1.png'
import award2 from '../../images/awards/2.png'
import award3 from '../../images/awards/3.png'

function Awards() {
  return (
    <div className='awards'>
        <h1 class="Awardsheading"> Awards</h1>

<div class="row">
    <div class="image">
        <img src={award1} alt=""/>
        <img src={award2} alt=""/>
        <img src={award3} alt=""/>
    </div>

</div>
    </div>
  )
}

export default Awards