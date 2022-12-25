import React from 'react'
import BannerVid from '../assets/gpt-banner-video.mp4'
import Value from './ValueSection/Value'
import About from './About/About'
import Awards from './Awards/Awards'
import FeatureSlider from './FeatureSlider/FeatureSlider'

import './Home.css'
import ProfileCard from './ProfileCard/ProfileCard'
import ProfileCard2 from './ProfileCard/ProfileCard2'

import Vm from './VisionandMovement/Vm'
import Girlsfun from './Girlsfunsection/Girlsfun'
import YTvideoimport from './YTVideo/YTvideo'
import Story from './Story/Story'
import Partners from './Partners/Partners'
import Footer from './Footer/Footer'
import { useLoadScript } from "@react-google-maps/api";
import Map from "./Map/Map";


function Home() {

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDFeVHRU8RshS-9Mi33vMtOhjUFoHh1pcg" ,// Add your API key
  });

  return (
    <div className='Home'>
      <div className='overlay'></div>
        <video autoPlay muted loop src={BannerVid}/>
        

        <main>
        <section >#</section> 
               <section className='content'> 
                  <span>WeAreGirlPowerTalk</span>
                </section>
</main>
<FeatureSlider/>
<About/>
<Awards/>
<Vm/>
<Value/>
<ProfileCard/>
<ProfileCard2/>
<Girlsfun/>
<YTvideoimport/>
<Story/>
<Partners/>
{isLoaded ? <Map /> : null};
<Footer/>



  

    </div>
  )
}

export default Home