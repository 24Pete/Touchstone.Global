import Head from "next/head";
import Slick from "../components/slider";
import Hero from "../components/hero";
import Intro from "../components/intro";
import Footer from "../components/footer";
import Layout from "../components/layout";
import Image from "next/legacy/image"
import LoadMore from '../components/loadMorePosts'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";

export default function Index() {

   

  return (

    <>
      <Head>
        <title>{`Touchstone - Engage, Enable, Empower`}</title>
   
      </Head>

        <Intro />



      <section className="sticky-block "   id="sticky-end">
  
      <Hero />


      <div className="mountains-box bg-azure py-10 lg:h-[650px] pb-32">
        <div className=" container mx-auto px-5 relative">
          <div className="grid grid-cols-12">
            <div className=" col-span-12 lg:col-span-7 lg:col-start-4">
              <h2 className="font-medium leading-tight text-[38px] lg:pr-[165px] mb-10 text-dusk "> Unlocking exponential value with the Touchstone collective</h2>
              
         


            </div>
        </div>
      </div>
      <div className=" container mx-auto lg:px-5 px-2 ">

          <div className="grid grid-cols-12">
            <div className="col-span-12 g:col-span-8 lg:col-start-4">
      <div className="lg:w-full w-full lg:h-[395px] bg-dusk lg:absolute">  </div>
              <div className="grid grid-cols-2 grid-child p-10 relative bg-dusk lg:bg-dusk"> 
                <div className="col-span-2 lg:col-span-1">
                    <Image
                    src="/images/sunset-bg-min.webp"
                    width={400}
                    height={300}
                    alt="Touchstone National Park"
                    className="w-[90%] h-auto"
                  />
                </div>
                <div className="col-span-2 lg:col-span-1 pt-8">
                  <p className="font-bold text-white text-xl mb-5">The Touchstone collective are seasoned world-class professionals, with decades of real-world business experience across multiple sectors, delivering exceptional results for our chosen partners.</p>
                  <p className="font-light text-white text-xl "> Our “Six Steps of Leadership” methodology forms the key foundation to empower you and your business with the right focused resources, enabling organisational goals to be accelerated.</p>
                </div>
              </div>
             
              </div>
              </div>
      </div>

    </div>

    <div className="three-steps pt-20 pb-20 relative">



      <div className="container mx-auto px-5 relative">


        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-span-8 lg:col-start-4">
            <div className="grid grid-cols-12 grid-child"> 
              <div className=" col-span-12 lg:col-span-5  lg:mb-10">
                <h3 className="text-[38px] text-azure font-medium"> Engage</h3>
                <p className="font-light text-white text-xl">From the outset Touchstone will develop a clear understanding of your business to ENGAGE with the relevant influencers to understand the challenges, the development opportunities and to form a true strategic value creation plan.</p>
              </div>

              <div className="col-span-3 pt-[70px] hidden lg:visible lg:block">
              <Image src="/images/t-down.svg" alt=""      width={400}
                    height={300} />

              </div>


              <div className="col-span-3 mb-10">

              <div>
      {/* Invisible Image for Preloading */}
      <div style={{ display: 'none' }}>
        <Image src="/images/m1.png" alt="" layout="fill" objectFit="cover" />
      </div>

      {/* Div with Background Image */}
      <div style={{
        backgroundImage: `url(/images/t-images.png)`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        width: '800px',
        height: '300px',
        position: 'absolute',
        right: '-400px',
      }}
      className="border-azure border-b-4 hidden lg:visible lg:block"
      >
      </div>
    </div>

              </div>
              <div className="col-span-5"></div>
              <div className="col-span-3 pt-[150px] px-[30px] hidden lg:visible lg:block">
              <Image src="/images/t-left.svg"    width={300}
                    height={200} />

              </div>
              <div className="col-span-12 lg:col-span-4 lg:mt-16 lg:enable-block">
                <h3 className="text-[38px] text-azure font-medium"> Enable</h3>
                <p className="font-light text-white text-xl">The insightful experience and deep knowledge through the Touchstone collective, will ENABLE you to further develop your why and explore sustainable development opportunities formalised in a value creation plan.</p>
              </div>
             
              
              <div className="col-span-12 lg:col-span-5  mt-10  ">
                <h3 className="text-[38px] text-azure font-medium"> Empower</h3>
                <p className="font-light text-white text-xl">Touchstone delivers a formal foundation to EMPOWER your business to further develop and expand its reach to its fullest extent using your own resources with continued help, support and stewardship from the Touchstone collective.</p>
              </div>

              <div className="col-span-3 pt-[150px] px-[30px] hidden lg:visible lg:block">
              <Image src="/images/t-up.svg" alt=""      width={400}
                    height={300} />

              </div>
              <div className="col-span-3 mt-10">


    

<div>
      {/* Invisible Image for Preloading */}
      <div style={{ display: 'none' }}>
        <Image src="/images/m2.png" alt="" layout="fill" objectFit="cover" />
      </div>

      {/* Div with Background Image */}
      <div style={{
        backgroundImage: `url(/images/t-images-2.png)`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        width: '800px',
        height: '300px',
        position: 'absolute',
        right: '-400px',
      }}
      className="border-azure border-b-4 hidden  lg:visible lg:block "
      >
      </div>
    </div>


              </div>



            </div>
          </div>
        </div>
      </div>
    </div>

      </section>

      <section className="after-sticky py-20 mt-16">
      <div className="container mx-auto px-5 relative">
        <div className="text-center lg:px-[100px]">

            <h3 className="text-[24px] lg:text-[38px] italic font-medium text-dusk mb-10">“Touchstone, we are business transformation specialists, engaging with principal investors, key stakeholders and senior leadership teams to unlock exponential value creation opportunities”. </h3>
            <p className="text-[20px] text-dusk "> Jamie Tinsley</p>
            <p className="text-[20px] text-dusk ">  Founder & CEO at Touchstone</p>

        </div>

      </div>



      </section>




      <section className="touchstone-collective pt-16">
      <div className="container  mx-auto px-10 lg:px-20 relative">
        <div className="text-center">
        <h3 className="font-bold text-[48px]  text-azure">TOUCHSTONE COLLECTIVE</h3>
        <p className="text-xl font-light text-white mt-4  mb-10"> Our mission is simple: to support you in navigating commercial and operational challenges. From business psychology, process and digital transformation to risk analysis, IT management, recruitment, development, and fostering innovative solutions.</p>
        </div>
        <div >
        <Slick/>
        </div>
      </div>

      </section>
      <section className="insights py-10 lg:py-20">
        <div className="container mx-auto px-10 lg:px-20 relative">
          <h3 className="text-[38px] text-azure font-medium mb-10"> Insights</h3>
        <LoadMore/>
        </div>
      </section>
     
      <Footer/>
    </>


  );
}


  loadDevMessages();
  loadErrorMessages();
