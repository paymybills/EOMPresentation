import React, { useEffect, useRef, useState } from 'react';
import {
    ChevronDown, Target, Globe, Users, Lightbulb, ShieldCheck,
    TrendingUp, Car, AlertTriangle, BarChart3, BookOpen,
    Award, Scale, Waves, Zap, Shield, GitMerge, FileText, CheckCircle2
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import ThreeCanvas from './components/ThreeCanvas';

gsap.registerPlugin(ScrollTrigger);

// --- COMPONENTS ---

const SectionHeading = ({ subtitle, title }) => (
    <div className="mb-16 md:mb-24">
        <h3 className="text-red-600 font-medium tracking-widest text-[16px] mb-4">{subtitle}</h3>
        <h2 className="text-[22px] md:text-[22px] font-medium text-slate-100 leading-tight">{title}</h2>
        <div className="h-1 w-24 bg-red-600 mt-8 rounded-full"></div>
    </div>
);

const Card = ({ icon: Icon, title, text, highlight }) => (
    <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl hover:border-red-500/30 transition-colors">
        <div className="flex items-center gap-4 mb-4">
            <div className="bg-red-500/10 p-3 rounded-lg text-red-500">
                <Icon size={24} />
            </div>
            <h4 className="text-[16px] font-medium text-white">{title}</h4>
        </div>
        <p className="text-slate-400 text-[14px] leading-relaxed">{text}</p>
        {highlight && <div className="mt-4 text-[14px] font-medium text-red-400 tracking-wider">{highlight}</div>}
    </div>
);

// --- MAIN APP ---

export default function App() {
    const containerRef = useRef(null);
    const modelRef = useRef(null);
    const [activeSection, setActiveSection] = useState('hero');

    const handleNavClick = (section) => {
        setActiveSection(section);
        if (window.sendPrompt) {
            window.sendPrompt(`Navigated to ${section}`);
        } else {
            console.log(`Navigated to ${section}`);
        }
    };

    // Initialize Lenis, Intersection Observer and GSAP Scroll animations
    useEffect(() => {
        // Initialize Lenis
        const lenis = new Lenis({
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          direction: 'vertical',
          smooth: true,
        });

        lenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.add((time) => lenis.raf(time * 1000));
        gsap.ticker.lagSmoothing(0, 0);

        // GSAP Model Animations
        const sections = document.querySelectorAll('section');
        if (modelRef.current && sections.length > 0) {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: 1,
                }
            });
            // Rotate and move model down as we scroll
            tl.to(modelRef.current.rotation, { y: Math.PI * 4, x: Math.PI / 4 }, 0);
            tl.to(modelRef.current.position, { y: -sections.length * 2 }, 0);
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('opacity-100', 'translate-y-0');
                        entry.target.classList.remove('opacity-0', 'translate-y-12');
                    }
                });
            },
            { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
        );

        const animateSections = document.querySelectorAll('.animate-on-scroll');
        animateSections.forEach((section) => observer.observe(section));

        return () => {
            lenis.destroy();
            animateSections.forEach((section) => observer.unobserve(section));
            observer.disconnect();
        };
    }, []);

    return (
        <div ref={containerRef} className="bg-slate-950 text-slate-300 font-sans min-h-screen selection:bg-red-600 selection:text-white overflow-hidden scroll-smooth relative">
            
            <ThreeCanvas modelRef={modelRef} />

            {/* Top Navigation Bar */}
            <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 px-6 py-4 flex justify-between items-center mix-blend-exclusion">
                 <div className="text-[16px] font-medium text-white flex items-center gap-2">
                    <Car className="text-red-600" size={20} />
                    Toyota Strategy
                 </div>
                 <div className="flex gap-6 text-[14px] font-medium text-slate-400">
                     <button onClick={() => handleNavClick('intro')} className={`hover:text-white transition-colors ${activeSection === 'intro' ? 'text-white border-b-2 border-red-600' : ''}`}>Intro</button>
                     <button onClick={() => handleNavClick('planning')} className={`hover:text-white transition-colors ${activeSection === 'planning' ? 'text-white border-b-2 border-red-600' : ''}`}>Planning</button>
                     <button onClick={() => handleNavClick('organizing')} className={`hover:text-white transition-colors ${activeSection === 'organizing' ? 'text-white border-b-2 border-red-600' : ''}`}>Organizing</button>
                     <button onClick={() => handleNavClick('staffing')} className={`hover:text-white transition-colors ${activeSection === 'staffing' ? 'text-white border-b-2 border-red-600' : ''}`}>Staffing</button>
                     <button onClick={() => handleNavClick('leading')} className={`hover:text-white transition-colors ${activeSection === 'leading' ? 'text-white border-b-2 border-red-600' : ''}`}>Leading</button>
                 </div>
            </nav>

            {/* --- HERO SECTION --- */}
            <section className="hero-section relative min-h-screen flex flex-col justify-center items-center text-center px-4 py-20 overflow-hidden">
                <div className="hero-bg absolute inset-0 z-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900/40 via-slate-950 to-slate-950"></div>

                <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
                    <div className="inline-block px-4 py-1.5 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-[14px] font-medium tracking-widest mb-8">
                        Essentials of management
                    </div>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-6 tracking-tight">
                        Toyota <span className="text-red-600 font-medium">motor</span> corp.
                    </h1>
                    <p className="text-xl md:text-2xl font-light text-slate-400 mb-12 max-w-3xl">
                        Strategic & organisational analysis of a global mobility empire in transition.
                    </p>

                    <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl w-full max-w-4xl backdrop-blur-sm">
                        <h3 className="text-red-500 font-medium tracking-widest text-[14px] mb-6 border-b border-slate-800 pb-4">MIT Manipal | Math and computing 2027</h3>
                        <div className="flex flex-col md:flex-row justify-between text-[14px] text-slate-400 text-center gap-4">
                            <span>Ch 1: Intro</span>
                            <span>Ch 2: Planning</span>
                            <span>Ch 3: Organizing</span>
                            <span>Ch 4: Staffing</span>
                            <span>Ch 5: Leading</span>
                            <span>Ch 6: Controlling</span>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-500 hidden md:block">
                    <ChevronDown size={32} />
                </div>
            </section>

            {/* --- CHAPTER 1: INTRO --- */}
            <section className="animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out py-24 md:py-32 px-6 lg:px-12 max-w-7xl mx-auto">
                <SectionHeading subtitle="Chapter 1" title="The metamorphosis" />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <p className="text-[18px] leading-relaxed mb-6 font-normal">
                            Originating from the Toyoda Automatic Loom Works in the early 20th century under Sakichi Toyoda, Toyota has constantly transcended its mechanical roots. After World War II, under the guidance of Kiichiro Toyoda and legendary engineer Taiichi Ohno, the company pioneered the Toyota Production System (TPS) — a socio-technical framework that eradicated waste (muda) and introduced "Just-In-Time" manufacturing to the world. TPS fundamentally altered global industrial manufacturing, cementing Toyota's legacy not just as a car builder, but as an efficiency pioneer.
                        </p>
                        <p className="text-[18px] leading-relaxed mb-6 font-normal">
                            Today, facing a generational disruption driven by electrification, autonomy, and artificial intelligence, Toyota is executing another comprehensive strategic pivot. They are shedding the identity of a traditional automaker to become a holistic <strong>mobility company</strong> dedicated to the seamless global movement of people, goods, information, and energy. This transition places software-defined vehicles (SDVs) and interconnected smart-city infrastructures, such as the Woven City project, at the epicenter of their future growth strategy.
                        </p>
                        <blockquote className="border-l-4 border-red-600 pl-6 py-4 my-8 bg-slate-900/50 text-[18px] text-slate-200">
                            <span className="font-medium block text-red-500 text-[14px] tracking-widest mb-2">Core mission</span>
                            "Producing happiness for all."
                        </blockquote>
                        <p className="text-[18px] leading-relaxed mb-8 text-slate-400 font-normal">
                            This ethos is anchored by the corporate vision of <em>"creating mobility for all"</em>. It is a commitment ensuring unrestricted, safe, and equitable access to transportation across diverse global demographics—from advanced robotic mobility aids for the elderly in aging societies like Japan, to rugged, affordable hybrids for emerging markets in Africa and Southeast Asia.
                        </p>

                        <h4 className="text-[16px] font-medium text-white mb-4 flex items-center gap-2"><BookOpen className="text-red-500" /> The toyoda precepts (1935)</h4>
                        <ul className="space-y-3 text-slate-400 text-[14px]">
                            <li className="flex gap-3"><span className="text-red-500">1.</span> Faithful to duties to contribute to the overall good. A principle demanding corporate citizenship above isolated profit-seeking.</li>
                            <li className="flex gap-3"><span className="text-red-500">2.</span> Studiousness and creativity to stay ahead of the times. The foundational basis for continuous internal innovation and R&D.</li>
                            <li className="flex gap-3"><span className="text-red-500">3.</span> Practicality while eschewing frivolousness. A core tenet that directly birthed lean manufacturing and value-driven engineering.</li>
                            <li className="flex gap-3"><span className="text-red-500">4.</span> Foster a warm and homelike workplace atmosphere. Ensuring psychological safety and mutual respect on the factory floor (genba).</li>
                            <li className="flex gap-3"><span className="text-red-500">5.</span> Profound respect for spiritual matters and gratitude. Fostering humility in leadership and profound respect for the communities they operate in.</li>
                        </ul>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl flex flex-col items-center text-center justify-center col-span-2">
                            <Award className="text-red-500 mb-4" size={48} />
                            <h4 className="text-[18px] font-medium text-white mb-2">Gold prize in PRIDE INDEX</h4>
                            <p className="text-[14px] text-slate-400">Awarded for the 5th consecutive year (2025), validating their robust diversity, equity, and inclusion (DEI) initiatives.</p>
                        </div>
                        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex flex-col items-center text-center justify-center">
                            <Car className="text-slate-500 mb-4" size={32} />
                            <h4 className="text-[22px] font-medium text-white mb-1">5.5M</h4>
                            <p className="text-[14px] text-slate-400 tracking-widest">Units (H1 2025)</p>
                        </div>
                        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex flex-col items-center text-center justify-center">
                            <TrendingUp className="text-slate-500 mb-4" size={32} />
                            <h4 className="text-[22px] font-medium text-white mb-1">¥48T</h4>
                            <p className="text-[14px] text-slate-400 tracking-widest">FY25 revenue</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- CHAPTER 2: PLANNING (SWOT, TOWS, Blue Ocean, Porter) --- */}
            <section className="animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out py-24 md:py-32 px-6 lg:px-12 bg-slate-900/30 border-y border-slate-800">
                <div className="max-w-7xl mx-auto">
                    <SectionHeading subtitle="Chapter 2: Planning" title="Strategic intelligence" />

                    <p className="text-[18px] max-w-4xl mb-16 text-slate-400 font-normal">
                        Planning is a continuous, systemic integration of external market realities with internal manufacturing capabilities. We analyze Toyota through canonical frameworks: SWOT, TOWS, Blue Ocean, BCG, and Porter's Five Forces. This top-down strategic planning phase ensures that multi-billion dollar capital expenditure decisions—like battery lab investments and factory retrofits—are insulated from short-term market hysteria.
                    </p>

                    {/* 1. SWOT MATRIX */}
                    <div className="mb-20">
                        <h3 className="text-[18px] font-medium text-white mb-8 flex items-center gap-3"><Target className="text-red-500" /> 1. The SWOT matrix</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-slate-900 border border-emerald-500/20 rounded-2xl p-6 relative overflow-hidden">
                                <h4 className="text-[16px] font-medium text-emerald-400 mb-4">Strengths</h4>
                                <ul className="space-y-2 text-slate-300 text-[14px]">
                                    <li className="flex gap-2"><span className="text-emerald-500">●</span> <strong>Operational scale:</strong> Best-selling automaker globally with over 5.5M units shipped in H1 2025. Supported by a AAA+ brand valuation of $64.7B.</li>
                                    <li className="flex gap-2"><span className="text-emerald-500">●</span> <strong>Manufacturing supremacy:</strong> The highly resilient Toyota production system (TPS) provides unmatched defect-reduction and lean operating leverage.</li>
                                    <li className="flex gap-2"><span className="text-emerald-500">●</span> <strong>Hedging risk:</strong> A well-diversified multi-pathway product portfolio covering internal combustion (ICE), hybrids (HEV), plug-ins (PHEV), hydrogen (FCEV), and battery electrics (BEV).</li>
                                </ul>
                            </div>
                            <div className="bg-slate-900 border border-orange-500/20 rounded-2xl p-6 relative overflow-hidden">
                                <h4 className="text-[16px] font-medium text-orange-400 mb-4">Weaknesses</h4>
                                <ul className="space-y-2 text-slate-300 text-[14px]">
                                    <li className="flex gap-2"><span className="text-orange-500">●</span> <strong>Market concentration:</strong> Historical over-reliance on the Japanese domestic market and North American truck segments for outlier profits.</li>
                                    <li className="flex gap-2"><span className="text-orange-500">●</span> <strong>Organizational drag:</strong> Bureaucratic rigidity and a consensual culture occasionally slowing cross-divisional technological decisions compared to agile startups.</li>
                                    <li className="flex gap-2"><span className="text-orange-500">●</span> <strong>Financial compression:</strong> Operating margin declined severely to 10.0% (FY2025) as capital expenditure toward BEV transition eroded immediate cash flows.</li>
                                </ul>
                            </div>
                            <div className="bg-slate-900 border border-blue-500/20 rounded-2xl p-6 relative overflow-hidden">
                                <h4 className="text-[16px] font-medium text-blue-400 mb-4">Opportunities</h4>
                                <ul className="space-y-2 text-slate-300 text-[14px]">
                                    <li className="flex gap-2"><span className="text-blue-500">●</span> <strong>Macroeconomic tailwinds:</strong> Sustained weak Japanese Yen dramatically boosting the profitability margin of vehicles built domestically and exported globally.</li>
                                    <li className="flex gap-2"><span className="text-blue-500">●</span> <strong>Consumer hesitation:</strong> Surging global demand for hybrid vehicles as range anxiety prevents consumers from fully committing to BEVs.</li>
                                    <li className="flex gap-2"><span className="text-blue-500">●</span> <strong>Policy advantages:</strong> Lucrative government subsidies and regulatory tax breaks explicitly designed for eco-mobility and domestic battery localization.</li>
                                </ul>
                            </div>
                            <div className="bg-slate-900 border border-red-500/20 rounded-2xl p-6 relative overflow-hidden">
                                <h4 className="text-[16px] font-medium text-red-500 mb-4">Threats</h4>
                                <ul className="space-y-2 text-slate-300 text-[14px]">
                                    <li className="flex gap-2"><span className="text-red-500">●</span> <strong>Geopolitical instability:</strong> Escalating U.S. tariffs and protectionist trade agreements directly disrupting high-profit imported export models.</li>
                                    <li className="flex gap-2"><span className="text-red-500">●</span> <strong>Hyper-competition:</strong> Aggressive low-cost Chinese EV OEMs (BYD, SAIC, NIO) utilizing depressed domestic labor costs to severely undercut European and Asian markets.</li>
                                    <li className="flex gap-2"><span className="text-red-500">●</span> <strong>Legislative shifts:</strong> Potential rapid elimination of federal EV tax credits in key Western markets critically reducing consumer BEV demand.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* 2 & 3. TOWS & BLUE OCEAN */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                        <div>
                            <h3 className="text-[18px] font-medium text-white mb-6 flex items-center gap-3"><GitMerge className="text-red-500" /> 2. TOWS prescriptions</h3>
                            <div className="w-full overflow-x-auto">
                              <table className="min-w-[600px] w-full text-left text-[14px] border-collapse bg-slate-950 border border-slate-800 rounded-xl">
                                <thead>
                                    <tr>
                                        <th className="p-4 border-b border-slate-800">Strategy</th>
                                        <th className="p-4 border-b border-slate-800">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                      <td className="p-4 border-b border-slate-800 border-l-[3px] border-l-emerald-500 font-medium text-white">SO: Maxi-Maxi (Leveraging strengths)</td>
                                      <td className="p-4 border-b border-slate-800 text-slate-400">Monetize the sustained weak Yen by aggressively scaling exports of high-margin Camry and RAV4 hybrids from Japanese plants. Simultaneously, lead government-subsidized electrification initiatives globally by utilizing existing massive operational scale and long-standing political goodwill in key markets like the US and EU.</td>
                                  </tr>
                                  <tr>
                                      <td className="p-4 border-b border-slate-800 border-l-[3px] border-l-orange-500 font-medium text-white">WO: Mini-Maxi (Overcoming weaknesses)</td>
                                      <td className="p-4 border-b border-slate-800 text-slate-400">Systematically tap into lucrative government green incentives (like the US Inflation Reduction Act) to aggressively fund and de-risk the massive $13.9B North Carolina battery manufacturing plant. This strategic capital injection directly closes the critical battery-electric vehicle (BEV) technological lag that Toyota currently faces against Tesla and BYD.</td>
                                  </tr>
                                  <tr>
                                      <td className="p-4 border-l-[3px] border-l-red-500 font-medium text-white">WT: Mini-Mini (Defensive posturing)</td>
                                      <td className="p-4 text-slate-400">Aggressively preempt shifting trade wars by reducing corporate break-even volumes. Under CEO Kenta Kon, Toyota is restructuring domestic operations to withstand tariff-driven margin compression by enforcing extreme lean manufacturing efficiencies and cutting out non-essential software bloat before regulatory hammers drop.</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-[18px] font-medium text-white mb-6 flex items-center gap-3"><Waves className="text-blue-500" /> 3. Blue ocean (ERRC)</h3>
                            <div className="grid grid-cols-2 gap-4 h-full">
                                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-[14px]">
                                    <span className="text-red-500 font-medium block mb-1">Eliminate</span>
                                    The archaic single-powertrain dependency across new model platforms. Future vehicle platforms must natively support ICE, HEV, and BEV drivetrains interchangeably on the exact same assembly lines to eliminate re-tooling dead time.
                                </div>
                                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-[14px]">
                                    <span className="text-orange-500 font-medium block mb-1">Reduce</span>
                                    Corporate break-even volume and crippling reliance on hyper-expensive, rare-earth intensive battery-only architectures that restrict profitability to high-income luxury demographics.
                                </div>
                                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-[14px]">
                                    <span className="text-emerald-500 font-medium block mb-1">Raise</span>
                                    The global accessibility of electrified and sustainable mobility via affordable, highly durable HEV (hybrid) models across lower-to-middle income brackets particularly in Southeast Asia and South America.
                                </div>
                                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-[14px]">
                                    <span className="text-blue-500 font-medium block mb-1">Create</span>
                                    A post-hardware "Mobility-as-a-Service" paradigm under the <em>Beyond Zero</em> initiative, deeply integrating physical cars with interconnected smart city grids and the globally synchronized "Digital Obeya" management cloud.
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* NEW SECTION: BCG MATRIX */}
                    <div className="mb-20">
                        <h3 className="text-[18px] font-medium text-white mb-8 flex items-center gap-3"><BarChart3 className="text-red-500" /> 4. BCG matrix</h3>
                        
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="md:w-1/4">
                                <p className="text-[14px] text-slate-400 mt-4 leading-relaxed font-normal">
                                    The BCG Matrix maps Toyota's complex product portfolio across market growth and relative market share paradigms. Toyota actively balances its operations, relying on highly profitable legacy internal combustion and hybrid architectures to essentially bankroll the multi-billion dollar capital expenditure required to secure a foothold in the rapidly growing but intensely competitive pure electric vehicle segments.
                                </p>
                            </div>
                            
                            <div className="md:w-3/4 flex flex-col items-center">
                                <div className="text-slate-400 text-[14px] font-medium mb-4">Market share</div>
                                <div className="grid grid-cols-2 gap-2 w-full max-w-2xl relative">
                                    
                                    {/* Y axis label - No writing mode */}
                                    <div className="absolute -left-12 top-1/2 -mt-6 text-slate-400 text-[14px] font-medium rotate-[-90deg] hidden md:block">
                                        Market growth
                                    </div>
                                    
                                    {/* Star */}
                                    <div className="bg-slate-800 border border-slate-700 p-6 rounded-tl-2xl min-h-[160px]">
                                        <h4 className="text-[16px] font-medium text-blue-400 mb-2">Stars</h4>
                                        <p className="text-[14px] text-slate-300 font-medium mb-1">HEV (Hybrids) & RAV4/Camry</p>
                                        <p className="text-[14px] text-slate-400">High share, high growth. These models are absolute juggernauts. They represent the current primary revenue drivers, brilliantly capturing the transitional consumer demographic that wants electrification without range anxiety.</p>
                                    </div>
                                    
                                    {/* Question Mark */}
                                    <div className="bg-slate-800 border border-slate-700 p-6 rounded-tr-2xl min-h-[160px]">
                                        <h4 className="text-[16px] font-medium text-purple-400 mb-2">Question marks</h4>
                                        <p className="text-[14px] text-slate-300 font-medium mb-1">BEV (bZ4X) & Hydrogen (Mirai)</p>
                                        <p className="text-[14px] text-slate-400">Low share, high growth. These products require disproportionate, massive R&D capital injections to secure a long-term market footing against established EV rivals, yet return little to no immediate profit.</p>
                                    </div>

                                    {/* Cash Cow */}
                                    <div className="bg-slate-800 border border-slate-700 p-6 rounded-bl-2xl min-h-[160px]">
                                        <h4 className="text-[16px] font-medium text-emerald-400 mb-2">Cash cows</h4>
                                        <p className="text-[14px] text-slate-300 font-medium mb-1">ICE Trucks & SUVs (Tacoma/Hilux)</p>
                                        <p className="text-[14px] text-slate-400">High share, low growth. These are the highly profitable, depreciated-tooling legacy stalwarts. They generate immense free cash flow, acting as the primary fiscal engine funding the futuristic BEV and Hydrogen bets.</p>
                                    </div>

                                    {/* Dog */}
                                    <div className="bg-slate-800 border border-slate-700 p-6 rounded-br-2xl min-h-[160px]">
                                        <h4 className="text-[16px] font-medium text-slate-300 mb-2">Dogs</h4>
                                        <p className="text-[14px] text-slate-300 font-medium mb-1">Compact & Midsize ICE Sedans</p>
                                        <p className="text-[14px] text-slate-400">Low share, low growth limit. With global consumer preferences decisively shifting towards larger SUVs and CUVs, Toyota is actively consolidating and divesting from non-hybrid traditional sedan segments to prevent capital drain.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 5. PORTER'S FIVE FORCES */}
                    <div>
                        <h3 className="text-[18px] font-medium text-white mb-8 flex items-center gap-3"><Shield className="text-red-500" /> 5. Porter's five forces</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div className="bg-slate-900 border-t-[3px] border-red-600 p-5 rounded-lg flex flex-col justify-between">
                                <div>
                                    <h5 className="font-medium text-white mb-1">Rivalry</h5>
                                    <span className="text-[14px] font-medium text-red-500 tracking-wider">Very high</span>
                                    <p className="text-[14px] text-slate-400 mt-2 font-normal">Toyota is engaged in direct, brutal confrontation on multiple fronts: legacy giants like VW and Hyundai pushing heavy volume, and heavily subsidized, aggressive Chinese EV OEMs (BYD, SAIC) triggering severe global margin compression and price wars.</p>
                                </div>
                            </div>
                            <div className="bg-slate-900 border-t-[3px] border-orange-500 p-5 rounded-lg flex flex-col justify-between">
                                <div>
                                    <h5 className="font-medium text-white mb-1">Buyers</h5>
                                    <span className="text-[14px] font-medium text-orange-400 tracking-wider">Mod-high</span>
                                    <p className="text-[14px] text-slate-400 mt-2 font-normal">Armed with near-perfect digital pricing transparency, modern consumers expect high-tech electrification as a standard baseline, not a premium feature. The loss or reduction of federal EV tax credits further amplifies this intense demographic price sensitivity.</p>
                                </div>
                            </div>
                            <div className="bg-slate-900 border-t-[3px] border-orange-500 p-5 rounded-lg flex flex-col justify-between">
                                <div>
                                    <h5 className="font-medium text-white mb-1">Suppliers</h5>
                                    <span className="text-[14px] font-medium text-orange-400 tracking-wider">Mod-high</span>
                                    <p className="text-[14px] text-slate-400 mt-2 font-normal">Automakers face extreme reliance on heavily concentrated global supply chains for rare-earth battery minerals and advanced semiconductor chips. Toyota aggressively counters this extortion leverage via massive vertical integration, notably its in-house $13.9B NC battery campus.</p>
                                </div>
                            </div>
                            <div className="bg-slate-900 border-t-[3px] border-yellow-500 p-5 rounded-lg flex flex-col justify-between">
                                <div>
                                    <h5 className="font-medium text-white mb-1">New entrants</h5>
                                    <span className="text-[14px] font-medium text-yellow-500 tracking-wider">Moderate</span>
                                    <p className="text-[14px] text-slate-400 mt-2 font-normal">Historically, manufacturing required massive capital barriers. Now, well-funded software-first technology firms (like Tesla originally, or emerging tech-auto joint ventures) are bypassing legacy engine manufacturing entirely, supported directly by foreign government EV subsidies.</p>
                                </div>
                            </div>
                            <div className="bg-slate-900 border-t-[3px] border-yellow-500 p-5 rounded-lg lg:col-span-2 flex flex-col justify-between">
                                <div>
                                    <h5 className="font-medium text-white mb-1">Substitutes</h5>
                                    <span className="text-[14px] font-medium text-yellow-500 tracking-wider">Moderate</span>
                                    <p className="text-[14px] text-slate-400 mt-2 font-normal">The rise of ubiquitous urban mobility platforms (Uber, DiDi, Lyft), advanced high-speed rail, and micro-mobility solutions fundamentally threaten the private ownership model. Toyota's strategic pivot into a broad "mobility provider" deliberately hedges against this post-ownership future.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- CHAPTER 3: ORGANIZING --- */}
            <section className="animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out py-24 md:py-32 px-6 lg:px-12 max-w-7xl mx-auto">
                <SectionHeading subtitle="Chapter 3: Organizing" title="Structuring the empire" />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <p className="text-[18px] text-slate-400 mb-6 leading-relaxed font-normal">
                            Historically, Toyota operated under a highly centralized, rigid "spoke-and-wheel" global hierarchy strictly managed from the corporate epicenter in Japan. This archaic command-and-control structure proved catastrophic during the devastating 2009-2010 unintended acceleration crisis. Communication bottlenecks delayed critical quality-control responses, nearly destroying the brand's reputation for reliability.
                        </p>
                        <p className="text-[18px] text-slate-400 mb-10 leading-relaxed font-normal">
                            Learning from this profound failure, Akio Toyoda orchestrated a radical dismantling of the core hierarchy. Today, Toyota utilizes a highly dynamic, decentralized <strong>3D matrix structure</strong>, perfectly balancing macro-level global product standardization with hyper-local, regional market responsiveness.
                        </p>

                        <div className="space-y-4">
                            <Card
                                icon={Globe}
                                title="Geographic divisions"
                                text="Establishment of powerful, dedicated regional executive authorities covering Japan, North America, Europe, Asia, and China. These divisions operate with semi-autonomy, which maximizes the company's responsiveness to localized consumer demands, differing regulatory climates, and sudden geopolitical trade shifts without waiting for Tokyo's permission."
                            />
                            <Card
                                icon={Car}
                                title="In-House company system"
                                text="A groundbreaking shift from functional silos to product-based divisions (e.g., Lexus International, Mid-size Vehicle Company, Powertrain Unit Center). These units act as pseudo-independent agile entities, effectively fostering rapid innovation, localized P&L accountability, and accelerated development cycles free from overarching macro-corporate bureaucracy."
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-8">
                        {/* Governance Board */}
                        <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
                            <h4 className="text-[18px] font-medium text-white mb-4 flex items-center gap-3"><Scale className="text-red-500" /> Board governance evolution</h4>
                            <p className="text-slate-400 text-[14px] mb-4 font-normal">
                                To ensure extreme operational agility and transparency, Toyota transitioned in June 2025 to a modern <strong>"company with an audit and supervisory committee."</strong>
                            </p>
                            <ul className="space-y-3 text-[14px] text-slate-300 font-normal">
                                <li className="flex gap-3 items-start"><CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" /> <span>Former standard auditors have been permanently elevated to full members of the board of directors, possessing equal, unmitigated voting rights on corporate strategy.</span></li>
                                <li className="flex gap-3 items-start"><CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" /> <span>Crucially, exactly half of the 10 board directors are now independent, outside directors. This mathematically counters entrenched internal groupthink and legacy cronyism.</span></li>
                                <li className="flex gap-3 items-start"><CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" /> <span>The reorganized board deliberately delegates day-to-day granular execution tasks entirely to lower executives, allowing top-level seats to focus purely on macro-strategic oversight and risk assessment.</span></li>
                            </ul>
                        </div>

                        {/* Executive Restructuring */}
                        <div className="bg-red-600 p-8 rounded-2xl text-white shadow-2xl">
                            <h4 className="text-[16px] font-medium mb-6 border-b border-red-500 pb-4 tracking-wider">2026 Executive restructuring</h4>
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <h5 className="font-medium text-[16px] mb-1">Koji Sato</h5>
                                    <div className="text-[14px] font-medium text-red-200 tracking-wider mb-2">Chief industry officer</div>
                                    <p className="text-[14px] text-red-100 font-normal">Sato transitions outward from direct operations. He now focuses entirely on shaping macro-national policy as JAMA Chairman, coordinating closely with the Japanese government to enhance Japan's overall industrial competitiveness against China.</p>
                                </div>
                                <div>
                                    <h5 className="font-medium text-[16px] mb-1">Kenta Kon</h5>
                                    <div className="text-[14px] font-medium text-red-200 tracking-wider mb-2">President & CEO</div>
                                    <p className="text-[14px] text-red-100 font-normal">An unorthodox, aggressive move placing the former CFO at the executive helm. Kon is explicitly deployed to meticulously lower corporate break-even volumes and engineer financial defenses in a profound war of global financial attrition.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- CHAPTER 4: STAFFING --- */}
            <section className="animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out py-24 md:py-32 px-6 lg:px-12 bg-slate-900/50 border-y border-slate-800">
                <div className="max-w-7xl mx-auto">
                    <SectionHeading subtitle="Chapter 4: Staffing" title="The human capital asset" />

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                        <div className="lg:col-span-2">
                            <p className="text-[18px] text-slate-300 mb-6 leading-relaxed font-normal">
                                Toyota fundamentally rejects the traditional Western manufacturing model of treating human labor strictly as an expendable variable cost to be minimized during economic downturns. Instead, its massive network of 380,000 global employees is systematically viewed as the company's only true appreciating asset. This philosophy is uncompromisingly anchored by the historic <strong>psychological contract</strong>.
                            </p>
                            <p className="text-[18px] text-slate-400 mb-8 leading-relaxed font-normal">
                                Forged in the fires of a devastating 1962 labor strike, this permanent labor-management agreement guarantees long-term (often lifetime) employment for its core domestic workforce. In exchange, the company commands absolute, undisputed ownership of all resulting productivity improvements and automation efficiencies. This social compact creates an intensely loyal, universally low-turnover environment that preserves highly specialized, generational institutional knowledge—preventing competitors from poaching Toyota's most experienced master craftsmen (Takumi).
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Card
                                    icon={Users}
                                    title="Blue-Collar integration"
                                    text="Toyota utilizes comprehensive, deeply immersive On-the-Job Training (OJT), pairing inexperienced new hires exclusively with strict veteran mentors. A relentless process of systematic job rotation cycles every worker repeatedly through assembly, quality assurance, and physical logistics, ensuring a universally cross-trained, hyper-resilient factory workforce."
                                />
                                <Card
                                    icon={Globe}
                                    title="GLOBAL 21 pipeline"
                                    text="The corporate engine that cultivates Toyota's global executive leadership. High-potential mid-career employees are deliberately forced into heavily demanding overseas assignments or sponsored MBA programs to acquire necessary cross-cultural, macro-operational skills before ever being considered for senior domestic roles."
                                />
                            </div>
                        </div>

                        {/* Performance Evaluation Panel */}
                        <div className="bg-slate-950 border border-slate-800 p-8 shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-5"><FileText size={150} /></div>
                            <h4 className="text-[16px] font-medium text-white mb-2 relative z-10">The architecture of appraisal</h4>
                            <p className="text-[14px] text-slate-400 mb-6 relative z-10">Annual evaluations deliberately bypass highly subjective personality traits, focusing intensely instead on 5 primary, rigorously empirical criteria (worth 10 points each):</p>

                            <ul className="space-y-4 relative z-10 text-[14px]">
                                <li className="bg-slate-900 p-3 border border-slate-800 border-l-[3px] border-l-red-500">
                                    <strong className="text-white block font-medium mb-1">1. Physical skills (takt time)</strong>
                                    <span className="text-slate-400">The raw physical ability of the worker to handle complex assembly tasks strictly within the mathematically designated 'takt time' cycle, doing so without degrading overall product quality or safety.</span>
                                </li>
                                <li className="bg-slate-900 p-3 border border-slate-800 border-l-[3px] border-l-red-500">
                                    <strong className="text-white block font-medium mb-1">2. Quality maintenance</strong>
                                    <span className="text-slate-400">A track record of absolute adherence to the factory's stringent zero-defect manufacturing standards, demonstrating vigilance against letting flawed components pass down the line.</span>
                                </li>
                                <li className="bg-slate-900 p-3 border border-slate-800 border-l-[3px] border-l-red-500">
                                    <strong className="text-white block font-medium mb-1">3. Kaizen participation</strong>
                                    <span className="text-slate-400">Proof of active, consistently documented participation in the continuous improvement process (Kaizen), frequently suggesting and implementing small, iterative efficiency boosts.</span>
                                </li>
                                <li className="bg-slate-900 p-3 border border-slate-800 border-l-[3px] border-l-red-500">
                                    <strong className="text-white block font-medium mb-1">4. Big picture view</strong>
                                    <span className="text-slate-400">The cognitive ability of an operator to clearly articulate exactly how their microscopic daily assembly targets directly derive from and support the broader macro corporate objectives.</span>
                                </li>
                                <li className="bg-slate-900 p-3 border border-slate-800 border-l-[3px] border-l-red-500">
                                    <strong className="text-white block font-medium mb-1">5. Problem solving</strong>
                                    <span className="text-slate-400">Proven intellectual capability to independently execute comprehensive root-cause analysis (utilizing the "5 Whys" methodology) and immediately physically deploy corrective countermeasures.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- CHAPTER 5: LEADING --- */}
            <section className="animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out py-24 md:py-32 px-6 lg:px-12 bg-red-600 text-white selection:bg-white selection:text-red-600">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h3 className="text-red-200 font-medium tracking-widest text-[14px] mb-4">Chapter 5: Leading</h3>
                        <h2 className="text-[22px] md:text-[22px] font-medium mb-8">Facilitating horizontal alignment</h2>
                        <p className="text-[18px] text-red-100 mb-6 leading-relaxed font-normal">
                            Leadership at Toyota is a profound, structural rejection of traditional, vertical, autocratic directives common in standard manufacturing environments. Instead, it is defined entirely by meticulous facilitation, dismantling restrictive corporate silos, and intensely empowering subordinates at the <em>genba</em> (the actual place value is physically created). Leaders are coaches meant to guide continuous improvement, not drill sergeants barking orders from air-conditioned offices.
                        </p>

                        <div className="space-y-6 mt-10">
                            <div className="bg-black/20 p-6 rounded-2xl backdrop-blur-sm">
                                <h4 className="text-[18px] font-medium mb-2 flex items-center gap-3"><Users /> The obeya system</h4>
                                <p className="text-red-100 text-[14px] font-normal">
                                    Literally translated as the "Big Room." Cross-functional leaders and engineers from inherently conflicting departments converge daily in a highly visual, physical workspace to practice <em>genchi genbutsu</em> (going to the source). Walls are aggressively plastered with simplified A3 problem-solving documents and critical-path schedules. This radically transparent environment demolishes email chains and forces rapid, face-to-face collaborative decision-making across the entire engineering pipeline.
                                </p>
                            </div>
                            <div className="bg-black/20 p-6 rounded-2xl backdrop-blur-sm">
                                <h4 className="text-[18px] font-medium mb-2 flex items-center gap-3"><Lightbulb /> Toyota times</h4>
                                <p className="text-red-100 text-[14px] font-normal">
                                    Spearheaded directly by Chairman Akio Toyoda in 2020. This internal-turned-external open-media channel projects top management's unfiltered thoughts, candid failures, and strategic anxieties directly to the public and the global workforce. By bypassing traditional corporate PR buffering, it deliberately cultivates an unprecedented atmosphere of absolute transparency, systematically building bottom-up systemic trust throughout the organization's ranks.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white text-slate-900 p-10 rounded-3xl shadow-2xl transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
                        <h4 className="text-[22px] font-medium mb-4 text-red-600">Democratizing innovation</h4>
                        <p className="text-[16px] text-slate-600 mb-8 font-normal">
                            The globally renowned <strong>Toyota creative idea suggestion system (TCISS)</strong>, established in 1951, successfully democratized mass innovation. By granting complete creative autonomy to line workers, leadership effectively shifted its role from statically dictating processes to actively coaching employees on how to intelligently identify and permanently solve their own workspace abnormalities.
                        </p>

                        <div className="flex items-center gap-6 mb-8 border-b border-slate-200 pb-8">
                            <div className="text-[22px] font-medium text-slate-900">40M+</div>
                            <div className="text-[14px] font-medium text-slate-500 tracking-widest leading-tight">
                                Total employee ideas<br />submitted by 2011
                            </div>
                        </div>

                        <h5 className="font-medium text-[16px] mb-4">Financial incentive architecture</h5>
                        <div className="space-y-3 mb-8 text-[14px]">
                            <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                                <span className="font-medium text-slate-700">Standard prize for any suggestion</span>
                                <span className="bg-slate-100 px-3 py-1 rounded text-slate-600 font-medium">500 ¥</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                                <span className="font-medium text-slate-700">Outstanding prize (actionable)</span>
                                <span className="bg-slate-200 px-3 py-1 rounded text-slate-700 font-medium">2,000 ¥</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                                <span className="font-medium text-slate-700">Excellent prize (high impact)</span>
                                <span className="bg-slate-300 px-3 py-1 rounded text-slate-800 font-medium">5,000 ¥</span>
                            </div>
                            <div className="flex justify-between items-center pb-2">
                                <span className="font-medium text-red-600">The best award (system-wide change)</span>
                                <span className="bg-red-100 px-3 py-1 rounded text-red-600 font-medium">10k - 200k ¥</span>
                            </div>
                        </div>

                        <div className="bg-slate-100 p-5 border-l-[3px] border-red-600">
                            <h5 className="font-medium text-[16px] mb-1">The rookie award mandate</h5>
                            <p className="text-slate-600 text-[14px] font-normal">
                                Exclusively targets 1st and 2nd-year entry employees, coercing them to successfully generate at least <strong>36 actionable efficiency suggestions annually</strong> (roughly 3 innovations per month). This radically breaks young workers from complacent habits immediately upon hiring.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- CHAPTER 6: CONTROLLING --- */}
            <section className="animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out py-24 md:py-32 px-6 lg:px-12 max-w-7xl mx-auto">
                <SectionHeading subtitle="Chapter 6: Controlling" title="Algorithmic control & oversight" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    <div className="col-span-1 lg:col-span-6">
                        <h3 className="text-[18px] font-medium text-white mb-6">Financial pressures & market reality (FY24 vs FY25)</h3>
                        <p className="text-slate-400 mb-8 leading-relaxed text-[16px] font-normal">
                            Rigorous financial controlling models reveal a volatile dual reality defining Toyota's current operational state: massive, record-breaking top-line revenue growth across global markets is being brutally offset by severe margin compression. This profit tightening is fundamentally caused by colossal capital expenditures—such as the massive $13.9B outlay for the North Carolina battery campus—compounded by soaring macro-inflation surrounding raw materials used in hybrid circuits.
                        </p>

                        <div className="space-y-8 bg-slate-900/50 p-8 rounded-2xl border border-slate-800">
                            {/* Chart Bar 1 */}
                            <div>
                                <div className="flex justify-between text-[14px] font-medium text-white mb-2">
                                    <span>Global sales revenue (¥ billions)</span>
                                    <span className="text-emerald-500">+6.5% Y-o-Y</span>
                                </div>
                                <div className="h-8 bg-slate-800 rounded-full overflow-hidden relative">
                                    <div className="absolute top-0 left-0 h-full bg-blue-600 w-[95%] rounded-full"></div>
                                    <div className="absolute top-0 left-0 h-full flex items-center px-4 text-white text-[14px] font-medium z-10">48,036</div>
                                </div>
                            </div>

                            {/* Chart Bar 2 */}
                            <div>
                                <div className="flex justify-between text-[14px] font-medium text-white mb-2 mt-6">
                                    <span>FY2024 operating margin</span>
                                </div>
                                <div className="h-8 bg-slate-800 rounded-full overflow-hidden relative">
                                    <div className="absolute top-0 left-0 h-full bg-emerald-600 w-[85%] rounded-full"></div>
                                    <div className="absolute top-0 left-0 h-full flex items-center px-4 text-white text-[14px] font-medium z-10">11.9% (Historic high benchmark)</div>
                                </div>
                            </div>

                            {/* Chart Bar 3 */}
                            <div>
                                <div className="flex justify-between text-[14px] font-medium text-white mb-2 mt-6">
                                    <span>FY2025 operating margin forecast</span>
                                    <span className="text-red-500">-1.9 percentage points</span>
                                </div>
                                <div className="h-8 bg-slate-800 rounded-full overflow-hidden relative">
                                    <div className="absolute top-0 left-0 h-full bg-orange-600 w-[71%] rounded-full"></div>
                                    <div className="absolute top-0 left-0 h-full flex items-center px-4 text-white text-[14px] font-medium z-10">10.0% (Triggered sudden CEO shift)</div>
                                </div>
                            </div>

                            {/* Chart Bar 4 */}
                            <div>
                                <div className="flex justify-between text-[14px] font-medium text-white mb-2 mt-6">
                                    <span>Return on equity (R.O.E.) metric</span>
                                    <span className="text-red-500">-2.2 percentage points</span>
                                </div>
                                <div className="h-8 bg-slate-800 rounded-full overflow-hidden relative">
                                    <div className="absolute top-0 left-0 h-full bg-yellow-600 w-[80%] rounded-full"></div>
                                    <div className="absolute top-0 left-0 h-full flex items-center px-4 text-white text-[14px] font-medium z-10">13.6%</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-1 lg:col-span-6 flex flex-col gap-6">
                        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
                            <h3 className="text-[16px] font-medium text-white mb-6 flex items-center gap-3">
                                <ShieldCheck className="text-red-500" /> Executive compliance architecture
                            </h3>
                            <p className="text-[14px] text-slate-400 mb-6 font-normal">
                                Following severe, multi-year crash-test certification violations discovered internally at critical subsidiaries like Hino and Daihatsu, Toyota’s executive board felt regulatory heat from the Japanese government. In response, they forcibly instituted a series of draconian, no-exception compliance overhauls across the global empire.
                            </p>

                            <div className="relative border-l-[3px] border-slate-800 pl-6 space-y-6">
                                <div className="relative">
                                    <div className="absolute w-3 h-3 bg-red-600 rounded-full -left-[32px] top-1.5"></div>
                                    <h5 className="text-[16px] font-medium text-white mb-1">Global chief compliance officer (GCCO)</h5>
                                    <p className="text-[14px] text-slate-400 font-normal">A newly established centralized role that wields unmitigated, absolute veto authority over factory line compliance issues. The GCCO directly chairs the critical Compliance Committee alongside the Risk Management board to ensure regulatory deviations are reported directly to the CEO, entirely bypassing middle management coverups.</p>
                                </div>
                                <div className="relative">
                                    <div className="absolute w-3 h-3 bg-slate-600 rounded-full -left-[32px] top-1.5"></div>
                                    <h5 className="text-[16px] font-medium text-white mb-1">Regional CCO delegates</h5>
                                    <p className="text-[14px] text-slate-400 font-normal">Strategically appointed across heavily regulated territories like North America and the EU to ensure specific, localized cultural management nuances do not obscure or contradict high-level Japanese corporate governance mandates.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
                            <h3 className="text-[16px] font-medium text-white mb-6 flex items-center gap-3">
                                <Globe className="text-blue-500" /> Environmental & vendor supply control
                            </h3>
                            <ul className="space-y-4 text-[14px]">
                                <li className="flex gap-3 items-start">
                                    <Zap className="text-yellow-500 shrink-0 mt-1" size={18} />
                                    <div>
                                        <strong className="text-white block font-medium">Global EMIS cloud infrastructure</strong>
                                        <span className="text-slate-400 font-normal">The 'Ecology, Safety and Health Material Investigation System' automatically and algorithmically assesses the chemical toxicity risks of millions of supplier parts in real-time. This prevents banned substances from entering the localized supply chain to ensure zero European or US environmental regulatory deviations.</span>
                                    </div>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <Target className="text-red-500 shrink-0 mt-1" size={18} />
                                    <div>
                                        <strong className="text-white block font-medium">TEAM award KPI framework</strong>
                                        <span className="text-slate-400 font-normal">Third-party suppliers are relentlessly and transparently evaluated against microscopic defect rates, minute-level delivery precision, and sustained, multi-year cost reduction trajectories. Excellence is publicly rewarded and reinforced via the prestigious 'Total Exceptional Achievement for Manufacturing' (TEAM) corporate award.</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </section>

            {/* --- CONCLUSION --- */}
            <footer className="animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out bg-black py-20 border-t-4 border-red-600 text-center px-4">
                <div className="max-w-4xl mx-auto">
                    <Car size={48} className="text-slate-800 mx-auto mb-8" />
                    <h2 className="text-[22px] md:text-[22px] font-medium text-white mb-8">The vanguard of global management</h2>
                    <p className="text-[18px] text-slate-400 font-normal leading-relaxed mb-12">
                        Toyota operates not merely as an automobile manufacturer, but as a deeply integrated, highly self-correcting sociotechnical system. By perfectly balancing the stability of its historical philosophy with the brutal pragmatism required by modern markets, Toyota is uniquely positioned to dictate the future trajectory of global mobility.
                    </p>
                    <div className="text-[14px] text-slate-500 font-medium">
                        MIT Manipal | Math and computing 2027<br />
                        <span className="text-slate-600 font-normal mt-2 block">Essentials of management course</span>
                    </div>
                </div>
            </footer>

        </div>
    );
}
