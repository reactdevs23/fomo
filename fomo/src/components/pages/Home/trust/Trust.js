import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Trust.css'

const Trust = () => {
    return (
        <section id='trust'>
            <div className="container">
                <h1>Trusted by CT  & NFT whales</h1>
                <div className="trust-contents d-flex">
                    <div className="left">
                        <img className='img-fluid' src="/images/trust.svg" alt="" />
                    </div>
                    <div className="right">
                        <Carousel>
                            <Carousel.Item>
                                <img className='img-fluid  qoute' src="/images/qourt.png" alt="" />
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type</p>

                                <div className='d-flex stars'>
                                    <img src="/images/Star.png" alt="" />
                                    <img src="/images/Star.png" alt="" />
                                    <img src="/images/Star.png" alt="" />
                                    <img src="/images/Star.png" alt="" />
                                    <img src="/images/Star.png" alt="" />
                                </div>

                                <h4>Mr. Jone</h4>
                                <h5>Executive Manager</h5>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className='img-fluid qoute' src="/images/qourt.png" alt="" />
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type</p>

                                <div className='d-flex stars'>
                                    <img src="/images/Star.png" alt="" />
                                    <img src="/images/Star.png" alt="" />
                                    <img src="/images/Star.png" alt="" />
                                    <img src="/images/Star.png" alt="" />
                                    <img src="/images/Star.png" alt="" />
                                </div>

                                <h4>Mr. Jone</h4>
                                <h5>Executive Manager</h5>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className='img-fluid  qoute' src="/images/qourt.png" alt="" />
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type</p>

                                <div className='d-flex stars'>
                                    <img src="/images/Star.png" alt="" />
                                    <img src="/images/Star.png" alt="" />
                                    <img src="/images/Star.png" alt="" />
                                    <img src="/images/Star.png" alt="" />
                                    <img src="/images/Star.png" alt="" />
                                </div>

                                <h4>Mr. Jone</h4>
                                <h5>Executive Manager</h5>
                            </Carousel.Item>
                        </Carousel>

                    </div>
                </div>
            </div>

        </section>
    );
};

export default Trust;