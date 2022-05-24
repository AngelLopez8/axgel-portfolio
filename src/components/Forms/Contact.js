import React, { useState } from 'react';
import axios from 'axios';

import './form.css';

const Contact = () => {

    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ subject, setSubject ] = useState("");
    const [ message, setMessage ] = useState("");
    const [ error, setError ] = useState(undefined);

    const sendMessage = async () => {
        try {
            const res = await axios.post(`${process.env.REACT_APP_API_URL}contact`, { name, email, subject, message });
            setName("");
            setEmail("");
            setSubject("");
            setMessage("");
            if (res.status === 200) {
                setError(false);
            }
        } catch (err) {
            setError(true);
        }
    }

    const handleSubmit = e => {
        e.preventDefault();
        sendMessage();
    }

    return (
        <form className="contact center-elements" onSubmit={handleSubmit}>
            <h1>Contact</h1>
            {
                error === false ?
                    <p style={{color:"green"}}>Successful, thank you for reaching out!</p>
                    :
                    error === true ? 
                        <p style={{color:'red'}}>Failed, please try again later!</p>
                        :
                        <p></p>
            }
            <label>Full Name</label><br/>
            <input className="contact-input" required type="text" placeholder="Full Name" onChange={ e => setName(e.target.value) } /><br/>
            <label>Email</label><br/>
            <input className="contact-input" required type="email" placeholder="example@example.com" onChange={ e => setEmail(e.target.value) }/><br/>
            <label>Subject</label><br/>
            <input className="contact-input" required type="text" placeholder="Subject" onChange={ e => setSubject(e.target.value) } /><br/>
            <label>Message</label><br/>
            <textarea className="contac-msg" required placeholder="Message" onChange={ e => setMessage(e.target.value) } /><br />
            <button className="contact-btn" type="submit" >Submit</button>
        </form>
    );
}

export default Contact;