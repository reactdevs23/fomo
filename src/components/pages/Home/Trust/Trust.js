import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import './Trust.css'

const Trust = () => {

    const data = [
        {
            img: "/images/user1.png",
            title: "Will Scot (@w3dcott)"
        },
        {
            img: "/images/user1.png",
            title: "Will Scot (@w3dcott)"
        },
        {
            img: "/images/user1.png",
            title: "Will Scot (@w3dcott)"
        }
    ]
    return (
        <section id='trust'>
            <div className="container">
                <h1>Trusted by NFT whales</h1>
                <div className="trust-contents">
                    <>
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={0}
                            pagination={{
                                clickable: true,
                            }}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                    spaceBetween: 0,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 0,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 0,
                                },
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
               <SwiperSlide>
                                <a className='text-decoration-none' href="https://twitter.com/ErskineHazard/status/1618435136051372033?fbclid=IwAR0lZdu1spF9xWgJ_waorIRVIjyCaShMgp2f_9kFHGvcoB100o-fHabxsug" target="blank">
                                    <div className='trust-card'>
                                        <img className='d-block mx-auto' 
	    src="/images/trust-qoute.png" alt="" />
                                        <p> Engagement down 📉 Vibes 📈 </p>
                                        <div className="user-contents d-flex align-items-center justify-content-between">
                                            <div className='d-flex align-items-center gap-2'>
                                                <img className='user-img' src="/images/user1.png" alt="" />
                                                <div>
                                                    <h4 className="user-name">Will Scot (@w3dcott)</h4>
                                                    <h6 className="user-comment-time">3 days ago</h6>
                                                </div>
                                            </div>
                                            <img src="/images/twitter-c.png" alt="" />
                                        </div>

                                        <div className='d-flex justify-content-center align-items-center gap-2 love-contents'>
                                            <button className='border-0 bg-none btn'>
                                                <img src="/images/love.svg" alt="" />
                                            </button>
                                            <h6 className="love-react-quantity m-0">21</h6>
                                        </div>
                                    </div>
                                </a>


                            </SwiperSlide>
                            <SwiperSlide>
                                <a className='text-decoration-none' href="https://twitter.com/ErskineHazard/status/1618435136051372033?fbclid=IwAR0lZdu1spF9xWgJ_waorIRVIjyCaShMgp2f_9kFHGvcoB100o-fHabxsug" target="blank">
                                    <div className='trust-card'>
                                        <img className='d-block mx-auto' src="/images/trust-qoute.png" alt="" />
                                        <p> 🗿the memes in our discord are very Chungo 🗿 </p>
                                        <div className="user-contents d-flex align-items-center justify-content-between">
                                            <div className='d-flex align-items-center gap-2'>
                                                <img className='user-img' src="/images/user2.png" alt="" />
                                                <div>
                                                    <h4 className="user-name">Laila (@laila)</h4>
                                                    <h6 className="user-comment-time">3 days ago</h6>
                                                </div>
                                            </div>
                                            <img src="/images/twitter-c.png" alt="" />
                                        </div>

                                        <div className='d-flex justify-content-center align-items-center gap-2 love-contents'>
                                            <button className='border-0 bg-none btn'>
                                                <img src="/images/love.svg" alt="" />
                                            </button>
                                            <h6 className="love-react-quantity m-0">11</h6>
                                        </div>
                                    </div>
                                </a>


                            </SwiperSlide>
                            <SwiperSlide>
                                <a className='text-decoration-none' href="https://twitter.com/ErskineHazard/status/1618435136051372033?fbclid=IwAR0lZdu1spF9xWgJ_waorIRVIjyCaShMgp2f_9kFHGvcoB100o-fHabxsug" target="blank">
                                    <div className='trust-card'>
                                        <img className='d-block mx-auto' src="/images/trust-qoute.png" alt="" />
                                    <p>
	    				I just lost my nft virginity, thanks to the talent @khookhaikun who is very supportive shop ❤️❤️   
	    				</p>
                                        <div className="user-contents d-flex align-items-center justify-content-between">
                                            <div className='d-flex align-items-center gap-2'>
                                                <img className='user-img' src="/images/user3.png" alt="" />
                                                <div>
                                                    <h4 className="user-name">Mine Fries (@web3mine)</h4>
                                                    <h6 className="user-comment-time">3 days ago</h6>
                                                </div>
                                            </div>
                                            <img src="/images/twitter-c.png" alt="" />
                                        </div>

                                        <div className='d-flex justify-content-center align-items-center gap-2 love-contents'>
                                            <button className='border-0 bg-none btn'>
                                                <img src="/images/love.svg" alt="" />
                                            </button>
                                            <h6 className="love-react-quantity m-0">561</h6>
                                        </div>
                                    </div>
                                </a>


                            </SwiperSlide>
                            <SwiperSlide>
                                <a className='text-decoration-none' href="https://twitter.com/ErskineHazard/status/1618435136051372033?fbclid=IwAR0lZdu1spF9xWgJ_waorIRVIjyCaShMgp2f_9kFHGvcoB100o-fHabxsug" target="blank"><div className='trust-card'>
                                    <img className='d-block mx-auto' src="/images/trust-qoute.png" alt="" />
                                    <p>
	    				I just lost my nft virginity, thanks to the talent @khookhaikun who is very supportive shop ❤️❤️   
	    				</p>
                                    <div className="user-contents d-flex align-items-center justify-content-between">
                                        <div className='d-flex align-items-center gap-2'>
                                            <img className='user-img' src="/images/user1.png" alt="" />
                                            <div>
                                                <h4 className="user-name">Pattii  (@pdegods)</h4>
                                                <h6 className="user-comment-time">3 days ago</h6>
                                            </div>
                                        </div>
                                        <img src="/images/twitter-c.png" alt="" />
                                    </div>

                                    <div className='d-flex justify-content-center align-items-center gap-2 love-contents'>
                                        <button className='border-0 bg-none btn'>
                                            <img src="/images/love.svg" alt="" />
                                        </button>
                                        <h6 className="love-react-quantity m-0">01</h6>
                                    </div>
                                </div></a>


                            </SwiperSlide>
                            <SwiperSlide>
                                <a className='text-decoration-none' href="https://twitter.com/ErskineHazard/status/1618435136051372033?fbclid=IwAR0lZdu1spF9xWgJ_waorIRVIjyCaShMgp2f_9kFHGvcoB100o-fHabxsug" target="blank"><div className='trust-card'>
                                    <img className='d-block mx-auto' src="/images/trust-qoute.png" alt="" />
                                    <p>
	    				I just lost my nft virginity, thanks to the talent @khookhaikun who is very supportive shop ❤️❤️   
	    				</p>
                                    <div className="user-contents d-flex align-items-center justify-content-between">
                                        <div className='d-flex align-items-center gap-2'>
                                            <img className='user-img' src="/images/user2.png" alt="" />
                                            <div>
                                                <h4 className="user-name">Laila (@laila)</h4>
                                                <h6 className="user-comment-time">3 days ago</h6>
                                            </div>
                                        </div>
                                        <img src="/images/twitter-c.png" alt="" />
                                    </div>

                                    <div className='d-flex justify-content-center align-items-center gap-2 love-contents'>
                                        <button className='border-0 bg-none btn'>
                                            <img src="/images/love.svg" alt="" />
                                        </button>
                                        <h6 className="love-react-quantity m-0">01</h6>
                                    </div>
                                </div></a>


                            </SwiperSlide>
                            <SwiperSlide>
                                <a className='text-decoration-none' href="https://twitter.com/ErskineHazard/status/1618435136051372033?fbclid=IwAR0lZdu1spF9xWgJ_waorIRVIjyCaShMgp2f_9kFHGvcoB100o-fHabxsug" target="blank">
                                    <div className='trust-card'>
                                        <img className='d-block mx-auto' src="/images/trust-qoute.png" alt="" />
                                        <p>Never Buyinhm this Shit NFT again </p>
                                        <div className="user-contents d-flex align-items-center justify-content-between">
                                            <div className='d-flex align-items-center gap-2'>
                                                <img className='user-img' src="/images/user3.png" alt="" />
                                                <div>
                                                    <h4 className="user-name">Will Scot (@w3dcott)</h4>
                                                    <h6 className="user-comment-time">3 days ago</h6>
                                                </div>
                                            </div>
                                            <img src="/images/twitter-c.png" alt="" />
                                        </div>

                                        <div className='d-flex justify-content-center align-items-center gap-2 love-contents'>
                                            <button className='border-0 bg-none btn'>
                                                <img src="/images/love.svg" alt="" />
                                            </button>
                                            <h6 className="love-react-quantity m-0">01</h6>
                                        </div>
                                    </div>
                                </a>

                            </SwiperSlide>


                        </Swiper>
                    </>

                </div>
            </div>

        </section>
    );
};

export default Trust;
