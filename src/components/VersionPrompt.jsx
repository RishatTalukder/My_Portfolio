import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { StarsCanvas } from "./canvas";

const VersionPrompt = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-primary overflow-hidden flex items-center justify-center px-4 py-12">
      {/* Background stars animation */}
      <StarsCanvas />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 max-w-3xl w-full mx-auto"
      >
        {/* Header / Intro */}
        <div className="text-center mb-10">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block py-1 px-4 mb-4 rounded-full text-xs font-semibold uppercase tracking-wider text-[#915eff] bg-[#915eff]/10 border border-[#915eff]/30"
          >
            Welcome to Rishat's Portfolio
          </motion.span>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Choose Your <span className="text-[#915eff]">Experience</span>
          </h1>
          <p className="mt-3 text-secondary text-sm sm:text-base max-w-md mx-auto">
            Select how you would like to view the portfolio today:
          </p>
        </div>

        {/* Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* OG Version Card */}
          <motion.div
            whileHover={{ y: -6, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate("/og")}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && navigate("/og")}
            className="group relative cursor-pointer rounded-2xl p-[1px] bg-gradient-to-b from-[#915eff] via-[#4338ca] to-[#151030] shadow-card transition-all"
          >
            <div className="h-full rounded-2xl bg-[#100d25]/90 backdrop-blur-md p-7 flex flex-col justify-between border border-white/5 group-hover:border-[#915eff]/50 transition-colors">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[#915eff]/20 text-[#dfd9ff] border border-[#915eff]/40">
                    Full 3D Experience
                  </span>
                  <span className="text-2xl group-hover:scale-125 transition-transform duration-300">
                    🚀
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-[#915eff] transition-colors">
                  The OG Version
                </h2>
                <p className="text-secondary text-sm leading-relaxed mb-6">
                  Experience the full interactive 3D portfolio featuring Three.js desktop PC models, interactive tilt cards, and full animations.
                </p>
              </div>

              <div className="flex items-center gap-2 text-sm font-semibold text-white group-hover:text-[#915eff] transition-colors">
                <span>Enter OG Version</span>
                <span className="group-hover:translate-x-1.5 transition-transform duration-300">
                  →
                </span>
              </div>
            </div>
          </motion.div>

          {/* Slop Version Card */}
          <motion.div
            whileHover={{ y: -6, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate("/slop")}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && navigate("/slop")}
            className="group relative cursor-pointer rounded-2xl p-[1px] bg-gradient-to-b from-gray-700 via-gray-800 to-[#151030] shadow-card transition-all"
          >
            <div className="h-full rounded-2xl bg-[#100d25]/90 backdrop-blur-md p-7 flex flex-col justify-between border border-white/5 group-hover:border-gray-500/50 transition-colors">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-amber-400/20 text-amber-300 border border-amber-400/30">
                    ☕ The Office Edition
                  </span>
                  <span className="text-2xl group-hover:scale-125 transition-transform duration-300">
                    📎
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                  The Slop Version
                </h2>
                <p className="text-secondary text-sm leading-relaxed mb-6">
                  Clean, fast, and themed after 'The Office' (Dunder Mifflin Scranton). Complete with Dundies, Dwight's fact board, and Michael Scott memos!
                </p>
              </div>

              <div className="flex items-center gap-2 text-sm font-semibold text-amber-300 group-hover:text-amber-200 transition-colors">
                <span>Enter Dunder Mifflin</span>
                <span className="group-hover:translate-x-1.5 transition-transform duration-300">
                  →
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer note */}
        <p className="text-center text-xs text-secondary/60 mt-8">
          You can switch between versions at any time.
        </p>
      </motion.div>
    </div>
  );
};

export default VersionPrompt;
