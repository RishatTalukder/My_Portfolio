import React from "react";
import { ComputersCanvas } from "./canvas";

const ComputerShowcase = () => {
  return (
    <section className="relative w-full py-20 px-6 overflow-hidden bg-hero-pattern bg-cover bg-no-repeat bg-cente">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center">
          {/* <p className="text-[#FF5F56] text-sm uppercase tracking-[0.3em] font-medium">
            A little distraction
          </p> */}

          <h2 className="text-white text-3xl sm:text-4xl font-bold mt-3">
            Here's a random computer model.
          </h2>

          <p className="text-secondary mt-3 text-base sm:text-lg">
            You can spin it around. Weeeee...
          </p>
        </div>

        {/* 3D Model */}
        <div className="relative w-full h-[450px] sm:h-[650px]">
          <ComputersCanvas />
        </div>

        {/* Footer joke */}
        <p className="text-center text-secondary text-sm sm:text-base -mt-16 italic">
          I don't know what this proves, but it looks cool though.
        </p>

      </div>
    </section>
  );
};

export default ComputerShowcase;