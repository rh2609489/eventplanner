import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    // const input = document.querySelector('input');
    // input.addEventListener('input', function(){
    //   this.value = this.value.replace(/[^\D]/g,'')
    // })
    return (
        <div className='p-4 my-2' style={{border:'3px solid grey', borderRadius: '30px'}}>
            <form action="https://formspree.io/f/mjvqgkzl" method="POST">
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Name</label>
                    <input type="text"  className="form-control" required id="username" aria-describedby="username" name="Full Name"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="mobile" className="form-label">Contact No.</label>
                    <input type="tel" pattern="\d*" maxLength={10} required className="form-control" id="mobile" aria-describedby="mobile" name="Contact No." />
                    <div id="mobile" className="form-text">Don't add +91 or 0.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" required id="email" aria-describedby="email" name="E-mail" />
                    <div id="email" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="partyType" className="form-label">Booking Type</label>
                    <select
                        className='form-control'
                        name='Booking Type' 
                        required
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
                    <input type="text"  className="form-control my-2" required placeholder='Address Line 1' id="line1" aria-describedby="line1" name="Address line 1"/>
                    <input type="text"  className="form-control my-2" placeholder='Address Line 2' id="line2" aria-describedby="line2" name="Address line 2"/>
                    <input type="text"  className="form-control" pattern="\d*" required maxLength={6} id="pincode" placeholder='PIN code' aria-describedby="pincode" name="PIN code" />
              
                </div>
                
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default ContactForm