import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import MissionVision from './components/MissionVision';
import Modalities from './components/Modalities';
import Regulations from './components/Regulations';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Benefits />
      <MissionVision />
      <Modalities />
      <Regulations />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
