import React ,  { useState  , useEffect} from "react";
import Crab from "../../Assets/jelly";
import Navbar from "../Navbar/Navbar";
import './About.css'
const About = () => {

    const [ scrolled , setScrolled ] = useState(false)
    const [ opacityFrontTitle , setOpacityFrontTitle ] = useState()
    const [ opacityFrontDesc , setOpacityFrontDesc ] = useState()

    useEffect( () => {
        setOpacityFrontTitle({
            animation:'fade 5s linear',
            transition:'all 5s',
            opacity:'1'
        })

          setOpacityFrontDesc({
            animation:'fade 10s linear',
            transition:'all 10s',
            opacity:'1'
        })
    } , [])


 
    return ( 
        <div className="about">
                 <div className="side-line">
                <div className="line-1">
               {scrolled ? <div className="inside-circle-2" ></div> :  null }
                </div>
            
                <div className="line-2">
                    <div className="circle">
                     
                    </div>
                </div>
            </div>

            <div className="Navbar">
                <Navbar active="about"></Navbar>
            </div>

            <div className="jelly-about">
                <Crab></Crab>
            </div>

            <div className="about-content">
                <div >
                    <div className="topic-heading-about" style={opacityFrontTitle}>About us</div>
                    <div className="topic-desc-about" style={opacityFrontDesc}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, b
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default About;