import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate()

    return (
        <div className='d-flex justify-content-between p-2 bg-dark'>
            <div className='col-md-3'>
                <h2 className='text-success' style={{cursor: 'pointer'}} onClick={() => { navigate('/') }}>Event Planner</h2>
            </div>
            <div className='col-md-9 d-flex justify-content-end align-items-center'>
                {/* <h5 className='text-white' style={{cursor: 'pointer'}} onClick={() => { navigate('/') }}>Services</h5> */}
                <h5 className='ml-3 mr-3 text-white' style={{cursor: 'pointer'}} onClick={() => { navigate('/contact') }}>Contact Us</h5>
            </div>
        </div>
    )
}

export default Navbar