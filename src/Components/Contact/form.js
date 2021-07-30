import { useEffect, useState } from 'react';
import './form.css'
const Form = () => {
    const [ name, setName ] = useState('')
    const [ email , setEmail ] = useState('')
    const [ message , setMessage ] = useState('')
    const [ inputChange , setInputChange ] = useState()
    const [ inputChangeEmail , setInputChangeEmail ] = useState()

    const [ transformOpacityFrontTitle , setOpacityFrontTitle ] = useState()
    const [ transformOpacityFrontDesc , setOpacityFrontDesc ] = useState()

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
    }, [])

    const handleChange = (e) => {
        // console.log(e.target.name)
        setName(e.target.value)
        if(e.target.value.length === 0 ){
            setInputChange({
                border:'none'
            })
        }
        else{
        setInputChange({
            width:'fit-content',
            border:'3px solid rgba(89, 24, 223, 0.5)',
            borderLeftStyle:'none', 
            borderRightStyle:'none' ,
            borderTopStyle:'none' ,
            position:'relative',
            top:'3px',

        })
    }

    }
    const handleChangeEmail = (e) => {
        // console.log(e.target.name)
        setEmail(e.target.value)

        if(e.target.value.length === 0){
            setInputChangeEmail({
                border:'none'
            })
        }
        else{
        setInputChangeEmail({
            width:'fit-content',
            border:'3px solid rgba(89, 24, 223, 0.5)',
            borderLeftStyle:'none', 
            borderRightStyle:'none' ,
            borderTopStyle:'none' ,
            position:'relative',
            top:'3px'
        })
    }

    }
    const handleChangeMessage = (e) => {
        // console.log(e.target.name)
        setMessage(e.target.value)
   

    }
    return ( 
        <div className="form">
            <div className="box-list">
            <div className="label" style={transformOpacityFrontTitle}>Name</div>
            <div className="input-line" style={transformOpacityFrontDesc}>
                <input type="text" autoComplete="off" size={name.length} value={name} onChange={handleChange} name="name" style={inputChange}></input>
            </div> 
            </div>

            <div className="box-list">
            <div className="label" style={transformOpacityFrontTitle}>Email</div>
            <div className="input-line" style={transformOpacityFrontDesc}>
                <input type="text" autoComplete="off" size={email.length} value={email} onChange={handleChangeEmail} name="email" style={inputChangeEmail}></input>
            </div>   
            </div>

            <div className="box-list">
                <div className="label" style={transformOpacityFrontTitle}>Message</div>
                <div className="input-msg" style={transformOpacityFrontDesc}>
                    <textarea value={message} onChange={handleChangeMessage}></textarea>
                </div>
            </div> 

            <div className="submit-form">Submit</div>
        </div>
     );
}
 
export default Form;