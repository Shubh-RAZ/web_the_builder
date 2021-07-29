import React, { useState , useEffect} from 'react';
import SwipeableViews from 'react-swipeable-views';
import Corals from '../../Assets/corals.'
import Fishorange from '../../Assets/fishorange'
import Fishyellow from '../../Assets/fishyellow'
import Sealion from '../../Assets/sealion';
import Allien from '../../Assets/alien';
import Navbar from '../Navbar/Navbar';
import './Homepage.css'
import Starfish from '../../Assets/Starfish';
import Shark from '../../Assets/Shark';
const Homepage = () => {

    const [ scrollTop , setScrollTop ] = useState(0)
    const [ transformOrange , setOrange ] =  useState()
    const [ transformYellow , setYellow ] =  useState()
    const [ transformSeaLion , setSeaLion ] =  useState()
    const [ transformAlien , setAlien ] = useState()
    const [ transformStarFish , setStarFish ] = useState()
    const [ scrolled , setScrolled ] = useState(false)
    const [ index , setIndex ] = useState(0)

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
        }

        if( attainedscrollTop > 2*height){
            setStarFish({
                transform:`translateX(-${attainedscrollTop - 2*height}px)`,
                transalate:`2s linear ease-in-out`
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
                <div className="corals" ><Corals></Corals> </div>
                <div className="fish-orange" style={transformOrange}><Fishorange></Fishorange></div>
                <div className="fish-yellow" style={transformYellow}><Fishyellow></Fishyellow></div>
                <div className="shark"><Shark></Shark></div>
                <div className="content-front">
                    <div className="inside-cont">
                        <div className="Logo-1">Web</div>
                        <div className="Logo-2">The Builder</div>
                        <div className="desc-1">We Build Interactive</div>
                        <div className="desc-2">Websites for our beloved user </div>
                    </div>
                </div>
      
            </div>
            <div className="slide-content-2">
                <div className="sea-lion"style={transformSeaLion}><Sealion></Sealion></div>
                <div className="allien" style={transformAlien}><Allien></Allien></div>
                <div className="content-what-we-do">
                    <div className="inside-what">
                        <div className="topic-heading">What We Do</div>
                        <div className="topic-desc">We turn your bussiness into a piece of art which is being
loved by every other in the marketplace . We help people to 
expand thier work and realise its trur potential </div>
                    </div>
                </div>
             
            </div>

            <div className="slide-content-3">
            <div className="star-fish" style={transformStarFish}><Starfish></Starfish></div>
                <div className="content-what-we-do">
                    <div className="inside-what">
                        <div className="topic-heading">Who Are We</div>
                        <div className="topic-desc">We are a bunch of students from IIT Tirupati with  web 
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

        </div>
     );
}
 
export default Homepage;