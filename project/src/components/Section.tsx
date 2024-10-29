import React from 'react';
import BoxItem1 from '../Assets/Images/BoxItem1.svg';
import BoxItem2 from '../Assets/Images/BoxItem2.svg';

export const Section = () => {
    return (
        <div>
            <div className='ourBrand__container'>
                <h1 data-aos="fade-right" data-aos-delay="100">Our brand</h1>
                <p className='ourBrand__text' data-aos="fade-right" data-aos-delay="200">New B2B initiative is here to spark connections and unlock Indiaoors to partnerships, investments, and growth. Whether you’re looking to collaborate, innovate, or elevate, we’ve got something for you.</p>
                <p className='ourBrand__text' data-aos="fade-right" data-aos-delay="300" style={{marginBottom:'40px'}}>Here’s a sneak peek at our two joy-packed sub-events:</p>
                <div className='section__container'>
                    <div className='section__item1'>
                        <div className='section__innerItem'>
                            <img src={BoxItem1} alt='BoxItem1' data-aos="fade-right" data-aos-delay="100"/>
                            <h2 className='networkingText1' data-aos="fade-right" data-aos-delay="200">Networking Event</h2>
                        </div>
                        <p data-aos="fade-right" data-aos-delay="300">Step into a vibrant space where ideas come to life! Connect with investors, buyers, and tech wizards, all in one place.</p>
                        <p data-aos="fade-right" data-aos-delay="300">The best part?</p>
                        <div className='detailsInner'>
                            <div className='dividerDiv'></div>
                            <h2 className='freeRes'>FREE FOR REGISTERED DELEGATES</h2>
                        </div>
                        <p data-aos="fade-right" data-aos-delay="400">How it works:</p>
                        <ul>
                            <li data-aos="fade-right" data-aos-delay="500">Simply register via our portal and get instant access. </li>
                            <li data-aos="fade-right" data-aos-delay="600">Send invitations to investors, buyers, and tech partners. </li>
                            <li data-aos="fade-right" data-aos-delay="700">If your profile gets a thumbs-up, you’ll meet in our designated networking lounge for face-to-face magic.</li>
                        </ul>
                        <button data-aos="fade-right" data-aos-delay="800">Login</button>
                    </div>
                    <div className='section__item2'>
                        <div className='section__innerItem'>
                            <img src={BoxItem2} alt='BoxItem2' data-aos="fade-right" data-aos-delay="100"/>
                            <h2 className='networkingText2' data-aos="fade-right" data-aos-delay="200">Buyer & Co-Production Networking</h2>
                        </div>
                        <p data-aos="fade-right" data-aos-delay="300">India joy B2B networking is the ultimate playground for sellers & organizations looking for international Co-production opportunities. Book one-on-one meetings with top buyers, investors, and decision-makers who can take your IPs & your business to the next level.</p>
                        <div className='detailsInner'>
                            <div className='dividerDiv'></div>
                            <h2 className='inr25'>INR 25K+ GST OR USD 350 PER PERSON</h2>
                        </div>
                        <p data-aos="fade-right" data-aos-delay="400">How it works:</p>
                        <ul>
                            <li data-aos="fade-right" data-aos-delay="500">Register as a seller through our portal. </li>
                            <li data-aos="fade-right" data-aos-delay="600">Unlock guaranteed meeting slots with the people who matter most. </li>
                            <li data-aos="fade-right" data-aos-delay="700">Dive into tailored matchmaking designed to bring your vision to life.</li>
                        </ul>
                        <a href='https://meai-imec.com/indiajoy/indiajoyRegister.html' target="_blank" rel="noopener noreferrer">
                        <button data-aos="fade-right" data-aos-delay="800">Register</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
