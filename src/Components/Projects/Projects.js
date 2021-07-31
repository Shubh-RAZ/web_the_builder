import './Projects.css'
import Navbar from '../Navbar/Navbar';
import { useEffect, useState } from 'react';
import { useWindowScroll } from 'react-use'
const Projects = () => {

    const { x : pageXoffset } = useWindowScroll()

    const [ drag , setDrag ] = useState(false)
    const [ style , setStyle ] = useState()
    const [ diffX , setDiffX ] = useState()
    const [ prevleft , setLeft ] = useState()

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
            if(prevleft > left && left >= 0){
                setStyle({
                    left:left
                })
                document.getElementById('scroll').scrollLeft -= left/90
            }
            else{
            document.getElementById('scroll').scrollLeft += left/90;
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
            if( prevleft > touchLeft && touchLeft >=0){
                setStyle({
                    left:touchLeft
                })
                document.getElementById('scroll').scrollLeft -= touchLeft/90
            }
            else{
                document.getElementById('scroll').scrollLeft += touchLeft/90;
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

{prevleft}
            <div className="project-box" id="scroll">
                <div className="project-list">slide 1</div>
                <div className="project-list">slide 2</div>
                <div className="project-list">slide 3</div>
                <div className="project-list">slide 4</div>
            </div>

        </div>
     );
}
 
export default Projects;