import './Projects.css'
import Navbar from '../Navbar/Navbar';
import { useEffect, useState } from 'react';
import { useWindowScroll } from 'react-use'
import Figma from '../../Assets/figma';
import Link from '../../Assets/link';
import Jelly_project from '../../Assets/jelly-project';
const Projects = () => {

    const { x : pageXoffset } = useWindowScroll()

    const [ drag , setDrag ] = useState(false)
    const [ style , setStyle ] = useState()
    const [ diffX , setDiffX ] = useState()
    const [ prevleft , setLeft ] = useState()
    const [ scrollLeft , setScroll ] = useState()

    const dragStart = (e) => {
        console.log(e.currentTarget.getBoundingClientRect().left)
        setDiffX(e.currentTarget.getBoundingClientRect().left)
        setDrag(true)
    }

    const touchStart = (e) => {
        console.log(e.currentTarget.getBoundingClientRect().left)
        setDiffX(e.currentTarget.getBoundingClientRect().left)
        setDrag(true)
    }



    const dragging = (e) =>{

        if(drag){
            var left  = e.screenX - diffX 
            setLeft(left)
            const scrollLeft = Math.abs( prevleft - left )
            setScroll(scrollLeft)
            if(prevleft > left && left >= 0){
                setStyle({
                    left:left
                })
                document.getElementById('scroll').scrollLeft -=  (scrollLeft * 3)
            }
            else{
            document.getElementById('scroll').scrollLeft += ( scrollLeft * 3.5 )
            setStyle({
                left:left
            })
        }
        }
      
    }

    const touchMove = (e) => {
        if(drag){
            var touchLeft = e.touches[0].clientX - diffX
            setLeft(touchLeft)
            const scrollLeft = Math.abs( prevleft - touchLeft )
            setScroll(scrollLeft)
            if( prevleft > touchLeft && touchLeft >=0){
                setStyle({
                    left:touchLeft
                })
                document.getElementById('scroll').scrollLeft -= ( scrollLeft * 3)
            }
            else{
                document.getElementById('scroll').scrollLeft +=  ( scrollLeft * 4 )
                if(touchLeft >=0){
                    setStyle({
                        left:touchLeft
                    })
                }
           
            }
        }
    }

    const dragEnd = () => {
        setDrag(false)
    }

    const touchEnd = () => {
        setDrag(false)
    }
    return ( 
        <div className="projects">
               <div className="Navbar">
                <Navbar active="projects"></Navbar>
            </div>

            <div className="horizontal-line" onMouseDown={dragStart} onMouseMove={dragging} onMouseUp={dragEnd} onTouchStart={touchStart} onTouchMove={touchMove} onTouchEnd={touchEnd} >
                <div className="horizontal-circle" style={style}></div>
            </div>


            <div className="project-box" id="scroll">
                <div className="project-list">
                    <div className="project-title">Alkazar</div>
                    <div className="project-desc">
                        We turn your bussiness into a piece of art which is being loved by every other in the marketplace . We help people to 
                        expand thier work and realise its trur potential 
                    </div>
                    <div className="project-links">
                        <div className="figma"><Figma></Figma></div>
                        <div className="link"><Link></Link></div>
                    </div>
                   
                </div>
                <div className="project-list">
                    <div className="project-title">Alkazar</div>
                    <div className="project-desc">
                        We turn your bussiness into a piece of art which is being loved by every other in the marketplace . We help people to 
                        expand thier work and realise its trur potential 
                    </div>
                    <div className="project-links">
                        <div className="figma"><Figma></Figma></div>
                        <div className="link"><Link></Link></div>
                    </div>
                   
                </div>
                <div className="project-list">
                    <div className="project-title">Alkazar</div>
                    <div className="project-desc">
                        We turn your bussiness into a piece of art which is being loved by every other in the marketplace . We help people to 
                        expand thier work and realise its trur potential 
                    </div>
                    <div className="project-links">
                        <div className="figma"><Figma></Figma></div>
                        <div className="link"><Link></Link></div>
                    </div>
                   
                </div>
                <div className="jelly-projects"><Jelly_project></Jelly_project></div>
            
            </div>

        </div>
     );
}
 
export default Projects;