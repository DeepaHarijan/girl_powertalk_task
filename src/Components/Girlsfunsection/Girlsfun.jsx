import React from 'react'
import './Girlsfun.css'
import girlsfun from '../../images/hqdefaultedit.jpg'

function Girlsfun() {
  return (
    <div className='girlsfun'>
        <h1 class="heading">Girls Just Wanna Have Fun</h1>

<div class="row">

<div class="image">
<i class="fab fa-youtube"></i>
        <img src={girlsfun} alt="" />
    </div>

    <div class="content">
        <p>A positive work culture leads to higher productivity when it provides team members a safe space to express their concerns, removes barriers in favor of bridges for growth,
             and fosters resilience from stress and depression..</p>
         
         <a href="#" class="gfbtn">Learn More</a>
    </div>

    

</div>
    </div>
  )
}

export default Girlsfun