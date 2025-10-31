import { useState } from "react";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";

export default function App() {
  const [currentView, setCurrentView] = useState<
    "hero" | "about"
  >("hero");

  const handleNavigate = (section: string) => {
    if (section === "about") {
      setCurrentView("about");
    }
  };

  const handleBack = () => {
    setCurrentView("hero");
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Background - Unicorn Studio Animation Always Visible */}
      <div className="fixed inset-0">
        <div
          data-us-project="p0yyb1p2abgoNJw78xJi"
          style={{ width: "100vw", height: "100vh" }}

        />
      </div>

      {/* Content Layer */}
      <div className="relative z-10">
        {currentView === "hero" ? (
          <HeroSection onNavigate={handleNavigate} />
        ) : (
          <AboutSection onBack={handleBack} />
        )}
      </div>
    </div>
  );
}