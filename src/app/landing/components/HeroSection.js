"use client";

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 px-6 min-h-[90vh] flex flex-col items-center justify-center overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#0B7C8F]/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="relative z-10 max-w-4xl w-full text-center flex flex-col items-center gap-8">
        {/* Version badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-[#054a5f] bg-[#132a3a]/50 px-3 py-1 text-xs font-medium text-[#5DD9E8]">
          <span className="flex h-2 w-2 rounded-full bg-[#5DD9E8] animate-pulse"></span>
          v1.0 is now live
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight">
          Premium AI <br/>
          <span className="text-[#5DD9E8]">Infrastructure Platform</span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light">
          Enterprise-grade endpoint proxy with intelligent routing, unified key management, and real-time monitoring. Works seamlessly with Claude, OpenAI, Cline, and all major AI tools.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 w-full">
          <button className="h-12 px-8 rounded-lg bg-[#0B7C8F] hover:bg-[#066b7a] text-white text-base font-bold transition-all shadow-[0_0_15px_rgba(11,124,143,0.4)] flex items-center gap-2">
            <span className="material-symbols-outlined">rocket_launch</span>
            Get Started
          </button>
          <a 
            href="https://github.com/decolua/9router" 
            target="_blank" 
            rel="noopener noreferrer"
            className="h-12 px-8 rounded-lg border border-[#054a5f] bg-[#132a3a] hover:bg-[#1a3a47] text-white text-base font-bold transition-all flex items-center gap-2"
          >
            <span className="material-symbols-outlined">code</span>
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

