import Container from "./container";
import Contact from "./cf7";
import { EXAMPLE_PATH } from "../lib/constants";
import Year from "./year";
import {DisableScroll} from "../components/disableScroll";
import Image from 'next/image'
import {RemoveScroll} from 'react-remove-scroll';

export default function Footer() {
  return (
    <footer className="bg-dusk ">

      <div className="footer-contact bg-azure py-10">
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
