import React, { useState , useEffect} from 'react';
import SwipeableViews from 'react-swipeable-views';
import Coralorange from '../../Assets/coralorange.js'
import Fishorange from '../../Assets/fishorange'
import Fishyellow from '../../Assets/fishyellow'
import Sealion from '../../Assets/sealion';
import Allien from '../../Assets/alien';
import Navbar from '../Navbar/Navbar';
import './Homepage.css'
import Starfish from '../../Assets/Starfish';
import Shark from '../../Assets/Shark';
import Goliath from '../../Assets/goliath';
import Turtle from '../../Assets/turtle';
import Fishsky from '../../Assets/fishsky';
import Fishskyyellow from '../../Assets/fishskyyellow';
import Fishred from '../../Assets/fishred';
import Coral2 from '../../Assets/coral2';
import Animatecorals from '../../Assets/animate-corals';
import Cactus from '../../Assets/cactus.js';
import Coralred from '../../Assets/coral-red.js';
import Canvas from '../../Assets/Canvas.js';
const Homepage = () => {

    const [ scrollTop , setScrollTop ] = useState(0)
    const [ transformOrange , setOrange ] =  useState()
    const [ transformYellow , setYellow ] =  useState()
    const [ transformSeaLion , setSeaLion ] =  useState()
    const [ transformAlien , setAlien ] = useState()
    const [ transformStarFish , setStarFish ] = useState()
    const [ scrolled , setScrolled ] = useState(false)
    const [ index , setIndex ] = useState(0)
    const [ transformOpacity , setOpacity ] = useState()
    const [ transformOpacityFrontTitle , setOpacityFrontTitle ] = useState()
    const [ transformOpacityFrontDesc , setOpacityFrontDesc ] = useState()
    const [ transformOpacityWhatTitle , setOpacityWhatTitle ] = useState()
    const [ transformOpacityWhatDesc , setOpacityWhatDesc ] = useState()
    const [ transformOpacityWhoTitle , setOpacityWhoTitle ] = useState()
    const [ transformOpacityWhoDesc , setOpacityWhoDesc ] = useState()

    const myRef = React.createRef()

    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
          width,
          height
        };
      }
      
      const  useWindowDimensions = () => {
        const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
      
        useEffect(() => {
          function handleResize() {
            setWindowDimensions(getWindowDimensions());
          }

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
        
      
          window.addEventListener('resize', handleResize);
          return () => window.removeEventListener('resize', handleResize);
        }, []);
      
        return windowDimensions;
      }

      const { height, width } = useWindowDimensions();

    const onScroll = () => {

     
        const attainedscrollTop = myRef.current.scrollTop
        console.log(scrollTop)
        setScrollTop(attainedscrollTop)
        if(attainedscrollTop > 0){
            setScrolled(true)

            setTimeout ( () => {
                setScrolled(false)
            } , 2000)
        }

        if(attainedscrollTop > height ){
            setSeaLion({
                transform:`translateX(-${attainedscrollTop - height}px)`,
                transalate:`2s linear ease-in-out`
            })

            setAlien({
                transform:`translateX(-${attainedscrollTop - height}px)`,
                transalate:`2s linear ease-in-out`
            })

            setOpacityWhatTitle({
                animation:'fade 5s linear',
                transition:'all 5s',
                opacity:'1'
            })
    
              setOpacityWhatDesc({
                animation:'fade 10s linear',
                transition:'all 10s',
                opacity:'1'
            })
        }

        if( attainedscrollTop > 2*height){
            setStarFish({
                transform:`translateX(-${attainedscrollTop - 2*height}px)`,
                transition:`2s linear ease-in-out`
            })

            setOpacityWhoTitle({
                animation:'fade 5s linear',
                transition:'all 5s',
                opacity:'1'
            })
    
              setOpacityWhoDesc({
                animation:'fade 10s linear',
                transition:'all 10s',
                opacity:'1'
            })
        }

        if( attainedscrollTop > 3* height) {
            setOpacity({
                animation:'fade 5s linear',
                transition:'all 5s',
                opacity:'1'
            })
        }
     
        setOrange({
            transform:`translateX(${attainedscrollTop}px)`,
            transalate:`2s linear ease-in-out`
        })
        setYellow({
            transform:`translateX(${attainedscrollTop}px)`,
            transalate:`2s linear ease-in-out`
        })
    
     }

    const handleChangeIndex = index => {
       setIndex(index)
      };

 
    return ( 
        <div className="homepage"  ref={myRef} onScroll={onScroll}>
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
                <Navbar></Navbar>
            </div>

            <div className="slide-content">
                <div className="corals" ><Animatecorals></Animatecorals> </div>
                <div className="fish-orange" style={transformOrange}><Fishorange></Fishorange></div>
                <div className="fish-yellow" style={transformYellow}><Fishyellow></Fishyellow></div>
                <div className="shark"><Shark></Shark></div>
                <div className="content-front">
                    <div className="inside-cont">
                        <div className="Logo-1" style={transformOpacityFrontTitle} >Web</div>
                        <div className="Logo-2" style={transformOpacityFrontTitle}>The Builder</div>
                        <div className="desc-1" style={transformOpacityFrontDesc}>We Build Interactive</div>
                        <div className="desc-2" style={transformOpacityFrontDesc}>Websites for our beloved user </div>
                    </div>
                </div>
      
            </div>
            <div className="slide-content-2">
                <div className="sea-lion"style={transformSeaLion}><Sealion></Sealion></div>
                <div className="allien" style={transformAlien}><Allien></Allien></div>
                <div className="content-what-we-do">
                    <div className="inside-what">
                        <div className="topic-heading" style={transformOpacityWhatTitle}>What We Do</div>
                        <div className="topic-desc" style={transformOpacityWhatDesc}>We turn your bussiness into a piece of art which is being
loved by every other in the marketplace . We help people to 
expand thier work and realise its trur potential </div>
                    </div>
                </div>
             
            </div>

            <div className="slide-content-3">
            <div className="star-fish" style={transformStarFish}><Starfish></Starfish></div>
            <div className="goliath" style={transformStarFish}><Goliath></Goliath></div>
                <div className="content-what-we-do">
                    <div className="inside-what">
                        <div className="topic-heading" style={transformOpacityWhoTitle}>Who Are We</div>
                        <div className="topic-desc" style={transformOpacityWhoDesc}>We are a bunch of students from IIT Tirupati with  web 
development experience of more than 2 yrs .We are a bunch of students from IIT Tirupati with  web 
development experience of more than 2 yrs . </div>
                    </div>
                </div>
            </div>

            <div className="slide-content-4">
                    <div className="inside-package">
                    <div className="topic-heading">Package</div>
                    <div className="package-option">
                        <div className="package-list">
                            <div className={ index ===0 ? "active-package" : "package-circle" } onClick={ () => setIndex(0)} ></div>
                            <div className="package-name">Basic</div>
                        </div>

                        <div className="package-list">
                            <div className={ index ===1 ? "active-package" : "package-circle" }  onClick={ () => setIndex(1)}></div>
                            <div className="package-name">Medium</div>
                        </div>

                        <div className="package-list">
                            <div className={ index ===2 ? "active-package" : "package-circle" }  onClick={ () => setIndex(2)}></div>
                            <div className="package-name">Advance</div>
                        </div>
                    </div>
                    <div className="swipe-package">
                    <SwipeableViews index={index} onChangeIndex={handleChangeIndex}>
          <div className="package-desc">
              <div className="package-details" >
                  We are a bunch of students from IIT Tirupati with  web 
                development experience of more than 2 yrs .We are a bunch of students from IIT Tirupati with  web 
                development experience of more than 2 yrs .
                </div>

                <div className="package-includes">
                    <div className="include-list">Database</div>
                    <div className="include-list">Domain</div>
                    <div className="include-list">Server</div>
                </div>
            </div>

          <div className="package-desc">We are a bunch of students from IIT Tirupati with  web 
development experience of more than 2 yrs .We are a bunch of students from IIT Tirupati with  web 
development experience of more than 2 yrs .</div>

          <div className="package-desc">We are a bunch of students from IIT Tirupati with  web 
development experience of more than 2 yrs .We are a bunch of students from IIT Tirupati with  web 
development experience of more than 2 yrs .</div>
       
        </SwipeableViews>
                    </div>
                    </div>
            </div>

            <div className="slide-content-last">
                 {/* <div className="coral-orange"><Coralorange></Coralorange></div> 
                 <div className="coral-red"><Coralred></Coralred></div>
                 <div className="cactus"><Cactus></Cactus></div>
                <div className="fish-sky"><Fishsky></Fishsky></div>
                <div className="fish-sky-yellow"><Fishskyyellow></Fishskyyellow></div>
                <div className="fish-red"><Fishred></Fishred></div>
                <div className="turtle"><Turtle></Turtle></div>
                <div className="corals-left"><Coral2></Coral2></div> */}
                <div className="canvas"><Canvas></Canvas></div>

                <div className="warning-content" style={transformOpacity}>
                Thats Too Deep !!
                <br></br> Pressure is low out here get yourself to shore
                </div>
            </div>

        </div>
     );
}
 
export default Homepage;