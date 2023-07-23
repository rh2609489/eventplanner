import React from 'react'
import birthday from '../../../images/birthday.jpeg'
import marriage from '../../../images/marriage.jpeg'
import engagement from '../../../images/engagement.jpeg'
import { useNavigate } from 'react-router-dom'
const Cards = () => {

    const navigate = useNavigate()
    
    return (
        <div className='d-flex justify-content-around'>
            <div class="card" style={{width: '300px'}}>
                <img src={engagement} class="card-img-top" alt="image" />
                <div class="card-body">
                    <h5 class="card-title">Engagement</h5>
                    <p class="card-text">It’s amazing how one day someone walks into your life, and suddenly, you can’t remember how you lived without them.</p>
                    <button onClick={()=>{navigate('/contact')}} class="btn btn-primary">Contact Us</button>
                </div>
            </div>
            <div class="card" style={{width: '300px'}}>
                <img src={marriage} class="card-img-top" alt="image" />
                <div class="card-body">
                    <h5 class="card-title">Wedding</h5>
                    <p class="card-text">Marriage is a risk; I think it’s a great and glorious risk, as long as you embark on the adventure in the same spirit.</p>
                    <button onClick={()=>{navigate('/contact')}} class="btn btn-primary">Contact Us</button>
                </div>
            </div>
            <div class="card" style={{width: '300px'}}>
                <img src={birthday} class="card-img-top" alt="image" />
                <div class="card-body">
                    <h5 class="card-title">Birthday</h5>
                    <p class="card-text">We offer a stunning selection of pre-made themes and birthday invitation templates designed to express a range of aesthetic moods.</p>
                    <button onClick={()=>{navigate('/contact')}} class="btn btn-primary">Contact Us</button>
                    </div>
            </div>
        </div>
    )
}

export default Cards