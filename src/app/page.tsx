import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import TechStack from '@/components/TechStack';
import Honors from '@/components/Honors';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <TechStack />
      <Honors />
      <Contact />
      <Footer />
    </main>
  );
}