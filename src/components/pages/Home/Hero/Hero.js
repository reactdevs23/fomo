import React from 'react';
import './Hero.css'

const Hero = () => {
    return (
        <section id='hero'>
            <div className="container">
                <div className='hero-contents d-flex flex-column-reverse flex-md-row align-items-center'>
                    <div className='hero-left-side'>
                        <h1 className='get-smarter-text '>Get smarter about <br /></h1>
                        <h1 className='get-smarter-text'><span className='nft-text m-0'>Your NFTs</span> <span className='investment-text m-0'></span></h1>

                        <p className='newsletter-text'>Get a <b>FREE Magazine</b> + weekly newsletter to join <br className='d-none d-lg-block' /> edge in the NFT market</p>

                        <div className='d-flex justify-content-between align-items-center hero-input-container'>
                            <input className=' hero-input' type="text" placeholder='Enter email address...' />
                            <button className='hero-input-btn'>Join Free</button>
                        </div>

                        <p className='read-by-nft-text'>Read by NFT whales from</p>


                        <div className='hero-bottom-image-group'>
                            <img className='w-100' src="/images/binance.png" alt="" />
                            <img className='trust w-100' src="/images/trust.png" alt="" />
                            <img className='w-100' src="/images/metamask.png" alt="" />
                        </div>
                    </div>
                    <div className='right-side mx-auto'>
                        <img className='d-block mx-auto' src="/images/laser-eyes.gif" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
