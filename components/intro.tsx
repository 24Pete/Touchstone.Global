
import Image from 'next/image'

export default function Intro() {


  
  return (
    <section className=" pt-6  top-0 w-full z-10" >
<div className="grid grid-cols-2 mx-5	">


    <div className="col-span-1">
      <Image
      src="/images/logo-touchstone.svg"
      width="0"
      height="0"
      alt="Touchstone Logo"
      className="w-[200px] h-auto"
    />
      </div>
      <div className="col-span-1  tar ">
      <a href="#getintouch" className="bg-azure pt-3 pb-3 pl-6 pr-6 font-bold text-dusk text-lg uppercase ">
      Get In Touch

      </a>
      </div>
      </div>   
    </section>
  );
}
