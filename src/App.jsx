import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import About from "./components/About";
import AIAssistant from "./components/AIAssistant";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Heroes from "./components/Heroes";
import Memorial from "./components/Memorial";
import Timeline from "./components/Timeline";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main>
        <Hero />
        <About />
        <Timeline />
        <Gallery />
        <Heroes />
        <Memorial />
      </main>
      <Footer />
      <AIAssistant />
    </div>
  );
}

export default App;
