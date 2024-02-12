
import Image from 'next/image'

export default function StickyLogo() {


  
  return (
    <div className="container sticky hidden lg:block  top-0 pt-28 mx-auto px-5 mix-blend-difference" data-scroll data-scroll-sticky data-scroll-target="#sticky-end" data-scroll-speed="-1" >
        <Image
      src="/images/circle-t.svg"
      width="0"
      height="0"
      alt="Touchstone Logo"
      className="w-[220px] h-auto"
      priority
    />
        </div>



  );
}
