'use client';
import StickyLogo from './stickylogo'

export default function Hero() {
 
    return (
 <>
<StickyLogo/>

<div className=" container mx-auto px-5 relative -mt-[100px] lg:-mt-[300px] pb-[150px]" >
    
   
    <div className="grid grid-cols-12" >
 
      <div className=" lg:col-start-4 lg:col-span-3 col-span-12 pt-20 lg:pt-0" >
      <h3 className="text-azure text-[65px] leading-[60px] pt-14 lg:text-9xl w-80 lg:w-full	font-light -mb-[20px] lg:leading-[150px] z-10 relative" data-scroll  data-scroll-speed="2" data-scroll-delay="0.5">Engage. </h3>
      <h3 className="text-azure text-[65px] leading-[60px] pt-8 lg:pt-0 lg:text-9xl w-80 lg:w-full -mb-[20px]	font-light lg:leading-[150px] z-10 relative" data-scroll  data-scroll-speed="2" data-scroll-delay="0.15"> Enable. </h3>
      <h3 className="text-azure text-[65px] leading-[60px] pt-8 pb-10 lg:pb-0 lg:pt-0 lg:text-9xl w-80 lg:w-full	font-light lg:leading-[150px] z-10 relative" data-scroll  data-scroll-speed="2" data-scroll-delay="0.25"> Empower.</h3>
      </div>
    
  <div className="lg:col-span-8 lg:col-start-4 col-span-12 hidden lg:visible block" >
    <div data-aos="slide-left"   
     data-aos-duration="1000">
     <div   data-scroll  data-scroll-speed="3">
      <video width="1200" height="500" preload="none" className="lg:-mt-[90px] max-w-max hidden lg:visible lg:block" autoPlay muted  playsInline loop  >
    <source src="/images/header-video.mp4" type="video/mp4" />
    
    Your browser does not support the video tag.
  </video>
  
  </div>
  </div>
 <div className=" lg:-mt-[50px]" >
  <p className="text-2xl lg:pr-14 text-white font-light" data-scroll  data-scroll-speed="4" data-scroll-delay="0.30">As business transformation specialists, we engage with principal investors, key stakeholders and senior leadership teams to unlock exponential value creation opportunities.</p>
  
  <p className="text-2xl text-white font-light lg:pr-24 mb-20" data-scroll  data-scroll-speed="4" data-scroll-delay="0.20">Taking a business through a dedicated turnaround, a shift in vision, or an overall business strategy review is undeniably challenging. Touchstone will Engage, Enable and Empower you, with our “Six Steps of Leadership” methodology.</p>
  
  <a href="/learn-more" className="hidden bg-azure pt-3 pb-3 pl-6 pr-6 font-bold text-dusk text-lg uppercase inline-block mt-4 mb-20" data-scroll data-scroll-speed="4" data-scroll-delay="0.11"> Find Out More</a>
  </div>
  </div>

  <div className="lg:col-span-8 lg:col-start-4 col-span-12 visible lg:hiden block " >
    <div >
     <div   data-scroll  data-scroll-speed="3">
  
  <video width="600" height="250" preload="none" className="mb-10 lg:-mt-[90px] max-w-100 visible block lg:hidden " autoPlay muted  playsInline loop  >
    <source src="/images/header-video.mp4" type="video/mp4" />
    
    Your browser does not support the video tag.
  </video>
  </div>
  </div>
 <div className=" lg:-mt-[50px]" >
  <p className="mb-10 lg:mb-0 text-2xl lg:pr-14 text-white font-light" data-scroll  data-scroll-speed="4" data-scroll-delay="0.30">As business transformation specialists, we engage with principal investors, key stakeholders and senior leadership teams to unlock exponential value creation opportunities.</p>
  
  <p className="text-2xl text-white font-light lg:pr-24 mb-20" data-scroll  data-scroll-speed="4" data-scroll-delay="0.20">Taking a business through a dedicated turnaround, a shift in vision, or an overall business strategy review is undeniably challenging. Touchstone will Engage, Enable and Empower you, with our “Six Steps of Leadership” methodology.</p>
  
  <a href="/learn-more" className="hidden bg-azure pt-3 pb-3 pl-6 pr-6 font-bold text-dusk text-lg uppercase inline-block mt-4 mb-20" data-scroll data-scroll-speed="4" data-scroll-delay="0.11"> Find Out More</a>
  </div>
  </div>

      </div>
 
    </div>
 
    </>

    );

}