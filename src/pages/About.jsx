import React from 'react'
import "../styles/About.css";
import CarouselAbout from '../components/Carousels/Carousel-About';
// import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import NewNav from '../components/NewNav';
import AreYouReady from '../components/Carousels/AreYouReady';

const About =()=>{
return(
    <>
    <NewNav/>
    
<CarouselAbout/>

    <div  className='road-map'>
        <h1>NUPAT INITIATIVES ROAD MAP</h1>
        <p>NUPAT DIGITAL EMPOWERMENT AND DEVELOPMENT INITIATIVES is an ed-tech nonprofit foundation dedicated to empowering young minds with tech skills and resources to help them improve their standard of living. This is an advocacy for Sustainable Development Goal 9 (SDG(); To foster innovation and, build resilient infrastructure, promote inclusive and sustainable industrialization</p>
        <p>There are 3 roadmap sections of Nupat Initiatives:</p>
        <ol>
            <li>Orphanges/ less privileged</li>
            <li>Secondary School Hackathon</li>
            <li>Project 1000</li>
        </ol>

        <div className ="vision-container">
<div className="vision">
    <h3>VISION</h3>
    <p>To empower and expand opportunities through tecnology</p>
</div>
<div className="vision">
<h3>GOAL</h3>
    <p>Train, Create and Empower </p>
</div>
        </div>
    <h3>AIMS AND OBJECTIVES</h3>

<ul>
    <li>To train and empower young talents wit the knowledge of digital space, how to create digital solutions and how to use such knowledge to create sustainable development that will help the economy positively.</li>
    <li>
To maximize the digital potentials in youths and create opportunities for financial inclusiveness and sustainability.
</li>
<li>To train and empower young talents in the digital space, create digital solution and sustainable development in the economy and the world at world.
</li>
<li>To build a digitally evolved Africa by bridging the gap in employment and employability in the digital technology space

</li>
<li>To provide platforms that fosters gender equality in the digital space in Africa.</li>
<li>To partner with associations, organizations and individualsin the attainment of the above objectives.</li>
</ul>

<div className="trustees-container">
    <h3  style={{color:'black'}}>MEET OUR TRUSTEES</h3>
    <div className="trustees-one">
        <div className="trustees">
        <img src={require("../Img/avater-male.png")} alt="Logo" width={170} />
        <p>Benson Emmanuel</p>
        </div>
        <div className="trustees">
        <img src={require("../Img/avater-female.png")} alt="Logo" width={170} />
        <p>Ogunfumilade Ibukun</p>
        </div>
        <div className="trustees">
        <img src={require("../Img/ceo.jpg")} alt="Logo" width={170} />
        <p>Ugwu Nnamdi</p>
        </div>
    </div>
    <div className="trustees-one">
    <div className="trustees">
    <img src={require("../Img/coo.jpg")} alt="Logo" width={170} />
    <p>Olanrewaju Kehinde</p>
    </div>
        <div className="trustees">
        <img src={require("../Img/cto.jpg")} alt="Logo" width={170} />
        <p>Ugwu Friday</p>
        </div>
        <div className="trustees">
        <img src={require("../Img/avater-male.png")} alt="Logo" width={170} />
        <p>Obasan Taiwo</p>
        </div>
    </div>
</div>

    </div>
    <AreYouReady/>
    <Footer/>
    </>

)
};

export default About;