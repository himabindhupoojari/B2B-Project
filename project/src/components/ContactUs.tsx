import React from 'react';
import FIcon from '../Assets/Images/f.svg';
import IIcon from '../Assets/Images/i.svg';
import XIcon from '../Assets/Images/x.svg';
import YIcon from '../Assets/Images/y.svg';
import Logo from '../Assets/Images/logo.svg';

export const ContactUs = () => {
    return (
        <div className='contact__container'>
            <div className='contact__section'>
                <div className='contact__details1'>
                    {/* <p>INDIAJOY</p>
                    <h2>B2B</h2> */}
                    <img src={Logo} alt='' />
                    <div className='contact__imgs'>
                        <a href="https://www.facebook.com/Indiajoy.in/" target="_blank" rel="noopener noreferrer">
                            <img src={FIcon} alt='Facebook Icon' data-aos="fade-up" data-aos-delay="100" />
                        </a>
                        <a href="https://www.linkedin.com/company/indiajoy2024/?viewAsMember=true" target="_blank" rel="noopener noreferrer">
                            <img src={IIcon} alt='LinkedIn Icon' data-aos="fade-up" data-aos-delay="200" />
                        </a>
                        <a href="https://x.com/Indiajoyin" target="_blank" rel="noopener noreferrer">
                            <img src={XIcon} alt='X Icon' data-aos="fade-up" data-aos-delay="300" />
                        </a>
                        <a href="https://www.youtube.com/@indiajoy7846" target="_blank" rel="noopener noreferrer">
                            <img src={YIcon} alt='Y Icon' data-aos="fade-up" data-aos-delay="400" />
                        </a>
                    </div>
                    <p className='contact__copyRights'>© 2024 Indiajoy. All Rights Reserved</p>
                </div>
                <div className='contact__details2'>
                    <form>
                        <h2>Contact Us</h2>
                        <input type='text' placeholder='Name' data-aos="fade-up" data-aos-delay="100" />
                        <input type='email' placeholder='Email' data-aos="fade-up" data-aos-delay="200" /><br />
                        <button data-aos="fade-up" data-aos-delay="300">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
