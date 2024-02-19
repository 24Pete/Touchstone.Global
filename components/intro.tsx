'use client';
import { useEffect } from 'react';
import Image from "next/legacy/image"
import Link from "next/link";
export default function Intro() {

  
  return (
    <section className=" pt-6 mt-6  top-0 w-full z-10"  >
<div className="grid grid-cols-2 mx-5	">


    <div className="col-span-1">
   
       <Link
       href={`/`}
      ><Image
      src="/images/logo-touchstone.svg"
      width="200"
      height="30"
      alt="Touchstone Logo"
      className="w-[200px] h-auto"
    />
    </Link>
      </div>
      <div className="col-span-1  tar ">
      <a href="#getintouch" className="bg-azure pt-3 pb-3 pl-6 pr-6 font-bold text-dusk text-lg uppercase "   data-scroll-to>
      Get In Touch

      </a>
      </div>
      </div>   
    </section>
  );
}
