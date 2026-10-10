import React, { useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
} from "../constants";
import { logo, github, handshake } from "../assets";

const officeQuotes = [
  {
    quote: "You miss 100% of the shots you don't take. — Wayne Gretzky",
    author: "— Michael Scott — Md. Rishat Talukder",
  },
  {
    quote: "Would an idiot do that? If the answer is yes, I do not do that thing.",
    author: "— Dwight Schrute",
  },
  {
    quote: "I am Beyonce, always.",
    author: "— Michael Scott",
  },
  {
    quote: "Identity theft is not a joke, Jim! Millions of families suffer every year!",
    author: "— Dwight Schrute",
  },
  {
    quote: "I talk a lot, so I've learned to just tune myself out.",
    author: "— Kelly Kapoor",
  },
  {
    quote: "I’m not superstitious, but I am a little stitious.",
    author: "— Michael Scott",
  },
  {
    quote: "Sometimes I'll start a sentence and I don't even know where it's going. I just hope I find it along the way.",
    author: "— Michael Scott (Writing JavaScript without TypeScript)",
  },
  {
    quote: "What is the ratio of Stanley Nickels to Schrute Bucks? The same as the ratio of unicorns to leprechauns.",
    author: "— Dwight Schrute",
  },
  {
    quote: "www.creedthoughts.gov.www\\creedthoughts. Even for the internet, it's pretty shocking.",
    author: "— Creed Bratton",
  },
];

const SlopPage = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [formStatus, setFormStatus] = useState(null);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [schruteBucks, setSchruteBucks] = useState(100);
  const [dundieAlert, setDundieAlert] = useState(false);

  const nextQuote = () => {
    setQuoteIndex((prev) => (prev + 1) % officeQuotes.length);
  };

  const awardSchruteBuck = () => {
    setSchruteBucks((prev) => prev + 50);
  };

  const triggerDundie = () => {
    setDundieAlert(true);
    setTimeout(() => setDundieAlert(false), 4000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      alert("Pam at reception says: Please fill in all fields before sending to corporate!");
      return;
    }
    setLoading(true);
    emailjs
      .send(
        "service_9n9vfcx",
        "template_pioqell",
        {
          from_name: form.name,
          to_name: "Rishat",
          from_email: form.email,
          to_email: "talukderrishat2@gmail.com",
          message: form.message,
        },
        "erLYUW93Az56g-fKB"
      )
      .then(
        () => {
          setLoading(false);
          setFormStatus("success");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          setFormStatus("error");
          console.error(error);
        }
      );
  };

  return (
    <div className="min-h-screen bg-[#0d131f] text-slate-200 font-sans antialiased selection:bg-amber-500 selection:text-slate-900">
      {/* Top Banner styled as Inter-Office Memo */}
      <aside
        aria-label="Inter-Office Memo"
        className="bg-amber-400 text-slate-900 border-b-2 border-amber-500 px-4 py-2 font-mono text-xs flex flex-wrap items-center justify-center gap-3 shadow-sm"
      >
        <span className="font-bold flex items-center gap-1.5">
          <span>📋</span>
          <span>MEMORANDUM // DUNDER MIFFLIN SCRANTON BRANCH:</span>
        </span>
        <span>You are currently inspecting the <strong>Official Office Edition</strong> (Slop Version).</span>
        <span className="hidden sm:inline">•</span>
        <Link
          to="/og"
          className="inline-flex items-center gap-1 font-bold underline underline-offset-2 hover:text-indigo-900 transition"
        >
          Need fancy 3D Sabre graphics? Switch to OG Version →
        </Link>
      </aside>

      {/* Main Corporate Header */}
      <header className="sticky top-0 z-40 bg-[#0d131f]/95 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            {/* Dunder Mifflin Style Stamp */}
            <div className="w-10 h-10 rounded-lg bg-blue-700 border-2 border-blue-400 flex flex-col items-center justify-center shadow-md p-1 group-hover:scale-105 transition">
              <span className="text-[10px] font-black tracking-tighter text-white leading-none">DM</span>
              <span className="text-[7px] font-bold text-blue-200 leading-none mt-0.5">PAPER</span>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-white text-base tracking-tight font-serif flex items-center gap-2">
                DUNDER MIFFLIN
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-400/20 text-amber-300 border border-amber-400/30">
                  SCRANTON
                </span>
              </span>
              <span className="text-[11px] text-slate-400 font-mono">
                Md. Rishat Talukder // Regional Developer
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-mono uppercase tracking-wider text-slate-300">
            <a href="#conference-room" className="hover:text-amber-400 transition">Conference Room</a>
            <a href="#dundies" className="hover:text-amber-400 transition">The Dundies</a>
            <a href="#clients" className="hover:text-amber-400 transition">Client Accounts</a>
            <a href="#personnel" className="hover:text-amber-400 transition">Personnel File</a>
            <a href="#reception" className="hover:text-amber-400 transition">Reception Desk</a>
            <Link
              to="/og"
              className="ml-2 px-3 py-1.5 rounded bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition flex items-center gap-1.5 shadow"
            >
              <span>🚀</span>
              <span>OG 3D Version</span>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setNavOpen(!navOpen)}
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
            aria-label="Toggle navigation"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {navOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown */}
        {navOpen && (
          <div className="md:hidden border-b border-slate-800 bg-[#121929] px-4 py-4 space-y-3 font-mono text-xs">
            <a
              href="#conference-room"
              onClick={() => setNavOpen(false)}
              className="block text-slate-300 hover:text-amber-400 py-1"
            >
              [1] Conference Room (About)
            </a>
            <a
              href="#dundies"
              onClick={() => setNavOpen(false)}
              className="block text-slate-300 hover:text-amber-400 py-1"
            >
              [2] The Dundies (Skills)
            </a>
            <a
              href="#clients"
              onClick={() => setNavOpen(false)}
              className="block text-slate-300 hover:text-amber-400 py-1"
            >
              [3] Client Accounts (Projects)
            </a>
            <a
              href="#personnel"
              onClick={() => setNavOpen(false)}
              className="block text-slate-300 hover:text-amber-400 py-1"
            >
              [4] Personnel File (Experience)
            </a>
            <a
              href="#reception"
              onClick={() => setNavOpen(false)}
              className="block text-slate-300 hover:text-amber-400 py-1"
            >
              [5] Reception Desk (Contact)
            </a>
            <div className="pt-2 border-t border-slate-800 flex gap-2">
              <Link
                to="/og"
                className="flex-1 text-center py-2 rounded bg-blue-600 text-white font-bold"
              >
                OG 3D Version
              </Link>
              <Link
                to="/"
                className="flex-1 text-center py-2 rounded bg-slate-800 text-slate-300"
              >
                Version Select
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Floating Dundie Alert Banner */}
      {dundieAlert && (
        <div className="fixed top-20 right-4 z-50 bg-amber-400 text-slate-950 font-mono text-xs font-bold p-4 rounded-xl shadow-2xl border-2 border-amber-300 animate-bounce flex items-center gap-3">
          <span className="text-2xl">🏆</span>
          <div>
            <p className="font-extrabold uppercase">DUNDIE AWARD PRESENTED!</p>
            <p className="text-[11px] font-normal">Awarded the "Whitest Code & Cleanest Git Commits" Dundie!</p>
          </div>
        </div>
      )}

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-14 space-y-20">
        {/* Hero Section: Michael Scott's Office */}
        <section className="relative rounded-3xl bg-gradient-to-b from-[#141d30] to-[#0e1524] border-2 border-slate-800 p-6 sm:p-10 md:p-12 shadow-2xl overflow-hidden">
          {/* Manila Paper Folder Tab Aesthetic */}
          <div className="absolute top-0 right-10 bg-amber-400/90 text-slate-950 font-mono text-[10px] font-extrabold uppercase px-4 py-1 rounded-b-md shadow tracking-wider">
            DUNDER MIFFLIN INC. // FILE #0042
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-6">
              {/* World's Best Developer Badge */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono">
                <span className="text-base">☕</span>
                <span className="text-amber-400 font-bold">WORLD'S BEST DEVELOPER</span>
                <span className="text-slate-500">|</span>
                <span className="text-slate-300">Scranton Branch</span>
              </div>

              {/* Michael Scott Famous Quote */}
              <blockquote className="border-l-4 border-amber-400 pl-4 py-1 italic font-serif text-slate-300 text-base sm:text-lg">
                "{officeQuotes[quoteIndex].quote}"
                <footer className="text-xs font-mono text-amber-400 not-italic mt-1.5 font-bold">
                  {officeQuotes[quoteIndex].author}
                </footer>
              </blockquote>

              <div className="space-y-2">
                <h1 className="text-3xl sm:text-5xl font-black text-white font-serif tracking-tight">
                  Md. Rishat Talukder
                </h1>
                <p className="text-sm sm:text-base font-mono text-indigo-300">
                  Regional Developer <span className="line-through text-slate-500 font-normal">(Assistant to the Regional Developer)</span>
                </p>
              </div>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                Welcome to Dunder Mifflin Scranton's Digital Paper Department. I build web applications and intelligent systems using <strong className="text-white">Python</strong>, <strong className="text-white">Django</strong>, <strong className="text-white">React.js</strong>, and <strong className="text-white">Machine Learning</strong>. As Michael Scott once said: <em>"Would an idiot do that? If the answer is yes, I do not do that thing."</em>
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#clients"
                  className="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-bold transition shadow-md flex items-center gap-2"
                >
                  <span>📁</span>
                  <span>Inspect Client Accounts</span>
                </a>
                <a
                  href="#reception"
                  className="px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-mono text-xs font-bold transition shadow-md flex items-center gap-2"
                >
                  <span>✉️</span>
                  <span>Leave Memo with Pam</span>
                </a>
                <button
                  onClick={triggerDundie}
                  className="px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-300 font-mono text-xs border border-amber-400/30 transition flex items-center gap-1.5"
                >
                  <span>🏆</span>
                  <span>Claim a Dundie</span>
                </button>
              </div>
            </div>

            {/* Right Column: Framed Handshake Photo & Dwight's Fact Board */}
            <div className="lg:col-span-4 space-y-5">
              {/* Framed Michael Scott Handshake Photo */}
              <div className="rounded-2xl bg-[#090d16] border-2 border-amber-400/50 p-3 space-y-2.5 shadow-2xl relative group">
                <div className="absolute -top-3 left-4 bg-amber-400 text-slate-950 font-mono text-[9px] font-black uppercase px-2.5 py-0.5 rounded shadow tracking-wider flex items-center gap-1 z-10">
                  <span>📎</span>
                  <span>OFFICIAL SCRANTON COMMENDATION</span>
                </div>

                <div
                  className="relative overflow-hidden rounded-xl border border-slate-700 bg-slate-950 mt-1 cursor-pointer"
                  onClick={triggerDundie}
                  title="Click to claim Dundie Award!"
                >
                  <img
                    src={handshake}
                    alt="Michael Scott awkwardly shaking hands with Md. Rishat Talukder"
                    className="w-full h-auto object-cover rounded-lg group-hover:scale-105 transition duration-500 shadow-inner"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-2">
                    <span className="text-[10px] font-mono text-amber-300 font-bold bg-black/70 px-2 py-0.5 rounded">
                      🏆 Click to Claim Dundie
                    </span>
                  </div>
                </div>

                {/* Brass Plaque */}
                <div className="bg-gradient-to-r from-amber-700/40 via-amber-500/20 to-amber-700/40 border border-amber-400/40 rounded-lg p-2.5 text-center font-mono">
                  <p className="text-amber-300 font-extrabold text-[11px] uppercase tracking-wide">
                    Md. Rishat Talukder & Michael Scott
                  </p>
                  <p className="text-slate-300 text-[9px] mt-0.5">
                    Official Scranton Branch Handshake Ceremony
                  </p>
                  <p className="text-amber-400/90 text-[9px] italic mt-0.5">
                    "You have no idea how high I can fly."
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-[#090d16] border border-slate-700/80 p-5 space-y-4 font-mono text-xs shadow-inner">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="text-amber-400 font-bold flex items-center gap-1.5">
                    <span>🗄️</span>
                    <span>DWIGHT'S FACT BOARD</span>
                  </span>
                  <span className="text-[10px] text-slate-400">STATUS: VIGILANT</span>
                </div>

                <div className="space-y-2 text-slate-300 text-[11px] leading-relaxed">
                  <p><strong>FACT:</strong> Bears eat beets. Developers write Python. Battlestar Galactica.</p>
                  <p><strong>FACT:</strong> Identity theft is not a joke, Jim. But poor state management is.</p>
                  <p><strong>FACT:</strong> Stapler inside Jell-O detected in `./node_modules`.</p>
                </div>

                {/* Schrute Bucks Counter */}
                <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase">Schrute Bucks Balance</p>
                    <p className="text-lg font-bold text-emerald-400 font-mono">{schruteBucks} SB</p>
                  </div>
                  <button
                    onClick={awardSchruteBuck}
                    className="px-2.5 py-1.5 rounded bg-emerald-600/30 hover:bg-emerald-600/50 text-emerald-300 text-[10px] font-bold border border-emerald-500/40 transition"
                  >
                    +50 SB (Good Code)
                  </button>
                </div>

                {/* Shuffle Office Quote */}
                <button
                  onClick={nextQuote}
                  className="w-full py-2 rounded bg-slate-800 hover:bg-slate-700 text-amber-300 text-center font-bold text-[11px] border border-slate-700 transition"
                >
                  🔄 Next Michael Scott Quote
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: The Conference Room (About) */}
        <section id="conference-room" className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-slate-800 pb-4 gap-2">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-amber-400/20 text-amber-400 font-mono text-[11px] font-bold">
                  CONFERENCE ROOM MEETING // 5 MINUTES
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white font-serif mt-1">
                Overview & Department Roles
              </h2>
            </div>
            <span className="text-xs font-mono text-slate-400">
              "Attention Scranton: Everybody in the conference room NOW." — Michael
            </span>
          </div>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl">
            I am a software developer with hands-on expertise building fullstack web apps and AI-driven solutions. Here is how my roles map to the greatest paper company in northeastern Pennsylvania:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => {
              // Funny Office flavor descriptions for each role
              const officeRoles = [
                { role: "Pam at Reception", desc: "Handles frontend interactions, routes incoming requests, and keeps the user interface looking pristine." },
                { role: "Dunder Mifflin Infinity", desc: "Smart machine learning models that automate data tasks (unlike Ryan's website, this one actually works)." },
                { role: "Dwight's Farm Logistics", desc: "Solid, battle-hardened Django backends and REST APIs managed with supreme discipline." },
                { role: "The Office Documentary Crew", desc: "Creating engaging media, documentation, tutorials, and clear technical communication." },
                { role: "Threat Level Midnight Dev", desc: "Crafting lightweight 2D games and interactive entertainment in Pygame & Python." },
                { role: "Jim Halpert's Prank Department", desc: "Creative problem solver thinking outside the cubicle to crack complex bugs." },
              ];
              const roleInfo = officeRoles[index] || { role: "Dunder Mifflin Staff", desc: "Delivering reliable software." };

              return (
                <div
                  key={index}
                  className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-amber-400/50 transition flex flex-col justify-between group"
                >
                  <div className="flex items-start gap-3.5 mb-3">
                    <div className="w-11 h-11 rounded-lg bg-slate-800 p-2 shrink-0 border border-slate-700 flex items-center justify-center group-hover:scale-105 transition">
                      <img src={service.icon} alt={service.title} className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base font-serif">{service.title}</h3>
                      <span className="text-[11px] font-mono text-amber-400 font-medium">{roleInfo.role}</span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans border-t border-slate-800/80 pt-2.5">
                    {roleInfo.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 2: The Dundie Awards (Skills & Tech Stack) */}
        <section id="dundies" className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-slate-800 pb-4 gap-2">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 font-mono text-[11px] font-bold">
                  21ST ANNUAL DUNDIE AWARDS // CHILI'S RESTAURANT
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white font-serif mt-1">
                The Dundies for Technical Excellence
              </h2>
            </div>
            <button
              onClick={triggerDundie}
              className="text-xs font-mono text-amber-400 hover:underline flex items-center gap-1 font-bold"
            >
              <span>🏆 Hand out another Dundie →</span>
            </button>
          </div>

          <p className="text-slate-300 text-sm max-w-2xl">
            Every tool in this warehouse has been tested under extreme Scranton pressure (e.g. Pretzel Day traffic and Dwight's fire drills).
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-blue-400/60 transition flex flex-col items-center justify-center text-center gap-2 group shadow-sm"
              >
                <div className="w-10 h-10 flex items-center justify-center">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="max-w-full max-h-full object-contain filter group-hover:scale-110 transition duration-200"
                  />
                </div>
                <div>
                  <span className="text-xs font-bold text-white block group-hover:text-blue-300 transition">
                    {tech.name}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 block mt-0.5">
                    Certified 🏅
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Client Accounts (Projects) */}
        <section id="clients" className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-slate-800 pb-4 gap-2">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono text-[11px] font-bold">
                  SCRANTON BRANCH CLIENT LEDGER
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white font-serif mt-1">
                Major Client Accounts & Case Studies
              </h2>
            </div>
            <a
              href="https://github.com/RishatTalukder"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-mono text-blue-400 hover:text-blue-300 font-bold flex items-center gap-1"
            >
              <span>GitHub Ledger Records →</span>
            </a>
          </div>

          <p className="text-slate-300 text-sm max-w-2xl">
            Real software built for real users. No paper cuts, just robust engineering.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => {
              // Funny Office case file stamps
              const officeFileNotes = [
                "CONFIDENTIAL // Stanley plays this on crossword break.",
                "PRIORITY DEAL // Tested against Schrute Bucks currency.",
                "AI DIVISION // Predicting Michael's 'That's What She Said' timing.",
              ];
              const fileNote = officeFileNotes[index] || "OFFICIAL FILE // Scranton Approved";

              return (
                <div
                  key={index}
                  className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden flex flex-col justify-between hover:border-slate-700 transition shadow-lg group"
                >
                  <div>
                    {/* Manila header file tab */}
                    <div className="bg-[#151e30] border-b border-slate-800 px-4 py-2 flex items-center justify-between text-[11px] font-mono text-amber-300">
                      <span>CASE FILE #{index + 101}</span>
                      <span className="text-[10px] text-slate-400">ACTIVE CLIENT</span>
                    </div>

                    <div className="relative aspect-video w-full bg-slate-950 overflow-hidden border-b border-slate-800">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                      />
                    </div>

                    <div className="p-5 space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-white font-serif">{project.name}</h3>
                        <a
                          href={project.source_code_link}
                          target="_blank"
                          rel="noreferrer"
                          className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition"
                          title="View source code on GitHub"
                        >
                          <img src={github} alt="GitHub" className="w-4 h-4 object-contain invert" />
                        </a>
                      </div>

                      <p className="text-xs text-slate-300 leading-relaxed font-sans">
                        {project.description}
                      </p>

                      <div className="p-2.5 rounded bg-amber-400/10 border border-amber-400/20 text-[11px] font-mono text-amber-300">
                        📌 {fileNote}
                      </div>
                    </div>
                  </div>

                  <div className="px-5 pb-5 pt-2">
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800">
                      {project.tags.map((tag, tagIdx) => (
                        <span
                          key={tagIdx}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-indigo-300 border border-slate-700"
                        >
                          #{tag.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 4: Personnel File (Work Experience) */}
        <section id="personnel" className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-slate-800 pb-4 gap-2">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 font-mono text-[11px] font-bold">
                  HUMAN RESOURCES EMPLOYMENT RECORD
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white font-serif mt-1">
                Official Personnel File
              </h2>
            </div>
            <span className="text-xs font-mono text-slate-400">
              Approved by Corporate (Toby could find no violations)
            </span>
          </div>

          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col md:flex-row gap-5 hover:border-slate-700 transition"
              >
                <div className="md:w-60 shrink-0 flex items-start gap-3">
                  <div className="w-11 h-11 rounded-lg bg-slate-800 p-2 shrink-0 border border-slate-700 flex items-center justify-center">
                    <img src={exp.icon} alt={exp.title} className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white font-serif">{exp.title}</h3>
                    <span className="text-xs text-amber-400 font-mono block mt-0.5">{exp.date}</span>
                    <span className="text-[10px] font-mono text-slate-500 uppercase">Dunder Mifflin Verified</span>
                  </div>
                </div>

                <div className="flex-1 md:border-l md:border-slate-800 md:pl-6">
                  <ul className="space-y-2 list-disc list-inside text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                    {exp.points.map((point, pIdx) => (
                      <li key={pIdx}>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Employee Testimonials */}
        {testimonials && testimonials.length > 0 && (
          <section className="space-y-6">
            <div className="border-b border-slate-800 pb-4">
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono text-[11px] font-bold">
                PERFORMANCE APPRAISALS & PEER REVIEWS
              </span>
              <h2 className="text-2xl font-black text-white font-serif mt-1">
                Letters of Recommendation
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map((test, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between gap-4"
                >
                  <p className="text-sm text-slate-300 italic font-serif leading-relaxed">
                    "{test.testimonial}"
                  </p>
                  <div className="flex items-center gap-3 pt-3 border-t border-slate-800">
                    <img
                      src={test.image}
                      alt={test.name}
                      className="w-11 h-11 rounded-full object-cover border-2 border-amber-400"
                    />
                    <div>
                      <h4 className="text-sm font-bold text-white font-serif">{test.name}</h4>
                      <p className="text-xs text-slate-400 font-mono">
                        {test.designation} • {test.company}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Creed's Blog Easter Egg Review */}
              <div className="p-6 rounded-2xl bg-[#0a0f1a] border border-amber-400/30 flex flex-col justify-between gap-3 font-mono text-xs">
                <div>
                  <div className="flex items-center justify-between text-amber-400 font-bold mb-2">
                    <span>CREED's BLOG // SCRANTON BRANCH</span>
                    <span className="text-[10px] text-slate-500">CLASSIFIED</span>
                  </div>
                  <p className="text-slate-300 italic font-sans text-xs leading-relaxed">
                    "www.creedthoughts.gov.www\creedthoughts: I've inspected Rishat's Python and Django scripts. Fast, clean, no cops involved. He deserves the Dundie and a raise in Stanley Nickels."
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                  <span>— Creed Bratton (Quality Assurance)</span>
                  <span className="text-amber-400">100% Quality</span>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Section 6: Reception Desk (Contact Form) */}
        <section id="reception" className="space-y-6 pt-4">
          <div className="border-b border-slate-800 pb-4">
            <span className="px-2 py-0.5 rounded bg-amber-400/20 text-amber-400 font-mono text-[11px] font-bold">
              PAM'S RECEPTION DESK // IN-BOX
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white font-serif mt-1">
              File an Official Memo (Contact Rishat)
            </h2>
            <p className="text-slate-300 text-sm mt-1">
              "Dunder Mifflin, this is Pam. How may I direct your call?"
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Direct Contact Cards */}
            <div className="lg:col-span-2 space-y-4">
              <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4 font-mono text-xs">
                <div className="border-b border-slate-800 pb-3">
                  <span className="text-amber-400 font-bold uppercase block text-[10px]">Corporate Electronic Mail</span>
                  <a
                    href="mailto:talukderrishat2@gmail.com"
                    className="text-white hover:text-amber-400 font-bold text-sm block mt-1 transition"
                  >
                    talukderrishat2@gmail.com
                  </a>
                </div>

                <div className="border-b border-slate-800 pb-3">
                  <span className="text-amber-400 font-bold uppercase block text-[10px]">Branch Location</span>
                  <p className="text-white font-medium text-xs mt-1">
                    Bangladesh (Ready for Remote Work Worldwide // Scranton Co-op)
                  </p>
                </div>

                <div className="border-b border-slate-800 pb-3">
                  <span className="text-amber-400 font-bold uppercase block text-[10px]">Code Repository Archive</span>
                  <a
                    href="https://github.com/RishatTalukder"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white hover:text-amber-400 font-bold text-xs block mt-1 transition"
                  >
                    github.com/RishatTalukder
                  </a>
                </div>

                <div className="p-3 rounded-xl bg-blue-950/40 border border-blue-800/40 text-[11px] text-blue-200">
                  ☕ <em>"That's what she said."</em> — Michael Scott. For serious hiring inquiries, contract projects, or just to say hi, send a message below!
                </div>
              </div>
            </div>

            {/* Memo Submission Form */}
            <div className="lg:col-span-3">
              <form
                onSubmit={handleSubmit}
                className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4 font-mono"
              >
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 text-xs">
                  <span className="text-amber-400 font-bold">INTER-OFFICE MEMO FORM</span>
                  <span className="text-slate-500 text-[10px]">FORM REF: DM-2026</span>
                </div>

                {formStatus === "success" && (
                  <div className="p-3.5 rounded-xl bg-emerald-950/60 border border-emerald-500 text-emerald-200 text-xs">
                    ✓ MEMO FILED: Pam has delivered your message to Rishat's desk! I will contact you soon.
                  </div>
                )}
                {formStatus === "error" && (
                  <div className="p-3.5 rounded-xl bg-rose-950/60 border border-rose-500 text-rose-200 text-xs">
                    ✕ MEMO REJECTED BY CORPORATE: Please email directly at talukderrishat2@gmail.com.
                  </div>
                )}

                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-slate-300 mb-1.5 uppercase">
                    Your Full Name <span className="text-slate-500 font-normal">(Not 'William Charles Schneider')</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jim Halpert"
                    className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white placeholder-slate-600 text-xs focus:outline-none focus:border-amber-400 transition"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-slate-300 mb-1.5 uppercase">
                    Your Official Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jim.halpert@dundermifflin.com"
                    className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white placeholder-slate-600 text-xs focus:outline-none focus:border-amber-400 transition"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-slate-300 mb-1.5 uppercase">
                    Memo Content / Discussion Topic
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="What project or opportunity do you want to discuss?"
                    className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white placeholder-slate-600 text-xs focus:outline-none focus:border-amber-400 transition resize-y"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition flex items-center justify-center gap-2 shadow-md uppercase disabled:opacity-50"
                >
                  {loading ? "Transmitting Memo..." : "Send Official Memo"}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer styled as Dunder Mifflin Legal Disclaimer */}
      <footer className="mt-20 border-t border-slate-800 bg-[#090d16] py-10 px-4 sm:px-6 font-mono text-xs text-slate-400">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <p className="text-white font-bold font-serif">
              DUNDER MIFFLIN PAPER COMPANY, INC. (Scranton Branch)
            </p>
            <p className="text-slate-500 text-[11px]">
              © {new Date().getFullYear()} Md. Rishat Talukder. All rights reserved. Not affiliated with NBC / Universal.
            </p>
          </div>
          <div className="flex items-center gap-4 text-xs font-bold">
            <Link to="/" className="text-slate-400 hover:text-white transition">
              ← Version Prompt
            </Link>
            <span>•</span>
            <Link to="/og" className="text-amber-400 hover:text-amber-300 transition">
              OG 3D Version 🚀
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SlopPage;
