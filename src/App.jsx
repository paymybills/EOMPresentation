import React, { useEffect, useRef, useState } from 'react';
import {
    ChevronDown, Target, Globe, Users, Lightbulb, ShieldCheck,
    TrendingUp, Car, AlertTriangle, BarChart3, BookOpen,
    Award, Scale, Waves, Zap, Shield, GitMerge, FileText, CheckCircle2
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const SectionHeading = ({ subtitle, title }) => (
    <div className="mb-16 md:mb-24">
        <p className="text-red-500 font-semibold tracking-[0.18em] text-[11px] uppercase mb-5 opacity-80">{subtitle}</p>
        <h2 className="text-[36px] md:text-[48px] font-semibold text-white leading-[1.08] tracking-tight">{title}</h2>
        <div className="h-[2px] w-14 bg-red-600 mt-6 rounded-none opacity-70"></div>
    </div>
);

const Slide = ({ children, className = "" }) => (
    <section className={`snap-section shrink-0 h-screen w-full flex flex-col justify-center px-4 md:px-12 overflow-hidden relative ${className}`}>
        <div className="max-w-7xl mx-auto w-full max-h-full flex flex-col justify-center py-12">
            {children}
        </div>
    </section>
);

// Replaced Card component with inline styles for better 100vh control

// --- MAIN APP ---

export default function App() {
    const containerRef = useRef(null);
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

            animateSections.forEach((section) => observer.unobserve(section));
            observer.disconnect();
        };
    }, []);

    return (
        <div ref={containerRef} className="snap-y snap-mandatory h-screen overflow-y-scroll overflow-x-hidden bg-black text-zinc-300 scroll-smooth relative">

            {/* Top Navigation Bar */}
            <nav className="fixed top-0 w-full z-50 bg-black/90 border-b border-white/[0.06] px-8 py-[14px] flex justify-between items-center">
                 <div className="text-[15px] font-semibold text-white flex items-center gap-2 tracking-tight">
                    <Car className="text-red-600" size={18} />
                    Toyota Strategy
                 </div>
                 <div className="flex gap-7 text-[13px] font-medium text-zinc-400">
                     <button onClick={() => handleNavClick('intro')} className={`transition-colors duration-200 ${activeSection === 'intro' ? 'text-white' : 'hover:text-white'}`}>Intro</button>
                     <button onClick={() => handleNavClick('planning')} className={`transition-colors duration-200 ${activeSection === 'planning' ? 'text-white' : 'hover:text-white'}`}>Planning</button>
                     <button onClick={() => handleNavClick('organizing')} className={`transition-colors duration-200 ${activeSection === 'organizing' ? 'text-white' : 'hover:text-white'}`}>Organizing</button>
                     <button onClick={() => handleNavClick('staffing')} className={`transition-colors duration-200 ${activeSection === 'staffing' ? 'text-white' : 'hover:text-white'}`}>Staffing</button>
                     <button onClick={() => handleNavClick('leading')} className={`transition-colors duration-200 ${activeSection === 'leading' ? 'text-white' : 'hover:text-white'}`}>Leading</button>
                 </div>
            </nav>

            {/* --- HERO SECTION --- */}
            <section className="snap-section shrink-0 h-screen w-full hero-section relative flex flex-col justify-center items-center text-center px-4 overflow-hidden">
                {/* Animated grid background */}
                <div className="absolute inset-0 z-0" style={{
                    backgroundImage: `linear-gradient(rgba(220,38,38,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(220,38,38,0.06) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px'
                }} />
                {/* Radial fade over grid */}
                <div className="absolute inset-0 z-0" style={{
                    background: 'radial-gradient(ellipse 80% 60% at 50% 50%, transparent 0%, #000000 70%)'
                }} />
                {/* Top glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-none z-0" style={{
                    background: 'radial-gradient(ellipse at center, rgba(220,38,38,0.18) 0%, transparent 70%)',
                    filter: 'blur(40px)'
                }} />

                <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center w-full">
                    <div className="inline-block px-4 py-1.5 rounded-none border border-red-500/30 bg-red-500/10 text-red-400 text-[14px] font-medium tracking-widest mb-8">
                        Essentials of management
                    </div>
                    <h1 className="text-5xl md:text-7xl lg:text-[96px] font-light text-white mb-6 tracking-tight leading-none">
                        Toyota <span className="text-red-600 font-medium">motor</span> corp.
                    </h1>
                    <p className="text-xl md:text-2xl font-light text-zinc-400 mb-16 max-w-3xl">
                        Strategic &amp; organisational analysis of a global mobility empire in transition.
                    </p>

                    {/* Stat cards row */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-4xl mb-16">
                        {[
                            { label: 'Global rank', value: '#1', sub: 'by units sold' },
                            { label: 'FY25 revenue', value: '¥48T', sub: 'record high' },
                            { label: 'H1 2025 units', value: '5.5M', sub: 'shipped globally' },
                            { label: 'Employees', value: '380K', sub: 'worldwide' },
                        ].map((s) => (
                            <div key={s.label} className="stat-card bg-zinc-950 border border-zinc-900 rounded-none p-6 text-center">
                                <div className="text-[32px] font-semibold text-white mb-1 tracking-tight">{s.value}</div>
                                <div className="text-[10px] font-semibold text-red-400 tracking-[0.18em] uppercase mb-1">{s.label}</div>
                                <div className="text-[12px] text-zinc-500">{s.sub}</div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-zinc-950 border border-zinc-800 p-6 rounded-none w-full max-w-4xl">
                        <h3 className="text-red-500 font-medium tracking-widest text-[14px] mb-6 border-b border-zinc-800 pb-4">MIT Manipal | Math and computing 2027</h3>
                        <div className="flex flex-col md:flex-row justify-between text-[14px] text-zinc-400 text-center gap-4">
                            <span>Ch 1: Intro</span>
                            <span>Ch 2: Planning</span>
                            <span>Ch 3: Organizing</span>
                            <span>Ch 4: Staffing</span>
                            <span>Ch 5: Leading</span>
                            <span>Ch 6: Controlling</span>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-zinc-500 hidden md:block">
                    <ChevronDown size={32} />
                </div>
            </section>

            {/* --- CHAPTER 1: INTRO --- */}
            <Slide>
                <div className="animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out">
                    <SectionHeading subtitle="Chapter 1" title="The metamorphosis" />
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <div>
                            <p className="text-[16px] leading-relaxed mb-5 font-normal">
                                Originating from the Toyoda Automatic Loom Works in the early 20th century under Sakichi Toyoda, Toyota has constantly transcended its mechanical roots. After World War II, under the guidance of Kiichiro Toyoda and legendary engineer Taiichi Ohno, the company pioneered the Toyota Production System (TPS) — a socio-technical framework that eradicated waste (muda) and introduced "Just-In-Time" manufacturing to the world. TPS fundamentally altered global industrial manufacturing, cementing Toyota's legacy not just as a car builder, but as an efficiency pioneer.
                            </p>
                            <p className="text-[16px] leading-relaxed mb-5 font-normal">
                                This ethos is anchored by the corporate vision of <em>"creating mobility for all"</em>. It is a commitment ensuring unrestricted, safe, and equitable access to transportation across diverse global demographics — from advanced robotic mobility aids for the elderly in aging societies like Japan, to rugged, affordable hybrids for emerging markets in Africa and Southeast Asia.
                            </p>
                            <p className="text-[16px] leading-relaxed mb-5 font-normal">
                                Today, facing a generational disruption driven by electrification, autonomy, and artificial intelligence, Toyota is executing another comprehensive strategic pivot. They are shedding the identity of a traditional automaker to become a holistic <strong>mobility company</strong> dedicated to the seamless global movement of people, goods, information, and energy. This transition places software-defined vehicles (SDVs) and interconnected smart-city infrastructures, such as the Woven City project, at the epicenter of their future growth strategy.
                            </p>
                            <blockquote className="border-l-4 border-red-600 pl-6 py-4 my-6 bg-zinc-950 text-[16px] text-zinc-200">
                                <span className="font-medium block text-red-500 text-[11px] tracking-widest mb-2">Core mission</span>
                                "Producing happiness for all."
                            </blockquote>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-zinc-950 border border-zinc-800 p-8 rounded-none flex flex-col items-center text-center justify-center col-span-2">
                                <Award className="text-red-500 mb-4" size={48} />
                                <h4 className="text-[18px] font-medium text-white mb-2">Gold prize in PRIDE INDEX</h4>
                                <p className="text-[14px] text-zinc-400">Awarded for the 5th consecutive year (2025), validating their robust diversity, equity, and inclusion (DEI) initiatives.</p>
                            </div>
                            <div className="bg-zinc-950 border border-zinc-800 p-6 rounded-none flex flex-col items-center text-center justify-center">
                                <Car className="text-zinc-500 mb-4" size={32} />
                                <h4 className="text-[22px] font-medium text-white mb-1">5.5M</h4>
                                <p className="text-[14px] text-zinc-400 tracking-widest">Units (H1 2025)</p>
                            </div>
                            <div className="bg-zinc-950 border border-zinc-800 p-6 rounded-none flex flex-col items-center text-center justify-center">
                                <TrendingUp className="text-zinc-500 mb-4" size={32} />
                                <h4 className="text-[22px] font-medium text-white mb-1">¥48T</h4>
                                <p className="text-[14px] text-zinc-400 tracking-widest">FY25 revenue</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Slide>

            {/* --- CHAPTER 1B: TOYODA PRECEPTS --- */}
            <Slide>
                <div className="animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out">
                    <h3 className="text-[18px] font-semibold text-white mb-8 flex items-center gap-3 tracking-tight"><BookOpen className="text-red-500" /> The five Toyoda precepts</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 stagger">
                        <div className="card-hover bg-zinc-950 border border-zinc-800 p-5 rounded-none">
                            <span className="text-red-500 font-bold text-[13px]">1.</span>
                            <h5 className="text-[14px] font-medium text-white mt-1 mb-2">Faithful to duties</h5>
                            <p className="text-[12px] text-zinc-400">Contribute to the overall good. A principle demanding corporate citizenship above isolated profit-seeking.</p>
                        </div>
                        <div className="card-hover bg-zinc-950 border border-zinc-800 p-5 rounded-none">
                            <span className="text-red-500 font-bold text-[13px]">2.</span>
                            <h5 className="text-[14px] font-medium text-white mt-1 mb-2">Studiousness & creativity</h5>
                            <p className="text-[12px] text-zinc-400">Stay ahead of the times. The foundational basis for continuous internal innovation and R&D investment.</p>
                        </div>
                        <div className="card-hover bg-zinc-950 border border-zinc-800 p-5 rounded-none">
                            <span className="text-red-500 font-bold text-[13px]">3.</span>
                            <h5 className="text-[14px] font-medium text-white mt-1 mb-2">Practicality over frivolity</h5>
                            <p className="text-[12px] text-zinc-400">A core tenet that directly birthed lean manufacturing and value-driven engineering across the TPS.</p>
                        </div>
                        <div className="card-hover bg-zinc-950 border border-zinc-800 p-5 rounded-none">
                            <span className="text-red-500 font-bold text-[13px]">4.</span>
                            <h5 className="text-[14px] font-medium text-white mt-1 mb-2">Warm workplace atmosphere</h5>
                            <p className="text-[12px] text-zinc-400">Ensuring psychological safety and mutual respect on the factory floor (genba) for all workers.</p>
                        </div>
                        <div className="card-hover bg-zinc-950 border border-zinc-800 p-5 rounded-none lg:col-span-2">
                            <span className="text-red-500 font-bold text-[13px]">5.</span>
                            <h5 className="text-[14px] font-medium text-white mt-1 mb-2">Respect for spiritual matters & gratitude</h5>
                            <p className="text-[12px] text-zinc-400">Fostering humility in leadership and profound respect for the communities Toyota operates in globally.</p>
                        </div>
                    </div>
                </div>
            </Slide>

            {/* --- CHAPTER 2: PLANNING (SWOT, TOWS, Blue Ocean, Porter) --- */}
            <Slide border="border-t border-zinc-800">
                <div className="animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out">
                    <SectionHeading subtitle="Chapter 2: Planning" title="Strategic intelligence" />
                    <p className="text-[18px] max-w-4xl text-zinc-400 font-normal">
                        Planning is a continuous, systemic integration of external market realities with internal manufacturing capabilities. We analyze Toyota through canonical frameworks: SWOT, TOWS, Blue Ocean, BCG, and Porter's Five Forces. This top-down strategic planning phase ensures that multi-billion dollar capital expenditure decisions-like battery lab investments and factory retrofits-are insulated from short-term market hysteria.
                    </p>
                </div>
            </Slide>

            {/* 1. SWOT MATRIX */}
            <Slide>
                <div className="animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out">
                    <h3 className="text-[18px] font-semibold text-white mb-8 flex items-center gap-3 tracking-tight"><Target className="text-red-500" /> 1. The SWOT matrix</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 stagger">
                        <div className="card-hover bg-zinc-950 border border-emerald-500/20 rounded-none p-6 relative overflow-hidden">
                            <h4 className="text-[15px] font-semibold text-emerald-400 mb-4 tracking-tight">Strengths</h4>
                            <ul className="space-y-2 text-zinc-300 text-[14px]">
                                <li className="flex gap-2"><span className="text-emerald-500 text-[8px] mt-1.5">●</span> <strong>Operational scale:</strong> Best-selling automaker globally with over 5.5M units shipped in H1 2025, supported by a AAA+ brand valuation of $64.7B.</li>
                                <li className="flex gap-2"><span className="text-emerald-500 text-[8px] mt-1.5">●</span> <strong>Manufacturing supremacy:</strong> The highly resilient Toyota Production System (TPS) provides unmatched defect-reduction and lean operating leverage.</li>
                                <li className="flex gap-2"><span className="text-emerald-500 text-[8px] mt-1.5">●</span> <strong>Hedging risk:</strong> A well-diversified multi-pathway product portfolio covering internal combustion (ICE), hybrids (HEV), plug-ins (PHEV), hydrogen (FCEV), and battery electrics (BEV).</li>
                            </ul>
                        </div>
                        <div className="card-hover bg-zinc-950 border border-orange-500/20 rounded-none p-6 relative overflow-hidden">
                            <h4 className="text-[15px] font-semibold text-orange-400 mb-4 tracking-tight">Weaknesses</h4>
                            <ul className="space-y-2 text-zinc-300 text-[14px]">
                                <li className="flex gap-2"><span className="text-orange-500 text-[8px] mt-1.5">●</span> <strong>Market concentration:</strong> Historical over-reliance on North American truck segments for outlier profits.</li>
                                <li className="flex gap-2"><span className="text-orange-500 text-[8px] mt-1.5">●</span> <strong>Organizational drag:</strong> Bureaucratic rigidity and a consensual culture occasionally slowing cross-divisional technological decisions compared to agile startups.</li>
                                <li className="flex gap-2"><span className="text-orange-500 text-[8px] mt-1.5">●</span> <strong>Financial compression:</strong> Operating margin declined severely to 10.0% (FY2025) as capital expenditure toward BEV transition eroded immediate cash flows.</li>
                            </ul>
                        </div>
                        <div className="card-hover bg-zinc-950 border border-blue-500/20 rounded-none p-6 relative overflow-hidden">
                            <h4 className="text-[15px] font-semibold text-zinc-100 mb-4 tracking-tight">Opportunities</h4>
                            <ul className="space-y-2 text-zinc-300 text-[14px]">
                                <li className="flex gap-2"><span className="text-blue-500 text-[8px] mt-1.5">●</span> <strong>Macroeconomic tailwinds:</strong> Sustained weak Japanese Yen dramatically boosting the profitability margin of vehicles built domestically and exported globally.</li>
                                <li className="flex gap-2"><span className="text-blue-500 text-[8px] mt-1.5">●</span> <strong>Consumer hesitation:</strong> Surging global demand for hybrid vehicles as range anxiety prevents consumers from fully committing to BEVs.</li>
                                <li className="flex gap-2"><span className="text-blue-500 text-[8px] mt-1.5">●</span> <strong>Policy advantages:</strong> Lucrative subsidies explicitly designed for eco-mobility and domestic battery localization.</li>
                            </ul>
                        </div>
                        <div className="card-hover bg-zinc-950 border border-red-500/20 rounded-none p-6 relative overflow-hidden">
                            <h4 className="text-[15px] font-semibold text-red-500 mb-4 tracking-tight">Threats</h4>
                            <ul className="space-y-2 text-zinc-300 text-[14px]">
                                <li className="flex gap-2"><span className="text-red-500 text-[8px] mt-1.5">●</span> <strong>Geopolitical instability:</strong> Escalating U.S. tariffs and protectionist trade agreements directly disrupting high-profit imported export models.</li>
                                <li className="flex gap-2"><span className="text-red-500 text-[8px] mt-1.5">●</span> <strong>Hyper-competition:</strong> Aggressive low-cost Chinese EV OEMs (BYD, SAIC) utilizing depressed labor costs.</li>
                                <li className="flex gap-2"><span className="text-red-500 text-[8px] mt-1.5">●</span> <strong>Legislative shifts:</strong> Potential rapid elimination of federal EV tax credits in key Western markets critically reducing consumer BEV demand.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Slide>

            {/* 2 & 3. TOWS & BLUE OCEAN */}
            <Slide>
                <div className="animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-[18px] font-medium text-white mb-6 flex items-center gap-3"><GitMerge className="text-red-500" /> 2. TOWS prescriptions</h3>
                            <div className="w-full overflow-x-auto">
                                <table className="min-w-[600px] w-full text-left text-[13px] border-collapse bg-black border border-zinc-800 rounded-none">
                                    <thead>
                                        <tr>
                                            <th className="p-3 border-b border-zinc-800">Strategy</th>
                                            <th className="p-3 border-b border-zinc-800">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="p-3 border-b border-zinc-800 border-l-[3px] border-l-emerald-500 font-medium text-white">SO: Maxi-Maxi</td>
                                            <td className="p-3 border-b border-zinc-800 text-zinc-400">Monetize the sustained weak Yen by aggressively scaling exports of high-margin Camry and RAV4 hybrids from Japanese plants. Simultaneously, lead government-subsidized electrification initiatives globally.</td>
                                        </tr>
                                        <tr>
                                            <td className="p-3 border-b border-zinc-800 border-l-[3px] border-l-orange-500 font-medium text-white">WO: Mini-Maxi</td>
                                            <td className="p-3 border-b border-zinc-800 text-zinc-400">Systematically tap into lucrative government green incentives (like the US Inflation Reduction Act) to aggressively fund and de-risk the massive $13.9B North Carolina battery manufacturing plant, closing the critical BEV technological lag against Tesla and BYD.</td>
                                        </tr>
                                        <tr>
                                            <td className="p-3 border-l-[3px] border-l-red-500 font-medium text-white">WT: Mini-Mini</td>
                                            <td className="p-3 text-zinc-400">Aggressively preempt shifting trade wars by reducing corporate break-even volumes. Under CEO Kenta Kon, Toyota is restructuring domestic operations to withstand tariff-driven margin compression by enforcing extreme lean manufacturing efficiencies.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-[18px] font-medium text-white mb-6 flex items-center gap-3"><Waves className="text-blue-500" /> 3. Blue ocean (ERRC)</h3>
                            <div className="grid grid-cols-2 gap-3 h-full">
                                <div className="bg-black p-4 rounded-none border border-zinc-800 text-[12px]">
                                    <span className="text-red-500 font-medium block mb-1">Eliminate</span>
                                    The archaic single-powertrain dependency across new model platforms. Future vehicle platforms must natively support ICE, HEV, and BEV drivetrains interchangeably on the same assembly lines to eliminate re-tooling dead time.
                                </div>
                                <div className="bg-black p-4 rounded-none border border-zinc-800 text-[12px]">
                                    <span className="text-orange-500 font-medium block mb-1">Reduce</span>
                                    Corporate break-even volume and crippling reliance on hyper-expensive, rare-earth intensive battery-only architectures that restrict profitability to high-income luxury demographics.
                                </div>
                                <div className="bg-black p-4 rounded-none border border-zinc-800 text-[12px]">
                                    <span className="text-emerald-500 font-medium block mb-1">Raise</span>
                                    The global accessibility of electrified and sustainable mobility via affordable, highly durable HEV models across lower-to-middle income brackets, particularly in Southeast Asia and South America.
                                </div>
                                <div className="bg-black p-4 rounded-none border border-zinc-800 text-[12px]">
                                    <span className="text-blue-500 font-medium block mb-1">Create</span>
                                    A post-hardware <em>Mobility-as-a-Service</em> paradigm under the <em>Beyond Zero</em> initiative, deeply integrating physical cars with interconnected smart city grids and the globally synchronized <em>Digital Obeya</em> management cloud.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Slide>

            {/* 4. BCG MATRIX */}
            <Slide border="border-t border-zinc-800">
                <div className="animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out">
                    <h3 className="text-[18px] font-medium text-white mb-8 flex items-center gap-3"><BarChart3 className="text-red-500" /> 4. BCG matrix</h3>
                    
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="md:w-1/4">
                            <p className="text-[14px] text-zinc-400 mt-4 leading-relaxed font-normal">
                                The BCG Matrix maps Toyota's complex product portfolio across market growth and relative market share paradigms. Toyota actively balances its operations, relying on highly profitable legacy internal combustion and hybrid architectures to essentially bankroll the multi-billion dollar capital expenditure required to secure a foothold in the rapidly growing but intensely competitive pure electric vehicle segments.
                            </p>
                        </div>
                        
                        <div className="md:w-3/4 flex flex-col items-center">
                            <div className="text-zinc-400 text-[11px] font-bold mb-4 uppercase tracking-[0.4em]">Market share</div>
                            <div className="grid grid-cols-2 gap-2 w-full max-w-2xl relative">
                                {/* Star */}
                                <div className="card-hover bg-zinc-900 border border-zinc-800 p-6 rounded-none min-h-[140px]">
                                    <h4 className="text-[15px] font-bold text-zinc-100 mb-2 tracking-tighter uppercase italic">Stars</h4>
                                    <p className="text-[13px] text-zinc-300 font-medium mb-1">HEV (Hybrids) & RAV4</p>
                                    <p className="text-[12px] text-zinc-400">High share, high growth. These models are absolute juggernauts — the current primary revenue drivers, brilliantly capturing the transitional consumer demographic that wants electrification without range anxiety.</p>
                                </div>
                                {/* Question Mark */}
                                <div className="card-hover bg-zinc-900 border border-zinc-800 p-6 rounded-none min-h-[140px]">
                                    <h4 className="text-[15px] font-bold text-zinc-300 mb-2 tracking-tighter uppercase italic">Question marks</h4>
                                    <p className="text-[13px] text-zinc-300 font-medium mb-1">BEV (bZ4X) & Hydrogen</p>
                                    <p className="text-[12px] text-zinc-400">Low share, high growth. These products require disproportionate, massive R&D capital injections to secure a long-term market footing against established EV rivals, yet return little to no immediate profit.</p>
                                </div>
                                {/* Cash Cow */}
                                <div className="card-hover bg-zinc-900 border border-zinc-800 p-6 rounded-none min-h-[140px]">
                                    <h4 className="text-[15px] font-bold text-emerald-500 mb-2 tracking-tighter uppercase italic">Cash cows</h4>
                                    <p className="text-[13px] text-zinc-300 font-medium mb-1">ICE Trucks & SUVs</p>
                                    <p className="text-[12px] text-zinc-400">High share, low growth. These are the highly profitable, depreciated-tooling legacy stalwarts. They generate immense free cash flow, acting as the primary fiscal engine funding the futuristic BEV and Hydrogen bets.</p>
                                </div>
                                {/* Dog */}
                                <div className="card-hover bg-zinc-900 border border-zinc-800 p-6 rounded-none min-h-[140px]">
                                    <h4 className="text-[15px] font-bold text-zinc-500 mb-2 tracking-tighter uppercase italic">Dogs</h4>
                                    <p className="text-[13px] text-zinc-300 font-medium mb-1">Compact ICE Sedans</p>
                                    <p className="text-[12px] text-zinc-400">Low share, low growth. With global consumer preferences decisively shifting towards larger SUVs and CUVs, Toyota is actively consolidating and divesting from non-hybrid traditional sedan segments to prevent capital drain.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Slide>

            {/* 5. PORTER'S FIVE FORCES */}
            <Slide>
                <div className="animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out">
                    <h3 className="text-[18px] font-medium text-white mb-8 flex items-center gap-3"><Shield className="text-red-500" /> 5. Porter's five forces</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 stagger">
                        <div className="card-hover bg-zinc-950 border-t-[3px] border-red-600 p-5 rounded-none">
                            <h5 className="font-semibold text-white mb-1 tracking-tight">Rivalry</h5>
                            <span className="text-[13px] font-medium text-red-500 tracking-wider">Very high</span>
                            <p className="text-[13px] text-zinc-400 mt-2 font-normal">Toyota is engaged in direct, brutal confrontation on multiple fronts: legacy giants like VW and Hyundai pushing heavy volume, and heavily subsidized, aggressive Chinese EV OEMs (BYD, SAIC) triggering severe global margin compression and price wars.</p>
                        </div>
                        <div className="card-hover bg-zinc-950 border-t-[3px] border-orange-500 p-5 rounded-none">
                            <h5 className="font-semibold text-white mb-1 tracking-tight">Buyers</h5>
                            <span className="text-[13px] font-medium text-orange-400 tracking-wider">Mod-high</span>
                            <p className="text-[13px] text-zinc-400 mt-2 font-normal">Armed with near-perfect digital pricing transparency, modern consumers expect high-tech electrification as a standard baseline, not a premium feature. The loss or reduction of federal EV tax credits further amplifies this intense demographic price sensitivity.</p>
                        </div>
                        <div className="card-hover bg-zinc-950 border-t-[3px] border-orange-500 p-5 rounded-none">
                            <h5 className="font-semibold text-white mb-1 tracking-tight">Suppliers</h5>
                            <span className="text-[13px] font-medium text-orange-400 tracking-wider">Mod-high</span>
                            <p className="text-[13px] text-zinc-400 mt-2 font-normal">Automakers face extreme reliance on heavily concentrated global supply chains for rare-earth battery minerals and advanced semiconductor chips. Toyota aggressively counters this extortion leverage via massive vertical integration, notably its in-house $13.9B NC battery campus.</p>
                        </div>
                        <div className="card-hover bg-zinc-950 border-t-[3px] border-yellow-500 p-5 rounded-none">
                            <h5 className="font-semibold text-white mb-1 tracking-tight">New entrants</h5>
                            <span className="text-[13px] font-medium text-yellow-500 tracking-wider">Moderate</span>
                            <p className="text-[13px] text-zinc-400 mt-2 font-normal">Historically, manufacturing required massive capital barriers. Now, well-funded software-first technology firms (like Tesla originally, or emerging tech-auto joint ventures) are bypassing legacy engine manufacturing entirely, supported directly by foreign government EV subsidies.</p>
                        </div>
                        <div className="card-hover bg-zinc-950 border-t-[3px] border-yellow-500 p-5 rounded-none lg:col-span-2">
                            <h5 className="font-semibold text-white mb-1 tracking-tight">Substitutes</h5>
                            <span className="text-[13px] font-medium text-yellow-500 tracking-wider">Moderate</span>
                            <p className="text-[13px] text-zinc-400 mt-2 font-normal">The rise of ubiquitous urban mobility platforms (Uber, DiDi, Lyft), advanced high-speed rail, and micro-mobility solutions fundamentally threaten the private ownership model. Toyota's strategic pivot into a broad <em>mobility provider</em> deliberately hedges against this post-ownership future.</p>
                        </div>
                    </div>
                </div>
            </Slide>

            {/* --- CHAPTER 3: ORGANIZING (Intro) --- */}
            <Slide border="border-t border-zinc-800">
                <div className="animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out">
                    <SectionHeading subtitle="Chapter 3: Organizing" title="Structuring the empire" />
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <p className="text-[16px] text-zinc-400 mb-4 leading-relaxed font-normal">
                                Historically, Toyota operated under a highly centralized, rigid <em>spoke-and-wheel</em> global hierarchy strictly managed from the corporate epicenter in Japan. This archaic command-and-control structure proved catastrophic during the devastating 2009–2010 unintended acceleration crisis. Communication bottlenecks delayed critical quality-control responses, nearly destroying the brand's reputation for reliability.
                            </p>
                            <p className="text-[16px] text-zinc-400 mb-6 leading-relaxed font-normal">
                                Learning from this profound failure, Akio Toyoda orchestrated a radical dismantling of the core hierarchy. Today, Toyota utilizes a highly dynamic, decentralized <strong>3D matrix structure</strong>, perfectly balancing macro-level global product standardization with hyper-local, regional market responsiveness.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="card-hover bg-zinc-950 border border-zinc-800 p-5 rounded-none">
                                <div className="flex items-center gap-3 mb-2">
                                    <Globe className="text-red-500" size={18} />
                                    <h4 className="text-[14px] font-semibold text-white">Geographic divisions</h4>
                                </div>
                                <p className="text-zinc-400 text-[13px]">Establishment of powerful, dedicated regional executive authorities covering Japan, North America, Europe, Asia, and China. These divisions operate with semi-autonomy, maximizing responsiveness to localized consumer demands, differing regulatory climates, and sudden geopolitical trade shifts without waiting for Tokyo's permission.</p>
                            </div>
                            <div className="card-hover bg-zinc-950 border border-zinc-800 p-5 rounded-none">
                                <div className="flex items-center gap-3 mb-2">
                                    <Car className="text-red-500" size={18} />
                                    <h4 className="text-[14px] font-semibold text-white">In-house company system</h4>
                                </div>
                                <p className="text-zinc-400 text-[13px]">A groundbreaking shift from functional silos to product-based divisions (e.g., Lexus International, Mid-size Vehicle Company, Powertrain Unit Center). These units act as pseudo-independent agile entities, fostering rapid innovation, localized P&L accountability, and accelerated development cycles free from overarching macro-corporate bureaucracy.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Slide>

            {/* --- CHAPTER 3: ORGANIZING (Board Governance) --- */}
            <Slide>
                <div className="animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out">
                    <h3 className="text-[18px] font-semibold text-white mb-8 flex items-center gap-3 tracking-tight"><Scale className="text-red-500" /> Board governance evolution</h3>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <p className="text-[16px] text-zinc-400 mb-6 leading-relaxed font-normal">
                                To ensure extreme operational agility and transparency, Toyota transitioned in June 2025 to a modern <em>company with an audit and supervisory committee</em>. This structural overhaul fundamentally altered the power dynamics within the boardroom, elevating oversight capacity while streamlining operational execution.
                            </p>
                            <ul className="space-y-4 text-[14px] text-zinc-300 font-normal">
                                <li className="flex gap-3 items-start"><CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" /> <span>Former standard auditors have been permanently elevated to full members of the board of directors, possessing equal, unmitigated voting rights on corporate strategy.</span></li>
                                <li className="flex gap-3 items-start"><CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" /> <span>Crucially, exactly half of the 10 board directors are now independent, outside directors. This mathematically counters entrenched internal groupthink and legacy cronyism.</span></li>
                                <li className="flex gap-3 items-start"><CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" /> <span>The reorganized board deliberately delegates day-to-day granular execution tasks entirely to lower executives, allowing top-level seats to focus purely on macro-strategic oversight and risk assessment.</span></li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="bg-zinc-950 border border-zinc-800 p-6 rounded-none">
                                <h4 className="text-[11px] font-bold text-red-500 tracking-[0.18em] uppercase mb-4">Board composition</h4>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="text-center p-4 border border-zinc-800">
                                        <div className="text-[32px] font-semibold text-white">5</div>
                                        <div className="text-[12px] text-zinc-400">Internal directors</div>
                                    </div>
                                    <div className="text-center p-4 border border-emerald-500/30 bg-emerald-500/5">
                                        <div className="text-[32px] font-semibold text-emerald-400">5</div>
                                        <div className="text-[12px] text-emerald-400">Independent outsiders</div>
                                    </div>
                                </div>
                            </div>
                            <blockquote className="border-l-4 border-red-600 pl-6 py-4 bg-zinc-950 text-[14px] text-zinc-300">
                                The 50/50 split ensures no single faction can dominate strategic direction — a direct response to criticism that Toyota's board historically rubber-stamped executive decisions.
                            </blockquote>
                        </div>
                    </div>
                </div>
            </Slide>

            {/* --- CHAPTER 3: ORGANIZING (Executive Restructuring) --- */}
            <Slide>
                <div className="animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out">
                    <h3 className="text-[18px] font-semibold text-white mb-8 flex items-center gap-3 tracking-tight"><Users className="text-red-500" /> 2026 Executive restructuring</h3>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="bg-red-600 p-8 rounded-none text-white shadow-xl">
                            <h5 className="font-semibold text-[20px] mb-1">Koji Sato</h5>
                            <div className="text-[12px] font-medium text-red-200 uppercase tracking-wider mb-4">JAMA Chairman &bull; Chief Industry Officer</div>
                            <p className="text-[15px] text-red-100 leading-relaxed">Sato transitions outward from direct operations. He now focuses entirely on shaping macro-national policy as JAMA Chairman, coordinating closely with the Japanese government to enhance Japan's overall industrial competitiveness against China. This move strategically positions Toyota at the intersection of corporate and national economic strategy.</p>
                        </div>
                        <div className="bg-zinc-950 border border-zinc-800 p-8 rounded-none">
                            <h5 className="font-semibold text-[20px] text-white mb-1">Kenta Kon</h5>
                            <div className="text-[12px] font-medium text-red-500 uppercase tracking-wider mb-4">President & CEO &bull; Former CFO</div>
                            <p className="text-[15px] text-zinc-300 leading-relaxed">An unorthodox, aggressive move placing the former CFO at the executive helm. Kon is explicitly deployed to meticulously lower corporate break-even volumes and engineer financial defenses in a profound war of global financial attrition. His appointment signals that Toyota's immediate priority is fiscal resilience over product-led innovation.</p>
                        </div>
                    </div>
                    <div className="mt-8 bg-zinc-950 border border-zinc-800 p-6 rounded-none">
                        <h4 className="text-[14px] font-semibold text-white mb-3">Chairman: Akio Toyoda</h4>
                        <p className="text-[14px] text-zinc-400">Retains supreme influence as founding-family chairman. Toyoda continues to set the philosophical and cultural direction of the company while delegating operational execution to Kon. His continued presence ensures continuity of the Toyota Way philosophy through the leadership transition.</p>
                    </div>
                </div>
            </Slide>

            {/* --- CHAPTER 4: STAFFING (Intro) --- */}
            <Slide border="border-t border-zinc-800">
                <div className="animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out">
                    <SectionHeading subtitle="Chapter 4: Staffing" title="The human capital asset" />
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <p className="text-[16px] text-zinc-300 mb-4 leading-relaxed font-normal">
                                Toyota fundamentally rejects the traditional Western manufacturing model of treating human labor strictly as an expendable variable cost to be minimized during economic downturns. Instead, its massive network of 380,000 global employees is systematically viewed as the company's only true appreciating asset. This philosophy is uncompromisingly anchored by the historic <strong>psychological contract</strong>.
                            </p>
                            <p className="text-[16px] text-zinc-400 mb-6 leading-relaxed font-normal">
                                Forged in the fires of a devastating 1962 labor strike, this permanent labor-management agreement guarantees long-term (often lifetime) employment for its core domestic workforce. In exchange, the company commands absolute, undisputed ownership of all resulting productivity improvements and automation efficiencies. This social compact creates an intensely loyal, universally low-turnover environment that preserves highly specialized, generational institutional knowledge — preventing competitors from poaching Toyota's most experienced master craftsmen (Takumi).
                            </p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="bg-zinc-950 border border-zinc-800 p-6 rounded-none text-center">
                                <div className="text-[36px] font-semibold text-white mb-1">380K</div>
                                <div className="text-[11px] text-red-500 font-bold tracking-[0.18em] uppercase">Global employees</div>
                                <div className="text-[13px] text-zinc-400 mt-2">Viewed as the only true appreciating asset</div>
                            </div>
                            <blockquote className="border-l-4 border-red-600 pl-6 py-4 bg-zinc-950 text-[15px] text-zinc-300">
                                The 1962 labor strike forged a permanent social compact: lifetime employment in exchange for absolute ownership of all productivity gains.
                            </blockquote>
                        </div>
                    </div>
                </div>
            </Slide>

            {/* --- CHAPTER 4: STAFFING (Training Pipelines) --- */}
            <Slide>
                <div className="animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out">
                    <h3 className="text-[18px] font-semibold text-white mb-8 flex items-center gap-3 tracking-tight"><Users className="text-red-500" /> Training & development pipelines</h3>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="card-hover bg-zinc-950 border border-zinc-800 p-6 rounded-none">
                            <div className="flex items-center gap-3 mb-4">
                                <Users className="text-red-500" size={24} />
                                <h4 className="text-[16px] font-semibold text-white">Blue-collar integration</h4>
                            </div>
                            <p className="text-zinc-400 text-[14px] leading-relaxed">Toyota utilizes comprehensive, deeply immersive On-the-Job Training (OJT), pairing inexperienced new hires exclusively with strict veteran mentors. A relentless process of systematic job rotation cycles every worker repeatedly through assembly, quality assurance, and physical logistics, ensuring a universally cross-trained, hyper-resilient factory workforce.</p>
                            <div className="mt-4 pt-4 border-t border-zinc-800 text-[13px] text-zinc-500">
                                <strong className="text-zinc-300">Key mechanism:</strong> Mandatory rotation through all production stages before specialization
                            </div>
                        </div>
                        <div className="card-hover bg-zinc-950 border border-zinc-800 p-6 rounded-none">
                            <div className="flex items-center gap-3 mb-4">
                                <Globe className="text-red-500" size={24} />
                                <h4 className="text-[16px] font-semibold text-white">GLOBAL 21 Pipeline</h4>
                            </div>
                            <p className="text-zinc-400 text-[14px] leading-relaxed">The corporate engine that cultivates Toyota's global executive leadership. High-potential mid-career employees are deliberately forced into heavily demanding overseas assignments or sponsored MBA programs to acquire necessary cross-cultural, macro-operational skills before ever being considered for senior domestic roles.</p>
                            <div className="mt-4 pt-4 border-t border-zinc-800 text-[13px] text-zinc-500">
                                <strong className="text-zinc-300">Career gate:</strong> No senior domestic role without proven international experience
                            </div>
                        </div>
                    </div>
                </div>
            </Slide>

            {/* --- CHAPTER 4: STAFFING (Appraisal Architecture) --- */}
            <Slide>
                <div className="animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out">
                    <h3 className="text-[18px] font-semibold text-white mb-2 flex items-center gap-3 tracking-tight"><FileText className="text-red-500" /> The architecture of appraisal</h3>
                    <p className="text-[14px] text-zinc-400 mb-8 max-w-3xl">Annual evaluations deliberately bypass highly subjective personality traits, focusing intensely instead on 5 primary, rigorously empirical criteria (worth 10 points each):</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 stagger">
                        <div className="card-hover bg-zinc-950 border border-zinc-800 border-l-[3px] border-l-red-500 p-5 rounded-none">
                            <strong className="text-white block font-medium mb-2 text-[14px]">1. Physical skills (Takt)</strong>
                            <span className="text-zinc-400 text-[13px]">The raw physical ability of the worker to handle complex assembly tasks strictly within the mathematically designated takt time cycle, doing so without degrading overall product quality or safety.</span>
                        </div>
                        <div className="card-hover bg-zinc-950 border border-zinc-800 border-l-[3px] border-l-red-500 p-5 rounded-none">
                            <strong className="text-white block font-medium mb-2 text-[14px]">2. Quality maintenance</strong>
                            <span className="text-zinc-400 text-[13px]">A track record of absolute adherence to the factory's stringent zero-defect manufacturing standards, demonstrating vigilance against letting flawed components pass down the line.</span>
                        </div>
                        <div className="card-hover bg-zinc-950 border border-zinc-800 border-l-[3px] border-l-red-500 p-5 rounded-none">
                            <strong className="text-white block font-medium mb-2 text-[14px]">3. Kaizen participation</strong>
                            <span className="text-zinc-400 text-[13px]">Proof of active, consistently documented participation in the continuous improvement process (Kaizen), frequently suggesting and implementing small, iterative efficiency boosts.</span>
                        </div>
                        <div className="card-hover bg-zinc-950 border border-zinc-800 border-l-[3px] border-l-red-500 p-5 rounded-none">
                            <strong className="text-white block font-medium mb-2 text-[14px]">4. Big picture view</strong>
                            <span className="text-zinc-400 text-[13px]">The cognitive ability of an operator to clearly articulate exactly how their microscopic daily assembly targets directly derive from and support the broader macro corporate objectives.</span>
                        </div>
                        <div className="card-hover bg-zinc-950 border border-zinc-800 border-l-[3px] border-l-red-500 p-5 rounded-none lg:col-span-2">
                            <strong className="text-white block font-medium mb-2 text-[14px]">5. Problem solving</strong>
                            <span className="text-zinc-400 text-[13px]">Proven intellectual capability to independently execute comprehensive root-cause analysis (utilizing the <em>5 Whys</em> methodology) and immediately physically deploy corrective countermeasures on the factory floor.</span>
                        </div>
                    </div>
                </div>
            </Slide>
            {/* --- CHAPTER 5: LEADING (Intro + Systems) --- */}
            <Slide border="border-t border-red-600 bg-red-600">
                <div className="animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out text-white">
                    <SectionHeading subtitle="Chapter 5: Leading" title="Facilitating horizontal alignment" light={true} />
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <p className="text-[16px] text-red-100 mb-6 leading-relaxed font-normal">
                                Leadership at Toyota is a profound, structural rejection of traditional, vertical, autocratic directives common in standard manufacturing environments. Instead, it is defined entirely by meticulous facilitation, dismantling restrictive corporate silos, and intensely empowering subordinates at the <em>genba</em> (the actual place value is physically created). Leaders are coaches meant to guide continuous improvement, not drill sergeants barking orders from air-conditioned offices.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="bg-black/20 p-5 rounded-none border border-white/10">
                                <h4 className="text-[16px] font-medium mb-2 flex items-center gap-3"><Users size={18} /> The Obeya System</h4>
                                <p className="text-red-100 text-[13px]">Literally translated as the <em>Big Room</em>. Cross-functional leaders and engineers from inherently conflicting departments converge daily in a highly visual, physical workspace to practice <em>genchi genbutsu</em> (going to the source). Walls are aggressively plastered with simplified A3 problem-solving documents and critical-path schedules. This radically transparent environment demolishes email chains and forces rapid, face-to-face collaborative decision-making across the entire engineering pipeline.</p>
                            </div>
                            <div className="bg-black/20 p-5 rounded-none border border-white/10">
                                <h4 className="text-[16px] font-medium mb-2 flex items-center gap-3"><Lightbulb size={18} /> Toyota Times</h4>
                                <p className="text-red-100 text-[13px]">Spearheaded directly by Chairman Akio Toyoda in 2020. This internal-turned-external open-media channel projects top management's unfiltered thoughts, candid failures, and strategic anxieties directly to the public and the global workforce. By bypassing traditional corporate PR buffering, it deliberately cultivates an unprecedented atmosphere of absolute transparency, systematically building bottom-up systemic trust throughout the organization.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Slide>

            {/* --- CHAPTER 5: LEADING (TCISS Innovation) --- */}
            <Slide className="bg-red-600">
                <div className="animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="text-white">
                            <h3 className="text-[18px] font-semibold mb-6 flex items-center gap-3 tracking-tight"><Lightbulb size={20} /> Democratizing innovation</h3>
                            <p className="text-[16px] text-red-100 mb-6 leading-relaxed font-normal">
                                The globally renowned <strong>Toyota Creative Idea Suggestion System (TCISS)</strong>, established in 1951, successfully democratized mass innovation. By granting complete creative autonomy to line workers, leadership effectively shifted its role from statically dictating processes to actively coaching employees on how to intelligently identify and permanently solve their own workspace abnormalities.
                            </p>
                            <div className="flex items-center gap-6 bg-black/20 p-5 rounded-none border border-white/10">
                                <div className="text-[36px] font-bold">40M+</div>
                                <div className="text-[12px] font-medium text-red-200 uppercase tracking-widest leading-tight">Total employee ideas<br/>submitted by 2011</div>
                            </div>
                        </div>

                        <div className="bg-white text-zinc-900 p-8 rounded-none shadow-2xl">
                            <h4 className="text-[14px] font-bold text-red-600 uppercase tracking-wider mb-6">Financial incentive architecture</h4>
                            <div className="space-y-3 mb-6 text-[14px]">
                                <div className="flex justify-between items-center border-b border-zinc-100 pb-2">
                                    <span className="font-medium text-zinc-700">Standard prize for any suggestion</span>
                                    <span className="bg-zinc-100 px-3 py-1 text-zinc-600 font-medium">500 ¥</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-zinc-100 pb-2">
                                    <span className="font-medium text-zinc-700">Outstanding prize (actionable)</span>
                                    <span className="bg-zinc-200 px-3 py-1 text-zinc-700 font-medium">2,000 ¥</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-zinc-100 pb-2">
                                    <span className="font-medium text-zinc-700">Excellent prize (high impact)</span>
                                    <span className="bg-zinc-300 px-3 py-1 text-zinc-800 font-medium">5,000 ¥</span>
                                </div>
                                <div className="flex justify-between items-center pb-2">
                                    <span className="font-medium text-red-600">The best award (system-wide change)</span>
                                    <span className="bg-red-100 px-3 py-1 text-red-600 font-medium">10k–200k ¥</span>
                                </div>
                            </div>

                            <div className="bg-zinc-100 p-4 border-l-[3px] border-red-600">
                                <h5 className="font-bold text-[14px] mb-1 uppercase">The Rookie Award Mandate</h5>
                                <p className="text-zinc-600 text-[13px]">Exclusively targets 1st and 2nd-year entry employees, coercing them to successfully generate at least <strong>36 actionable efficiency suggestions annually</strong> (roughly 3 innovations per month). This radically breaks young workers from complacent habits immediately upon hiring.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Slide>

            {/* --- CHAPTER 6: CONTROLLING (Intro) --- */}
            <Slide border="border-t border-zinc-800">
                <div className="animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out">
                    <SectionHeading subtitle="Chapter 6: Controlling" title="Algorithmic control & oversight" />
                    <p className="text-[16px] text-zinc-400 max-w-4xl leading-relaxed font-normal">
                        Rigorous financial controlling models reveal a volatile dual reality defining Toyota's current operational state: massive, record-breaking top-line revenue growth across global markets is being brutally offset by severe margin compression. This profit tightening is fundamentally caused by colossal capital expenditures — such as the massive $13.9B outlay for the North Carolina battery campus — compounded by soaring macro-inflation surrounding raw materials used in hybrid circuits.
                    </p>
                </div>
            </Slide>

            {/* --- CHAPTER 6: CONTROLLING (Financials) --- */}
            <Slide>
                <div className="animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-[18px] font-semibold text-white mb-6 flex items-center gap-3 tracking-tight"><TrendingUp className="text-red-500" /> Financial pressures & market reality</h3>

                        <div className="space-y-4 bg-zinc-950 p-6 rounded-none border border-zinc-800">
                            <div>
                                <div className="flex justify-between text-[12px] font-medium text-white mb-2 uppercase tracking-widest">
                                    <span>FY24 Revenue (¥B)</span>
                                    <span className="text-emerald-500">+6.5%</span>
                                </div>
                                <div className="h-6 bg-zinc-900 rounded-none overflow-hidden relative">
                                    <div className="absolute top-0 left-0 h-full bg-blue-600 w-[95%]"></div>
                                    <div className="absolute top-0 left-0 h-full flex items-center px-4 text-white text-[12px] font-bold z-10">48,036</div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-[12px] font-medium text-white mb-2 uppercase tracking-widest">
                                    <span>FY24 Operating Margin</span>
                                    <span className="text-emerald-500">Historic high</span>
                                </div>
                                <div className="h-6 bg-zinc-900 rounded-none overflow-hidden relative">
                                    <div className="absolute top-0 left-0 h-full bg-emerald-600 w-[85%]"></div>
                                    <div className="absolute top-0 left-0 h-full flex items-center px-4 text-white text-[12px] font-bold z-10">11.9%</div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-[12px] font-medium text-white mb-2 uppercase tracking-widest">
                                    <span>FY25 Margin Forecast</span>
                                    <span className="text-red-500">-1.9pp</span>
                                </div>
                                <div className="h-6 bg-zinc-900 rounded-none overflow-hidden relative">
                                    <div className="absolute top-0 left-0 h-full bg-orange-600 w-[71%]"></div>
                                    <div className="absolute top-0 left-0 h-full flex items-center px-4 text-white text-[12px] font-bold z-10">10.0% (Triggered CEO shift)</div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-[12px] font-medium text-white mb-2 uppercase tracking-widest">
                                    <span>Return on Equity (ROE)</span>
                                    <span className="text-red-500">-2.2pp</span>
                                </div>
                                <div className="h-6 bg-zinc-900 rounded-none overflow-hidden relative">
                                    <div className="absolute top-0 left-0 h-full bg-purple-600 w-[68%]"></div>
                                    <div className="absolute top-0 left-0 h-full flex items-center px-4 text-white text-[12px] font-bold z-10">13.6%</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-zinc-950 border border-zinc-800 rounded-none p-6">
                        <h4 className="text-[14px] font-bold text-white mb-3 uppercase tracking-wider">FY24 vs FY25 at a glance</h4>
                        <div className="grid grid-cols-2 gap-4 text-center">
                            <div className="p-4 border border-emerald-500/20 bg-emerald-500/5">
                                <div className="text-[24px] font-semibold text-emerald-400">¥48T</div>
                                <div className="text-[11px] text-zinc-400">Record revenue</div>
                            </div>
                            <div className="p-4 border border-red-500/20 bg-red-500/5">
                                <div className="text-[24px] font-semibold text-red-400">-1.9pp</div>
                                <div className="text-[11px] text-zinc-400">Margin erosion</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Slide>

            {/* --- CHAPTER 6: CONTROLLING (Compliance) --- */}
            <Slide>
                <div className="animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out">
                    <h3 className="text-[18px] font-semibold text-white mb-2 flex items-center gap-3 tracking-tight">
                        <ShieldCheck className="text-red-500" /> Executive compliance architecture
                    </h3>
                    <p className="text-[15px] text-zinc-400 mb-8 max-w-4xl leading-relaxed font-normal">
                        Following severe, multi-year crash-test certification violations discovered internally at critical subsidiaries like Hino and Daihatsu, Toyota's executive board felt regulatory heat from the Japanese government. In response, they forcibly instituted a series of draconian, no-exception compliance overhauls across the global empire.
                    </p>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="bg-zinc-950 border border-zinc-800 p-6 rounded-none relative">
                            <div className="absolute top-0 left-0 w-full h-[3px] bg-red-600"></div>
                            <h5 className="text-[16px] font-bold text-white mb-3 mt-2">Global Chief Compliance Officer (GCCO)</h5>
                            <p className="text-[14px] text-zinc-400 font-normal leading-relaxed">A newly established centralized role that wields unmitigated, absolute veto authority over factory line compliance issues. The GCCO directly chairs the critical Compliance Committee alongside the Risk Management board to ensure regulatory deviations are reported directly to the CEO, entirely bypassing middle management coverups.</p>
                        </div>
                        <div className="bg-zinc-950 border border-zinc-800 p-6 rounded-none relative">
                            <div className="absolute top-0 left-0 w-full h-[3px] bg-zinc-600"></div>
                            <h5 className="text-[16px] font-bold text-white mb-3 mt-2">Regional CCO Delegates</h5>
                            <p className="text-[14px] text-zinc-400 font-normal leading-relaxed">Strategically appointed across heavily regulated territories like North America and the EU to ensure specific, localized cultural management nuances do not obscure or contradict high-level Japanese corporate governance mandates.</p>
                        </div>
                    </div>
                </div>
            </Slide>

            {/* --- CHAPTER 6: CONTROLLING (Supply Chain) --- */}
            <Slide>
                <div className="animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out">
                    <h3 className="text-[18px] font-bold text-white mb-8 flex items-center gap-3 uppercase italic tracking-tighter">
                        <Globe className="text-blue-500" /> Supply Control
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-zinc-950 p-6 border border-zinc-800 rounded-none">
                            <Zap className="text-yellow-500 mb-4" size={24} />
                            <h5 className="text-[16px] font-bold text-white mb-2">Global EMIS Cloud</h5>
                            <p className="text-[13px] text-zinc-400">The <em>Ecology, Safety and Health Material Investigation System</em> automatically and algorithmically assesses the chemical toxicity risks of millions of supplier parts in real-time. This prevents banned substances from entering the localized supply chain to ensure zero European or US environmental regulatory deviations.</p>
                        </div>
                        <div className="bg-zinc-950 p-6 border border-zinc-800 rounded-none">
                            <Target className="text-red-500 mb-4" size={24} />
                            <h5 className="text-[16px] font-bold text-white mb-2">TEAM Award KPI</h5>
                            <p className="text-[13px] text-zinc-400">Third-party suppliers are relentlessly and transparently evaluated against microscopic defect rates, minute-level delivery precision, and sustained, multi-year cost reduction trajectories. Excellence is publicly rewarded via the prestigious <em>Total Exceptional Achievement for Manufacturing</em> (TEAM) corporate award.</p>
                        </div>
                    </div>
                </div>
            </Slide>

            {/* --- CONCLUSION --- */}
            <Slide border="border-t-4 border-red-600 bg-black text-center">
                <div className="animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out max-w-4xl mx-auto">
                    <Car size={64} className="text-zinc-800 mx-auto mb-8" />
                    <h2 className="text-[28px] font-bold text-white mb-8 italic uppercase tracking-tighter">The Vanguard of Global Management</h2>
                    <p className="text-[16px] text-zinc-400 font-normal leading-relaxed mb-12">
                        Toyota operates not merely as an automobile manufacturer, but as a deeply integrated, highly self-correcting sociotechnical system. By perfectly balancing the stability of its historical philosophy with the brutal pragmatism required by modern markets, Toyota is uniquely positioned to dictate the future trajectory of global mobility.
                    </p>
                    <div className="text-[13px] text-zinc-500 font-bold uppercase tracking-[0.3em]">
                        MIT Manipal | Math and Computing 2027
                    </div>
                </div>
            </Slide>

        </div>
    );
}
