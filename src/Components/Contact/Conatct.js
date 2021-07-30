import './Contact.css'
import Navbar from '../Navbar/Navbar';
import Form from './form';
import Octopus from '../../Assets/octopus';
import { useEffect , useState} from 'react';
const ContactUs = (props) => {

    const [ transformOpacityFrontTitle , setOpacityFrontTitle ] = useState()


    useEffect( () => {
        setOpacityFrontTitle({
            animation:'fade 5s linear',
            transition:'all 5s',
            opacity:'1'
        })

     
    }, [])

    const headingColor = '#808080'
    return ( 
        <div className="contact">
                 <div className="navbar-contact">
                <Navbar></Navbar>
            </div>

            <div className="form-box">
                <div>
                    <div className="contact-heading" style={transformOpacityFrontTitle}>Reach us at</div>
                    <Form></Form>
                </div>
            </div>

            <div className="svg-box" >
                <div className="inside-svg">
                    <Octopus></Octopus>
                </div>
            </div> 
        </div>
     );
}
 
export default ContactUs;