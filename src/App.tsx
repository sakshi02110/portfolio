import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';
import { FloatingElements } from './components/FloatingElements';
import { Background } from './components/Background';
import { LoadingScreen } from './components/LoadingScreen';
import { GithubStats } from './components/GithubStats';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen bg-primary-bg text-primary-text relative overflow-hidden">
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      
      <Background />
      <ScrollProgress />
      <FloatingElements />
      
      {!isLoading && (
        <>
          <Navigation />
          <main className="relative z-10">
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Achievements />
            <Contact />
            <GithubStats />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}