import { Suspense, useEffect, useState } from 'react';
import { Geist } from "next/font/google";
import { Canvas } from '@react-three/fiber';

import { Navbar, Hero, About, Experience, Tech, Works, Contact, StarsCanvas } from '../components';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function Home() {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <div className={`${geistSans.className} relative z-0 bg-primary`}>
      {domLoaded && (
        <>
          <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <Navbar />
            <Hero />
          </div>

          <About />
          <Experience />
          <Tech />
          <Works />

          <div className='relative z-0'>
            <Contact />
            <StarsCanvas />
          </div>
        </>
      )}
    </div>
  );
}
