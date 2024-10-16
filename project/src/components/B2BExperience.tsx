import React from 'react';
import Box3 from '../Assets/Images/box3.svg';

export const B2BExperience = () => {
    return (
        <div className='b2b__container'>
            <div className='b2b__section'>
                <h1>Why Join the Indiajoy B2B Experience?</h1>
                <div className='b2b__exp__container'>
                    <div className='b2b__exp__item' data-aos="fade-up" data-aos-delay="100">
                        <img src={Box3} alt='' />
                        <h2>Global Networking</h2>
                        <p>Connect with top industry pros hand picked from all corners of the globe.</p>
                    </div>
                    <div className='b2b__exp__item' data-aos="fade-up" data-aos-delay="200">
                        <img src={Box3} alt='' />
                        <h2>Perfect Matches</h2>
                        <p>Whether you are selling, seeking services or co-production partners, find the right partners for accelerated growth.</p>
                    </div>
                    <div className='b2b__exp__item' data-aos="fade-up" data-aos-delay="300">
                        <img src={Box3} alt='' />
                        <h2>Premium Connections</h2>
                        <p>Curated meetings, exciting opportunities, and loads of joy are waiting just for you!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
