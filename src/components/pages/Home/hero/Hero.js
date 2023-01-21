import React from 'react';
import './Hero.css'

const Hero = () => {
    return (
        <section id='hero'>
            <div className="container">
                <div className='hero-contents d-flex flex-column-reverse flex-md-row'>
                    <div className='hero-left-side'>
                        <h1 className='get-smarter-text text-center text-md-start m-0'>Get smarter about <br /><span className='nft-text m-0'>NFT</span> <span className='investment-text m-0'>Investment</span></h1>

                        <p className='newsletter-text'>Get 3 min newsletter to join  edge in the <br className='d-none d-lg-block' /> NFT market</p>

                        <div className='d-flex justify-content-between align-items-center hero-input-container'>
                            <input className=' hero-input' type="text" placeholder='Enter email address...' />
                            <button className='hero-input-btn'>Try it</button>
                        </div>

                        <p className='read-by-nft-text'>Read by NFT whales from</p>


                        <div className='hero-bottom-image-group'>
                            <img className='w-100' src="/images/binance.png" alt="" />
                            <img className='trust w-100' src="/images/trust.png" alt="" />
                            <img className='w-100' src="/images/metamask.png" alt="" />
                        </div>
                    </div>
                    <div className='right-side mx-auto'>
                        <img className='d-block mx-auto' src="/images/laser-eyes.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;