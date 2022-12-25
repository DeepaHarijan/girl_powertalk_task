import React from 'react'
import './ProfileCard.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import'./ProfileCard.scss'
import profile1 from '../../images/profiles/Aashna-1.png'
import profile2 from '../../images/profiles/chipiwa-teaching.png'
import profile3 from '../../images/profiles/Dee.png'
import profile4 from '../../images/profiles/Devanshi.png'
import profile5 from '../../images/profiles/f2-team-carousel.jpg'
import profile6 from '../../images/profiles/Upashana.png'
import profile7 from '../../images/profiles/Marion.png'
import profile8 from '../../images/profiles/Muskan.png'
import profile9 from '../../images/profiles/nitya-gupta.png'
import profile10 from '../../images/profiles/noorien-sq.jpg'
import profile11 from '../../images/profiles/rachita2-carasoul.png'
import profile12 from '../../images/profiles/Rectangle-138.png'



import SwiperCore, {
    EffectCoverflow,
    Pagination,
    Navigation
  } from "swiper/core";


  SwiperCore.use({EffectCoverflow, Pagination, Navigation});

function ProfileCard() {
  return (
    <div className='ProfileCard'>
    <div class="profile-content">
      <h1>The Girl Power Talk Family</h1>
        <p>We meticulously recruit ambitious young leaders who value personal growth, professional development, and positive social change. 
          Every candidate who is invited to join our global team is special not so much for what they do, but for who they are. 
          We celebrate difference and believe in the collective power that is created when individuals are free to be authentic and true to themselves.
           Our genuine care and love for one another inspires us to work and  play harder than everyone else. Our happiness is infectious because it is real.</p>
         <a href="#" class="profilebtn">Connect With Our Team</a>
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
        <SwiperSlide>
          <img src={profile11}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={profile12}/>
        </SwiperSlide>
      </Swiper>
      </div>

    </div>
  )
}

export default ProfileCard