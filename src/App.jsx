import React, { useEffect, useRef, useState } from 'react';
import {
    ChevronDown, Target, Globe, Users, Lightbulb, ShieldCheck,
    TrendingUp, Car, AlertTriangle, BarChart3, BookOpen,
    Award, Scale, Waves, Zap, Shield, GitMerge, FileText, CheckCircle2
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

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
                            <p className="text-[18px] leading-relaxed mb-6 font-normal">
                                Originating from the Toyoda Automatic Loom Works in the early 20th century under Sakichi Toyoda, Toyota has constantly transcended its mechanical roots. After World War II, under the guidance of Kiichiro Toyoda and legendary engineer Taiichi Ohno, the company pioneered the Toyota Production System (TPS) - a socio-technical framework that eradicated waste (muda) and introduced "Just-In-Time" manufacturing to the world. TPS fundamentally altered global industrial manufacturing, cementing Toyota's legacy not just as a car builder, but as an efficiency pioneer.
                            </p>
                            <p className="text-[18px] leading-relaxed mb-6 font-normal">
                                Today, facing a generational disruption driven by electrification, autonomy, and artificial intelligence, Toyota is executing another comprehensive strategic pivot. They are shedding the identity of a traditional automaker to become a holistic <strong>mobility company</strong> dedicated to the seamless global movement of people, goods, information, and energy. This transition places software-defined vehicles (SDVs) and interconnected smart-city infrastructures, such as the Woven City project, at the epicenter of their future growth strategy.
                            </p>
                            <blockquote className="border-l-4 border-red-600 pl-6 py-4 my-8 bg-zinc-950 text-[18px] text-zinc-200">
                                <span className="font-medium block text-red-500 text-[14px] tracking-widest mb-2">Core mission</span>
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
                                <li className="flex gap-2"><span className="text-emerald-500 text-[8px] mt-1.5">●</span> <strong>Operational scale:</strong> Best-selling automaker globally with over 5.5M units shipped in H1 2025.</li>
                                <li className="flex gap-2"><span className="text-emerald-500 text-[8px] mt-1.5">●</span> <strong>Manufacturing supremacy:</strong> The highly resilient Toyota production system (TPS) provides unmatched lean operating leverage.</li>
                                <li className="flex gap-2"><span className="text-emerald-500 text-[8px] mt-1.5">●</span> <strong>Hedging risk:</strong> A well-diversified multi-pathway product portfolio (HEV, PHEV, BEV, FCEV).</li>
                            </ul>
                        </div>
                        <div className="card-hover bg-zinc-950 border border-orange-500/20 rounded-none p-6 relative overflow-hidden">
                            <h4 className="text-[15px] font-semibold text-orange-400 mb-4 tracking-tight">Weaknesses</h4>
                            <ul className="space-y-2 text-zinc-300 text-[14px]">
                                <li className="flex gap-2"><span className="text-orange-500 text-[8px] mt-1.5">●</span> <strong>Market concentration:</strong> Historical over-reliance on North American truck segments for outlier profits.</li>
                                <li className="flex gap-2"><span className="text-orange-500 text-[8px] mt-1.5">●</span> <strong>Organizational drag:</strong> Bureaucratic rigidity occasionally slowing cross-divisional technological decisions.</li>
                                <li className="flex gap-2"><span className="text-orange-500 text-[8px] mt-1.5">●</span> <strong>Financial compression:</strong> Operating margin declined as capital expenditure toward BEV transition eroded cash flows.</li>
                            </ul>
                        </div>
                        <div className="card-hover bg-zinc-950 border border-blue-500/20 rounded-none p-6 relative overflow-hidden">
                            <h4 className="text-[15px] font-semibold text-zinc-100 mb-4 tracking-tight">Opportunities</h4>
                            <ul className="space-y-2 text-zinc-300 text-[14px]">
                                <li className="flex gap-2"><span className="text-blue-500 text-[8px] mt-1.5">●</span> <strong>Macroeconomic tailwinds:</strong> Sustained weak Yen dramatically boosting profitability of domestic exports.</li>
                                <li className="flex gap-2"><span className="text-blue-500 text-[8px] mt-1.5">●</span> <strong>Consumer hesitation:</strong> Surging demand for hybrid vehicles as range anxiety prevents full BEV commitment.</li>
                                <li className="flex gap-2"><span className="text-blue-500 text-[8px] mt-1.5">●</span> <strong>Policy advantages:</strong> Lucrative subsidies explicitly designed for eco-mobility and domestic battery localization.</li>
                            </ul>
                        </div>
                        <div className="card-hover bg-zinc-950 border border-red-500/20 rounded-none p-6 relative overflow-hidden">
                            <h4 className="text-[15px] font-semibold text-red-500 mb-4 tracking-tight">Threats</h4>
                            <ul className="space-y-2 text-zinc-300 text-[14px]">
                                <li className="flex gap-2"><span className="text-red-500 text-[8px] mt-1.5">●</span> <strong>Geopolitical instability:</strong> Escalating U.S. tariffs disrupting high-profit imported export models.</li>
                                <li className="flex gap-2"><span className="text-red-500 text-[8px] mt-1.5">●</span> <strong>Hyper-competition:</strong> Aggressive low-cost Chinese EV OEMs (BYD, SAIC) utilizing depressed labor costs.</li>
                                <li className="flex gap-2"><span className="text-red-500 text-[8px] mt-1.5">●</span> <strong>Legislative shifts:</strong> Potential elimination of federal EV tax credits reducing consumer BEV demand.</li>
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
                                            <td className="p-3 border-b border-zinc-800 text-zinc-400">Monetize weak Yen by scaling exports of high-margin Camry and RAV4 hybrids.</td>
                                        </tr>
                                        <tr>
                                            <td className="p-3 border-b border-zinc-800 border-l-[3px] border-l-orange-500 font-medium text-white">WO: Mini-Maxi</td>
                                            <td className="p-3 border-b border-zinc-800 text-zinc-400">Tap into government green incentives to fund the $13.9B NC battery manufacturing plant.</td>
                                        </tr>
                                        <tr>
                                            <td className="p-3 border-l-[3px] border-l-red-500 font-medium text-white">WT: Mini-Mini</td>
                                            <td className="p-3 text-zinc-400">Preempt trade wars by reducing corporate break-even volumes and enforcing lean efficiency.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-[18px] font-medium text-white mb-6 flex items-center gap-3"><Waves className="text-blue-500" /> 3. Blue ocean (ERRC)</h3>
                            <div className="grid grid-cols-2 gap-3 h-full">
                                <div className="bg-black p-4 rounded-none border border-zinc-800 text-[13px]">
                                    <span className="text-red-500 font-medium block mb-1">Eliminate</span>
                                    Archaic single-powertrain dependency across new model platforms.
                                </div>
                                <div className="bg-black p-4 rounded-none border border-zinc-800 text-[13px]">
                                    <span className="text-orange-500 font-medium block mb-1">Reduce</span>
                                    Corporate break-even volume and rare-earth intensive battery architectures.
                                </div>
                                <div className="bg-black p-4 rounded-none border border-zinc-800 text-[13px]">
                                    <span className="text-emerald-500 font-medium block mb-1">Raise</span>
                                    Global accessibility of sustainable mobility via affordable HEV models.
                                </div>
                                <div className="bg-black p-4 rounded-none border border-zinc-800 text-[13px]">
                                    <span className="text-blue-500 font-medium block mb-1">Create</span>
                                    "Mobility-as-a-Service" paradigm under the Beyond Zero initiative.
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
                                The BCG Matrix maps Toyota's complex product portfolio. Toyota actively balances its operations, relying on highly profitable legacy hybrid architectures to bankroll the multi-billion dollar capital expenditure required for the rapidly growing pure electric vehicle segments.
                            </p>
                        </div>
                        
                        <div className="md:w-3/4 flex flex-col items-center">
                            <div className="text-zinc-400 text-[11px] font-bold mb-4 uppercase tracking-[0.4em]">Market share</div>
                            <div className="grid grid-cols-2 gap-2 w-full max-w-2xl relative">
                                {/* Star */}
                                <div className="card-hover bg-zinc-900 border border-zinc-800 p-6 rounded-none min-h-[140px]">
                                    <h4 className="text-[15px] font-bold text-zinc-100 mb-2 tracking-tighter uppercase italic">Stars</h4>
                                    <p className="text-[13px] text-zinc-300 font-medium mb-1">HEV (Hybrids) & RAV4</p>
                                    <p className="text-[12px] text-zinc-400">High share, high growth. Primary revenue drivers capturing transitional consumers.</p>
                                </div>
                                {/* Question Mark */}
                                <div className="card-hover bg-zinc-900 border border-zinc-800 p-6 rounded-none min-h-[140px]">
                                    <h4 className="text-[15px] font-bold text-zinc-300 mb-2 tracking-tighter uppercase italic">Question marks</h4>
                                    <p className="text-[13px] text-zinc-300 font-medium mb-1">BEV (bZ4X) & Hydrogen</p>
                                    <p className="text-[12px] text-zinc-400">Low share, high growth. Requires massive R&D injections against EV rivals.</p>
                                </div>
                                {/* Cash Cow */}
                                <div className="card-hover bg-zinc-900 border border-zinc-800 p-6 rounded-none min-h-[140px]">
                                    <h4 className="text-[15px] font-bold text-emerald-500 mb-2 tracking-tighter uppercase italic">Cash cows</h4>
                                    <p className="text-[13px] text-zinc-300 font-medium mb-1">ICE Trucks & SUVs</p>
                                    <p className="text-[12px] text-zinc-400">High share, low growth. Profitable legacy stalwarts funding future bets.</p>
                                </div>
                                {/* Dog */}
                                <div className="card-hover bg-zinc-900 border border-zinc-800 p-6 rounded-none min-h-[140px]">
                                    <h4 className="text-[15px] font-bold text-zinc-500 mb-2 tracking-tighter uppercase italic">Dogs</h4>
                                    <p className="text-[13px] text-zinc-300 font-medium mb-1">Compact ICE Sedans</p>
                                    <p className="text-[12px] text-zinc-400">Low share, low growth. Divesting from non-hybrid traditional segments.</p>
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
                            <p className="text-[13px] text-zinc-400 mt-2 font-normal">Direct confrontion on multiple fronts: legacy giants and heavily subsidized Chinese EV OEMs triggering margin compression.</p>
                        </div>
                        <div className="card-hover bg-zinc-950 border-t-[3px] border-orange-500 p-5 rounded-none">
                            <h5 className="font-semibold text-white mb-1 tracking-tight">Buyers</h5>
                            <span className="text-[13px] font-medium text-orange-400 tracking-wider">Mod-high</span>
                            <p className="text-[13px] text-zinc-400 mt-2 font-normal">Consumers expect high-tech electrification as a standard baseline, amplified by price sensitivity under subsidy shifts.</p>
                        </div>
                        <div className="card-hover bg-zinc-950 border-t-[3px] border-orange-500 p-5 rounded-none">
                            <h5 className="font-semibold text-white mb-1 tracking-tight">Suppliers</h5>
                            <span className="text-[13px] font-medium text-orange-400 tracking-wider">Mod-high</span>
                            <p className="text-[13px] text-zinc-400 mt-2 font-normal">Extreme reliance on concentrated global supply chains for rare-earth minerals and advanced semiconductor chips.</p>
                        </div>
                        <div className="card-hover bg-zinc-950 border-t-[3px] border-yellow-500 p-5 rounded-none">
                            <h5 className="font-semibold text-white mb-1 tracking-tight">New entrants</h5>
                            <span className="text-[13px] font-medium text-yellow-500 tracking-wider">Moderate</span>
                            <p className="text-[13px] text-zinc-400 mt-2 font-normal">Tech-first firms are bypassing legacy ICE manufacturing entirely, supported directly by foreign government subsidies.</p>
                        </div>
                        <div className="card-hover bg-zinc-950 border-t-[3px] border-yellow-500 p-5 rounded-none lg:col-span-2">
                            <h5 className="font-semibold text-white mb-1 tracking-tight">Substitutes</h5>
                            <span className="text-[13px] font-medium text-yellow-500 tracking-wider">Moderate</span>
                            <p className="text-[13px] text-zinc-400 mt-2 font-normal">Urban mobility platforms and high-speed rail threaten the ownership model. Toyota's pivot to "mobility provider" hedges this.</p>
                        </div>
                    </div>
                </div>
            </Slide>

            {/* --- CHAPTER 3: ORGANIZING --- */}
            <Slide border="border-t border-zinc-800">
                <div className="animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out">
                    <SectionHeading subtitle="Chapter 3: Organizing" title="Structuring the empire" />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <p className="text-[16px] text-zinc-400 mb-4 leading-relaxed font-normal">
                                Historically, Toyota operated under a highly centralized "spoke-and-wheel" global hierarchy. Today, they utilize a decentralized <strong>3D matrix structure</strong>, balancing global product standardization with hyper-local regional market responsiveness.
                            </p>

                            <div className="space-y-3">
                                <div className="card-hover bg-zinc-950 border border-zinc-800 p-4 rounded-none">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Globe className="text-red-500" size={18} />
                                        <h4 className="text-[14px] font-semibold text-white">Geographic divisions</h4>
                                    </div>
                                    <p className="text-zinc-400 text-[13px]">Executive authorities maximize responsiveness to localized consumer demands and regulatory climates.</p>
                                </div>
                                <div className="card-hover bg-zinc-950 border border-zinc-800 p-4 rounded-none">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Car className="text-red-500" size={18} />
                                        <h4 className="text-[14px] font-semibold text-white">Product-based units</h4>
                                    </div>
                                    <p className="text-zinc-400 text-[13px]">Agile entities like Lexus International foster rapid innovation free from overarching corporate bureaucracy.</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <div className="bg-zinc-950 p-6 rounded-none border border-zinc-800">
                                <h4 className="text-[15px] font-semibold text-white mb-3 flex items-center gap-3 tracking-tight"><Scale className="text-red-500" /> Board governance</h4>
                                <ul className="space-y-2 text-[13px] text-zinc-300 font-normal">
                                    <li className="flex gap-2 items-start"><CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-1" /> <span>50% of the 10 board directors are now independent, outside directors to counter groupthink.</span></li>
                                    <li className="flex gap-2 items-start"><CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-1" /> <span>Board delegates day-to-day granular execution tasks entirely to lower executives.</span></li>
                                </ul>
                            </div>

                            <div className="bg-red-600 p-6 rounded-none text-white shadow-xl">
                                <h4 className="text-[14px] font-medium mb-4 border-b border-red-500 pb-2 tracking-wider uppercase">2026 Leadership</h4>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <h5 className="font-semibold text-[15px]">Koji Sato</h5>
                                        <div className="text-[11px] font-medium text-red-200 uppercase mb-1">JAMA Chairman</div>
                                        <p className="text-[12px] text-red-100">Focusing on macro-national policy and industrial competitiveness.</p>
                                    </div>
                                    <div>
                                        <h5 className="font-semibold text-[15px]">Kenta Kon</h5>
                                        <div className="text-[11px] font-medium text-red-200 uppercase mb-1">President & CEO</div>
                                        <p className="text-[12px] text-red-100">Deploying financial defenses and lowering corporate break-even volumes.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Slide>

            {/* --- CHAPTER 4: STAFFING --- */}
            <Slide border="border-t border-zinc-800">
                <div className="animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out">
                    <SectionHeading subtitle="Chapter 4: Staffing" title="The human capital asset" />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <p className="text-[16px] text-zinc-300 mb-4 leading-relaxed font-normal">
                                Toyota views its 380,000 global employees collectively as the company's only true appreciating asset. This philosophy is anchored by the historic <strong>psychological contract</strong>.
                            </p>
                            <p className="text-[15px] text-zinc-400 mb-6 leading-relaxed font-normal">
                                Guaranteed long-term employment creates an intensely loyal, universally cross-trained workforce that preserves specialized generational institutional knowledge.
                            </p>

                            <div className="space-y-3">
                                <div className="card-hover bg-zinc-950 border border-zinc-800 p-4 rounded-none">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Users className="text-red-500" size={18} />
                                        <h4 className="text-[14px] font-semibold text-white">Blue-collar integration</h4>
                                    </div>
                                    <p className="text-zinc-400 text-[13px]">Immersive On-the-Job Training pairing new hires with strict veteran mentors for Takumi-level skill transfer.</p>
                                </div>
                                <div className="card-hover bg-zinc-950 border border-zinc-800 p-4 rounded-none">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Globe className="text-red-500" size={18} />
                                        <h4 className="text-[14px] font-semibold text-white">Global 21 Pipeline</h4>
                                    </div>
                                    <p className="text-zinc-400 text-[13px]">High-potential employees undergo demanding overseas assignments to acquire cross-cultural leadership skills.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-black border border-zinc-800 p-6 shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-5"><FileText size={100} /></div>
                            <h4 className="text-[15px] font-medium text-white mb-4 relative z-10 uppercase tracking-wider">Appraisal pillars</h4>
                            <div className="grid grid-cols-1 gap-2 relative z-10">
                                <div className="bg-zinc-950 p-3 border border-zinc-800 border-l-[3px] border-l-red-500 text-[12px]">
                                    <strong className="text-white block font-medium mb-1">Physical skills (Takt)</strong>
                                    <span className="text-zinc-400">Ability to handle complex assembly strictly within cycle limits.</span>
                                </div>
                                <div className="bg-zinc-950 p-3 border border-zinc-800 border-l-[3px] border-l-red-500 text-[12px]">
                                    <strong className="text-white block font-medium mb-1">Quality Maintenance</strong>
                                    <span className="text-zinc-400">Absolute adherence to zero-defect manufacturing standards.</span>
                                </div>
                                <div className="bg-zinc-950 p-3 border border-zinc-800 border-l-[3px] border-l-red-500 text-[12px]">
                                    <strong className="text-white block font-medium mb-1">Kaizen participation</strong>
                                    <span className="text-zinc-400">Documented proof of suggesting continuous improvement iterations.</span>
                                </div>
                                <div className="bg-zinc-950 p-3 border border-zinc-800 border-l-[3px] border-l-red-500 text-[12px]">
                                    <strong className="text-white block font-medium mb-1">Big picture view</strong>
                                    <span className="text-zinc-400">Connecting daily assembly targets to macro corporate objectives.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Slide>
            {/* --- CHAPTER 5: LEADING --- */}
            <Slide border="border-t border-red-600 bg-red-600">
                <div className="animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-white">
                    <div>
                        <SectionHeading subtitle="Chapter 5: Leading" title="Facilitating horizontal alignment" light={true} />
                        <p className="text-[16px] text-red-100 mb-6 leading-relaxed font-normal">
                            Leadership at Toyota is defined by meticulous facilitation and dismantling silos. Leaders are coaches at the <em>genba</em>, not drill sergeants in offices.
                        </p>

                        <div className="space-y-4">
                            <div className="bg-black/20 p-4 rounded-none border border-white/10">
                                <h4 className="text-[16px] font-medium mb-1 flex items-center gap-3"><Users size={18} /> The Obeya System</h4>
                                <p className="text-red-100 text-[13px]">Cross-functional leaders converge in a "Big Room" for rapid, face-to-face collaborative decision-making.</p>
                            </div>
                            <div className="bg-black/20 p-4 rounded-none border border-white/10">
                                <h4 className="text-[16px] font-medium mb-1 flex items-center gap-3"><Lightbulb size={18} /> Toyota Times</h4>
                                <p className="text-red-100 text-[13px]">Internal-turned-external open-media channel projecting management thoughts directly to the global workforce.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white text-zinc-900 p-8 rounded-none shadow-2xl">
                        <h4 className="text-[18px] font-bold mb-4 text-red-600 uppercase tracking-tighter italic">Innovation Democratized</h4>
                        <p className="text-[14px] text-zinc-600 mb-6">Established in 1951, TCISS grants creative autonomy to line workers, shifting management from dictating to coaching.</p>

                        <div className="flex items-center gap-6 mb-6 border-b border-zinc-100 pb-6">
                            <div className="text-[28px] font-bold text-zinc-900">40M+</div>
                            <div className="text-[12px] font-medium text-zinc-500 uppercase tracking-widest leading-none">Employee Ideas<br/>Submitted</div>
                        </div>

                        <div className="bg-zinc-100 p-4 border-l-[3px] border-red-600">
                            <h5 className="font-bold text-[14px] mb-1 uppercase">The Rookie Award</h5>
                            <p className="text-zinc-600 text-[13px]">Mandatory 36 actionable suggestions annually for new hires, breaking complacent habits immediately.</p>
                        </div>
                    </div>
                </div>
            </Slide>

            {/* --- CHAPTER 6: CONTROLLING (Financials) --- */}
            <Slide border="border-t border-zinc-800">
                <div className="animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                        <SectionHeading subtitle="Chapter 6: Controlling" title="Financial oversight" />
                        <p className="text-zinc-400 mb-8 leading-relaxed text-[15px] font-normal">
                            Rigorous controlling reveal a dual reality: massive top-line growth offset by severe margin compression due to colossal CapEx outlays (NC Battery campus) and raw material inflation.
                        </p>

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
                                    <span>FY25 Margin Forecast</span>
                                    <span className="text-red-500">-1.9%</span>
                                </div>
                                <div className="h-6 bg-zinc-900 rounded-none overflow-hidden relative">
                                    <div className="absolute top-0 left-0 h-full bg-orange-600 w-[71%]"></div>
                                    <div className="absolute top-0 left-0 h-full flex items-center px-4 text-white text-[12px] font-bold z-10">10.0%</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card-hover bg-zinc-950 border border-zinc-800 rounded-none p-8 flex flex-col justify-center">
                        <h3 className="text-[17px] font-bold text-white mb-6 flex items-center gap-3 italic tracking-tighter uppercase">
                            <ShieldCheck className="text-red-500" /> Executive Compliance
                        </h3>
                        <div className="relative border-l-[3px] border-red-600 pl-6 space-y-6">
                            <div>
                                <h5 className="text-[15px] font-bold text-white mb-1">Global CCO Mandate</h5>
                                <p className="text-[13px] text-zinc-400 font-normal">Centralized role wielding absolute veto authority over factory compliance, reporting directly to the CEO.</p>
                            </div>
                            <div>
                                <h5 className="text-[15px] font-bold text-white mb-1">Regional Delegates</h5>
                                <p className="text-[13px] text-zinc-400 font-normal">Ensuring localized cultural nuances do not obscure or contradict Japanese corporate governance.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Slide>

            {/* --- CHAPTER 6: CONTROLLING (Supply Chain) --- */}
            <Slide border="border-t border-zinc-800">
                <div className="animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out">
                    <h3 className="text-[18px] font-bold text-white mb-8 flex items-center gap-3 uppercase italic tracking-tighter">
                        <Globe className="text-blue-500" /> Supply Control
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-zinc-950 p-6 border border-zinc-800 rounded-none">
                            <Zap className="text-yellow-500 mb-4" size={24} />
                            <h5 className="text-[16px] font-bold text-white mb-2">Global EMIS Cloud</h5>
                            <p className="text-[13px] text-zinc-400">Algorithmic assessment of chemical toxicity risks prevent banned substances from entering the supply chain.</p>
                        </div>
                        <div className="bg-zinc-950 p-6 border border-zinc-800 rounded-none">
                            <Target className="text-red-500 mb-4" size={24} />
                            <h5 className="text-[16px] font-bold text-white mb-2">TEAM Award KPI</h5>
                            <p className="text-[13px] text-zinc-400">Suppliers evaluated against microscopic defect rates and minute-level delivery precision.</p>
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
                        Toyota operates as a deeply integrated, highly self-correcting sociotechnical system. By balancing historical philosophy with brutal modern pragmatism, Toyota dictates the future trajectory of global mobility.
                    </p>
                    <div className="text-[13px] text-zinc-500 font-bold uppercase tracking-[0.3em]">
                        MIT Manipal | Math and Computing 2027
                    </div>
                </div>
            </Slide>

        </div>
    );
}
