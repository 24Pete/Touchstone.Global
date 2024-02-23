import React, { useState } from 'react';
import Slider from 'react-slick';
import Container from "../components/container";
import Image from "next/legacy/image"
export default function App() {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();


  var settings = {
    responsive: [
      {
        breakpoint: 1424,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
      
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
      
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (

  <div>
     
      <Slider className="bg-dusk p-10 mb-4" asNavFor={nav2} ref={(slider1) => setNav1(slider1)}   arrows={false} >
        <div>
            <div className='grid grid-cols-12'>
                <div className='col-span-3'>
              
                       <Image
      src="/images/headshots/jamie.png"
      width={300}
      height={300}
      alt="Touchstone Logo"

    />
    
    
  



                </div>
                <div className='col-span-9 pl-10'>
          <h3 className='text-[34px] text-azure mb-0 leading-tight'>Jamie</h3>
          <h4 className='text-[30px] text-azure mb-4 leading-tight'> CEO</h4>
          <p className='text-[17px] text-azure font-light'> Jamie has an unbridled passion for business turnaround, company transformations and overall corporate restructuring. Over many years as a trusted CEO, Senior Leader, Advisor, Investor and Mentor, he has dedicated his success to a focus on true business engagement, enabling people and businesses to clearly see the opportunities and more importantly, empowering them with the tools and techniques for sustainable growth. </p>
         </div>
          </div>
        </div>
        <div>
        <div className='grid grid-cols-12'>
                <div className='col-span-3'>
              
                       <Image
      src="/images/headshots/stew.png"
      width={300}
      height={300}
      alt="Stewart Headshot"
  
    />
    




                </div>
                <div className='col-span-9 pl-10'>
          <h3 className='text-[34px] text-azure mb-0 leading-tight'>Stewart</h3>
          <h4 className='text-[30px] text-azure mb-4 leading-tight'> Commercial Strategy</h4>
          <p className='text-[17px] text-azure font-light'> Stewart is passionate about empowering people to reach their potential and making the commercial processes that drive operations as simple as possible. Stewart has spent most of his career in business development and general management roles in the UK, Europe and Asia. For the last decade, Stewart has worked across multiple geographies in large scale outsourcing, logistics and manufacturing operations. He has been successful in managing and building businesses for some of the world's most successful companies including DHL and DS Smith where he held roles managing global portfolios of business.
 </p>
         </div>
          </div>
        </div>
        <div>
        <div className='grid grid-cols-12'>
                <div className='col-span-3'>
                
                       <Image
      src="/images/headshots/john.png"
      width={300}
      height={300}
      alt="John Headshot"

    />
    




                </div>
                <div className='col-span-9 pl-10'>
          <h3 className='text-[34px] text-azure mb-0 leading-tight'>John</h3>
          <h4 className='text-[30px] text-azure mb-4 leading-tight'> Business Psychologist</h4>
          <p className='text-[17px] text-azure font-light'> 
John believes that strong relationships based on love and trust are a keystone measure of success. Starting with a deep understanding and appreciation of yourself and extending to empathy and connection with others. John has been a trusted partner and executive life coach to top C-suite leaders, entrepreneurs and an advisor to industry-leading businesses in the UK, EU and USA for the last decade.
 </p>
         </div>
          </div>
        </div>
        <div>
        <div className='grid grid-cols-12'>
                <div className='col-span-3'>
           
                       <Image
      src="/images/headshots/vashti.png"
      width={300}
      height={300}
      alt="Vashti Headshot"
    
    />
    
 

                </div>
                <div className='col-span-9 pl-10'>
          <h3 className='text-[34px] text-azure mb-0 leading-tight'>Vashti</h3>
          <h4 className='text-[30px] text-azure mb-4 leading-tight'> Business & Process Transformation</h4>
          <p className='text-[17px] text-azure font-light'> Vashti has a deep and far-ranging experience of designing and delivering high-performing solutions that enable strategic growth, process improvement and business transformation. Working alongside some of the world’s best-known brands over the past 25 years, she has a balanced and objective perspective on the commercial, functional and operational execution pressures that our clients face alongside the gravitas required to address them. </p>
         </div>
          </div>
        </div>
        <div>
        <div className='grid grid-cols-12'>
                <div className='col-span-3'>
             
                       <Image
      src="/images/headshots/liz.png"
      width={300}
      height={300}
      alt="Liz Headshot"
   
    />
  
                </div>
                <div className='col-span-9 pl-10'>
          <h3 className='text-[34px] text-azure mb-0 leading-tight'>Liz</h3>
          <h4 className='text-[30px] text-azure mb-4 leading-tight'> Operations Strategist</h4>
          <p className='text-[17px] text-azure font-light'> Liz makes impactful contributions to global organisational design, supply chain growth, and successful project implementations. This professional brings a strategic vision to consultancy, ensuring value across various business landscapes. Liz is a seasoned COO with demonstrated expertise in steering global operations, driving strategic initiatives, and leading sourcing and supply chain functions in a multinational context. Having a proven track record of crafting tailored commercial models, building diverse high performing teams across multiple locations, and implementing robust business structures. Liz is passionate about operational excellence, people development and sustainability.
</p>
         </div>
          </div>
        </div>
        <div>
        <div className='grid grid-cols-12'>
                <div className='col-span-3'>
               
                       <Image
      src="/images/headshots/ross.png"
      width={300}
      height={300}
      alt="Ross Headshot"

    />
    
    





                </div>
                <div className='col-span-9 pl-10'>
          <h3 className='text-[34px] text-azure mb-0 leading-tight'>Ross</h3>
          <h4 className='text-[30px] text-azure mb-4 leading-tight'> Field Analyst</h4>
          <p className='text-[17px] text-azure font-light'> Ross possesses a proven track record in building strong and trusted relationships with a broad international clientele. His approach, particularly during the research, analysis and due-diligence phase, is focused on collaboration and the wider scope of any project to ensure we can align business objectives and actionable change. Using his skills and investigative approach, supported by a first-class business degree and a master’s in accounting and finance, he has successfully researched, interpreted and delivered a successful conclusion to many major contracts across varied geographic locations. Ross injects fresh insight into any company project and is extremely focused on nurturing a culture of positive and forward-thinking decision making.
</p>
         </div>
          </div>
        </div>
        <div>
        <div className='grid grid-cols-12'>
                <div className='col-span-3'>
                   
                       <Image
      src="/images/headshots/victoria.png"
      width={300}
      height={300}
      alt="Victoria Headshot"

    />
    
    
  



                </div>
                <div className='col-span-9 pl-10'>
          <h3 className='text-[34px] text-azure mb-0 leading-tight'>Victoria</h3>
          <h4 className='text-[30px] text-azure mb-4 leading-tight'> Risk Analyst</h4>
          <p className='text-[17px] text-azure font-light'>Victoria is skilled at providing a human approach to technology and cyber security, she is an expert in the field of risk mitigation and the associated audit needs. Victoria translates her findings into plain English with no technical jargon that would ordinarily impede positive progress. With her tenacious attention to detail, she audits every element of online security, giving a full understanding of the current state of play, creating a strategic plan for future cyber safety and sustainable growth. Victoria protects her clients’ businesses in the UK, EU and around the globe. 
 </p>
         </div>
          </div>
        </div>
        <div>
        <div className='grid grid-cols-12'>
                <div className='col-span-3'>
       
                       <Image
      src="/images/headshots/dave.png"
      width={300}
      height={300}
      alt="Dave Headshot"
    />
    
    




                </div>
                <div className='col-span-9 pl-10'>
          <h3 className='text-[34px] text-azure mb-0 leading-tight'>Dave</h3>
          <h4 className='text-[30px] text-azure mb-4 leading-tight'> Digital Transformation</h4>
          <p className='text-[17px] text-azure font-light'> Dave is the driving force behind transformative growth plans that redefine industries and elevate organisations to new heights. He possesses an innate ability to align digital technologies with business objectives. Throughout his career, Dave has spearheaded digital transformation initiatives across diverse industries, from startups to blue chip organisations. His success stories include optimising operations, enhancing customer experiences, and unlocking new revenue streams through innovative digital solutions.</p>
         </div>
          </div>
        </div>
        <div>
        <div className='grid grid-cols-12'>
                <div className='col-span-3'>
              
                       <Image
      src="/images/headshots/nafeesa.png"
      width={300}
      height={300}
      alt="Nafeesa Headshot"

    />
    
    
  

                </div>
                <div className='col-span-9 pl-10'>
          <h3 className='text-[34px] text-azure mb-0 leading-tight'>Nafeesa</h3>
          <h4 className='text-[30px] text-azure mb-4 leading-tight'> Marketing Strategist</h4>
          <p className='text-[17px] text-azure font-light'> Nafeesa is an experienced strategist working in a multitude of arenas from marketing communications, global brand innovation and business solutions. In each context Nafeesa has crystalised the choices to be made with clarity and guided clients and leaders alike to successful, lasting outcomes. Through strategic planning processes, research and influencing stakeholders, Nafeesa prides herself on how she leads with heart and courage to drive results. She has been successful in building and leading teams for Fortune 500 companies like WPP and Starbucks across the UK, USA and Asia. This has driven her passion for cultural stewardship and building relationships.
</p>
         </div>
          </div>
        </div>
        <div>
        <div className='grid grid-cols-12'>
                <div className='col-span-3'>
                    
                       <Image
      src="/images/headshots/steve.png"
      width={300}
      height={300}
      alt="Steve Headshot"

    />
    



                </div>
                <div className='col-span-9 pl-10'>
          <h3 className='text-[34px] text-azure mb-0 leading-tight'>Steve</h3>
          <h4 className='text-[30px] text-azure mb-4 leading-tight'> IT & Project Management</h4>
          <p className='text-[17px] text-azure font-light'> Steve has a Doctorate in Computer Control systems and loves nothing more than working with businesses with a transformational need or a considerable strategic challenge. Having over 25 years' experience in IT and project management roles varying from Training, Software Development, IT Leadership, Business Analysis, and overall Project Delivery, this makes him a perfect fit for Touchstone. Steve has most recently and successfully completed a huge value project for regulated procurement, this across smart meters and wireless networks in the Utilities sector. Steve is passionate about understanding what you want and working with you to deliver a dedicated plan.</p>
         </div>
          </div>
        </div>
        <div>
        <div className='grid grid-cols-12'>
                <div className='col-span-3'>
                 
                       <Image
      src="/images/headshots/sharon.png"
      width={300}
      height={300}
      alt="Sharon Headshot"
    />
    
    
 



                </div>
                <div className='col-span-9 pl-10'>
          <h3 className='text-[34px] text-azure mb-0 leading-tight'>Sharon</h3>
          <h4 className='text-[30px] text-azure mb-4 leading-tight'> Executive Recruitment</h4>
          <p className='text-[17px] text-azure font-light'> Sharon has extensive experience recruiting senior level leaders for over 30 years. She has a strong presence in a number of manufacturing sectors, including packaging, plastics, automotive, aerospace, recycling, waste management, FMCG and engineering. Sharon provides Candidates and Clients alike with a personal level of service in a sector that all too often lacks that crucial human element. Sharon adds value every day through her unrivalled industry experience and network of contacts.
 </p>
         </div>
          </div>
        </div>
        <div>
        <div className='grid grid-cols-12'>
                <div className='col-span-3'>
                
                       <Image
      src="/images/headshots/helen.png"
      width={300}
      height={300}
      alt="Helen Headshot"
  
    />
    
    
 




                </div>
                <div className='col-span-9 pl-10'>
          <h3 className='text-[34px] text-azure mb-0 leading-tight'>Helen</h3>
          <h4 className='text-[30px] text-azure mb-4 leading-tight'> Development and Learning Consultant</h4>
          <p className='text-[17px] text-azure font-light'> Helen’s main strength is her experience of delivering impactful, lasting change. She has a vast range of experience having worked with blue chip company Main Boards, High Growth SMEs and individuals running their own companies. At the core of Helen’s work is understanding about you, your goals and hopes for your organisation, your fears and worries about what’s going on, and all the time giving you space to think, to dream and to develop yourself, your team and organisation to be great, be engaged and empowered.
 </p>
         </div>
          </div>
        </div>
        <div>
        <div className='grid grid-cols-12'>
                <div className='col-span-3'>
                   
                       <Image
      src="/images/headshots/johnathan.png"
      width={300}
      height={300}
      alt="Johnathan Headshot"

    />
    
    
  



                </div>
                <div className='col-span-9 pl-10'>
          <h3 className='text-[34px] text-azure mb-0 leading-tight'>Jonathan</h3>
          <h4 className='text-[30px] text-azure mb-4 leading-tight'> Innovative Thinking Facilitator </h4>
          <p className='text-[17px] text-azure font-light'>Jonathan stands at the forefront of catalysing change and driving innovation. His tailor-made workshops and training programs are designed to educate, engage, and enable your organisation's greatest assets—its people. As an accredited LEGO Serious Play trainer and an expert with qualifications in the Basadur Innovation Profile, Design Thinking, Creative Problem Solving, and FourSight, Jonathan is committed to transforming the creative landscape of teams. </p>
         </div>
          </div>
        </div>
        <div>
        <div className='grid grid-cols-12'>
                <div className='col-span-3'>
          
                       <Image
      src="/images/headshots/chris.png"
      width={300}
      height={300}
      alt="Chris Headshot"
    />
    
    
 


                </div>
                <div className='col-span-9 pl-10'>
          <h3 className='text-[34px] text-azure mb-0 leading-tight'>Chris</h3>
          <h4 className='text-[30px] text-azure mb-4 leading-tight'> PR</h4>
          <p className='text-[17px] text-azure font-light'> Chris is a proven communications specialist who has worked in the PR and digital marketing space for over 23 years across a diverse range of corporate and SME-size businesses. His results-focused approach in both B2B and B2C sectors, is driven by his passion for working with brands to understand their challenges, objectives and market position, in order to devise strategies and campaigns that deliver a tangible return on investment. He prides himself on being a channel agnostic thinker, in order to provide the right marketing solution for clients - whether they’re looking to build a brand or simply drive increased sales and revenue.
</p>
         </div>
          </div>
        </div>
        <div>
        <div className='grid grid-cols-12'>
                <div className='col-span-3'>
              
                       <Image
      src="/images/headshots/jeremy.png"
      width={300}
      height={300}
      alt="Jeremy Headshot"

    />
    
    
 


                </div>
                <div className='col-span-9 pl-10'>
          <h3 className='text-[34px] text-azure mb-0 leading-tight'>Jeremy</h3>
          <h4 className='text-[30px] text-azure mb-4 leading-tight'> Legal</h4>
          <p className='text-[17px] text-azure font-light'> Jeremy is a highly versatile lawyer with a background across a number of industries (having worked in senior inhouse legal roles in Packaging, Electronics & Automation and Energy businesses in his career to date). He has a broad range of M&A (UK and international) and commercial experience and is known for both his pragmatic and can-do attitude. Jeremy enjoys a challenge and relishes rolling up his sleeves and getting to know and understand the businesses he supports or the projects he is working on. Jeremy is also an excellent communicator who speaks and writes in plain English – a very important attribute for a business lawyer!


</p>
         </div>
          </div>
        </div>



        <div>
        <div className='grid grid-cols-12'>
                <div className='col-span-3'>
              
                       <Image
      src="/images/headshots/robin.png"
      width={300}
      height={300}
      alt="Robin Headshot"

    />
    
    
 


                </div>
                <div className='col-span-9 pl-10'>
          <h3 className='text-[34px] text-azure mb-0 leading-tight'>Robin</h3>
          <h4 className='text-[30px] text-azure mb-4 leading-tight'> Thought Leader</h4>
          <p className='text-[17px] text-azure font-light'> Robin is an inspirational thought leader and fearless coach dedicated to unlocking the full potential of CEOs, business owners and senior professionals. Backed by 25 years of experience as a seasoned leader andqualified management consultant specialising in organisational and cultural change. Robin has become a powerful catalyst for business transformation across various industries, including Technology, Legal, Healthcare, Marketing, Finance and Education.


</p>
         </div>
          </div>
        </div>



        <div>
        <div className='grid grid-cols-12'>
                <div className='col-span-3'>
              
                       <Image
      src="/images/headshots/nick.png"
      width={300}
      height={300}
      alt="Nick Headshot"

    />
    
    
 


                </div>
                <div className='col-span-9 pl-10'>
          <h3 className='text-[34px] text-azure mb-0 leading-tight'>Nick</h3>
          <h4 className='text-[30px] text-azure mb-4 leading-tight'> Master Philosopher</h4>
          <p className='text-[17px] text-azure font-light'> Nick brings over two decades of experience in guiding and supporting organisations through the strategic decision-making process. Throughout this time, he has honed his expertise in growth acceleration, M&A, and due diligence support. All of which, he combines together to help organisations make better and quicker decisions when they really count. Renowned for his ability to gather and analyse hard to find evidence and complex data sets, Nick ensures that his clients are equipped with precise information to address even the most challenging of inquiries.


</p>
         </div>
          </div>
        </div>

      </Slider>
      
      <Slider
        asNavFor={nav1}
        ref={(slider2) => setNav2(slider2)}
        slidesToShow={5}
        swipeToSlide={true}
        focusOnSelect={true}
        {...settings}
      >
        <div className='px-2'>
        
                       <Image
      src="/images/headshots/jamie.png"
      width={300}
      height={300}
      alt="Touchstone Logo"
   
    />
    
    

        </div>
        <div className='px-2'>
      
                       <Image
      src="/images/headshots/stew.png"
      width={300}
      height={300}
      alt="Touchstone Logo"
     
    />
    
    
        </div>
        <div className='px-2'>
     
                       <Image
      src="/images/headshots/john.png"
      width={300}
      height={300}
      alt="Touchstone Logo"

    />
    
    
   
        </div>
        <div className='px-2'>
  
                       <Image
      src="/images/headshots/vashti.png"
      width={300}
      height={300}
      alt="Touchstone Logo"

    />
    
    
  
        </div>
        <div className='px-2'>
        
                       <Image
      src="/images/headshots/liz.png"
      width={300}
      height={300}
      alt="Touchstone Logo"

    />
    
    
 
        </div>
        <div className='px-2'>
         
                       <Image
      src="/images/headshots/ross.png"
      width={300}
      height={300}
      alt="Touchstone Logo"
    />
    
    
   
        </div>
      
        <div className='px-2'>
       
                       <Image
      src="/images/headshots/victoria.png"
      width={300}
      height={300}
      alt="Touchstone Logo"
   
    />
    
    
  
        </div>
        <div className='px-2'>
         
                       <Image
      src="/images/headshots/dave.png"
      width={300}
      height={300}
      alt="Touchstone Logo"
     
    />
    
    
   
        </div>


        <div className='px-2'>
       
                       <Image
      src="/images/headshots/nafeesa.png"
      width={300}
      height={300}
      alt="Touchstone Logo"
    />
    
    
   
        </div>

        <div className='px-2'>
  
                       <Image
      src="/images/headshots/steve.png"
      width={300}
      height={300}
      alt="Touchstone Logo"
 
    />
    
    
  
        </div>
        <div className='px-2'>
 
                       <Image
      src="/images/headshots/sharon.png"
      width={300}
      height={300}
      alt="Touchstone Logo"
    />
    
    
  
        </div>
        <div className='px-2'>
       
                       <Image
      src="/images/headshots/helen.png"
      width={300}
      height={300}
      alt="Touchstone Logo"
  
    />
    
    

        </div>

        <div className='px-2'>
          
                       <Image
      src="/images/headshots/johnathan.png"
      width={300}
      height={300}
      alt="Touchstone Logo"
    />
    
    
  
        </div>

        <div className='px-2'>
         
                       <Image
      src="/images/headshots/chris.png"
      width={300}
      height={300}
      alt="Touchstone Logo"
    />
    
    
  
        </div>

        <div className='px-2'>

                       <Image
      src="/images/headshots/jeremy.png"
      width={300}
      height={300}
      alt="Touchstone Logo"

    />
    
    
 
        </div>

        <div className='px-2'>

<Image
src="/images/headshots/robin.png"
width={300}
height={300}
alt="Touchstone Logo"

/>



</div>

<div className='px-2'>

<Image
src="/images/headshots/nick.png"
width={300}
height={300}
alt="Touchstone Logo"

/>



</div>
      </Slider>
      </div>

  );
}
