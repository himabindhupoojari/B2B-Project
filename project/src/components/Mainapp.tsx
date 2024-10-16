import React from 'react';
import indiaJoyIcon from '../Assets/Images/indiajoy.svg';
import poweredByIcon from '../Assets/Images/poweredby.png';

export const Mainapp = () => {
    return (
        <div className='mainapp__container'>
            <div className='mainapp__section'>
                <img src={indiaJoyIcon} alt='indiaJoyIcon' className='indiajoy__img' data-aos="fade-up" data-aos-delay="100"/>
                <img src={poweredByIcon} alt='poweredByIcon' className='poweredby__img' data-aos="fade-up" data-aos-delay="200"/>
                <h1 data-aos="fade-up" data-aos-delay="300">IndiaJoy B2B Conclave</h1>
                <p data-aos="fade-up" data-aos-delay="400">Meet and Pitch to leading Buyers, Broadcasters, Platforms & Studios.</p>
                <p data-aos="fade-up" data-aos-delay="500">IndiaJoy B2B Conclave is a flagship initiative tailored to connect buyers, Broadcasters, Platforms, Co-Production partners with IP creators & Startup/Studios. Whether you are looking for selling your IP rights, Co-Production or want to scale your service offering business, IndiaJoy B2B conclave is the place to be.</p>
                <button data-aos="fade-up" data-aos-delay="600">Register</button>
            </div>
        </div>
    )
}
