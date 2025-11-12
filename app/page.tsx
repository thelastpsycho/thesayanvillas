import Navigation from './components/Navigation';
import Hero from './components/Hero';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />

      {/* Additional sections can be added here */}
      <main className="pt-16">
        {/* Welcome section or other content */}
      </main>
    </div>
  );
}
