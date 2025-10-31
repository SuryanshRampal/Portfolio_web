import { useEffect } from "react";

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  useEffect(() => {
    // Load Unicorn Studio script
    if (!(window as any).UnicornStudio) {
      (window as any).UnicornStudio = { isInitialized: false };

      const script = document.createElement("script");
      script.src =
        "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.33/dist/unicornStudio.umd.js";
      script.onload = () => {
        if (!(window as any).UnicornStudio.isInitialized) {
          (window as any).UnicornStudio.init();
          (window as any).UnicornStudio.isInitialized = true;
        }
      };
      (document.head || document.body).appendChild(script);
    } else if ((window as any).UnicornStudio.isInitialized) {
      // Re-initialize if already loaded
      (window as any).UnicornStudio.init();
    }
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-end overflow-hidden">
      <div className="w-1/2 flex justify-center items-center pr-16 md:pr-24">
        {/* Hero Content - Right Side */}
        <div className="relative z-10 text-white max-w-md space-y-8 text-center">
          {/* Title */}
          <div className="relative">
            <h1 className="text-6xl drop-shadow-[0_0_20px_rgba(0,255,102,0.6)] text-shadow-[0_0_10px_#00FF66] animate-pulse-slow">
              WELCOME
            </h1>
            {/* Scanline effect on title */}
            <div
              className="absolute inset-0 pointer-events-none opacity-20"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, transparent, transparent 2px, #00FF66 2px, #00FF66 3px)",
              }}
            />
          </div>

          {/* Navigation Buttons - Vertical Stack */}
          <div className="flex flex-col gap-6">
            {/* About Button */}
            <button
              onClick={() => onNavigate("about")}
              className="group relative px-8 py-4 bg-black/40 backdrop-blur-sm border-2 border-[#00FF66] text-[#00FF66] rounded-lg hover:bg-[#00FF66] hover:text-black transition-all duration-300 font-mono shadow-[0_0_25px_rgba(0,255,102,0.4)] hover:shadow-[0_0_40px_rgba(0,255,102,0.8)] overflow-hidden"
            >
              {/* Button scanline effect */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity pointer-events-none"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(0deg, transparent, transparent 1px, #000 1px, #000 2px)",
                }}
              />
              <span className="relative z-10 tracking-wider">
                {"> ABOUT <"}
              </span>
            </button>

            {/* Projects Button */}
            <button className="group relative px-8 py-4 bg-black/40 backdrop-blur-sm border-2 border-[#00FF66] text-[#00FF66] rounded-lg hover:bg-[#00FF66] hover:text-black transition-all duration-300 font-mono shadow-[0_0_25px_rgba(0,255,102,0.4)] hover:shadow-[0_0_40px_rgba(0,255,102,0.8)] overflow-hidden">
              {/* Button scanline effect */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity pointer-events-none"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(0deg, transparent, transparent 1px, #000 1px, #000 2px)",
                }}
              />
              <span className="relative z-10 tracking-wider">
                {"> PROJECTS <"}
              </span>
            </button>

            {/* Contact Button */}
            <button className="group relative px-8 py-4 bg-black/40 backdrop-blur-sm border-2 border-[#00FF66] text-[#00FF66] rounded-lg hover:bg-[#00FF66] hover:text-black transition-all duration-300 font-mono shadow-[0_0_25px_rgba(0,255,102,0.4)] hover:shadow-[0_0_40px_rgba(0,255,102,0.8)] overflow-hidden">
              {/* Button scanline effect */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity pointer-events-none"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(0deg, transparent, transparent 1px, #000 1px, #000 2px)",
                }}
              />
              <span className="relative z-10 tracking-wider">
                {"> CONTACT <"}
              </span>
            </button>
          </div>

          {/* Terminal Cursor Indicator */}
          <div className="flex items-center gap-2 text-[#00FF66] font-mono text-sm opacity-70">
            <span className="animate-pulse">{">"}</span>
            <span className="inline-block w-2 h-4 bg-[#00FF66] animate-blink" />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        @keyframes blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
      `}</style>
    </section>
  );
}