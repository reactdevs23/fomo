import React from 'react';
import { Carousel } from 'react-bootstrap';

import './FomoMagazine.css'

const FomoMagazine = () => {
    return (
        <section id='magazine'>
            <div className="container">
                <div className="magazine-contents">
                    <div className='left-side  '>

                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/images/magazine.png"
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/images/magazine.png"
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/images/magazine.png"
                                    alt="First slide"
                                />
                            </Carousel.Item>
                        </Carousel>

                    </div>
                    <div className='right-side'>
                        <h1>The FOMO Magazine</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type</p>
                        <div className="btn-group">
                            <button className='get-it-btn btn-effect'>Get it</button>
                            <button className='subscribe-btn btn-effect'>subscribe</button>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default FomoMagazine;


// function SampleNextArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//         <div
//             className={className}
//             style={{ ...style, display: "block", background: "red" }}
//             onClick={onClick}
//         >
//             next
//         </div>
//     );
// }

// function SamplePrevArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//         <div
//             className={className}
//             style={{ ...style, display: "block", background: "green" }}
//             onClick={onClick}
//         />
//     );
// }