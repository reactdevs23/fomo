import React from 'react';
import { Link } from 'react-router-dom';
import './News.css'

const News = () => {


    return (
        <section id='news'>
            <div className="container">
                <div className='news-contents '>
                    <div className="news-left-side">
                        <h1>Featured Stories</h1>
                        <div className='releases-contents'>
                            <div className='releases-first-item'>
                                <Link to="/news/68"> <img className='w-100 overflow-hidden news-img-scale' src="/images/releseases.webp" alt="releases" /></Link>
                                <h2><Link to="/news/68">What is an NFT?</Link></h2>
                                <p className='contrary-text'>
	                        NFT stands for – Non-fungible token. Non-fungible means – it is unique and can’t be replaced with something else.</p>
                            </div>
                            <div className="releases-item ">
                                <Link to="/news/69">
	    			    <img className='w-100 overflow-hidden news-img-scale' 
                                     src="/images/releseases1.svg" alt="" />
                                </Link>
                                <h3 className='releases-title'>
                                    <Link to="/news/69"><span>01 </span>
                                        Upcoming NFTs on Ethereum Blockchain </Link>
                                </h3>
                                <p>It is a long established fact that a reader will be distracted by the readable </p>
                            </div>
                            <div className="releases-item ">
                                <Link to="/news/70">
	    			    <img className='w-100 overflow-hidden news-img-scale'  
	    				src="/images/releseases2.svg" alt="" />
                                </Link>
                                <h3 className='releases-title'><Link to="/news/70"><span>02 </span>
                                    The Top 7 Bitcoin Documentaries </Link></h3>
                                <p> By the end, you will get what bitcoin is and why the billionaires are buying it.</p>
                            </div>
                            <div className="releases-item ">
                                <Link to="/news/71">
	    			    <img className='w-100 overflow-hidden news-img-scale' 
                                    src="/images/releseases3.svg" alt="" />
                                </Link>
                                <h3 className='releases-title'>
                                    <Link to="/news/71"><span>03 </span>
                                        Art NFTs 1:1 is the future
                                        charity</Link>
                                </h3>
                                <p>Reimagining NFTs. Experience interactive and generative art and music.  </p>
                            </div>
                            <div className="releases-item ">
                                <Link to="/news/72">
	    			    <img className='w-100 overflow-hidden news-img-scale' 
	                             src="/images/releseases4.svg" alt="" />
                                </Link>
                                <h3 className='releases-title'>
                                    <Link to="/news/72"><span>04 </span>
                                        Create an NFT with Zero Fees on Polygon</Link>
                                </h3>
                                <p>Async Canvas is your portal for creating all types of NFTs. </p>
                            </div>


                        </div>

                    </div>






                    <div className="news-right-side">
                        <h1>Daily Headlines</h1>
                        <div className="daily-releases-contents">
                            <div className="daily-releases-item">
                                <Link to="/news/73"><img className='w-100 news-img' src="/images/daily1.svg" alt="" /></Link>
                                <h4 className='daily-title'><Link to="/news/73">Quickly fing the NFT Rarity <br className='daily-title-break' /> charity</Link></h4>
                                <p className='daily-description'>
	    NFT Rarity Scores Unleashed. View the rarity rankings of your favourite NFT collection in a matter of seconds after reveal! </p>
                                <button className="daily-btn">ETH & SOL</button>
                                <button className="daily-btn">Polygon & WAX</button>
                            </div>
                            <div className="daily-releases-item">
                                <Link to="/news/74">
                                    <img className='w-100 news-img' src="/images/daily2.svg" alt="" />
                                </Link>
                                <h4 className='daily-title'><Link to="/news/74">Metaverse NFTs: time for a virtual world<br className='daily-title-break' /></Link></h4>
                                <p className='daily-description'>
	    A list of the best metaverse NFT crypto projects. Which token to buy and how to stake.</p>
                                <button className="daily-btn">Metaverse & Tokens</button>
                            </div>
                            <div className="daily-releases-item">
                                <Link to="/news/75">
                                    <img className='w-100 news-img' src="/images/daily3.svg" alt="" />
                                </Link>
                                <h4 className='daily-title'><Link to="/news/75">Top resourses to up your NFT<br className='daily-title-break' /> game.</Link></h4>
                                <p className='daily-description'>The Nifty Show is the original NFT show. Started in mid-2020, we have interviewed some of the top NFT pioneers. </p>
                                <button className="daily-btn">Learn & Earn</button>
                                <button className="daily-btn">Web3 Jobs</button>
                            </div>


                        </div>

                    </div>

                </div>
            </div>

        </section>
    );
};

export default News;
