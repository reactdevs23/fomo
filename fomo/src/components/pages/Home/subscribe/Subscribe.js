import React from 'react';
import './Subscribe.css'

const Subscribe = () => {
    return (
        <section id='subscribe'>
            <div className="container">
                <div className='subscribe-contents'>
                    <h1>Subscribe to our newsletter</h1>
                    <p className="top-p">Be the first to know about the biggest stories as they break</p>

                    <div className=' input-content'>
                        <input type="text" placeholder='Email address' />
                        <button>Subscribe</button>
                    </div>

                    <p className="bottom-p">By clicking Subscribe, you indicate that you agree to Hypnosis Terms and Conditions and Data Use Privacy Policy</p>
                </div>
            </div>
        </section>
    );
};

export default Subscribe;