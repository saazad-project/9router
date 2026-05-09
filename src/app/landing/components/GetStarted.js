"use client";
import { useCopyToClipboard } from "@/shared/hooks/useCopyToClipboard";

export default function GetStarted() {
  const { copied, copy } = useCopyToClipboard();

  const handleCopy = (text) => {
    copy(text, "landing");
  };

  return (
    <section className="py-24 px-6 bg-[#0a0d11]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left: Steps */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Started in Seconds</h2>
            <p className="text-gray-400 text-lg mb-8">
              Deploy ZenConsole, configure your AI providers, and start routing intelligent requests immediately.
            </p>
            
            <div className="flex flex-col gap-6">
              <div className="flex gap-4">
                <div className="flex-none w-8 h-8 rounded-full bg-[#0B7C8F]/20 text-[#5DD9E8] flex items-center justify-center font-bold">1</div>
                <div>
                  <h4 className="font-bold text-lg">Install ZenConsole</h4>
                  <p className="text-sm text-gray-500 mt-1">Run our setup command and be ready in minutes</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-none w-8 h-8 rounded-full bg-[#0B7C8F]/20 text-[#5DD9E8] flex items-center justify-center font-bold">2</div>
                <div>
                  <h4 className="font-bold text-lg">Configure Providers</h4>
                  <p className="text-sm text-gray-500 mt-1">Add API keys via our intuitive dashboard</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-none w-8 h-8 rounded-full bg-[#0B7C8F]/20 text-[#5DD9E8] flex items-center justify-center font-bold">3</div>
                <div>
                  <h4 className="font-bold text-lg">Start Routing</h4>
                  <p className="text-sm text-gray-500 mt-1">Point your tools to your ZenConsole endpoint</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Code block */}
          <div className="flex-1 w-full">
            <div className="rounded-xl overflow-hidden bg-[#1a1f26] border border-[#054a5f] shadow-2xl">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-[#252f3a] border-b border-gray-700">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="ml-2 text-xs text-gray-500 font-mono">terminal</div>
              </div>
              
              {/* Terminal content */}
              <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto">
                <div 
                  className="flex items-center gap-2 mb-4 group cursor-pointer"
                  onClick={() => handleCopy("npx zenconsole")}
                >
                  <span className="text-green-400">$</span>
                  <span className="text-white">npx zenconsole</span>
                  <span className="ml-auto text-gray-500 text-xs opacity-0 group-hover:opacity-100">
                    {copied === "landing" ? "✓ Copied" : "Copy"}
                  </span>
                </div>
                
                <div className="text-gray-400 mb-6">
                  <span className="text-[#0B7C8F]">&gt;</span> Starting ZenConsole...<br/>
                  <span className="text-[#0B7C8F]">&gt;</span> Server running on <span className="text-cyan-400">http://localhost:20128</span><br/>
                  <span className="text-[#0B7C8F]">&gt;</span> Dashboard: <span className="text-cyan-400">http://localhost:20128/dashboard</span><br/>
                  <span className="text-green-400">&gt;</span> Ready for intelligent routing! ✓
                </div>
                
                <div className="text-xs text-gray-500 mb-2 border-t border-gray-700 pt-4">
                  📝 Configure providers in dashboard or environment variables
                </div>
                
                <div className="text-gray-400 text-xs">
                  <span className="text-cyan-400">Data Location:</span><br/>
                  <span className="text-gray-500">  macOS/Linux:</span> ~/.zenconsole/db.json<br/>
                  <span className="text-gray-500">  Windows:</span> %APPDATA%/zenconsole/db.json
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

