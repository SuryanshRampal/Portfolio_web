import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface AboutSectionProps {
  onBack: () => void;
}

export function AboutSection({ onBack }: AboutSectionProps) {
  const [showLoading, setShowLoading] = useState(true);
  const [displayedText, setDisplayedText] = useState('');
  const [currentLine, setCurrentLine] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const aboutLines = [
    "> who_am_i",
    "Hi, I'm Suryansh Rampal 👨‍💻",
    "Computer Science + Finance Student",
    "",
    "> current_project",
    "StockSim — Virtual Trading Simulator",
    "",
    "> interests",
    "Web Dev | System Design | Product Thinking | FinTech",
    "",
    "> learning",
    "Next.js | UI fundamentals | System Architecture",
    "",
    "> looking_for",
    "Frontend / FinTech internships"
  ];

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  // Loading effect
  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setShowLoading(false);
    }, 1200);
    return () => clearTimeout(loadingTimer);
  }, []);

  // Typewriter effect
  useEffect(() => {
    if (showLoading) return;

    if (currentLine < aboutLines.length) {
      const line = aboutLines[currentLine];
      let charIndex = 0;

      const typeInterval = setInterval(() => {
        if (charIndex <= line.length) {
          setDisplayedText(prev => {
            const lines = prev.split('\n');
            lines[currentLine] = line.slice(0, charIndex);
            return lines.join('\n');
          });
          charIndex++;
        } else {
          clearInterval(typeInterval);
          setCurrentLine(prev => prev + 1);
          setDisplayedText(prev => prev + '\n');
        }
      }, 30);

      return () => clearInterval(typeInterval);
    }
  }, [currentLine, showLoading]);

  return (
    <motion.section
      initial={{ scale: 1.1, opacity: 0, filter: 'blur(20px)' }}
      animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
      exit={{ scale: 0.95, opacity: 0, filter: 'blur(20px)' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden px-6"
    >
      {/* CRT Effect Overlays */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Scanlines */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #00FF66 2px, #00FF66 4px)',
            animation: 'scanlines 8s linear infinite'
          }}
        />
        {/* CRT Glow */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(0, 255, 102, 0.2) 0%, transparent 70%)',
            animation: 'pulse 2s ease-in-out infinite alternate'
          }}
        />
        {/* Noise texture */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' /%3E%3C/svg%3E")',
          }}
        />
      </div>

      {/* Terminal Prompt Header */}
      <div className="relative z-10 mb-8 text-center">
        <div className="inline-block">
          <span className="text-[#00FF66] font-mono text-sm opacity-70">
            user@portfolio:~$ cat about_me.txt
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <pre className="font-mono text-[#00FF66] text-lg leading-relaxed text-left inline-block drop-shadow-[0_0_10px_rgba(0,255,102,0.5)]">
          {showLoading ? (
            <span className="animate-pulse">{'> loading about_me.txt ...'}</span>
          ) : (
            <>
              {displayedText}
              <span className="inline-block">
            {showCursor ? '_' : '\u00A0'}
          </span>
            </>
          )}
        </pre>
      </div>

      {/* Navigation Buttons */}
      <div className="relative z-10 mt-12 flex gap-4 justify-center flex-wrap">
        <button
          onClick={onBack}
          className="px-8 py-3 bg-transparent border-2 border-[#00FF66] text-[#00FF66] rounded-lg hover:bg-[#00FF66] hover:text-black transition-all font-mono shadow-[0_0_15px_rgba(0,255,102,0.3)] hover:shadow-[0_0_30px_rgba(0,255,102,0.7)]"
        >
          {'< Back to Home'}
        </button>
        <button className="px-8 py-3 bg-[#00FF66] text-black rounded-lg hover:bg-[#00FF66]/80 transition-all font-mono shadow-[0_0_20px_rgba(0,255,102,0.5)] hover:shadow-[0_0_30px_rgba(0,255,102,0.7)]">
          View Projects
        </button>
        <button className="px-8 py-3 bg-transparent border-2 border-[#00FF66] text-[#00FF66] rounded-lg hover:bg-[#00FF66] hover:text-black transition-all font-mono shadow-[0_0_15px_rgba(0,255,102,0.3)]">
          Contact Me
        </button>
      </div>

      {/* Glitch effect overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-10 z-5"
        style={{
          background: 'linear-gradient(transparent 50%, rgba(0, 255, 102, 0.03) 50%)',
          backgroundSize: '100% 4px',
          animation: 'glitch 3s infinite'
        }}
      />

      <style>{`
        @keyframes scanlines {
          0% { transform: translateY(0); }
          100% { transform: translateY(4px); }
        }
        @keyframes pulse {
          0% { opacity: 0.15; }
          100% { opacity: 0.25; }
        }
        @keyframes glitch {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-2px); }
          40% { transform: translateX(2px); }
          60% { transform: translateX(-1px); }
          80% { transform: translateX(1px); }
        }
      `}</style>
    </motion.section>
  );
}
