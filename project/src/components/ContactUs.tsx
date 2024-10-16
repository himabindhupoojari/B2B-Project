import React from 'react';
import FIcon from '../Assets/Images/f.svg';
import IIcon from '../Assets/Images/i.svg';
import XIcon from '../Assets/Images/x.svg';
import YIcon from '../Assets/Images/y.svg';

export const ContactUs = () => {
    return (
        <div className='contact__container'>
            <div className='contact__section'>
                <div className='contact__details1'>
                    <p>INDIAJOY</p>
                    <h2>B2B</h2>
                    <div className='contact__imgs'>
                        <img src={FIcon} alt='' data-aos="fade-up" data-aos-delay="100"/>
                        <img src={IIcon} alt='' data-aos="fade-up" data-aos-delay="200"/>
                        <img src={XIcon} alt='' data-aos="fade-up" data-aos-delay="300"/>
                        <img src={YIcon} alt='' data-aos="fade-up" data-aos-delay="400"/>
                    </div>
                    <p className='contact__copyRights'>© 2024 Indiajoy. All Rights Reserved</p>
                </div>
                <div className='contact__details2'>
                    <form>
                        <h2>Contact Us</h2>
                        <input type='text' placeholder='Name' data-aos="fade-up" data-aos-delay="100"/>
                        <input type='email' placeholder='Email' data-aos="fade-up" data-aos-delay="200"/><br/>
                        <button data-aos="fade-up" data-aos-delay="300">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
