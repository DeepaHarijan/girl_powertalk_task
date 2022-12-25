import React from 'react'
import './YTvideo.css'
import ytv1 from '../../images/hqdefault (1)edit.jpg'
import ytv2 from '../../images/hqdefault (2)edit.jpg'
import ytv3 from '../../images/hqdefault (3)edit.jpg'

function YTvideo() {
  return (
    <div className='ytv'>
        <div class="row">
    <div class="image">
        <div>
    <i class="fab fa-youtube"></i>
        <img src={ytv1} alt=""/>
        </div>

        <div>
    <i class="fab fa-youtube"></i>
        <img src={ytv2} alt=""/>
        </div>

        <div>
    <i class="fab fa-youtube"></i>
        <img src={ytv3} alt=""/>
        </div>
    </div>

</div>
    </div>
  )
}

export default YTvideo