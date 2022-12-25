import React from 'react'
import './Vm.css'
import vmImg from '../../images/Group-132-1-min (1).png'

function Vm() {
  return (
    <div className='vm'>
        

<div class="row">

<div class="content">
    <h1 class="vmheading"> <span> </span> Vision</h1>
        <p>Girl Power Talk is passionate about elevating young women to become global leaders who are recognized for their myriad of talents and contributions. We believe that through education, opportunity, and the support of empathetic male allies, girls and women will advance beyond gender roles, aspire to new levels of achievement and reshape our society. Through our innovative ecosystem,
             we are changing the world of work for the better and providing all voices equal weight in a new narrative defining the future.</p>
         <a href="#" class="Vmbtn">See More</a>
    </div>

    <div class="image">
        <img src={vmImg} alt=""/>
    </div>

    <div class="content">
    <h1 class="vmheading"> <span> </span> Starting a Movement</h1>
        <p>Girl Power Talk was founded on the idea that young India needs an innovative new work culture that equally harnesses people’s talents, irrespective of their gender. Girl Power Talk is more than a company. We are a movement rooted in empowerment, professional ambition, and social impact. For generations, women have been relegated to secondary roles, and the youth exploited for their energy and inexperience.
             We are a culture that will make history by changing this dynamic and writing the beautiful next chapter in this story.</p>
         <a href="#" class="Vmbtn">Apply Now</a>
    </div>

</div>
    </div>
  )
}

export default Vm