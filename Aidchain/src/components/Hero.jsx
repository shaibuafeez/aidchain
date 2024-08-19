import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import styles from "../style";
import { discount, video1 } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section 
      id="home" 
      className={`relative flex md:flex-row flex-col ${styles.paddingY}`}
      style={{ minHeight: '100vh', paddingTop: '0' }} // Removed top padding
    >
      {/* Background Video */}
      <video 
        className="absolute top-0 left-0 w-full h-full object-cover z-[0]" 
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source src={video1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay to darken the video for better readability */}
      <div className="absolute inset-0 bg-black opacity-50 z-[1]" />

      {/* Main Content */}
      <div className={`flex-1 flex flex-col justify-start items-start xl:px-0 sm:px-16 px-6 relative z-[2] mt-10`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">Aidchain_Express</span> . {" "}
          </p>
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[56px] text-[40px] text-white ss:leading-[80px] leading-[60px]">
            Be the vehicle that drives <br className="sm:block hidden" />{" "}
            <span className="text-gradient">
              <TypeAnimation
                sequence={[
                  'projects to their dreams.', 
                  2000, 
                  '', 
                  1000, 
                  'projects to revolutionary breakthroughs.', 
                  2000, 
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                className="text-gradient"
              />
            </span>
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our team of experts uses a system to identify Individuals
          and projects. We examine responses and give you Individuals/projects
          worth Aiding towards.
        </p>
      </div>

      <div className={`ss:hidden ${styles.flexCenter} relative z-[2] mt-10`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
