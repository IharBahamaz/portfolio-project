import Image from 'next/image';
import React from 'react';

const Intro = () => {
  return (
    <section>
      <div className="flex items-center justify-center">
        <div>
          <Image
            src="/IMG_0549.jpg"
            alt="person"
            width="192"
            height="192"
            quality="95"
            priority={true}
            className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
          />
          <span className="text-4xl"> 👋</span>
        </div>
      </div>
    </section>
  );
};

export default Intro;
