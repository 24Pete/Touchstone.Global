import Container from "./container";
import Contact from "./cf7";
import { EXAMPLE_PATH } from "../lib/constants";
import Year from "./year";
import {DisableScroll} from "../components/disableScroll";
import Image from 'next/image'
import {RemoveScroll} from 'react-remove-scroll';

export default function Footer() {
  return (
    <footer className="bg-dusk " id="getintouch">

      <div className="footer-contact bg-azure py-10" >
      <div className="container mx-auto px-5 relative bg-azure">
          <div className="bg-azure">
            <div className="grid grid-cols-2">
              <div className="col-span-1">
             <h3 className="font-medium text-[38px] text-dusk">Lets Connect </h3>
              </div>
              <div className="col-span-1 tar">
              <p className="font-light text-[18px] text-dusk"><span className="block">Stay up to date with our latest news and</span>
              opportunities with Touchstone
              </p>
         
              </div>

                <div className="col-span-2 mb-5">
         <Contact/>
                </div>
                <div className="col-span-1">
             <a href="mailto:engage@touchstone.global" className="font-light text-[18px] text-dusk">engage@toucshtone.global</a>
              </div>
              <div className="col-span-1 tar">
             <a href="tel:+442039241560" className="font-light text-[18px] text-dusk  inline-block"> 0203 924 1560 </a>
             <a href="https://linkedin.com" className="font-light text-[18px] text-dusk pt-0 inline-block"> <Image
      src="/images/linkedin.svg"
      width={30}
      height={30}
      alt="+24 Logo"
      className="inline-block ml-2 -mt-1"
    />  </a>
              </div>

            </div>
        
          </div>
          </div>


      </div>

      <Container>
        <div className="grid grid-cols-2 ">
          <div className="col-span-1">
            <Year />
          <button className="pr-6 pt-10 pb-10 text-[18px] font-light text-white" onClick={()=>document.getElementById('my_modal_1').showModal()}>Privacy Policy</button>
          <button className="pr-4 pt-10 pb-10 text-[18px] font-light text-white" onClick={()=>document.getElementById('my_modal_2').showModal()}>Cookies</button>

          </div>

          <div className="col-span-1 tar pt-10 pb-10">

           <a href="https://plus24.agency" target="_blank" className="text-[18px] text-white"> Built By         <Image
      src="/images/+24.svg"
      width={30}
      height={30}
      alt="+24 Logo"
      className="inline-block ml-2"
    />  </a>
          </div>

        </div>
   
<dialog id="my_modal_1" className="modal overflow-scroll mx-[200px] rounded-md	">

  <div className="modal-box p-5 bg-dusk relative">

    <h3 className="font-bold text-2xl text-white font-light">Privacy Policy</h3>
    <h4 className="py-4 pb-2 text-white text-xl" >Last updated: 7.2.2024  </h4>
    <p className="py-4 text-white" >
    This Privacy Policy describes how Touchstone (the "Site") collects, uses, and discloses your personal information when you visit https://touchstone.global/ (the "Site") or otherwise communicate with us (collectively, the "Services"). For purposes of this Privacy Policy, "you" and "your" means you as the user of the Services, whether you are a customer, website visitor, or another individual whose information we have collected pursuant to this Privacy Policy.
 </p>

    <p className="py-4 text-white" >
    Please read this Privacy Policy carefully. By using and accessing any of the Services, you agree to the collection, use, and disclosure of your information as described in this Privacy Policy. If you do not agree to this Privacy Policy, please do not use or access any of the Services.
      </p>

    <h4 className="py-4 pb-2 text-white text-xl" >Changes to This Privacy Policy </h4>

    <p className="py-4 text-white" >
    We may update this Privacy Policy from time to time, including to reflect changes to our practices or for other operational, legal, or regulatory reasons. We will post the revised Privacy Policy on the Site, update the "Last updated" date and take any other steps required by applicable law.
          </p>

    <h4 className="py-4 pb-2 text-white text-xl" >How We Collect and Use Your Personal Information </h4>     

    <p className="py-4 text-white" >
    To provide the Services, we collect personal information about you from a variety of sources, as set out below. The information that we collect and use varies depending on how you interact with us.
      </p>

      <p className="py-4 pt-2 text-white" >
      In addition to the specific uses set out below, we may use information we collect about you to communicate with you, provide the Services, comply with any applicable legal obligations, enforce any applicable terms of service, and to protect or defend the Services, our rights, and the rights of our users or others.
      </p>

    <h4 className="py-4 pb-2 text-white text-xl" >What Personal Information We Collect </h4>       
  <p className="py-4 text-white" >
  The types of personal information we obtain about you depends on how you interact with our Site and use our Services. When we use the term "personal information", we are referring to information that identifies, relates to, describes or can be associated with you. The following sections describe the categories and specific types of personal information we collect.
     </p>

     <h4 className="py-4 pb-2 text-white text-xl" >Information We Collect Directly from You</h4>      

    <p className="py-4 text-white" > 
    Information that you directly submit to us through our Services may include: </p>  

    <ul className="px-4 ml-2 py-2 list-disc text-white">
        <li>Basic contact details including your name, address, phone number, email.</li>
        <li>Customer support information including the information you choose to include in communications with us, for example, when sending a message through the Services.</li>
    </ul>
    <p className="text-white py-4">
    Some features of the Services may require you to directly provide us with certain information about yourself. You may elect not to provide this information, but doing so may prevent you from using or accessing these features.
    </p>

    <h4 className="py-4 pb-2 text-white text-xl" >Information We Collect through Cookies</h4>      

    <p className="py-4 text-white" >
    We also automatically collect certain information about your interaction with the Services ("Usage Data"). To do this, we may use cookies, pixels and similar technologies ("Cookies"). Usage Data may include information about how you access and use our Site and your account, including device information, browser information, information about your network connection, your IP address and other information regarding your interaction with the Services.
       </p>

    <h4 className="py-4 pb-2 text-white text-xl" >Information We Obtain from Third Parties</h4>        

    <p className="py-4 text-white" >
    Finally, we may obtain information about you from third parties, including from vendors and service providers who may collect information on our behalf, such as:
    </p>

    <ul className="px-4 ml-2 py-2 list-disc text-white">
        <li>Companies who support our Site and Services.</li>
        <li>When you visit our Site, open or click on emails we send you, or interact with our Services or advertisements, we, or third parties we work with, may automatically collect certain information using online tracking technologies such as pixels, web beacons, software developer kits, third-party libraries, and cookies.</li>
    </ul>

    <p className="py-4 text-white" >Any information we obtain from third parties will be treated in accordance with this Privacy Policy. We are not responsible or liable for the accuracy of the information provided to us by third parties and are not responsible for any third party's policies or practices. For more information, see the section below, Third Party Websites and Links.
</p>

<h4 className="py-4 pb-2 text-white text-xl" >How We Use Your Personal Information
</h4>  

<ul className="px-4 ml-2 py-2 list-disc text-white">
        <li>Marketing and Advertising. We use your personal information for marketing and promotional purposes, such as to send marketing, advertising and promotional communications by email, text message or postal mail, and to show you advertisements for products or services. This may include using your personal information to better tailor the Services and advertising on our Site and other websites.</li>
        <li>Security and Fraud Prevention. We use your personal information to detect, investigate or take action regarding possible fraudulent, illegal or malicious activity. </li>
        <li>Communicating with you. We use your personal information to provide you with customer support and improve our Services. This is in our legitimate interests in order to be responsive to you, to provide effective services to you, and to maintain our business relationship with you.</li>
    </ul>

    <h4 className="py-4 pb-2 text-white text-xl" >Cookies</h4>  
<p  className="py-4 text-white" >Like many websites, we use Cookies on our Site. We use Cookies to power and improve our Site and our Services (including to remember your actions and preferences), to run analytics and better understand user interaction with the Services (in our legitimate interests to administer, improve and optimise the Services). We may also permit third parties and services providers to use Cookies on our Site to better tailor the services, products and advertising on our Site and other websites.
 </p>
 <p className="py-4 text-white" > 
 Most browsers automatically accept Cookies by default, but you can choose to set your browser to remove or reject Cookies through your browser controls. Please keep in mind that removing or blocking Cookies can negatively impact your user experience and may cause some of the Services, including certain features and general functionality, to work incorrectly or no longer be available. Additionally, blocking Cookies may not completely prevent how we share information with third parties such as our advertising partners.
 </p>

 <h4 className="py-4 pb-2 text-white text-xl" >How We Disclose Personal Information
</h4>  
<p className="py-4 text-white">
In certain circumstances, we may disclose your personal information to third parties for legitimate purposes subject to this Privacy Policy. Such circumstances may include:
</p>
<ul className="px-4 ml-2 py-2 list-disc text-white">
        <li>With vendors or other third parties who perform services on our behalf (e.g., IT management, payment processing, data analytics, customer support, cloud storage, fulfillment and shipping).</li>
        <li>With our affiliates or otherwise within our corporate group, in our legitimate interests to run a successful business.</li>
        <li>In connection with a business transaction such as a merger or bankruptcy, to comply with any applicable legal obligations (including to respond to subpoenas, search warrants and similar requests), to enforce any applicable terms of service, and to protect or defend the Services, our rights, and the rights of our users or others.</li>
    </ul>


    <h4 className="py-4 pb-2 text-white text-xl" >Third Party Websites and Links
</h4>  
<p className="py-4 text-white">
Our Site may provide links to websites or other online platforms operated by third parties. If you follow links to sites not affiliated or controlled by us, you should review their privacy and security policies and other terms and conditions. We do not guarantee and are not responsible for the privacy or security of such sites, including the accuracy, completeness, or reliability of information found on these sites.
</p>
<h4 className="py-4 pb-2 text-white text-xl" >Security and Retention of Your Information</h4>  
<p className="py-4 text-white" >Please be aware that no security measures are perfect or impenetrable, and we cannot guarantee "perfect security." In addition, any information you send to us may not be secure while in transit. We recommend that you do not use insecure channels to communicate sensitive or confidential information to us.</p>
<p className="py-4 text-white" >How long we retain your personal information depends on different factors, such as whether we need the information to provide the Services, comply with legal obligations, resolve disputes or enforce other applicable contracts and policies.</p>

<h4 className="py-4 pb-2 text-white text-xl" >Your Rights and Choices
</h4> 
<p className="py-4 text-white" > Depending on where you live, you may have some or all of the rights listed below in relation to your personal information. However, these rights are not absolute, may apply only in certain circumstances and, in certain cases, we may decline your request as permitted by law. </p>
<ul className="px-4 ml-2 py-2 list-disc text-white">
        <li>Right to Access / Know. You may have a right to request access to personal information that we hold about you, including details relating to the ways in which we use and share your information.</li>
        <li>Right to Delete. You may have a right to request that we delete personal information we maintain about you.</li>
        <li>Right to Correct. You may have a right to request that we correct inaccurate personal information we maintain about you.</li>
        <li>Right of Portability. You may have a right to receive a copy of the personal information we hold about you and to request that we transfer it to a third party, in certain circumstances and with certain exceptions.</li>
    </ul>
    <h4 className="py-4 pb-2 text-white text-xl" >Complaints
</h4> 
<p className="py-4 text-white" >If you have complaints about how we process your personal information, please contact us using the contact details provided below. 
</p>

<h4 className="py-4 pb-2 text-white text-xl" >Contact
</h4> 
<p className="py-4 text-white" >Should you have any questions about our privacy practices or this Privacy Policy, or if you would like to exercise any of the rights available to you, please call 0203 924 1560 or email us at engage@touchstone.global or contact us at Pool House Farm Church Lane, Pool In Wharfedale, Otley, BFP, LS21 1FB, United Kingdom. 
</p>

    <div className="modal-action fixed top-8 right-56 bg-azure w-[40px] h-[40px] rounded-full text-center">
      <form method="dialog" >
        {/* if there is a button in form, it will close the modal */}
        <button className="btn text-lg text-white align-middle">  <span className="text-3xl text-white ">x</span> </button>
      </form>
    </div>
  </div>


</dialog>


<dialog id="my_modal_2" className="modal overflow-scroll mx-[200px] rounded-md">
  <div className="modal-box p-5 bg-dusk relative">
    
  <h3 className="font-bold text-2xl text-white font-light">Cookie Policy</h3>
    <p className="py-4 text-white" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at feugiat libero, placerat ornare nulla. Mauris interdum purus quis quam consequat eleifend. Nunc turpis mauris, consequat sit amet auctor nec, porta vitae sapien. Cras cursus justo convallis, placerat dui eget, laoreet est. Proin vestibulum at orci at faucibus. Suspendisse vitae orci non quam auctor efficitur et ac tortor. Nulla id sapien sit amet velit posuere pretium. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed tristique tellus vel odio feugiat vehicula. Nunc scelerisque lorem mollis quam posuere, id accumsan diam tristique. Donec eget sapien id ex luctus tempus at eget metus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean porta urna lacinia, tristique mi sed, faucibus lacus. </p>

    <p className="py-4 text-white" >Donec nisl dui, condimentum quis luctus eget, pretium nec nibh. In hac habitasse platea dictumst. Suspendisse dolor nulla, aliquam accumsan consectetur in, bibendum at tellus. Duis varius sit amet neque nec commodo. Aenean non iaculis ipsum. Curabitur sed sollicitudin neque. Pellentesque nec dolor eu massa malesuada lacinia a volutpat magna. Vivamus ac urna dictum, ultricies turpis elementum, varius dolor. Phasellus mi augue, placerat dictum ultrices sed, rutrum a justo. In ultrices velit vitae purus ornare, eu laoreet turpis cursus. Curabitur maximus tincidunt blandit. Fusce sit amet dignissim odio. Donec augue erat, dignissim in mi sed, iaculis cursus dolor. </p>

    <p className="py-4 text-white" >Aliquam et sagittis ligula. Fusce eleifend erat nibh, quis bibendum turpis scelerisque vitae. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc tellus massa, volutpat vitae imperdiet in, blandit in magna. Curabitur in convallis nunc. Fusce tristique laoreet mi. Aliquam sit amet imperdiet libero, quis consectetur mauris. Vestibulum condimentum non sapien vitae accumsan. Suspendisse potenti.</p>

    <p className="py-4 text-white" >Morbi ultrices, eros eget porta commodo, massa nisl sodales odio, sit amet lacinia risus massa in tortor. Duis vitae vulputate metus. Cras faucibus sapien ante, semper facilisis lectus facilisis ac. Praesent aliquet quam at nulla volutpat, in commodo ex tincidunt. Mauris id mi sit amet nulla iaculis convallis. Integer in semper leo. Sed turpis sapien, congue quis tempus ut, auctor dignissim tortor. Donec sed semper metus.</p>

    <p className="py-4 text-white" >Aliquam erat volutpat. Vivamus dapibus bibendum nisi a volutpat. Donec ut velit orci. Mauris vitae hendrerit dui. Suspendisse egestas est magna, a rhoncus velit varius eget. Nulla tincidunt volutpat fermentum. Curabitur vitae velit rutrum, iaculis purus eu, semper tellus. Morbi volutpat ornare eros sit amet commodo. Sed eu condimentum lorem. Aliquam aliquam cursus turpis, sit amet rutrum urna. </p>
    
    <p className="py-4 text-white" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at feugiat libero, placerat ornare nulla. Mauris interdum purus quis quam consequat eleifend. Nunc turpis mauris, consequat sit amet auctor nec, porta vitae sapien. Cras cursus justo convallis, placerat dui eget, laoreet est. Proin vestibulum at orci at faucibus. Suspendisse vitae orci non quam auctor efficitur et ac tortor. Nulla id sapien sit amet velit posuere pretium. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed tristique tellus vel odio feugiat vehicula. Nunc scelerisque lorem mollis quam posuere, id accumsan diam tristique. Donec eget sapien id ex luctus tempus at eget metus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean porta urna lacinia, tristique mi sed, faucibus lacus. </p>

    <p className="py-4 text-white" >Donec nisl dui, condimentum quis luctus eget, pretium nec nibh. In hac habitasse platea dictumst. Suspendisse dolor nulla, aliquam accumsan consectetur in, bibendum at tellus. Duis varius sit amet neque nec commodo. Aenean non iaculis ipsum. Curabitur sed sollicitudin neque. Pellentesque nec dolor eu massa malesuada lacinia a volutpat magna. Vivamus ac urna dictum, ultricies turpis elementum, varius dolor. Phasellus mi augue, placerat dictum ultrices sed, rutrum a justo. In ultrices velit vitae purus ornare, eu laoreet turpis cursus. Curabitur maximus tincidunt blandit. Fusce sit amet dignissim odio. Donec augue erat, dignissim in mi sed, iaculis cursus dolor. </p>

    <p className="py-4 text-white" >Aliquam et sagittis ligula. Fusce eleifend erat nibh, quis bibendum turpis scelerisque vitae. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc tellus massa, volutpat vitae imperdiet in, blandit in magna. Curabitur in convallis nunc. Fusce tristique laoreet mi. Aliquam sit amet imperdiet libero, quis consectetur mauris. Vestibulum condimentum non sapien vitae accumsan. Suspendisse potenti.</p>

    <p className="py-4 text-white" >Morbi ultrices, eros eget porta commodo, massa nisl sodales odio, sit amet lacinia risus massa in tortor. Duis vitae vulputate metus. Cras faucibus sapien ante, semper facilisis lectus facilisis ac. Praesent aliquet quam at nulla volutpat, in commodo ex tincidunt. Mauris id mi sit amet nulla iaculis convallis. Integer in semper leo. Sed turpis sapien, congue quis tempus ut, auctor dignissim tortor. Donec sed semper metus.</p>

    <p className="py-4 text-white" >Aliquam erat volutpat. Vivamus dapibus bibendum nisi a volutpat. Donec ut velit orci. Mauris vitae hendrerit dui. Suspendisse egestas est magna, a rhoncus velit varius eget. Nulla tincidunt volutpat fermentum. Curabitur vitae velit rutrum, iaculis purus eu, semper tellus. Morbi volutpat ornare eros sit amet commodo. Sed eu condimentum lorem. Aliquam aliquam cursus turpis, sit amet rutrum urna. </p>
    
    <p className="py-4 text-white" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at feugiat libero, placerat ornare nulla. Mauris interdum purus quis quam consequat eleifend. Nunc turpis mauris, consequat sit amet auctor nec, porta vitae sapien. Cras cursus justo convallis, placerat dui eget, laoreet est. Proin vestibulum at orci at faucibus. Suspendisse vitae orci non quam auctor efficitur et ac tortor. Nulla id sapien sit amet velit posuere pretium. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed tristique tellus vel odio feugiat vehicula. Nunc scelerisque lorem mollis quam posuere, id accumsan diam tristique. Donec eget sapien id ex luctus tempus at eget metus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean porta urna lacinia, tristique mi sed, faucibus lacus. </p>

    <p className="py-4 text-white" >Donec nisl dui, condimentum quis luctus eget, pretium nec nibh. In hac habitasse platea dictumst. Suspendisse dolor nulla, aliquam accumsan consectetur in, bibendum at tellus. Duis varius sit amet neque nec commodo. Aenean non iaculis ipsum. Curabitur sed sollicitudin neque. Pellentesque nec dolor eu massa malesuada lacinia a volutpat magna. Vivamus ac urna dictum, ultricies turpis elementum, varius dolor. Phasellus mi augue, placerat dictum ultrices sed, rutrum a justo. In ultrices velit vitae purus ornare, eu laoreet turpis cursus. Curabitur maximus tincidunt blandit. Fusce sit amet dignissim odio. Donec augue erat, dignissim in mi sed, iaculis cursus dolor. </p>

    <p className="py-4 text-white" >Aliquam et sagittis ligula. Fusce eleifend erat nibh, quis bibendum turpis scelerisque vitae. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc tellus massa, volutpat vitae imperdiet in, blandit in magna. Curabitur in convallis nunc. Fusce tristique laoreet mi. Aliquam sit amet imperdiet libero, quis consectetur mauris. Vestibulum condimentum non sapien vitae accumsan. Suspendisse potenti.</p>

    <p className="py-4 text-white" >Morbi ultrices, eros eget porta commodo, massa nisl sodales odio, sit amet lacinia risus massa in tortor. Duis vitae vulputate metus. Cras faucibus sapien ante, semper facilisis lectus facilisis ac. Praesent aliquet quam at nulla volutpat, in commodo ex tincidunt. Mauris id mi sit amet nulla iaculis convallis. Integer in semper leo. Sed turpis sapien, congue quis tempus ut, auctor dignissim tortor. Donec sed semper metus.</p>

    <p className="py-4 text-white" >Aliquam erat volutpat. Vivamus dapibus bibendum nisi a volutpat. Donec ut velit orci. Mauris vitae hendrerit dui. Suspendisse egestas est magna, a rhoncus velit varius eget. Nulla tincidunt volutpat fermentum. Curabitur vitae velit rutrum, iaculis purus eu, semper tellus. Morbi volutpat ornare eros sit amet commodo. Sed eu condimentum lorem. Aliquam aliquam cursus turpis, sit amet rutrum urna. </p>
    
    
    <div className="modal-action fixed top-8 right-56 bg-azure w-[40px] h-[40px] rounded-full text-center">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn text-lg text-white align-middle">  <span className="text-3xl text-white ">x</span> </button>
      </form>
    </div>
  </div>
</dialog>



      </Container>
    </footer>
  );
}
