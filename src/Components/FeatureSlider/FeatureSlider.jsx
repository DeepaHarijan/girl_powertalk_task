import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./FeatureSlider.css"
import logo1 from '../../images/logos/Bplans-Logo-undefined.png'
import logo2 from '../../images/logos/Business-2-Community.png'
import logo3 from '../../images/logos/Business.com-Logo-undefined.png'
import logo4 from '../../images/logos/DataDrivenInvestor.png'
import logo5 from '../../images/logos/eshe-1.png'
import logo6 from '../../images/logos/Feminism.png'
import logo7 from '../../images/logos/hubspot.png'
import logo8 from '../../images/logos/thrive-global.png'
import logo9 from '../../images/logos/TimesNext-Logo-undefined.png'
import logo10 from '../../images/logos/Under30CEO-Logo-undefined.png'

const FeatureSlider = () => {

    var settings = {
        dots: false,
        loop:true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed:2000,
        cssEase:"linear",
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
             
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
      };

  return (
    <div className='FeatureSlider'>
        <h1 class="Featureheading"> <span>Featured </span> In</h1>
        <div>
        <Slider {...settings}>
          <div>
          <img className='images' src={logo1}/>
          </div>
          <div>
          <img className='images' src={logo2}/>
          </div>
          <div>
          <img className='images' src={logo3}/>
          </div>
          <div>
          <img className='images' src={logo4}/>
          </div>
          <div>
          <img className='images' src={logo5}/>
          </div>
          <div>
          <img className='images' src={logo6}/>
          </div>
          <div>
          <img className='images' src={logo7}/>
          </div>
          <div>
          <img className='images' src={logo8}/>
          </div>
          <div>
          <img className='images' src={logo9}/>
          </div>
          <div>
          <img className='images' src={logo10}/>
          </div>
          
        </Slider>
      </div>

</div>
  )
}

export default FeatureSlider