import React, { useEffect, useRef } from 'react';
import {
    ChevronDown, Target, Globe, Users, Lightbulb, ShieldCheck,
    TrendingUp, Car, AlertTriangle, BarChart3, BookOpen,
    Award, Scale, Waves, Zap, Shield, GitMerge, FileText, CheckCircle2
} from 'lucide-react';

// --- COMPONENTS ---

const SectionHeading = ({ subtitle, title }) => (
    <div className="mb-16 md:mb-24">
        <h3 className="text-red-600 font-bold tracking-widest uppercase text-sm mb-4">{subtitle}</h3>
        <h2 className="text-4xl md:text-6xl font-bold text-slate-100 leading-tight">{title}</h2>
        <div className="h-1 w-24 bg-red-600 mt-8 rounded-full"></div>
    </div>
);

const Card = ({ icon: Icon, title, text, highlight }) => (
    <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl hover:border-red-500/30 transition-colors">
        <div className="flex items-center gap-4 mb-4">
            <div className="bg-red-500/10 p-3 rounded-lg text-red-500">
                <Icon size={24} />
            </div>
            <h4 className="text-xl font-bold text-white">{title}</h4>
        </div>
        <p className="text-slate-400 text-sm leading-relaxed">{text}</p>
        {highlight && <div className="mt-4 text-xs font-bold text-red-400 uppercase tracking-wider">{highlight}</div>}
    </div>
);

// --- MAIN APP ---

export default function App() {
    const containerRef = useRef(null);

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

            {/* --- HERO SECTION --- */}
            <section className="hero-section relative min-h-screen flex flex-col justify-center items-center text-center px-4 py-20 overflow-hidden">
                <div className="hero-bg absolute inset-0 z-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900/40 via-slate-950 to-slate-950"></div>

                <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
                    <div className="inline-block px-4 py-1.5 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-sm font-semibold tracking-widest uppercase mb-8">
                        Essentials of Management
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tight">
                        Toyota <span className="text-red-600">Motor</span> Corp.
                    </h1>
                    <p className="text-xl md:text-3xl font-light text-slate-400 mb-12 max-w-3xl">
                        Strategic & Organisational Analysis of a global mobility empire in transition.
                    </p>

                    <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl w-full max-w-4xl backdrop-blur-sm">
                        <h3 className="text-red-500 font-bold tracking-widest uppercase text-xs mb-6 border-b border-slate-800 pb-4">MIT Manipal | Math and Computing 2027</h3>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8 text-sm text-slate-400">
                            <div className="flex flex-col items-center text-center">
                                <span className="text-white font-bold mb-1">Tushar Singh</span>
                                <span className="text-xs">Ch 2: Planning</span>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <span className="text-white font-bold mb-1">Shantanu B.</span>
                                <span className="text-xs">Ch 3: Organizing</span>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <span className="text-white font-bold mb-1">Aniruddha Roy</span>
                                <span className="text-xs">Ch 4: Staffing</span>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <span className="text-white font-bold mb-1">Jainum H. Shah</span>
                                <span className="text-xs">Ch 5: Leading</span>
                            </div>
                            <div className="flex flex-col items-center text-center col-span-2 md:col-span-1">
                                <span className="text-white font-bold mb-1">Manas Aggrawal</span>
                                <span className="text-xs">Ch 6: Controlling</span>
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
                <SectionHeading subtitle="Chapter 1" title="The Metamorphosis" />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <p className="text-lg leading-relaxed mb-6">
                            Originating from the automatic loom industry in the early 20th century, Toyota has transcended its mechanical roots. Today, it is executing a comprehensive strategic pivot to become a holistic <strong>"mobility company"</strong> dedicated to the seamless global movement of people, goods, information, and energy.
                        </p>
                        <blockquote className="border-l-4 border-red-600 pl-6 py-4 my-8 bg-slate-900/50 text-xl text-slate-200">
                            <span className="font-bold block text-red-500 text-sm uppercase tracking-widest mb-2">Core Mission</span>
                            "Producing Happiness for All."
                        </blockquote>
                        <p className="text-lg leading-relaxed mb-8 text-slate-400">
                            This is anchored by the corporate vision of <em>"Creating Mobility for All"</em>, ensuring unrestricted, safe, and equitable access to transportation across diverse global demographics.
                        </p>

                        <h4 className="text-2xl font-bold text-white mb-4 flex items-center gap-2"><BookOpen className="text-red-500" /> The Toyoda Precepts (1935)</h4>
                        <ul className="space-y-3 text-slate-400 text-sm">
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
                            <h4 className="text-2xl font-bold text-white mb-2">Gold Prize in PRIDE INDEX</h4>
                            <p className="text-sm text-slate-400">Awarded for the 5th consecutive year (2025), validating their robust diversity, equity, and inclusion (DEI) initiatives.</p>
                        </div>
                        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex flex-col items-center text-center justify-center">
                            <Car className="text-slate-500 mb-4" size={32} />
                            <h4 className="text-3xl font-bold text-white mb-1">5.5M</h4>
                            <p className="text-xs text-slate-400 uppercase tracking-widest">Units (H1 2025)</p>
                        </div>
                        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex flex-col items-center text-center justify-center">
                            <TrendingUp className="text-slate-500 mb-4" size={32} />
                            <h4 className="text-3xl font-bold text-white mb-1">¥48T</h4>
                            <p className="text-xs text-slate-400 uppercase tracking-widest">FY25 Revenue</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- CHAPTER 2: PLANNING (SWOT, TOWS, Blue Ocean, Porter) --- */}
            <section className="animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out py-24 md:py-32 px-6 lg:px-12 bg-slate-900/30 border-y border-slate-800">
                <div className="max-w-7xl mx-auto">
                    <SectionHeading subtitle="Chapter 2: Planning (Tushar Singh)" title="Strategic Intelligence" />

                    <p className="text-lg max-w-4xl mb-16 text-slate-400">
                        Planning is a continuous, systemic integration of external market realities with internal manufacturing capabilities. We analyze Toyota through four canonical frameworks: SWOT, TOWS, Blue Ocean, and Porter's Five Forces.
                    </p>

                    {/* 1. SWOT MATRIX */}
                    <div className="mb-20">
                        <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3"><Target className="text-red-500" /> 1. The SWOT Matrix</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-slate-900 border border-emerald-500/20 rounded-2xl p-6 relative overflow-hidden">
                                <h4 className="text-xl font-bold text-emerald-400 mb-4">Strengths</h4>
                                <ul className="space-y-2 text-slate-300 text-sm">
                                    <li className="flex gap-2"><span className="text-emerald-500">●</span> Best-selling automaker (5.5M units). AAA+ brand ($64.7B).</li>
                                    <li className="flex gap-2"><span className="text-emerald-500">●</span> Highly resilient Toyota Production System (TPS).</li>
                                    <li className="flex gap-2"><span className="text-emerald-500">●</span> Diversified multi-pathway portfolio (HEV, PHEV, FCEV, BEV).</li>
                                </ul>
                            </div>
                            <div className="bg-slate-900 border border-orange-500/20 rounded-2xl p-6 relative overflow-hidden">
                                <h4 className="text-xl font-bold text-orange-400 mb-4">Weaknesses</h4>
                                <ul className="space-y-2 text-slate-300 text-sm">
                                    <li className="flex gap-2"><span className="text-orange-500">●</span> Historical over-reliance on the Japanese domestic market.</li>
                                    <li className="flex gap-2"><span className="text-orange-500">●</span> Bureaucratic rigidity slowing cross-divisional decisions.</li>
                                    <li className="flex gap-2"><span className="text-orange-500">●</span> Operating margin declined to 10.0% (FY2025).</li>
                                </ul>
                            </div>
                            <div className="bg-slate-900 border border-blue-500/20 rounded-2xl p-6 relative overflow-hidden">
                                <h4 className="text-xl font-bold text-blue-400 mb-4">Opportunities</h4>
                                <ul className="space-y-2 text-slate-300 text-sm">
                                    <li className="flex gap-2"><span className="text-blue-500">●</span> Sustained weak Japanese Yen boosting export profitability.</li>
                                    <li className="flex gap-2"><span className="text-blue-500">●</span> Surging global demand for hybrid/electrified vehicles.</li>
                                    <li className="flex gap-2"><span className="text-blue-500">●</span> Government subsidies for eco-mobility and SDVs.</li>
                                </ul>
                            </div>
                            <div className="bg-slate-900 border border-red-500/20 rounded-2xl p-6 relative overflow-hidden">
                                <h4 className="text-xl font-bold text-red-500 mb-4">Threats</h4>
                                <ul className="space-y-2 text-slate-300 text-sm">
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
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3"><GitMerge className="text-red-500" /> 2. TOWS Prescriptions</h3>
                            <div className="space-y-4">
                                <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl border-l-2 border-l-emerald-500">
                                    <h5 className="font-bold text-white text-sm mb-1">SO: Maxi-Maxi</h5>
                                    <p className="text-xs text-slate-400">Monetize weak Yen by scaling exports of Camry/RAV4 hybrids. Lead government-subsidized electrification.</p>
                                </div>
                                <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl border-l-2 border-l-orange-500">
                                    <h5 className="font-bold text-white text-sm mb-1">WO: Mini-Maxi</h5>
                                    <p className="text-xs text-slate-400">Use government green incentives to fund the $13.9B North Carolina battery plant, closing the BEV tech gap.</p>
                                </div>
                                <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl border-l-2 border-l-red-500">
                                    <h5 className="font-bold text-white text-sm mb-1">WT: Mini-Mini</h5>
                                    <p className="text-xs text-slate-400">Aggressively reduce break-even volume under CEO Kenta Kon to withstand tariff-driven margin compression.</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3"><Waves className="text-blue-500" /> 3. Blue Ocean (ERRC)</h3>
                            <div className="grid grid-cols-2 gap-4 h-full">
                                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-sm">
                                    <span className="text-red-500 font-bold block mb-1">Eliminate</span>
                                    Single-powertrain dependency across new model platforms.
                                </div>
                                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-sm">
                                    <span className="text-orange-500 font-bold block mb-1">Reduce</span>
                                    Corporate break-even volume and reliance on expensive battery-only architectures.
                                </div>
                                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-sm">
                                    <span className="text-emerald-500 font-bold block mb-1">Raise</span>
                                    Accessibility of electrified mobility via affordable HEV models across income brackets.
                                </div>
                                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-sm">
                                    <span className="text-blue-500 font-bold block mb-1">Create</span>
                                    Mobility-as-a-service paradigm (Beyond Zero) and the globally connected Digital Obeya.
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 4. PORTER'S FIVE FORCES */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3"><Shield className="text-red-500" /> 4. Porter's Five Forces</h3>
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                            <div className="bg-slate-900 border-t-4 border-red-600 p-5 rounded-lg">
                                <h5 className="font-bold text-white mb-1">Rivalry</h5>
                                <span className="text-xs font-bold text-red-500 tracking-wider">VERY HIGH</span>
                                <p className="text-xs text-slate-400 mt-2">Direct confrontation with VW, Hyundai, and aggressive Chinese EV OEMs causing severe margin compression.</p>
                            </div>
                            <div className="bg-slate-900 border-t-4 border-orange-500 p-5 rounded-lg">
                                <h5 className="font-bold text-white mb-1">Buyers</h5>
                                <span className="text-xs font-bold text-orange-400 tracking-wider">MOD-HIGH</span>
                                <p className="text-xs text-slate-400 mt-2">Consumers demand standard electrification. Loss of EV tax credits amplifies price sensitivity.</p>
                            </div>
                            <div className="bg-slate-900 border-t-4 border-orange-500 p-5 rounded-lg">
                                <h5 className="font-bold text-white mb-1">Suppliers</h5>
                                <span className="text-xs font-bold text-orange-400 tracking-wider">MOD-HIGH</span>
                                <p className="text-xs text-slate-400 mt-2">Reliance on rare-earth materials and advanced semiconductors. Countered by vertical integration ($13.9B NC plant).</p>
                            </div>
                            <div className="bg-slate-900 border-t-4 border-yellow-500 p-5 rounded-lg">
                                <h5 className="font-bold text-white mb-1">New Entrants</h5>
                                <span className="text-xs font-bold text-yellow-500 tracking-wider">MODERATE</span>
                                <p className="text-xs text-slate-400 mt-2">Software-first entrants bypass legacy manufacturing barriers, supported by government EV subsidies.</p>
                            </div>
                            <div className="bg-slate-900 border-t-4 border-yellow-500 p-5 rounded-lg">
                                <h5 className="font-bold text-white mb-1">Substitutes</h5>
                                <span className="text-xs font-bold text-yellow-500 tracking-wider">MODERATE</span>
                                <p className="text-xs text-slate-400 mt-2">Urban mobility platforms (Uber, DiDi) and micro-mobility. Toyota's pivot to a mobility company hedges this.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- CHAPTER 3: ORGANIZING --- */}
            <section className="animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out py-24 md:py-32 px-6 lg:px-12 max-w-7xl mx-auto">
                <SectionHeading subtitle="Chapter 3: Organizing (Shantanu Bhargava)" title="Structuring the Empire" />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <p className="text-lg text-slate-400 mb-6 leading-relaxed">
                            Historically, Toyota operated under a highly centralized, "spoke-and-wheel" global hierarchy managed from Japan. This proved catastrophic during the 2009-2010 acceleration crisis due to delayed responses.
                        </p>
                        <p className="text-lg text-slate-400 mb-10 leading-relaxed">
                            Today, Toyota utilizes a dynamic <strong>3D Matrix Structure</strong>, balancing global product standardization with hyper-local market responsiveness.
                        </p>

                        <div className="space-y-4">
                            <Card
                                icon={Globe}
                                title="Geographic Divisions"
                                text="Dedicated regional authorities covering Japan, North America, Europe, Asia, and China. Maximizes responsiveness to localized consumer demands and geopolitical trade shifts."
                            />
                            <Card
                                icon={Car}
                                title="In-House Company System"
                                text="Product-based divisions (e.g., Lexus International, Powertrain Unit Center) acting as pseudo-independent entities to foster rapid innovation without macro-corporate bureaucracy."
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-8">
                        {/* Governance Board */}
                        <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
                            <h4 className="text-2xl font-bold text-white mb-4 flex items-center gap-3"><Scale className="text-red-500" /> Board Governance Evolution</h4>
                            <p className="text-slate-400 text-sm mb-4">
                                In June 2025, Toyota transitioned to a <strong>"company with an Audit and Supervisory Committee."</strong>
                            </p>
                            <ul className="space-y-3 text-sm text-slate-300">
                                <li className="flex gap-3 items-start"><CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" /> <span>Auditors elevated to full Members of the Board of Directors with equal voting rights.</span></li>
                                <li className="flex gap-3 items-start"><CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" /> <span>Half of the 10 directors are Independent Outside Directors to counter internal groupthink.</span></li>
                                <li className="flex gap-3 items-start"><CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" /> <span>Delegates day-to-day execution to executives, allowing the Board to focus purely on strategic supervision.</span></li>
                            </ul>
                        </div>

                        {/* Executive Restructuring */}
                        <div className="bg-red-600 p-8 rounded-2xl text-white shadow-2xl">
                            <h4 className="text-xl font-bold mb-6 border-b border-red-500 pb-4 uppercase tracking-wider text-sm">2026 Executive Restructuring</h4>
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <h5 className="font-bold text-lg mb-1">Koji Sato</h5>
                                    <div className="text-xs font-bold text-red-200 uppercase tracking-wider mb-2">Chief Industry Officer</div>
                                    <p className="text-sm text-red-100">Transitions outward. Focuses on shaping national policy (JAMA Chairman) and enhancing Japan's macro-level industrial competitiveness.</p>
                                </div>
                                <div>
                                    <h5 className="font-bold text-lg mb-1">Kenta Kon</h5>
                                    <div className="text-xs font-bold text-red-200 uppercase tracking-wider mb-2">President & CEO</div>
                                    <p className="text-sm text-red-100">Former CFO. An unorthodox move placing a finance expert at the helm to aggressively lower corporate break-even volume and fight a war of financial attrition.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- CHAPTER 4: STAFFING --- */}
            <section className="animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out py-24 md:py-32 px-6 lg:px-12 bg-slate-900/50 border-y border-slate-800">
                <div className="max-w-7xl mx-auto">
                    <SectionHeading subtitle="Chapter 4: Staffing (Aniruddha Roy)" title="The Human Capital Asset" />

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                        <div className="lg:col-span-2">
                            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                                Toyota rejects the traditional Western model of treating labor as an expendable variable cost. Its 380,000 global employees are viewed as a vital appreciating asset, anchored by the <strong>Psychological Contract</strong>.
                            </p>
                            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                                This 1962 labor-management agreement guarantees long-term employment in exchange for absolute ownership of productivity improvements. This creates a low-turnover environment that preserves specialized institutional knowledge.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Card
                                    icon={Users}
                                    title="Blue-Collar Integration"
                                    text="Comprehensive On-the-Job Training (OJT) pairs new hires with veterans. Systematic Job Rotation cycles workers through assembly, QA, and logistics to build a resilient, cross-trained workforce."
                                />
                                <Card
                                    icon={Globe}
                                    title="GLOBAL 21 Pipeline"
                                    text="Cultivates global executives. Mid-career employees are forced into overseas assignments or MBAs to acquire cross-cultural operational skills before assuming senior roles."
                                />
                            </div>
                        </div>

                        {/* Performance Evaluation Panel */}
                        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-8 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-5"><FileText size={150} /></div>
                            <h4 className="text-xl font-bold text-white mb-2 relative z-10">The Architecture of Appraisal</h4>
                            <p className="text-sm text-slate-400 mb-6 relative z-10">Evaluations bypass subjective personality traits, focusing intensely on 5 primary empirical criteria (10 points each):</p>

                            <ul className="space-y-4 relative z-10 text-sm">
                                <li className="bg-slate-900 p-3 rounded border border-slate-800 border-l-2 border-l-red-500">
                                    <strong className="text-white block mb-1">1. Physical Skills (Takt Time)</strong>
                                    <span className="text-slate-400">Ability to handle work strictly within designated time without degrading quality.</span>
                                </li>
                                <li className="bg-slate-900 p-3 rounded border border-slate-800 border-l-2 border-l-red-500">
                                    <strong className="text-white block mb-1">2. Quality Maintenance</strong>
                                    <span className="text-slate-400">Absolute adherence to zero-defect manufacturing standards.</span>
                                </li>
                                <li className="bg-slate-900 p-3 rounded border border-slate-800 border-l-2 border-l-red-500">
                                    <strong className="text-white block mb-1">3. Kaizen Participation</strong>
                                    <span className="text-slate-400">Active, documented participation in continuous improvement.</span>
                                </li>
                                <li className="bg-slate-900 p-3 rounded border border-slate-800 border-l-2 border-l-red-500">
                                    <strong className="text-white block mb-1">4. Big Picture View</strong>
                                    <span className="text-slate-400">Ability to articulate how daily targets derive from corporate objectives.</span>
                                </li>
                                <li className="bg-slate-900 p-3 rounded border border-slate-800 border-l-2 border-l-red-500">
                                    <strong className="text-white block mb-1">5. Problem Solving</strong>
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
                        <h3 className="text-red-200 font-bold tracking-widest uppercase text-sm mb-4">Chapter 5: Leading (Jainum H. Shah)</h3>
                        <h2 className="text-4xl md:text-6xl font-bold mb-8">Facilitating Horizontal Alignment</h2>
                        <p className="text-xl text-red-100 mb-6 leading-relaxed">
                            Leadership at Toyota is a profound rejection of traditional, autocratic directives. It is defined by meticulous facilitation, dismantling silos, and empowering subordinates at the <em>genba</em> (the actual place value is created).
                        </p>

                        <div className="space-y-6 mt-10">
                            <div className="bg-black/20 p-6 rounded-2xl backdrop-blur-sm">
                                <h4 className="text-2xl font-bold mb-2 flex items-center gap-3"><Users /> The Obeya System</h4>
                                <p className="text-red-100 text-sm">
                                    The "Big Room." Cross-functional leaders converge in a highly visual workspace to practice <em>Genchi Genbutsu</em>. Walls are plastered with A3 problem-solving docs and critical path schedules, enabling rapid collaborative decisions.
                                </p>
                            </div>
                            <div className="bg-black/20 p-6 rounded-2xl backdrop-blur-sm">
                                <h4 className="text-2xl font-bold mb-2 flex items-center gap-3"><Lightbulb /> Toyota Times</h4>
                                <p className="text-red-100 text-sm">
                                    Spearheaded by Akio Toyoda in 2020. An open-media channel projecting management's unfiltered thoughts directly to the public and workforce, deliberately cultivating an atmosphere of absolute transparency to build systemic trust.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white text-slate-900 p-10 rounded-3xl shadow-2xl transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
                        <h4 className="text-3xl font-black mb-4 text-red-600">Democratizing Innovation</h4>
                        <p className="text-md text-slate-600 mb-8">
                            The <strong>Toyota Creative Idea Suggestion System (TCISS)</strong> (est. 1951) democratized innovation. By granting complete autonomy, leadership shifted from dictating processes to coaching employees to solve their own abnormalities.
                        </p>

                        <div className="flex items-center gap-6 mb-8 border-b border-slate-200 pb-8">
                            <div className="text-5xl font-black text-slate-900">40M+</div>
                            <div className="text-sm font-bold text-slate-500 uppercase tracking-widest leading-tight">
                                Ideas Submitted<br />by 2011
                            </div>
                        </div>

                        <h5 className="font-bold text-lg mb-4">Incentive Architecture</h5>
                        <div className="space-y-3 mb-8 text-sm">
                            <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                                <span className="font-semibold text-slate-700">Prize for Suggestion</span>
                                <span className="bg-slate-100 px-3 py-1 rounded text-slate-600 font-bold">500 ¥</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                                <span className="font-semibold text-slate-700">Outstanding Prize</span>
                                <span className="bg-slate-200 px-3 py-1 rounded text-slate-700 font-bold">2,000 ¥</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                                <span className="font-semibold text-slate-700">Excellent Prize</span>
                                <span className="bg-slate-300 px-3 py-1 rounded text-slate-800 font-bold">5,000 ¥</span>
                            </div>
                            <div className="flex justify-between items-center pb-2">
                                <span className="font-bold text-red-600">The Best Award</span>
                                <span className="bg-red-100 px-3 py-1 rounded text-red-600 font-bold">10k - 200k ¥</span>
                            </div>
                        </div>

                        <div className="bg-slate-100 p-5 rounded-xl border-l-4 border-red-600">
                            <h5 className="font-bold text-md mb-1">The Rookie Award</h5>
                            <p className="text-slate-600 text-xs">
                                Targets 1st & 2nd-year employees to successfully generate at least <strong>36 actionable suggestions annually</strong> (3 innovations per month).
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- CHAPTER 6: CONTROLLING --- */}
            <section className="animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out py-24 md:py-32 px-6 lg:px-12 max-w-7xl mx-auto">
                <SectionHeading subtitle="Chapter 6: Controlling (Manas Aggrawal)" title="Algorithmic Control & Oversight" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    <div className="col-span-1 lg:col-span-6">
                        <h3 className="text-2xl font-bold text-white mb-6">Financial Pressures (FY24 vs FY25)</h3>
                        <p className="text-slate-400 mb-8 leading-relaxed">
                            Financial controlling reveals a dual reality: massive top-line growth offset by severe margin compression due to capital expenditures (like the $13.9B battery plant) and raw material costs.
                        </p>

                        <div className="space-y-8 bg-slate-900/50 p-8 rounded-2xl border border-slate-800">
                            {/* Chart Bar 1 */}
                            <div>
                                <div className="flex justify-between text-sm font-bold text-white mb-2">
                                    <span>Sales Revenue (¥ Billions)</span>
                                    <span className="text-emerald-500">+6.5%</span>
                                </div>
                                <div className="h-8 bg-slate-800 rounded-full overflow-hidden relative">
                                    <div className="absolute top-0 left-0 h-full bg-blue-600 w-full rounded-full"></div>
                                    <div className="absolute top-0 left-0 h-full flex items-center px-4 text-white text-xs font-bold z-10">48,036</div>
                                </div>
                            </div>

                            {/* Chart Bar 2 */}
                            <div>
                                <div className="flex justify-between text-sm font-bold text-white mb-2 mt-6">
                                    <span>FY2024 Operating Margin</span>
                                </div>
                                <div className="h-8 bg-slate-800 rounded-full overflow-hidden relative">
                                    <div className="absolute top-0 left-0 h-full bg-emerald-600 w-[85%] rounded-full"></div>
                                    <div className="absolute top-0 left-0 h-full flex items-center px-4 text-white text-xs font-bold z-10">11.9%</div>
                                </div>
                            </div>

                            {/* Chart Bar 3 */}
                            <div>
                                <div className="flex justify-between text-sm font-bold text-white mb-2 mt-6">
                                    <span>FY2025 Operating Margin</span>
                                    <span className="text-red-500">-1.9 pts</span>
                                </div>
                                <div className="h-8 bg-slate-800 rounded-full overflow-hidden relative">
                                    <div className="absolute top-0 left-0 h-full bg-orange-600 w-[71%] rounded-full"></div>
                                    <div className="absolute top-0 left-0 h-full flex items-center px-4 text-white text-xs font-bold z-10">10.0% (Triggered CEO shift to Kenta Kon)</div>
                                </div>
                            </div>

                            {/* Chart Bar 4 */}
                            <div>
                                <div className="flex justify-between text-sm font-bold text-white mb-2 mt-6">
                                    <span>Return on Equity (R.O.E.)</span>
                                    <span className="text-red-500">-2.2 pts</span>
                                </div>
                                <div className="h-8 bg-slate-800 rounded-full overflow-hidden relative">
                                    <div className="absolute top-0 left-0 h-full bg-yellow-600 w-[80%] rounded-full"></div>
                                    <div className="absolute top-0 left-0 h-full flex items-center px-4 text-white text-xs font-bold z-10">13.6%</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-1 lg:col-span-6 flex flex-col gap-6">
                        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                <ShieldCheck className="text-red-500" /> Compliance Architecture
                            </h3>
                            <p className="text-sm text-slate-400 mb-6">
                                Following certification violations at Hino and Daihatsu, Toyota instituted draconian compliance overhauls.
                            </p>

                            <div className="relative border-l-2 border-slate-800 pl-6 space-y-6">
                                <div className="relative">
                                    <div className="absolute w-3 h-3 bg-red-600 rounded-full -left-[31px] top-1.5"></div>
                                    <h5 className="text-md font-bold text-white mb-1">Global Chief Compliance Officer (GCCO)</h5>
                                    <p className="text-xs text-slate-400">Wields unmitigated authority over compliance. Chairs the Compliance Committee alongside the Risk Management Committee.</p>
                                </div>
                                <div className="relative">
                                    <div className="absolute w-3 h-3 bg-slate-600 rounded-full -left-[31px] top-1.5"></div>
                                    <h5 className="text-md font-bold text-white mb-1">Regional CCOs</h5>
                                    <p className="text-xs text-slate-400">Appointed in NA & Europe to ensure localized cultural nuances do not obscure governance mandates.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                <Globe className="text-blue-500" /> Environmental & Supplier Control
                            </h3>
                            <ul className="space-y-4 text-sm">
                                <li className="flex gap-3 items-start">
                                    <Zap className="text-yellow-500 shrink-0 mt-1" size={18} />
                                    <div>
                                        <strong className="text-white block">EMIS System</strong>
                                        <span className="text-slate-400">Ecology, Safety and Health Material Investigation System automatically algorithmically assesses chemical toxicity risks to ensure zero regulatory deviations.</span>
                                    </div>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <Target className="text-red-500 shrink-0 mt-1" size={18} />
                                    <div>
                                        <strong className="text-white block">TEAM Award KPI Framework</strong>
                                        <span className="text-slate-400">Suppliers are relentlessly evaluated against defect rates, delivery precision, and cost reduction trajectories. Excellence is rewarded via the Total Exceptional Achievement for Manufacturing award.</span>
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
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">The Vanguard of Global Management</h2>
                    <p className="text-xl text-slate-400 font-light leading-relaxed mb-12">
                        Toyota operates not merely as an automobile manufacturer, but as a deeply integrated, highly self-correcting sociotechnical system. By perfectly balancing the stability of its historical philosophy with the brutal pragmatism required by modern markets, Toyota is uniquely positioned to dictate the future trajectory of global mobility.
                    </p>
                    <div className="text-sm text-slate-500 uppercase tracking-widest font-bold">
                        MIT Manipal | Math and Computing 2027<br />
                        <span className="text-slate-600 font-normal mt-2 block">Essentials of Management Course</span>
                    </div>
                </div>
            </footer>

        </div>
    );
}
