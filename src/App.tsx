import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="py-8 text-center text-light/60">
        <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
