import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ThreeCanvas from './components/ThreeCanvas';
import { ChevronDown, Globe, Car, Users, Box } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const modelRef = useRef();
  const containerRef = useRef();

  useEffect(() => {
    // 1. Initialize Lenis for smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0, 0);

    // 2. Setup Snap Logic and Animations
    const slides = gsap.utils.toArray('.slide');
    
    // Set initial model state
    if (modelRef.current) {
        gsap.set(modelRef.current.rotation, { x: 0, y: Math.PI / 4, z: 0 });
        gsap.set(modelRef.current.position, { x: 2, y: -0.5, z: 0 });
    }

    // ScrollTrigger timeline for snapping and background/model updates
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
        snap: {
          snapTo: 1 / (slides.length - 1),
          duration: { min: 0.2, max: 0.8 },
          ease: "power1.inOut"
        }
      }
    });

    // Define the sequence of animations for each slide transition
    if (modelRef.current) {
        // Slide 1 to 2
        tl.to(modelRef.current.rotation, { y: -Math.PI / 6 }, 0);
        tl.to(modelRef.current.position, { x: -3 }, 0);
        tl.to('body', { backgroundColor: '#18181b', color: '#f4f4f5' }, 0); // Zinc 900 -> dark

        // Slide 2 to 3
        tl.to(modelRef.current.rotation, { y: Math.PI }, 1 / (slides.length - 1));
        tl.to(modelRef.current.position, { x: 0, z: 2 }, 1 / (slides.length - 1));
        tl.to('body', { backgroundColor: '#f4f4f5', color: '#18181b' }, 1 / (slides.length - 1)); // Zinc 100 -> light

        // Slide 3 to 4
        tl.to(modelRef.current.rotation, { y: Math.PI * 1.5, x: 0.2 }, 2 / (slides.length - 1));
        tl.to(modelRef.current.position, { x: 2, z: 0, scale: 0.8 }, 2 / (slides.length - 1));
        tl.to('body', { backgroundColor: '#09090b', color: '#f4f4f5' }, 2 / (slides.length - 1)); // Zinc 950 -> darker
    }

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full">
      {/* 3D Background Canvas */}
      <ThreeCanvas modelRef={modelRef} />

      {/* Navigation (fixed top) */}
      <nav className="fixed top-0 w-full z-50 px-8 py-6 flex justify-between items-center mix-blend-difference text-white">
        <div className="text-sm font-semibold tracking-wider uppercase flex items-center gap-2">
            <Car size={16} /> Toyota strategy
        </div>
        <div className="text-sm font-medium opacity-60">Essentials of Management</div>
      </nav>

      <main className="relative z-20">
        
        {/* Slide 1: Starter Page */}
        <section className="slide h-screen w-full flex flex-col justify-center px-12 md:px-24">
          <div className="max-w-xl">
            <h1 className="text-6xl md:text-8xl font-medium tracking-tighter mb-6 leading-[0.9]">
              The<br/>Metamorphosis
            </h1>
            <p className="text-lg opacity-60 font-medium max-w-sm mb-8">
              Strategic & organizational analysis of a global mobility empire in transition.
            </p>
            <div className="glassmorphism p-6 rounded-2xl w-fit">
              <span className="text-sm font-medium opacity-80 uppercase tracking-widest block mb-1">Scroll to begin</span>
            </div>
          </div>
          <div className="absolute bottom-10 left-12 animate-bounce opacity-50">
            <ChevronDown size={32} />
          </div>
        </section>

        {/* Slide 2: Planning (Dark Mode transition) */}
        <section className="slide h-screen w-full flex items-center justify-end px-12 md:px-24">
           <div className="w-full md:w-1/2 glassmorphism p-10 rounded-[2rem] shadow-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold uppercase tracking-wider mb-6">
                <Target size={14} /> Chapter 2
              </div>
              <h2 className="text-4xl md:text-5xl font-medium mb-6 tracking-tight">Planning & Strategy</h2>
              <p className="opacity-70 text-lg mb-8 leading-relaxed">
                By perfectly balancing the stability of its historical philosophy with the brutal pragmatism required by modern markets, Toyota utilizes a robust TOWS matrix and BCG models to insulate long-term massive CA-PEX decisions from shifting fads.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h3 className="font-semibold mb-1">Strengths</h3>
                    <p className="text-sm opacity-60">Global scale & resilience</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h3 className="font-semibold mb-1">Threats</h3>
                    <p className="text-sm opacity-60">Aggressive EV competitors</p>
                </div>
              </div>
           </div>
        </section>

        {/* Slide 3: Organizing (Light mode transition) */}
        <section className="slide h-screen w-full flex items-center px-12 md:px-24">
           <div className="w-full md:w-1/2 glassmorphism border-black/5 bg-white/80 dark:bg-black/40 p-10 rounded-[2rem] shadow-2xl backdrop-blur-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/10 border border-black/10 text-xs font-semibold uppercase tracking-wider mb-6">
                <Globe size={14} /> Chapter 3
              </div>
              <h2 className="text-4xl md:text-5xl font-medium mb-6 tracking-tight">Decentralized Power</h2>
              <p className="opacity-70 text-lg mb-8 leading-relaxed">
                Toyota structurally shifted from a rigid hub-and-spoke hierarchy to an agile 3D matrix. By distributing absolute authority to localized regional chiefs, it fundamentally prevents bottlenecks, accelerating deployment globally.
              </p>
           </div>
        </section>

        {/* Slide 4: People & Culture (Dark mode, smaller model) */}
        <section className="slide h-screen w-full flex flex-col justify-center items-center px-12 md:px-24 text-center">
            <div className="max-w-2xl glassmorphism p-12 rounded-[3rem] border border-white/10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold uppercase tracking-wider mb-8 mx-auto">
                    <Users size={14} /> Chapter 4 & 5
                </div>
                <h2 className="text-4xl md:text-6xl font-medium mb-6 tracking-tight">The Human Asset</h2>
                <p className="opacity-70 text-lg md:text-xl leading-relaxed mb-10">
                    Workers are not viewed as replaceable variables, but appreciating capital. The renowned psychological contract provides lifelong job security in exchange for relentless, unparalleled productivity improvements (Kaizen).
                </p>
                <button className="bg-white text-black px-6 py-3 rounded-full font-medium hover:scale-105 transition-transform">
                    Start presentation
                </button>
            </div>
        </section>

      </main>
    </div>
  );
}
