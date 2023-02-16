import React from 'react';
import './News.css'

const News = () => {
    return (
        <section id='news'>
            <div className="container">
                <div className='news-contents '>
                    <div className="news-left-side">
                        <h1>Latest Stories</h1>
                        <div className='releases-contents'>
                            <div className='releases-first-item'>
                                <img className='w-100' src="/images/releseases.svg" alt="releases" />
                                <h2>Releases NFT for justice charity</h2>
                                <p className='contrary-text'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has <br className='d-none d-lg-block' /> roots in a piece of classical Latin literature from 45 BC.Releases NFT for justice </p>
                            </div>
                            <div className="releases-item ">
                                <img className='img-fluid' src="/images/releseases1.svg" alt="" />
                                <h3 className='releases-title'><span>01 </span>
                                    Releases NFT for justice
                                    charity</h3>
                                <p>It is a long established fact that a reader will be distracted by the readable </p>
                            </div>
                            <div className="releases-item ">
                                <img className='img-fluid' src="/images/releseases2.svg" alt="" />
                                <h3 className='releases-title'><span>02 </span>
                                    Releases NFT for justice
                                    charity</h3>
                                <p>It is a long established fact that a reader will be distracted by the readable </p>
                            </div>
                            <div className="releases-item ">
                                <img className='img-fluid' src="/images/releseases3.svg" alt="" />
                                <h3 className='releases-title'><span>03 </span>
                                    Releases NFT for justice
                                    charity</h3>
                                <p>It is a long established fact that a reader will be distracted by the readable </p>
                            </div>
                            <div className="releases-item ">
                                <img className='img-fluid' src="/images/releseases4.svg" alt="" />
                                <h3 className='releases-title'><span>04 </span>
                                    Releases NFT for justice
                                    charity</h3>
                                <p>It is a long established fact that a reader will be distracted by the readable </p>
                            </div>


                        </div>

                    </div>






                    <div className="news-right-side">
                        <h1>Daily Headlines</h1>
                        <div className="daily-releases-contents">
                            <div className="daily-releases-item">
                                <img className='w-100' src="/images/daily1.svg" alt="" />
                                <h4 className='daily-title'>Releases NFT for justice <br className='daily-title-break' /> charity</h4>
                                <p className='daily-description'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC</p>
                                <button className="daily-btn">MOVIES & ART</button>
                            </div>
                            <div className="daily-releases-item">
                                <img className='w-100' src="/images/daily2.svg" alt="" />
                                <h4 className='daily-title'>Morning routine to you and  <br className='daily-title-break' /> your activities.</h4>
                                <p className='daily-description'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC</p>
                                <button className="daily-btn">FRAUD & SCAMS</button>
                            </div>
                            <div className="daily-releases-item">
                                <img className='w-100' src="/images/daily3.svg" alt="" />
                                <h4 className='daily-title'>Morning routine to you and  <br className='daily-title-break' /> your activities.</h4>
                                <p className='daily-description'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC</p>
                                <button className="daily-btn">FRAUD & SCAMS</button>
                            </div>


                        </div>

                    </div>

                </div>
            </div>

        </section>
    );
};

export default News;