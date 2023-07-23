import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Carousel from '../components/carousel'
import Cards from '../components/Cards'
import ContactForm from '../components/ContactForm'

const Home = () => {
    const navigate = useNavigate()
    return (
        <div className="">
            <div>
                <Carousel />
            </div>
            <div className="mt-3 pl-2" style={{ height: '700px', paddingTop: '120px' }}>
                <hr />
                <div>
                    <h2 className='text-center'>Our Elite Services</h2>
                    <hr />
                </div>
                <Cards />
            </div>
            <hr />
            <div className="my-3">
                <div>
                    <h1 className="text-center">Contact Us</h1>
                </div>
                <hr />
                <div className='d-flex justify-content-center col-md-6 m-auto pt-5'>
                    <ContactForm />
                    </div>
            </div>
            
        </div>
    )
}

export default Home