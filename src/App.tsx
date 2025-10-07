import Header from "./components/Header";
import Hero from "./components/Hero";
import VideoSection from "./components/VideoSection";
import Benefits from "./components/Benefits";
import Curriculum from "./components/Curriculum";
import Certificate from "./components/Certificate";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Instructor from "./components/Instructor";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <VideoSection />
        <Benefits />
        <Curriculum />
        <Certificate />
        <Instructor />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
