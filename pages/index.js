import { useEffect, useState } from 'react';
import { Inter } from "next/font/google";

import { Navbar, Hero, About, Experience, Tech, Works, Contact } from '../components';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export default function Home() {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <div className={`${inter.className} relative z-0 bg-primary`}>
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
          </div>
        </>
      )}
    </div>
  );
}
