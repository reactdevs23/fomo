import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <footer id="footer">
            <div className="footer-container">
                <div className="footer-top">
                    <div className="link-group-item">
                        <h3>World</h3>
                        <ul>
                            <li><a href="/">Africa</a></li>
                            <li><a href="/">Americas </a></li>
                            <li><a href="/">China</a></li>
                            <li><a href="/">Australia</a></li>
                            <li><a href="/">Europe</a></li>
                            <li><a href="/">India</a></li>
                            <li><a href="/">Middle East</a></li>
                            <li><a href="/">Asia</a></li>
                        </ul>
                    </div>
                    <div className="link-group-item">
                        <h3>Politics</h3>
                        <ul>
                            <li><a href="/">Ukraine</a></li>
                            <li><a href="/">Europe </a></li>
                            <li><a href="/">Facts First</a></li>
                            <li><a href="/">2022</a></li>
                            <li><a href="/">Midterms</a></li>

                        </ul>
                    </div>
                    <div className="link-group-item">
                        <h3>Business</h3>
                        <ul>
                            <li><a href="/">Market</a></li>
                            <li><a href="/">Tech </a></li>
                            <li><a href="/">Media</a></li>
                            <li><a href="/">Success</a></li>
                            <li><a href="/">Perspective</a></li>
                            <li><a href="/">Video</a></li>

                        </ul>
                    </div>
                    <div className="link-group-item">
                        <h3>Tech</h3>
                        <ul>
                            <li><a href="/">Innovate</a></li>
                            <li><a href="/">Gadget</a></li>
                            <li><a href="/">Future</a></li>
                            <li><a href="/">Ahead</a></li>
                            <li><a href="/">Upstarts</a></li>
                            <li><a href="/">Work</a></li>
                            <li><a href="/">Transformed</a></li>
                            <li><a href="/">Innovative</a></li>
                            <li><a href="/">Citties</a></li>

                        </ul>
                    </div>
                    <div className="link-group-item">
                        <h3>Sports</h3>
                        <ul>
                            <li><a href="/">Football</a></li>
                            <li><a href="/">Tennis</a></li>
                            <li><a href="/">Golf</a></li>
                            <li><a href="/">Olympics</a></li>
                            <li><a href="/">US sports</a></li>
                            <li><a href="/">Climbing</a></li>
                            <li><a href="/">Motorsport</a></li>
                            <li><a href="/">Esports</a></li>
                        </ul>
                    </div>
                    <div className="link-group-item">
                        <h3>Culture</h3>
                        <ul>
                            <li><a href="/">Arts</a></li>
                            <li><a href="/">Design</a></li>
                            <li><a href="/">Fashion</a></li>
                            <li><a href="/">Architecture</a></li>
                            <li><a href="/">Luxury</a></li>
                            <li><a href="/">Beauty</a></li>
                            <li><a href="/">Video</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className='d-flex align-items-center justify-content-between'>
                        <a href="/"><img className='logo' src="/images/logo.png" alt="" /></a>
                        <div className='d-flex align-items-center footer-social-group'>
                            <a href="/"><img src="/images/tiktok.png" alt="" /></a>
                            <a href="/"><img src="/images/twitter.png" alt="" /></a>
                            <a href="/"><img src="/images/facebook.png" alt="" /></a>
                            <a href="/"><img src="/images/instagram.png" alt="" /></a>
                            
                            
                            
                        </div>
                    </div>

                    <div className='footer-bottom-text '>
                        <p>Copyright © 2023. All Rights Reserved.</p>
                        <div className='link-group'>
                            <a href="/">Terms & condition</a>
                            <a href="/">Cookies </a>
                            <a href="/">Privacy policies</a>
                            <a href="/">About us</a>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;