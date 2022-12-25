import React from 'react'
import './Partners.css'
import p1 from '../../images/partners/p1.png'
import p2 from '../../images/partners/p2.png'
import p3 from '../../images/partners/p3.png'
import p4 from '../../images/partners/p4.png'
import p5 from '../../images/partners/p5.png'
import p6 from '../../images/partners/p6.png'
import p7 from '../../images/partners/p7.png'
import p8 from '../../images/partners/p8.png'
import p9 from '../../images/partners/p9.png'
import p10 from '../../images/partners/p10.png'
import p11 from '../../images/partners/p11.png'

function Partners() {
  return (
    <div>
           <div class="partners" >
    <h1 class="heading">our <span>Partners</span></h1>

    <div class="box-container">
        <div class="box">
             <img src={p1} alt=""/>
            </div>

        <div class="box">
            <img src={p2} alt=""/>
            
       </div>

       <div class="box">
        <img src={p3} alt=""/>
        
        </div>

   <div class="box">
    <img src={p4} alt=""/>
    </div>


           <div class="box">
            <img src={p5} alt=""/>
            </div>

           <div class="box">
            <img src={p6} alt=""/>
            
       </div>   
             


       <div class="box">
        <img src={p7} alt=""/>
        
   </div>

         
   <div class="box">
    <img src={p8} alt=""/>
    </div>

    <div class="box">
    <img src={p9} alt=""/>
    </div>

    <div class="box">
    <img src={p10} alt=""/>
    </div>
    
    <div class="box">
    <img src={p11} alt=""/>
    </div>
    </div>

    <button>Collaborate with Us</button>
</div>
    </div>
  )
}

export default Partners