import React, { useState } from 'react';
import Corals from '../../Assets/corals.'
import Fishorange from '../../Assets/fishorange'
import Fishyellow from '../../Assets/fishyellow'
import Navbar from '../Navbar/Navbar';
import './Homepage.css'
const Homepage = () => {

    const [ scrollTop , setScrollTop ] = useState(0)
    const [ transformOrange , setOrange ] =  useState()
    const [ transformYellow , setYellow ] =  useState()
    const [ scrolled , setScrolled ] = useState(false)

    const myRef = React.createRef()

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
     
        setOrange({
            transform:`translateX(${attainedscrollTop}px)`,
            transalate:`2s linear ease-in-out`
        })
        setYellow({
            transform:`translateX(${attainedscrollTop}px)`,
            transalate:`2s linear ease-in-out`
        })
    
     }
    
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
 
             2
            </div>
            <div className="slide-content-3">
              3
            </div>
        </div>
     );
}
 
export default Homepage;