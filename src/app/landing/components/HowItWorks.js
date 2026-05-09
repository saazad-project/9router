"use client";

export default function HowItWorks() {
  return (
    <section className="py-24 border-y border-[#054a5f] bg-[#132a3a]/30" id="how-it-works">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How ZenConsole Works</h2>
          <p className="text-gray-400 max-w-xl text-lg">
            Intelligent routing architecture delivers your requests to the optimal AI provider with zero complexity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-[2px] bg-linear-to-r from-gray-700 via-[#0B7C8F] to-gray-700 -z-10"></div>
          
          {/* Step 1: CLI & SDKs */}
          <div className="flex flex-col gap-6 relative group">
            <div className="w-24 h-24 rounded-2xl bg-[#1a1f26] border border-[#054a5f] flex items-center justify-center shadow-xl group-hover:border-gray-500 transition-colors z-10 mx-auto md:mx-0">
              <span className="material-symbols-outlined text-4xl text-gray-300">terminal</span>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">1. Request Received</h3>
              <p className="text-sm text-gray-400">
                Your CLI tools or applications send requests to a single unified endpoint.
              </p>
            </div>
          </div>

          {/* Step 2: ZenConsole Hub */}
          <div className="flex flex-col gap-6 relative group md:items-center md:text-center">
            <div className="w-24 h-24 rounded-2xl bg-[#1a1f26] border-2 border-[#0B7C8F] flex items-center justify-center shadow-[0_0_30px_rgba(11,124,143,0.2)] z-10 mx-auto">
              <span className="material-symbols-outlined text-4xl text-[#5DD9E8] animate-pulse">hub</span>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-[#5DD9E8]">2. Intelligent Routing</h3>
              <p className="text-sm text-gray-400">
                ZenConsole analyzes the request, checks provider health, and routes for optimal performance.
              </p>
            </div>
          </div>

          {/* Step 3: AI Providers */}
          <div className="flex flex-col gap-6 relative group md:items-end md:text-right">
            <div className="w-24 h-24 rounded-2xl bg-[#1a1f26] border border-[#054a5f] flex items-center justify-center shadow-xl group-hover:border-gray-500 transition-colors z-10 mx-auto md:mx-0">
              <div className="grid grid-cols-2 gap-2">
                <div className="w-6 h-6 rounded bg-white/10"></div>
                <div className="w-6 h-6 rounded bg-white/10"></div>
                <div className="w-6 h-6 rounded bg-white/10"></div>
                <div className="w-6 h-6 rounded bg-white/10"></div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">3. Instant Delivery</h3>
              <p className="text-sm text-gray-400">
                Request is fulfilled by OpenAI, Anthropic, Gemini, or your preferred provider instantly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

