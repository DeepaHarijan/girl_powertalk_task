import React from 'react'
import './Story.css'
import story1 from '../../images/story1e.jpg'
import story2 from '../../images/story2.jpg'
import story3 from '../../images/story3.jpg'
import story4 from '../../images/story4.jpeg'

function Story() {
  return (
    <div className='story'>
        <h1 class="heading"> Share Your Story With Us</h1>
        <p>Do you have a personal or professional story that can inspire other people?
             We are interested in your journey and recognize that your struggles and successes define you. Amplifying your voice is at the core of the Girl Power Talk movement. We are all ears. Please take the pen and tell us your story.
             Together, we will empower the next generation of leaders.</p>

<div class="row">
    <div className='wrapper'>
    <div class="storyimage">
        <div className='imgcontainer'>
        <a href='https://girlpowertalk.com/success-story-of-nancy-uridil/'><img  src={story4} alt=""/></a>
        </div>
        <div className='imgcontainer'>
        <a href='https://girlpowertalk.com/kat-gordon-creating-opportunities-by-inclusivity/'><img src={story2} alt=""/></a>
        </div>
        <div className='imgcontainer'>
        <a href='https://girlpowertalk.com/ramin-mohammad-recalibrate-and-rebalance-life/'><img src={story3} alt=""/></a>
        </div>
        <div className='imgcontainer'>
        <a href='https://girlpowertalk.com/reggie-sison-life-twist-and-new-beginning/'><img src={story1} alt=""/></a>
        </div>
    </div>
    </div>
    

    <div class="content">
        <a href="#" class="storybtn">Tell Your Story</a>
    </div>

    

</div>
    </div>
  )
}

export default Story