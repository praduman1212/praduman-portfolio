'use client';

import { motion } from 'framer-motion';
import { ComputerCanvas } from '../canvas';
import { styles } from '../../styles/styles';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center gap-5">
          <div className="flex-1">
            <h1 className={`${styles.heroHeadText} text-white text-left`}>
              Hi, I'm <span className="text-[#915eff]">Praduman</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100 text-left`}>
              I develop web applications, user <br className="sm:block hidden" />
              interfaces and 3D visualizations
            </p>
            
            <div className="mt-5">
              <Link href="/assets/resume.pdf" target="_blank" download>
                <button className="bg-[#915eff] hover:bg-[#7d4ddb] text-white font-bold py-2 px-4 rounded-full transition-all duration-300 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Resume
                </button>
              </Link>
            </div>
          </div>
          
          <div className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] rounded-full overflow-hidden border-4 border-[#915eff] shadow-lg">
            <img src="/assets/images/profile.svg" alt="Praduman Sharma" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      <ComputerCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;