import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import myFace from '../assets/my_face.png' 
const Hero = () => {
  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
      <img
        src={myFace}
        alt="Rishat sitting outdoors"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Dark overlay - mostly on the left */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050816]/90 via-[#050816]/55 to-transparent" />

      {/* Hero Content */}
      <div
        className={`${styles.paddingX} absolute inset-0 max-w-7xl mx-auto flex items-center`}
      >
        <div className="flex flex-row items-start gap-5 relative z-10">

          {/* Accent Line */}
          <div className="flex flex-col justify-center items-center mt-3">
            <div className="w-5 h-5 rounded-full bg-[#FF5F56]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>

          {/* Introduction */}
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-[#FF5F56]">Rishat</span>
            </h1>

            <p className={`${styles.heroSubText} text-white-100`}>
              I'm a Content Creator,
              <br className="sm:block hidden" />
              A Machine Learning Engineer
              <br className="sm:block hidden" />
              & I also know a little bit of Django.
            </p>
          </div>
        </div>
      </div>

      {/* <ComputersCanvas /> */}

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[65px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
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
