'use client';

import Image from 'next/image';
import { technologies } from '../../constants';

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28 flex items-center justify-center" key={technology.name}>
          <Image 
            src={technology.icon} 
            alt={technology.name}
            width={80}
            height={80}
            className="object-contain"
          />
        </div>
      ))}
    </div>
  );
};

export default Tech;