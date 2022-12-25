import React from 'react'
import './ProfileCard2.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import'./ProfileCard2.scss'
import profile1 from '../../images/profiles2/rachita.png'
import profile2 from '../../images/profiles2/deena.png'
import profile3 from '../../images/profiles2/girls-with-cup-cakes.png'
import profile4 from '../../images/profiles2/Africa.png'
import profile5 from '../../images/profiles2/f1-corousel.jpg'
import profile6 from '../../images/profiles2/meet-our-team-2.2.jpg'
import profile7 from '../../images/profiles2/meet-up.png'
import profile8 from '../../images/profiles2/PH.png'
import profile9 from '../../images/profiles2/Rectangle.png'
import profile10 from '../../images/profiles/noorien-sq.jpg'




import SwiperCore, {
    EffectCoverflow,
    Pagination,
    Navigation
  } from "swiper/core";


  SwiperCore.use({EffectCoverflow, Pagination, Navigation});

function ProfileCard2() {
  return (
    <div className='ProfileCard2'>
    <div class="profile-content">
      <h1>Our Unique Culture</h1>
        <p>We believe that our careers are part of how we influence the world around us, so we strive to maintain a culture that allows each person to find purpose in their work. Our worth is determined not simply by our remuneration but also by the rewards we get from creating positive change for others. Our workplace is a happy one; we encourage our team members to maximize their work-life balance and to see their colleagues as a kind of extended familial support system. We love coming to work at Girl Power Talk because it is our second home.</p>
         <a href="#" class="profilebtn">Meet Our Team</a>
    </div>
    <div className="container">
      
      <Swiper
        navigation={true}
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={window.innerWidth < 425 ? 1 : "auto"}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={profile1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={profile2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={profile3}/>     
        </SwiperSlide>
        <SwiperSlide>
          <img src={profile4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={profile5} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={profile6}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={profile7}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={profile8}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={profile9}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={profile10}/>
        </SwiperSlide>
        
      </Swiper>
      </div>

    </div>
  )
}

export default ProfileCard2