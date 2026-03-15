import React, { useEffect, useRef, useState } from 'react';
import {
    ChevronDown, Target, Globe, Users, Lightbulb, ShieldCheck,
    TrendingUp, Car, AlertTriangle, BarChart3, BookOpen,
    Award, Scale, Waves, Zap, Shield, GitMerge, FileText, CheckCircle2
} from 'lucide-react';

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
    const [activeSection, setActiveSection] = useState('hero');

    const handleNavClick = (section) => {
        setActiveSection(section);
        if (window.sendPrompt) {
            window.sendPrompt(`Navigated to ${section}`);
        } else {
            console.log(`Navigated to ${section}`);
        }
    };

    // Initialize Intersection Observer for scroll animations
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

        const sections = document.querySelectorAll('.animate-on-scroll');
        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
            observer.disconnect();
        };
    }, []);

    return (
        <div ref={containerRef} className="bg-slate-950 text-slate-300 font-sans min-h-screen selection:bg-red-600 selection:text-white overflow-hidden scroll-smooth">
            
            {/* Top Navigation Bar */}
            <nav className="static top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 px-6 py-4 flex justify-between items-center">
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
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8 text-[14px] text-slate-400">
                            <div className="flex flex-col items-center text-center">
                                <span className="text-white font-medium mb-1">Tushar Singh</span>
                                <span className="text-[14px]">Ch 2: Planning</span>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <span className="text-white font-medium mb-1">Shantanu B.</span>
                                <span className="text-[14px]">Ch 3: Organizing</span>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <span className="text-white font-medium mb-1">Aniruddha Roy</span>
                                <span className="text-[14px]">Ch 4: Staffing</span>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <span className="text-white font-medium mb-1">Jainum H. Shah</span>
                                <span className="text-[14px]">Ch 5: Leading</span>
                            </div>
                            <div className="flex flex-col items-center text-center col-span-2 md:col-span-1">
                                <span className="text-white font-medium mb-1">Manas Aggrawal</span>
                                <span className="text-[14px]">Ch 6: Controlling</span>
                            </div>
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
                            Originating from the automatic loom industry in the early 20th century, Toyota has transcended its mechanical roots. Today, it is executing a comprehensive strategic pivot to become a holistic <strong>mobility company</strong> dedicated to the seamless global movement of people, goods, information, and energy.
                        </p>
                        <blockquote className="border-l-4 border-red-600 pl-6 py-4 my-8 bg-slate-900/50 text-[18px] text-slate-200">
                            <span className="font-medium block text-red-500 text-[14px] tracking-widest mb-2">Core mission</span>
                            "Producing happiness for all."
                        </blockquote>
                        <p className="text-[18px] leading-relaxed mb-8 text-slate-400 font-normal">
                            This is anchored by the corporate vision of <em>"creating mobility for all"</em>, ensuring unrestricted, safe, and equitable access to transportation across diverse global demographics.
                        </p>

                        <h4 className="text-[16px] font-medium text-white mb-4 flex items-center gap-2"><BookOpen className="text-red-500" /> The toyoda precepts (1935)</h4>
                        <ul className="space-y-3 text-slate-400 text-[14px]">
                            <li className="flex gap-3"><span className="text-red-500">1.</span> Faithful to duties to contribute to the overall good.</li>
                            <li className="flex gap-3"><span className="text-red-500">2.</span> Studiousness and creativity to stay ahead of the times.</li>
                            <li className="flex gap-3"><span className="text-red-500">3.</span> Practicality while eschewing frivolousness.</li>
                            <li className="flex gap-3"><span className="text-red-500">4.</span> Foster a warm and homelike workplace atmosphere.</li>
                            <li className="flex gap-3"><span className="text-red-500">5.</span> Profound respect for spiritual matters and gratitude.</li>
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
                    <SectionHeading subtitle="Chapter 2: Planning (Tushar Singh)" title="Strategic intelligence" />

                    <p className="text-[18px] max-w-4xl mb-16 text-slate-400 font-normal">
                        Planning is a continuous, systemic integration of external market realities with internal manufacturing capabilities. We analyze Toyota through canonical frameworks: SWOT, TOWS, Blue Ocean, BCG, and Porter's Five Forces.
                    </p>

                    {/* 1. SWOT MATRIX */}
                    <div className="mb-20">
                        <h3 className="text-[18px] font-medium text-white mb-8 flex items-center gap-3"><Target className="text-red-500" /> 1. The SWOT matrix</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-slate-900 border border-emerald-500/20 rounded-2xl p-6 relative overflow-hidden">
                                <h4 className="text-[16px] font-medium text-emerald-400 mb-4">Strengths</h4>
                                <ul className="space-y-2 text-slate-300 text-[14px]">
                                    <li className="flex gap-2"><span className="text-emerald-500">●</span> Best-selling automaker (5.5M units). AAA+ brand ($64.7B).</li>
                                    <li className="flex gap-2"><span className="text-emerald-500">●</span> Highly resilient Toyota production system (TPS).</li>
                                    <li className="flex gap-2"><span className="text-emerald-500">●</span> Diversified multi-pathway portfolio (HEV, PHEV, FCEV, BEV).</li>
                                </ul>
                            </div>
                            <div className="bg-slate-900 border border-orange-500/20 rounded-2xl p-6 relative overflow-hidden">
                                <h4 className="text-[16px] font-medium text-orange-400 mb-4">Weaknesses</h4>
                                <ul className="space-y-2 text-slate-300 text-[14px]">
                                    <li className="flex gap-2"><span className="text-orange-500">●</span> Historical over-reliance on the Japanese domestic market.</li>
                                    <li className="flex gap-2"><span className="text-orange-500">●</span> Bureaucratic rigidity slowing cross-divisional decisions.</li>
                                    <li className="flex gap-2"><span className="text-orange-500">●</span> Operating margin declined to 10.0% (FY2025).</li>
                                </ul>
                            </div>
                            <div className="bg-slate-900 border border-blue-500/20 rounded-2xl p-6 relative overflow-hidden">
                                <h4 className="text-[16px] font-medium text-blue-400 mb-4">Opportunities</h4>
                                <ul className="space-y-2 text-slate-300 text-[14px]">
                                    <li className="flex gap-2"><span className="text-blue-500">●</span> Sustained weak Japanese Yen boosting export profitability.</li>
                                    <li className="flex gap-2"><span className="text-blue-500">●</span> Surging global demand for hybrid/electrified vehicles.</li>
                                    <li className="flex gap-2"><span className="text-blue-500">●</span> Government subsidies for eco-mobility and SDVs.</li>
                                </ul>
                            </div>
                            <div className="bg-slate-900 border border-red-500/20 rounded-2xl p-6 relative overflow-hidden">
                                <h4 className="text-[16px] font-medium text-red-500 mb-4">Threats</h4>
                                <ul className="space-y-2 text-slate-300 text-[14px]">
                                    <li className="flex gap-2"><span className="text-red-500">●</span> U.S. tariffs disrupting export models.</li>
                                    <li className="flex gap-2"><span className="text-red-500">●</span> Aggressive low-cost Chinese EV OEMs (BYD, SAIC, NIO).</li>
                                    <li className="flex gap-2"><span className="text-red-500">●</span> Elimination of federal EV tax credits reducing demand.</li>
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
                                      <td className="p-4 border-b border-slate-800 border-l-[3px] border-l-emerald-500 font-medium text-white">SO: Maxi-Maxi</td>
                                      <td className="p-4 border-b border-slate-800 text-slate-400">Monetize weak Yen by scaling exports of Camry/RAV4 hybrids. Lead government-subsidized electrification.</td>
                                  </tr>
                                  <tr>
                                      <td className="p-4 border-b border-slate-800 border-l-[3px] border-l-orange-500 font-medium text-white">WO: Mini-Maxi</td>
                                      <td className="p-4 border-b border-slate-800 text-slate-400">Use government green incentives to fund the $13.9B North Carolina battery plant, closing the BEV tech gap.</td>
                                  </tr>
                                  <tr>
                                      <td className="p-4 border-l-[3px] border-l-red-500 font-medium text-white">WT: Mini-Mini</td>
                                      <td className="p-4 text-slate-400">Aggressively reduce break-even volume under CEO Kenta Kon to withstand tariff-driven margin compression.</td>
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
                                    Single-powertrain dependency across new model platforms.
                                </div>
                                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-[14px]">
                                    <span className="text-orange-500 font-medium block mb-1">Reduce</span>
                                    Corporate break-even volume and reliance on expensive battery-only architectures.
                                </div>
                                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-[14px]">
                                    <span className="text-emerald-500 font-medium block mb-1">Raise</span>
                                    Accessibility of electrified mobility via affordable HEV models across income brackets.
                                </div>
                                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-[14px]">
                                    <span className="text-blue-500 font-medium block mb-1">Create</span>
                                    Mobility-as-a-service paradigm (Beyond Zero) and the globally connected Digital Obeya.
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* NEW SECTION: BCG MATRIX */}
                    <div className="mb-20">
                        <h3 className="text-[18px] font-medium text-white mb-8 flex items-center gap-3"><BarChart3 className="text-red-500" /> 4. BCG matrix</h3>
                        
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="md:w-1/4">
                                <p className="text-[14px] text-slate-400 mt-4 leading-relaxed">
                                    The BCG Matrix maps Toyota's product portfolio across market growth and relative market share. The multipathway approach spans established high-margin ICE/HEV vehicles out to nascent unproven mobility tech.
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
                                        <p className="text-[14px] text-slate-400">High share, high growth. Current primary revenue drivers leveraging transition demand.</p>
                                    </div>
                                    
                                    {/* Question Mark */}
                                    <div className="bg-slate-800 border border-slate-700 p-6 rounded-tr-2xl min-h-[160px]">
                                        <h4 className="text-[16px] font-medium text-purple-400 mb-2">Question marks</h4>
                                        <p className="text-[14px] text-slate-300 font-medium mb-1">BEV (bZ4X) & Hydrogen (Mirai)</p>
                                        <p className="text-[14px] text-slate-400">Low share, high growth. Require massive capital to secure market footing against rivals.</p>
                                    </div>

                                    {/* Cash Cow */}
                                    <div className="bg-slate-800 border border-slate-700 p-6 rounded-bl-2xl min-h-[160px]">
                                        <h4 className="text-[16px] font-medium text-emerald-400 mb-2">Cash cows</h4>
                                        <p className="text-[14px] text-slate-300 font-medium mb-1">ICE Trucks & SUVs (Tacoma)</p>
                                        <p className="text-[14px] text-slate-400">High share, low growth. Highly profitable legacy models funding R&D electrification.</p>
                                    </div>

                                    {/* Dog - Replaced red with generic slate/gray styling */}
                                    <div className="bg-slate-800 border border-slate-700 p-6 rounded-br-2xl min-h-[160px]">
                                        <h4 className="text-[16px] font-medium text-slate-300 mb-2">Dogs</h4>
                                        <p className="text-[14px] text-slate-300 font-medium mb-1">Sedan ICE Models</p>
                                        <p className="text-[14px] text-slate-400">Low share, low growth. Divestment focus as consumer preference shifts entirely to SUVs/CUVs.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 5. PORTER'S FIVE FORCES */}
                    <div>
                        <h3 className="text-[18px] font-medium text-white mb-8 flex items-center gap-3"><Shield className="text-red-500" /> 5. Porter's five forces</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div className="bg-slate-900 border-t-[3px] border-red-600 p-5 rounded-lg">
                                <h5 className="font-medium text-white mb-1">Rivalry</h5>
                                <span className="text-[14px] font-medium text-red-500 tracking-wider">Very high</span>
                                <p className="text-[14px] text-slate-400 mt-2">Direct confrontation with VW, Hyundai, and aggressive Chinese EV OEMs causing severe margin compression.</p>
                            </div>
                            <div className="bg-slate-900 border-t-[3px] border-orange-500 p-5 rounded-lg">
                                <h5 className="font-medium text-white mb-1">Buyers</h5>
                                <span className="text-[14px] font-medium text-orange-400 tracking-wider">Mod-high</span>
                                <p className="text-[14px] text-slate-400 mt-2">Consumers demand standard electrification. Loss of EV tax credits amplifies price sensitivity.</p>
                            </div>
                            <div className="bg-slate-900 border-t-[3px] border-orange-500 p-5 rounded-lg">
                                <h5 className="font-medium text-white mb-1">Suppliers</h5>
                                <span className="text-[14px] font-medium text-orange-400 tracking-wider">Mod-high</span>
                                <p className="text-[14px] text-slate-400 mt-2">Reliance on rare-earth materials and advanced semiconductors. Countered by vertical integration ($13.9B NC plant).</p>
                            </div>
                            <div className="bg-slate-900 border-t-[3px] border-yellow-500 p-5 rounded-lg">
                                <h5 className="font-medium text-white mb-1">New entrants</h5>
                                <span className="text-[14px] font-medium text-yellow-500 tracking-wider">Moderate</span>
                                <p className="text-[14px] text-slate-400 mt-2">Software-first entrants bypass legacy manufacturing barriers, supported by government EV subsidies.</p>
                            </div>
                            <div className="bg-slate-900 border-t-[3px] border-yellow-500 p-5 rounded-lg lg:col-span-2">
                                <h5 className="font-medium text-white mb-1">Substitutes</h5>
                                <span className="text-[14px] font-medium text-yellow-500 tracking-wider">Moderate</span>
                                <p className="text-[14px] text-slate-400 mt-2">Urban mobility platforms (Uber, DiDi) and micro-mobility. Toyota's pivot to a mobility company hedges this.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- CHAPTER 3: ORGANIZING --- */}
            <section className="animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out py-24 md:py-32 px-6 lg:px-12 max-w-7xl mx-auto">
                <SectionHeading subtitle="Chapter 3: Organizing (Shantanu Bhargava)" title="Structuring the empire" />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <p className="text-[18px] text-slate-400 mb-6 leading-relaxed font-normal">
                            Historically, Toyota operated under a highly centralized, "spoke-and-wheel" global hierarchy managed from Japan. This proved catastrophic during the 2009-2010 acceleration crisis due to delayed responses.
                        </p>
                        <p className="text-[18px] text-slate-400 mb-10 leading-relaxed font-normal">
                            Today, Toyota utilizes a dynamic <strong>3D matrix structure</strong>, balancing global product standardization with hyper-local market responsiveness.
                        </p>

                        <div className="space-y-4">
                            <Card
                                icon={Globe}
                                title="Geographic divisions"
                                text="Dedicated regional authorities covering Japan, North America, Europe, Asia, and China. Maximizes responsiveness to localized consumer demands and geopolitical trade shifts."
                            />
                            <Card
                                icon={Car}
                                title="In-House company system"
                                text="Product-based divisions (e.g., Lexus International, Powertrain Unit Center) acting as pseudo-independent entities to foster rapid innovation without macro-corporate bureaucracy."
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-8">
                        {/* Governance Board */}
                        <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
                            <h4 className="text-[18px] font-medium text-white mb-4 flex items-center gap-3"><Scale className="text-red-500" /> Board governance evolution</h4>
                            <p className="text-slate-400 text-[14px] mb-4">
                                In June 2025, Toyota transitioned to a <strong>"company with an audit and supervisory committee."</strong>
                            </p>
                            <ul className="space-y-3 text-[14px] text-slate-300">
                                <li className="flex gap-3 items-start"><CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" /> <span>Auditors elevated to full members of the board of directors with equal voting rights.</span></li>
                                <li className="flex gap-3 items-start"><CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" /> <span>Half of the 10 directors are independent outside directors to counter internal groupthink.</span></li>
                                <li className="flex gap-3 items-start"><CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" /> <span>Delegates day-to-day execution to executives, allowing the board to focus purely on strategic supervision.</span></li>
                            </ul>
                        </div>

                        {/* Executive Restructuring */}
                        <div className="bg-red-600 p-8 rounded-2xl text-white shadow-2xl">
                            <h4 className="text-[16px] font-medium mb-6 border-b border-red-500 pb-4 tracking-wider">2026 Executive restructuring</h4>
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <h5 className="font-medium text-[16px] mb-1">Koji Sato</h5>
                                    <div className="text-[14px] font-medium text-red-200 tracking-wider mb-2">Chief industry officer</div>
                                    <p className="text-[14px] text-red-100 font-normal">Transitions outward. Focuses on shaping national policy (JAMA Chairman) and enhancing Japan's macro-level industrial competitiveness.</p>
                                </div>
                                <div>
                                    <h5 className="font-medium text-[16px] mb-1">Kenta Kon</h5>
                                    <div className="text-[14px] font-medium text-red-200 tracking-wider mb-2">President & CEO</div>
                                    <p className="text-[14px] text-red-100 font-normal">Former CFO. An unorthodox move placing a finance expert at the helm to aggressively lower corporate break-even volume and fight a war of financial attrition.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- CHAPTER 4: STAFFING --- */}
            <section className="animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out py-24 md:py-32 px-6 lg:px-12 bg-slate-900/50 border-y border-slate-800">
                <div className="max-w-7xl mx-auto">
                    <SectionHeading subtitle="Chapter 4: Staffing (Aniruddha Roy)" title="The human capital asset" />

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                        <div className="lg:col-span-2">
                            <p className="text-[18px] text-slate-300 mb-6 leading-relaxed font-normal">
                                Toyota rejects the traditional Western model of treating labor as an expendable variable cost. Its 380,000 global employees are viewed as a vital appreciating asset, anchored by the <strong>psychological contract</strong>.
                            </p>
                            <p className="text-[18px] text-slate-400 mb-8 leading-relaxed font-normal">
                                This 1962 labor-management agreement guarantees long-term employment in exchange for absolute ownership of productivity improvements. This creates a low-turnover environment that preserves specialized institutional knowledge.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Card
                                    icon={Users}
                                    title="Blue-Collar integration"
                                    text="Comprehensive on-the-job training (OJT) pairs new hires with veterans. Systematic job rotation cycles workers through assembly, QA, and logistics to build a resilient, cross-trained workforce."
                                />
                                <Card
                                    icon={Globe}
                                    title="GLOBAL 21 pipeline"
                                    text="Cultivates global executives. Mid-career employees are forced into overseas assignments or MBAs to acquire cross-cultural operational skills before assuming senior roles."
                                />
                            </div>
                        </div>

                        {/* Performance Evaluation Panel */}
                        <div className="bg-slate-950 border border-slate-800 p-8 shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-5"><FileText size={150} /></div>
                            <h4 className="text-[16px] font-medium text-white mb-2 relative z-10">The architecture of appraisal</h4>
                            <p className="text-[14px] text-slate-400 mb-6 relative z-10">Evaluations bypass subjective personality traits, focusing intensely on 5 primary empirical criteria (10 points each):</p>

                            <ul className="space-y-4 relative z-10 text-[14px]">
                                <li className="bg-slate-900 p-3 border border-slate-800 border-l-[3px] border-l-red-500">
                                    <strong className="text-white block font-medium mb-1">1. Physical skills (takt time)</strong>
                                    <span className="text-slate-400">Ability to handle work strictly within designated time without degrading quality.</span>
                                </li>
                                <li className="bg-slate-900 p-3 border border-slate-800 border-l-[3px] border-l-red-500">
                                    <strong className="text-white block font-medium mb-1">2. Quality maintenance</strong>
                                    <span className="text-slate-400">Absolute adherence to zero-defect manufacturing standards.</span>
                                </li>
                                <li className="bg-slate-900 p-3 border border-slate-800 border-l-[3px] border-l-red-500">
                                    <strong className="text-white block font-medium mb-1">3. Kaizen participation</strong>
                                    <span className="text-slate-400">Active, documented participation in continuous improvement.</span>
                                </li>
                                <li className="bg-slate-900 p-3 border border-slate-800 border-l-[3px] border-l-red-500">
                                    <strong className="text-white block font-medium mb-1">4. Big picture view</strong>
                                    <span className="text-slate-400">Ability to articulate how daily targets derive from corporate objectives.</span>
                                </li>
                                <li className="bg-slate-900 p-3 border border-slate-800 border-l-[3px] border-l-red-500">
                                    <strong className="text-white block font-medium mb-1">5. Problem solving</strong>
                                    <span className="text-slate-400">Capability to execute root-cause analysis ("5 Whys") and deploy countermeasures.</span>
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
                        <h3 className="text-red-200 font-medium tracking-widest text-[14px] mb-4">Chapter 5: Leading (Jainum H. Shah)</h3>
                        <h2 className="text-[22px] md:text-[22px] font-medium mb-8">Facilitating horizontal alignment</h2>
                        <p className="text-[18px] text-red-100 mb-6 leading-relaxed font-normal">
                            Leadership at Toyota is a profound rejection of traditional, autocratic directives. It is defined by meticulous facilitation, dismantling silos, and empowering subordinates at the <em>genba</em> (the actual place value is created).
                        </p>

                        <div className="space-y-6 mt-10">
                            <div className="bg-black/20 p-6 rounded-2xl backdrop-blur-sm">
                                <h4 className="text-[18px] font-medium mb-2 flex items-center gap-3"><Users /> The obeya system</h4>
                                <p className="text-red-100 text-[14px] font-normal">
                                    The "Big Room." Cross-functional leaders converge in a highly visual workspace to practice <em>genchi genbutsu</em>. Walls are plastered with A3 problem-solving docs and critical path schedules, enabling rapid collaborative decisions.
                                </p>
                            </div>
                            <div className="bg-black/20 p-6 rounded-2xl backdrop-blur-sm">
                                <h4 className="text-[18px] font-medium mb-2 flex items-center gap-3"><Lightbulb /> Toyota times</h4>
                                <p className="text-red-100 text-[14px] font-normal">
                                    Spearheaded by Akio Toyoda in 2020. An open-media channel projecting management's unfiltered thoughts directly to the public and workforce, deliberately cultivating an atmosphere of absolute transparency to build systemic trust.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white text-slate-900 p-10 rounded-3xl shadow-2xl transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
                        <h4 className="text-[22px] font-medium mb-4 text-red-600">Democratizing innovation</h4>
                        <p className="text-[16px] text-slate-600 mb-8 font-normal">
                            The <strong>Toyota creative idea suggestion system (TCISS)</strong> (est. 1951) democratized innovation. By granting complete autonomy, leadership shifted from dictating processes to coaching employees to solve their own abnormalities.
                        </p>

                        <div className="flex items-center gap-6 mb-8 border-b border-slate-200 pb-8">
                            <div className="text-[22px] font-medium text-slate-900">40M+</div>
                            <div className="text-[14px] font-medium text-slate-500 tracking-widest leading-tight">
                                Ideas submitted<br />by 2011
                            </div>
                        </div>

                        <h5 className="font-medium text-[16px] mb-4">Incentive architecture</h5>
                        <div className="space-y-3 mb-8 text-[14px]">
                            <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                                <span className="font-medium text-slate-700">Prize for suggestion</span>
                                <span className="bg-slate-100 px-3 py-1 rounded text-slate-600 font-medium">500 ¥</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                                <span className="font-medium text-slate-700">Outstanding prize</span>
                                <span className="bg-slate-200 px-3 py-1 rounded text-slate-700 font-medium">2,000 ¥</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                                <span className="font-medium text-slate-700">Excellent prize</span>
                                <span className="bg-slate-300 px-3 py-1 rounded text-slate-800 font-medium">5,000 ¥</span>
                            </div>
                            <div className="flex justify-between items-center pb-2">
                                <span className="font-medium text-red-600">The best award</span>
                                <span className="bg-red-100 px-3 py-1 rounded text-red-600 font-medium">10k - 200k ¥</span>
                            </div>
                        </div>

                        <div className="bg-slate-100 p-5 border-l-[3px] border-red-600">
                            <h5 className="font-medium text-[16px] mb-1">The rookie award</h5>
                            <p className="text-slate-600 text-[14px] font-normal">
                                Targets 1st & 2nd-year employees to successfully generate at least <strong>36 actionable suggestions annually</strong> (3 innovations per month).
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- CHAPTER 6: CONTROLLING --- */}
            <section className="animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out py-24 md:py-32 px-6 lg:px-12 max-w-7xl mx-auto">
                <SectionHeading subtitle="Chapter 6: Controlling (Manas Aggrawal)" title="Algorithmic control & oversight" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    <div className="col-span-1 lg:col-span-6">
                        <h3 className="text-[18px] font-medium text-white mb-6">Financial pressures (FY24 vs FY25)</h3>
                        <p className="text-slate-400 mb-8 leading-relaxed text-[16px]">
                            Financial controlling reveals a dual reality: massive top-line growth offset by severe margin compression due to capital expenditures (like the $13.9B battery plant) and raw material costs.
                        </p>

                        <div className="space-y-8 bg-slate-900/50 p-8 rounded-2xl border border-slate-800">
                            {/* Chart Bar 1 */}
                            <div>
                                <div className="flex justify-between text-[14px] font-medium text-white mb-2">
                                    <span>Sales revenue (¥ billions)</span>
                                    <span className="text-emerald-500">+6.5%</span>
                                </div>
                                <div className="h-8 bg-slate-800 rounded-full overflow-hidden relative">
                                    <div className="absolute top-0 left-0 h-full bg-blue-600 w-full rounded-full"></div>
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
                                    <div className="absolute top-0 left-0 h-full flex items-center px-4 text-white text-[14px] font-medium z-10">11.9%</div>
                                </div>
                            </div>

                            {/* Chart Bar 3 */}
                            <div>
                                <div className="flex justify-between text-[14px] font-medium text-white mb-2 mt-6">
                                    <span>FY2025 operating margin</span>
                                    <span className="text-red-500">-1.9 pts</span>
                                </div>
                                <div className="h-8 bg-slate-800 rounded-full overflow-hidden relative">
                                    <div className="absolute top-0 left-0 h-full bg-orange-600 w-[71%] rounded-full"></div>
                                    <div className="absolute top-0 left-0 h-full flex items-center px-4 text-white text-[14px] font-medium z-10">10.0% (triggered CEO shift)</div>
                                </div>
                            </div>

                            {/* Chart Bar 4 */}
                            <div>
                                <div className="flex justify-between text-[14px] font-medium text-white mb-2 mt-6">
                                    <span>Return on equity (R.O.E.)</span>
                                    <span className="text-red-500">-2.2 pts</span>
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
                                <ShieldCheck className="text-red-500" /> Compliance architecture
                            </h3>
                            <p className="text-[14px] text-slate-400 mb-6">
                                Following certification violations at Hino and Daihatsu, Toyota instituted draconian compliance overhauls.
                            </p>

                            <div className="relative border-l-[3px] border-slate-800 pl-6 space-y-6">
                                <div className="relative">
                                    <div className="absolute w-3 h-3 bg-red-600 rounded-full -left-[32px] top-1.5"></div>
                                    <h5 className="text-[16px] font-medium text-white mb-1">Global chief compliance officer (GCCO)</h5>
                                    <p className="text-[14px] text-slate-400">Wields unmitigated authority over compliance. Chairs the compliance committee alongside the risk management committee.</p>
                                </div>
                                <div className="relative">
                                    <div className="absolute w-3 h-3 bg-slate-600 rounded-full -left-[32px] top-1.5"></div>
                                    <h5 className="text-[16px] font-medium text-white mb-1">Regional CCOs</h5>
                                    <p className="text-[14px] text-slate-400">Appointed in NA & Europe to ensure localized cultural nuances do not obscure governance mandates.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
                            <h3 className="text-[16px] font-medium text-white mb-6 flex items-center gap-3">
                                <Globe className="text-blue-500" /> Environmental & supplier control
                            </h3>
                            <ul className="space-y-4 text-[14px]">
                                <li className="flex gap-3 items-start">
                                    <Zap className="text-yellow-500 shrink-0 mt-1" size={18} />
                                    <div>
                                        <strong className="text-white block font-medium">EMIS system</strong>
                                        <span className="text-slate-400">Ecology, safety and health material investigation system automatically algorithmically assesses chemical toxicity risks to ensure zero regulatory deviations.</span>
                                    </div>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <Target className="text-red-500 shrink-0 mt-1" size={18} />
                                    <div>
                                        <strong className="text-white block font-medium">TEAM award KPI framework</strong>
                                        <span className="text-slate-400">Suppliers are relentlessly evaluated against defect rates, delivery precision, and cost reduction trajectories. Excellence is rewarded via the total exceptional achievement for manufacturing award.</span>
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
