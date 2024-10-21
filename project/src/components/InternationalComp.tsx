import React from 'react';
import Img1 from '../Assets/Images/img1.png';
import Img2 from '../Assets/Images/img2.png';
import Img3 from '../Assets/Images/img3.png';
import Img4 from '../Assets/Images/img4.png';
import Img5 from '../Assets/Images/img5.png';
import Img6 from '../Assets/Images/img6.png';
import Img7 from '../Assets/Images/img7.png';
import Img8 from '../Assets/Images/img8.png';
import meai from '../Assets/Images/meai.png';
import imec from '../Assets/Images/imec.png';

export const InternationalComp = () => {
    return (
        <>
            <div className='internationalComp__container'>
                <div className='internationalComp__section'>
                    <h1 data-aos="fade-right" data-aos-delay="100">International Participants</h1>
                    <div className='internationalComp__innersection'>
                        <img src={Img1} alt='' className='img__style1' data-aos="fade-up" data-aos-delay="100"/>
                        <img src={Img2} alt='' className='img__style2' data-aos="fade-up" data-aos-delay="200"/>
                        <img src={Img3} alt='' className='img__style3' data-aos="fade-up" data-aos-delay="300"/>
                        <img src={Img4} alt='' className='img__style4' data-aos="fade-up" data-aos-delay="400"/>
                        <img src={Img5} alt='' className='img__style5' data-aos="fade-up" data-aos-delay="500"/>
                        <img src={Img6} alt='' className='img__style6' data-aos="fade-up" data-aos-delay="600"/>
                    </div>
                </div>
                <div className='divider__CollaborationsComp'></div>
                <div className='internationalComp__section'>
                    <h1 data-aos="fade-up" data-aos-delay="200">Collaborations</h1>
                    <div className='internationalComp__innersection participants'>
                        {/* <img src={Img7} alt='' className='img__style7' data-aos="fade-up" data-aos-delay="100"/>
                        <img src={Img8} alt='' className='img__style8' data-aos="fade-up" data-aos-delay="200"/>
                        <img src={Img7} alt='' className='img__style7' data-aos="fade-up" data-aos-delay="300"/>
                        <img src={Img8} alt='' className='img__style8' data-aos="fade-up" data-aos-delay="400"/>
                        <img src={Img7} alt='' className='img__style7' data-aos="fade-up" data-aos-delay="500"/>
                        <img src={Img8} alt='' className='img__style8' data-aos="fade-up" data-aos-delay="600"/> */}

                        <img src={meai} alt='' className='img__style8' data-aos="fade-up" data-aos-delay="600"/>
                        <img src={imec} alt='' className='img__style8' data-aos="fade-up" data-aos-delay="600"/> 
                    </div>
                </div>
            </div>
            <div className='readytojump__container'>
                <div className='readytojump__section'>
                <div data-aos="fade-right" data-aos-delay="100">
                    <h1>Ready to Jump In?</h1>
                    <p>Let’s Get Started!</p>
                </div>
                <button data-aos="fade-right" data-aos-delay="200">Join the Fun!</button>
                </div>
            </div>
        </>
    )
}
