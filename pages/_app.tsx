import "../styles/index.css";
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';
import { useEffect } from "react";
import { useRef } from 'react';
import { LocomotiveScrollProvider as RLSProvider } from 'react-locomotive-scroll';
import AOS from "aos";
import "aos/dist/aos.css";
import { ApolloProvider } from "@apollo/client";
import { client } from "../lib/apollo.js";
import 'locomotive-scroll/dist/locomotive-scroll.css';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  const { asPath } = useRouter();
  const containerRef = useRef(null);
  return(
   
    <RLSProvider
    options={{
      smooth: true,
      // ... all available Locomotive Scroll instance options
    }}
    watch={
      [
        //..all the dependencies you want to watch to update the scroll.
        //  Basicaly, you would want to watch page/location changes
        //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
      ]
    }
    location={asPath}
    onLocationChange={(scroll: any) => scroll.scrollTo(0, { duration: 0, disableLerp: false })}
    containerRef={containerRef}
  >
     <ApolloProvider client={client}>
    <div className="perspective-fix" data-scroll-container ref={containerRef}>
      <Component {...pageProps} />;
    </div>
    </ApolloProvider>
  </RLSProvider>

  )
}

export default MyApp;
