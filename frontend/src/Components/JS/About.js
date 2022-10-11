import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import '../CSS/About.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import img from './womanc.jpg'
function About() {
    useEffect(() => {
        AOS.init({ duration: 1000 })
      }, [])
  return (
    <div id = "About" style={{minHeight:"100vh"}}>
      <div className="sections">
        <div className="contain">
          <div className="content-sections">
            <div className="titles">
              <h1 data-aos="flip-left">About Us</h1>
            </div>
            <div className="contents" data-aos="fade-right">
              <h3 data-aos="flip-right">Lorem ipsum dolor sit amet, consectetur adipisicing</h3>
              <p data-aos="fade-right">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.</p>
              <div className="btn3" data-aos="flip-left">
                <Link to="/">Read More</Link>
              </div>
            </div>
            <div className="socials">
            </div>
          </div>
          <div className="image-sections"  data-aos="fade-right">
           <img src={img} alt="" srcset="" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default About