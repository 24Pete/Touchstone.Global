import React, { useState } from 'react';
import Slider from 'react-slick';
import Container from "../components/container";
import Image from 'next/image'
export default function App() {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  return (

  <div>
     
      <Slider className="bg-dusk p-10 mb-4" asNavFor={nav2} ref={(slider1) => setNav1(slider1)}   arrows={false}>
        <div>
            <div className='grid grid-cols-12'>
                <div className='col-span-4'>
                <Image
      src="/images/jamie.png"
      width={247}
      height={284}
      alt="Touchstone Logo"
     
    />



                </div>
                <div className='col-span-8 pl-10'>
          <h3 className='text-[34px] text-azure mb-0 leading-tight'>Jamie</h3>
          <h4 className='text-[30px] text-azure mb-4 leading-tight'> CEO</h4>
          <p className='text-[17px] text-azure font-light'> Jamie has an unbridled passion for business turnaround, company transformations and overall corporate restructuring. Over many years as a trusted CEO, Senior Leader, Advisor, Investor and Mentor, he has dedicated his success to a focus on true business engagement, enabling people and businesses to clearly see the opportunities and more importantly, empowering them with the tools and techniques for sustainable growth. </p>
         </div>
          </div>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
      
      <Slider
        asNavFor={nav1}
        ref={(slider2) => setNav2(slider2)}
        slidesToShow={6}
        swipeToSlide={true}
        focusOnSelect={true}
        
      >
        <div className='px-2'>
          <h3>                <Image
      src="/images/jamie.png"
      width={247}
      height={284}
      alt="Touchstone Logo"
 
    /></h3>
        </div>
        <div className='px-2'>
          <h3>    <Image
      src="/images/jamie.png"
      width={247}
      height={284}
      alt="Touchstone Logo"
 
    /></h3>
        </div>
        <div className='px-2'>
          <h3>    <Image
      src="/images/jamie.png"
      width={247}
      height={284}
      alt="Touchstone Logo"
  
    /></h3>
        </div>
        <div className='px-2'>
          <h3>    <Image
      src="/images/jamie.png"
      width={247}
      height={284}
      alt="Touchstone Logo"
  
    /></h3>
        </div>
        <div className='px-2'>
          <h3>    <Image
      src="/images/jamie.png"
      width={247}
      height={284}
      alt="Touchstone Logo"
  
    /></h3>
        </div>
        <div className='px-2'>
          <h3>    <Image
      src="/images/jamie.png"
      width={247}
      height={284}
      alt="Touchstone Logo"
  
    /></h3>
        </div>
        <div className='px-2'>
          <h3>    <Image
      src="/images/jamie.png"
      width={247}
      height={284}
      alt="Touchstone Logo"
  
    /></h3>
        </div>
      </Slider>
      </div>

  );
}
