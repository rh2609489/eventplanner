import React from 'react'
import slider1 from '../../../images/slider1.jpeg'
import slider2 from '../../../images/slider2.jpeg'
import slider3 from '../../../images/slider3.jpeg'

const Carousel = () => {
    return (
        <div style={{height: '400px'}}>
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img style={{height: '500px'}} src={slider1} class="d-block w-100" alt="image1" />
                    </div>
                    <div class="carousel-item">
                        <img style={{height: '500px'}} src={slider2} class="d-block w-100" alt="image2" />
                    </div>
                    <div class="carousel-item">
                        <img style={{height: '500px'}} src={slider3} class="d-block w-100" alt="image3" />
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}

export default Carousel