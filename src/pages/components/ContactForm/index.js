import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

const ContactForm = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_ff7econ', 'template_ur0w0n8', form.current, 'yrRGpfo5tgiQWoYWa')
        .then((result) => {
            console.log(result.text);
            e.target.reset();
            alert("Thanks for your Query, We will connect with you Soon...")
        }, (error) => {
            console.log(error.text);
            alert("There was an error while submitting your Form, Please try again...")
        });
    };
    
    return (
        <div className='p-4 my-2' style={{border:'3px solid grey', borderRadius: '30px'}}>
            <form ref={form} onSubmit={sendEmail}>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Name</label>
                    <input type="text" className="form-control" id="username" aria-describedby="username" name="username"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="mobile" className="form-label">Contact No.</label>
                    <input type="number" className="form-control" id="mobile" aria-describedby="mobile" name="mobile" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="email" name="email" />
                    <div id="email" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="partyType" className="form-label">Booking Type</label>
                    <select
                        // value={}
                        // onChange={e => onChange(e, 'lead_state')}
                        className='form-control'
                        name='bookingtype'
                    >
                        <option value={''}>Select Party Type</option>
                        <option value={'Birthday'}>Birthday</option>
                        <option value={'Engagement'}>Engagement</option>
                        <option value={'Wedding'}>Wedding</option>
                        <option value={'Pre-Wedding'}>Pre-Wedding</option>
                        <option value={'Others'}>Others</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Address</label>
                    {/* <input type="text"  className="form-control" id="line2" placeholder='Address Line 1' aria-describedby="line2" name="line2"/> */}
                    <input type="text"  className="form-control my-2" placeholder='Address Line 1' id="line1" aria-describedby="line1" name="line1"/>
                    <input type="text"  className="form-control my-2" placeholder='Address Line 2' id="line2" aria-describedby="line2" name="line2"/>
                    <input type="text"  className="form-control" id="pincode" placeholder='PIN code' aria-describedby="pincode" name="pincode" />
              
                </div>
                
                {/* <div className="mb-3">
                    <label for="eventDateFrom" className="form-label">Book Form</label>
                    <input type="date" className="form-control" id="eventDateFrom" aria-describedby="eventDateFrom" />
                </div>
                <div className="mb-3"> 
                    <label for="eventDateTo" className="form-label">Book To</label>
                    <input type="date" className="form-control" id="eventDateTo" aria-describedby="eventDateTo" />
                </div> */}
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default ContactForm