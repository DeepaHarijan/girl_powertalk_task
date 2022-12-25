import React from 'react'
import './Value.css'
import v1 from '../../images/value/value1.png'
import v2 from '../../images/value/value2.jpg'
import v3 from '../../images/value/value3.jpg'
import v4 from '../../images/value/value4.jpg'

function Value(props) {

  return (
    <div className='value'>
       <div className='card-container'>
        <div className='card'>
            <div className='info'>
            <div className='pb'><img src={v1}/></div>
            <h1>Women in Technology</h1> 
            </div>

            <div className='details'>
                <p>The technology industry is becoming increasingly gender inclusive, and at Girl Power Talk, we consciously hire women for tech roles. Women, nonbinary individuals, and men work side by side on coding, UI/UX design, SEO, and data science teams. The resulting confluence of ideas, styles, and strengths affords our clients a competitive advantage when developing solutions for their challenges. Our growing team of young women in tech are leading by example for younger girls interested in pursuing STEM careers.</p>
            </div>

            <div className='value-btn'>
              <button>Read More</button>  
            </div>
        </div>


        <div className='card'>
            <div className='info'>
            <div className='pb'><img src={v2}/></div>
            <h1>Diversity & Inclusion</h1> 
            </div>

            <div className='details'>
                <p>For us, diversity means strength. Our team collectively represents four continents; bringing together people of all genders, races, and religions to collaborate in harmony making us more more effective and powerful. We celebrate each individual’s unique talents and perspectives, and pride ourselves on our inclusive culture that creates a safe space for all to enjoy personal and creative freedom.</p>
            </div>

            <div className='value-btn'>
              <button>Read More</button>  
            </div>
        </div>


        <div className='card'>
            <div className='info'>
            <div className='pb'><img src={v3}/></div>
            <h1>Generate Impact</h1> 
            </div>

            <div className='details'>
                <p>Our benevolent organization is dedicated to promoting the welfare of disadvantaged communities. Our core mission is to change lives, one person at a time. We focus intently on supporting women-owned businesses, providing education in rural communities, raising awareness on gender issues, and being a passionate voice for those without one. We encourage young women to express their opinions and realize their dreams, and we create opportunities for them to do so. Our young leaders find happiness in giving back to their communities and eradicating social injustice.</p>
            </div>

            <div className='value-btn'>
              <button>Read More</button>  
            </div>
        </div>


        <div className='card'>
            <div className='info'>
            <div className='pb'><img src={v4}/></div>
            <h1>Entrepreneurial Culture</h1> 
            </div>

            <div className='details'>
                <p>We offer our team the kind of intellectual freedom that allows each person to innovate and grow, regardless of their age, education, or background. We believe deeply in the creative potential of young talent and have therefore adopted an approach opposite to that of traditional companies, who limit young people by relegating them to mundane tasks. We also have a unique profit-sharing business model that rewards integrity, diligence, and performance.</p>
            </div>

            <div className='value-btn'>
              <button>Read More</button>  
            </div>
        </div>

       

        
      </div> 
    </div>
  )
}

export default Value