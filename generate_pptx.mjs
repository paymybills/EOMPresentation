import pptxgen from "pptxgenjs";

const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";

const BG_COLOR = "0F172A";
const RED_ACCENT = "DC2626";
const WHITE = "FFFFFF";
const SLATE_400 = "94A3B8";

// Slide Master
pres.defineSlideMaster({
  title: "DARK_THEME",
  background: { fill: BG_COLOR },
  slideNumber: { x: "95%", y: "95%", fontSize: 10, color: SLATE_400 }
});

// Helper for title
function addTitle(slide, title, subtitle) {
  if (subtitle) {
    slide.addText(subtitle.toUpperCase(), { x: 0.5, y: 0.5, w: 9, fontSize: 12, color: RED_ACCENT, bold: true, charSpacing: 2 });
  }
  slide.addText(title, { x: 0.5, y: (subtitle ? 0.8 : 0.5), w: 9, fontSize: 24, color: WHITE, bold: true });
  // accent line
  slide.addShape(pres.ShapeType.line, { line: RED_ACCENT, w: 9, h: 0, x: 0.5, y: 1.5, lineSize: 1 });
}

// 1. Title Slide
let slide = pres.addSlide({ masterName: "DARK_THEME" });
slide.addText("EOM Presentation", { x: 0, y: "30%", w: "100%", align: "center", fontSize: 44, color: WHITE, bold: true });
slide.addText("The Toyota Expansion Narrative", { x: 0, y: "45%", w: "100%", align: "center", fontSize: 20, color: SLATE_400 });
slide.addShape(pres.ShapeType.rect, { fill: RED_ACCENT, w: 1, h: 0.05, x: "44.5%", y: "55%" });
slide.addText("MIT Manipal | Math and computing 2027", { x: 0, y: "65%", w: "100%", align: "center", fontSize: 14, color: RED_ACCENT, bold: true, charSpacing: 2 });


// 2. Ch 1 Intro
slide = pres.addSlide({ masterName: "DARK_THEME" });
addTitle(slide, "The metamorphosis", "Chapter 1: Intro");
slide.addText(
  "Originating from the Toyoda Automatic Loom Works in the early 20th century under Sakichi Toyoda, Toyota has constantly transcended its mechanical roots. After World War II, under Kiichiro Toyoda and engineer Taiichi Ohno, the company pioneered the Toyota Production System (TPS) — a framework that eradicated waste and introduced \"Just-In-Time\" to the world.",
  { x: 0.5, y: 1.8, w: 9, fontSize: 14, color: SLATE_400, lineSpacing: 20 }
);
slide.addText(
  "Today, facing a generational disruption driven by electrification, AI, and autonomy, Toyota is executing another strategic pivot. They are shedding the identity of a traditional automaker to become a holistic mobility company for the seamless global movement of people, goods, energy, and information.",
  { x: 0.5, y: 3.2, w: 9, fontSize: 14, color: SLATE_400, lineSpacing: 20 }
);
slide.addShape(pres.ShapeType.rect, { fill: "1E293B", x: 0.5, y: 4.5, w: 9, h: 0.6 });
slide.addShape(pres.ShapeType.rect, { fill: RED_ACCENT, x: 0.5, y: 4.5, w: 0.05, h: 0.6 });
slide.addText("CORE MISSION: \"Producing happiness for all\" via the vision of \"creating mobility for all.\"", { x: 0.7, y: 4.6, w: 8.5, fontSize: 16, color: WHITE, bold: true });

// 3. The Precepts
slide = pres.addSlide({ masterName: "DARK_THEME" });
addTitle(slide, "The Toyoda precepts (1935)", "Chapter 1: Intro");
slide.addText([
  { text: "1. Faithful to duties ", options: { bold: true, color: RED_ACCENT } },
  { text: "to contribute to the overall good. A principle demanding corporate citizenship above isolated profit-seeking.\n", options: { color: WHITE } },
  { text: "2. Studiousness and creativity ", options: { bold: true, color: RED_ACCENT } },
  { text: "to stay ahead of the times. The foundation for continuous innovation.\n", options: { color: WHITE } },
  { text: "3. Practicality ", options: { bold: true, color: RED_ACCENT } },
  { text: "while eschewing frivolousness. The core tenet that birthed lean manufacturing.\n", options: { color: WHITE } },
  { text: "4. Foster a warm workplace ", options: { bold: true, color: RED_ACCENT } },
  { text: "atmosphere. Ensuring psychological safety on the factory floor (genba).\n", options: { color: WHITE } },
  { text: "5. Profound respect ", options: { bold: true, color: RED_ACCENT } },
  { text: "for spiritual matters and gratitude. Fostering humility in leadership and profound respect for local communities.", options: { color: WHITE } }
], { x: 0.5, y: 1.8, w: 9, fontSize: 14, lineSpacing: 24 });


// 4. Ch 2 Planning
slide = pres.addSlide({ masterName: "DARK_THEME" });
addTitle(slide, "Strategic intelligence", "Chapter 2: Planning");
slide.addText(
  "Planning is a continuous, systemic integration of external market realities with internal manufacturing capabilities. We analyze Toyota through canonical frameworks: SWOT, TOWS, Blue Ocean, BCG, and Porter's Five Forces. This top-down strategic planning phase ensures that multi-billion dollar capital expenditure decisions—like battery lab investments and factory retrofits—are insulated from short-term market hysteria.",
  { x: 0.5, y: 2, w: 9, fontSize: 16, color: SLATE_400, lineSpacing: 24 }
);


// 5. SWOT
slide = pres.addSlide({ masterName: "DARK_THEME" });
addTitle(slide, "The SWOT matrix", "Chapter 2: Planning");

// Grid for SWOT
const sX = 0.5, sY = 1.7, sW = 4.3, sH = 1.7;
slide.addShape(pres.ShapeType.rect, { fill: "0F172A", line: "10B981", x: sX, y: sY, w: sW, h: sH });
slide.addText("STRENGTHS", { x: sX+0.2, y: sY+0.2, fontSize: 12, color: "10B981", bold: true });
slide.addText("• Best-selling automaker globally (5.5M units H1 2025).\n• Resilient Toyota Production System (TPS).\n• Multi-pathway portfolio (ICE, HEV, PHEV, BEV, FCEV).", { x: sX+0.2, y: sY+0.6, w: 4, fontSize: 12, color: WHITE });

slide.addShape(pres.ShapeType.rect, { fill: "0F172A", line: "F97316", x: sX+4.5, y: sY, w: sW, h: sH });
slide.addText("WEAKNESSES", { x: sX+4.7, y: sY+0.2, fontSize: 12, color: "F97316", bold: true });
slide.addText("• Over-reliance on domestic market and US trucks.\n• Bureaucratic rigidity slowing agile decisions.\n• Operating margins compressed to 10.0% due to capital expenditure on BEVs.", { x: sX+4.7, y: sY+0.6, w: 4, fontSize: 12, color: WHITE });

slide.addShape(pres.ShapeType.rect, { fill: "0F172A", line: "3B82F6", x: sX, y: sY+1.9, w: sW, h: sH });
slide.addText("OPPORTUNITIES", { x: sX+0.2, y: sY+2.1, fontSize: 12, color: "3B82F6", bold: true });
slide.addText("• Weak Yen boosting export profitability.\n• Surging hybrid demand against range anxiety.\n• Government subsidies for eco-mobility localization.", { x: sX+0.2, y: sY+2.5, w: 4, fontSize: 12, color: WHITE });

slide.addShape(pres.ShapeType.rect, { fill: "0F172A", line: "EF4444", x: sX+4.5, y: sY+1.9, w: sW, h: sH });
slide.addText("THREATS", { x: sX+4.7, y: sY+2.1, fontSize: 12, color: "EF4444", bold: true });
slide.addText("• Geopolitical instability and escalating US tariffs.\n• Aggressive low-cost Chinese EV OEMs (BYD, NIO).\n• Legislative shifting of EV tax credits.", { x: sX+4.7, y: sY+2.5, w: 4, fontSize: 12, color: WHITE });


// 6. TOWS
slide = pres.addSlide({ masterName: "DARK_THEME" });
addTitle(slide, "TOWS prescriptions", "Chapter 2: Planning");
let tableCols = [ { w: 2 }, { w: 7 } ];
let tableRows = [
  [ { text: "Strategy", options: { bold: true, color: WHITE } }, { text: "Action", options: { bold: true, color: WHITE } } ],
  [ { text: "SO: Maxi-Maxi\n(Leveraging strengths)", options: { color: "10B981", bold: true } }, { text: "Monetize the sustained weak Yen by aggressively scaling exports of high-margin hybrids from Japanese plants. Simultaneously, lead government-subsidized electrification initiatives globally by utilizing existing operational scale.", options: { color: WHITE, fontSize: 12 } } ],
  [ { text: "WO: Mini-Maxi\n(Overcoming weaknesses)", options: { color: "F97316", bold: true } }, { text: "Systematically tap into lucrative government green incentives to aggressively fund and de-risk the massive $13.9B North Carolina battery manufacturing plant, closing the BEV tech lag.", options: { color: WHITE, fontSize: 12 } } ],
  [ { text: "WT: Mini-Mini\n(Defensive posturing)", options: { color: "EF4444", bold: true } }, { text: "Aggressively preempt shifting trade wars by reducing corporate break-even volumes. Restructure operations to withstand margin compression by enforcing extreme lean manufacturing efficiencies.", options: { color: WHITE, fontSize: 12 } } ]
];
slide.addTable(tableRows, { x: 0.5, y: 1.8, colW: [2, 7], rowH: 0.5, border: { type: 'solid', pt: 1, color: "1E293B" }, fill: "0F172A", valign: "top" });


// 7. Blue Ocean
slide = pres.addSlide({ masterName: "DARK_THEME" });
addTitle(slide, "Blue ocean (ERRC)", "Chapter 2: Planning");
slide.addText("ELIMINATE", { x: 0.5, y: 1.8, fontSize: 14, color: "EF4444", bold: true });
slide.addText("The archaic single-powertrain dependency across new model platforms. Future vehicle platforms must natively support ICE, HEV, and BEV drivetrains interchangeably on the exact same assembly lines to eliminate re-tooling dead time.", { x: 0.5, y: 2.1, w: 4, fontSize: 12, color: WHITE });

slide.addText("REDUCE", { x: 5, y: 1.8, fontSize: 14, color: "F97316", bold: true });
slide.addText("Corporate break-even volume and crippling reliance on hyper-expensive, rare-earth intensive battery-only architectures that restrict profitability to high-income luxury demographics.", { x: 5, y: 2.1, w: 4, fontSize: 12, color: WHITE });

slide.addText("RAISE", { x: 0.5, y: 3.6, fontSize: 14, color: "10B981", bold: true });
slide.addText("The global accessibility of electrified and sustainable mobility via affordable, highly durable HEV (hybrid) models across lower-to-middle income brackets practically everywhere.", { x: 0.5, y: 3.9, w: 4, fontSize: 12, color: WHITE });

slide.addText("CREATE", { x: 5, y: 3.6, fontSize: 14, color: "3B82F6", bold: true });
slide.addText("A post-hardware \"Mobility-as-a-Service\" paradigm under the Beyond Zero initiative, deeply integrating physical cars with interconnected smart city grids and the globally synchronized \"Digital Obeya\" management cloud.", { x: 5, y: 3.9, w: 4, fontSize: 12, color: WHITE });


// 8. BCG Matrix
slide = pres.addSlide({ masterName: "DARK_THEME" });
addTitle(slide, "BCG matrix", "Chapter 2: Planning");
slide.addText("STARS", { x: 0.5, y: 1.8, fontSize: 14, color: "3B82F6", bold: true });
slide.addText("HEV (Hybrids) & RAV4/Camry\nHigh share, high growth. Current primary revenue drivers capturing transitional demand brilliantly.", { x: 0.5, y: 2.1, w: 4, fontSize: 12, color: WHITE });

slide.addText("QUESTION MARKS", { x: 5, y: 1.8, fontSize: 14, color: "A855F7", bold: true });
slide.addText("BEV (bZ4X) & Hydrogen (Mirai)\nLow share, high growth. Require disproportionate, massive R&D capital injections to secure a long-term future footing.", { x: 5, y: 2.1, w: 4, fontSize: 12, color: WHITE });

slide.addText("CASH COWS", { x: 0.5, y: 3.6, fontSize: 14, color: "10B981", bold: true });
slide.addText("ICE Trucks & SUVs (Tacoma)\nHigh share, low growth. Highly profitable legacy models that generate immense free cash flow to fund R&D electrification.", { x: 0.5, y: 3.9, w: 4, fontSize: 12, color: WHITE });

slide.addText("DOGS", { x: 5, y: 3.6, fontSize: 14, color: SLATE_400, bold: true });
slide.addText("Compact & Midsize ICE Sedans\nLow share, low growth. Toyota is rapidly consolidating away from traditional sedan segments to prevent capital drift as consumers favor SUVs.", { x: 5, y: 3.9, w: 4, fontSize: 12, color: WHITE });

// 9. Porter's Five Forces
slide = pres.addSlide({ masterName: "DARK_THEME" });
addTitle(slide, "Porter's five forces", "Chapter 2: Planning");

slide.addText("Rivalry (Very High)", { x: 0.5, y: 1.8, fontSize: 14, color: "EF4444", bold: true });
slide.addText("Direct brutal confrontation with VW, Hyundai, and subsidized Chinese EV OEMs causing severe margin compression.", { x: 0.5, y: 2.1, w: 2.5, fontSize: 12, color: WHITE });

slide.addText("Buyers (Mod-High)", { x: 3.5, y: 1.8, fontSize: 14, color: "F97316", bold: true });
slide.addText("Armed with digital pricing transparency; loss of tax credits amplifies intense price sensitivity for EVs.", { x: 3.5, y: 2.1, w: 2.5, fontSize: 12, color: WHITE });

slide.addText("Suppliers (Mod-High)", { x: 6.5, y: 1.8, fontSize: 14, color: "F97316", bold: true });
slide.addText("Extortion leverage via rare-earth minerals countered by massive $13.9B vertical integration.", { x: 6.5, y: 2.1, w: 2.5, fontSize: 12, color: WHITE });

slide.addText("New entrants (Moderate)", { x: 1.5, y: 3.5, fontSize: 14, color: "EAB308", bold: true });
slide.addText("Software-first entrants bypass legacy manufacturing barriers.", { x: 1.5, y: 3.8, w: 3, fontSize: 12, color: WHITE });

slide.addText("Substitutes (Moderate)", { x: 5, y: 3.5, fontSize: 14, color: "EAB308", bold: true });
slide.addText("Urban mobility platforms (Uber) and high-speed rail hedge exactly why Toyota is becoming a broad \"mobility\" provider.", { x: 5, y: 3.8, w: 4, fontSize: 12, color: WHITE });

// 10. Ch 3 Organizing
slide = pres.addSlide({ masterName: "DARK_THEME" });
addTitle(slide, "Structuring the empire", "Chapter 3: Organizing");
slide.addText(
  "Historically, Toyota operated under a rigid \"spoke-and-wheel\" global hierarchy strictly managed from the corporate epicenter in Japan. This archaic structure proved catastrophic during the devastating 2009-2010 unintended acceleration crisis due to massive communication bottlenecks.",
  { x: 0.5, y: 1.8, w: 9, fontSize: 14, color: SLATE_400, lineSpacing: 20 }
);
slide.addText(
  "Today, Toyota utilizes a highly dynamic, decentralized 3D matrix structure:",
  { x: 0.5, y: 3.0, w: 9, fontSize: 14, color: WHITE, bold: true }
);
slide.addText(
  "• Geographic divisions: Semi-autonomous regional authorities covering NA, EU, Asia, maximizing local flexibility.\n• In-House company system: Shift from functional silos to agile product-based divisions (e.g., Lexus, Powertrain).",
  { x: 0.5, y: 3.4, w: 9, fontSize: 14, color: SLATE_400, lineSpacing: 20 }
);


// 11. Board & Executive
slide = pres.addSlide({ masterName: "DARK_THEME" });
addTitle(slide, "Governance & restructuring", "Chapter 3: Organizing");
slide.addText("Board Governance Evolution", { x: 0.5, y: 1.8, fontSize: 16, color: RED_ACCENT, bold: true });
slide.addText(
  "• Transitioned to a \"company with an audit and supervisory committee.\"\n• Auditors elevated to full unmitigated board members.\n• 50% of the 10 directors are independent to counter cronyism.\n• Board focuses purely on macro-strategic oversight, delegating daily execution to lower executives.",
  { x: 0.5, y: 2.2, w: 9, fontSize: 14, color: WHITE, lineSpacing: 20 }
);
slide.addText("2026 Executive Restructuring", { x: 0.5, y: 4.0, fontSize: 16, color: RED_ACCENT, bold: true });
slide.addText(
  "• Koji Sato (Chief Industry Officer): Shapes macro-national policy via JAMA, coordinating with gov against competitors.\n• Kenta Kon (President & CEO): Former CFO tapped to meticulously lower break-even volumes and engineer financial defenses.",
  { x: 0.5, y: 4.4, w: 9, fontSize: 14, color: WHITE, lineSpacing: 20 }
);


// 12. Ch 4 Staffing
slide = pres.addSlide({ masterName: "DARK_THEME" });
addTitle(slide, "The human capital asset", "Chapter 4: Staffing");
slide.addText(
  "Toyota fundamentally rejects the traditional Western manufacturing model of treating human labor strictly as an expendable variable cost. The 380,000 global employees are viewed as the company's only true appreciating asset, anchored by the psychological contract.",
  { x: 0.5, y: 1.8, w: 9, fontSize: 14, color: SLATE_400, lineSpacing: 20 }
);
slide.addText(
  "Forged after a 1962 strike, it guarantees long-term employment in exchange for absolute ownership of productivity gains. This prevents poaching of Toyota's most experienced master craftsmen (Takumi).",
  { x: 0.5, y: 2.7, w: 9, fontSize: 14, color: SLATE_400, lineSpacing: 20 }
);
slide.addText("Blue-Collar integration", { x: 0.5, y: 4.0, fontSize: 14, color: WHITE, bold: true });
slide.addText("Deeply immersive OJT pairing new hires with veterans. Job rotation forces cross-training through assembly, QA, logistics.", { x: 0.5, y: 4.3, w: 4, fontSize: 12, color: SLATE_400, lineSpacing: 18 });

slide.addText("GLOBAL 21 pipeline", { x: 5, y: 4.0, fontSize: 14, color: WHITE, bold: true });
slide.addText("Forces high-potential executives into demanding overseas assignments or MBAs to build cross-cultural operational skills.", { x: 5, y: 4.3, w: 4, fontSize: 12, color: SLATE_400, lineSpacing: 18 });

// 13. Appraisal
slide = pres.addSlide({ masterName: "DARK_THEME" });
addTitle(slide, "The architecture of appraisal", "Chapter 4: Staffing");
slide.addText(
  "Evaluations bypass highly subjective traits, focusing entirely on 5 empirical criteria (worth 10 points each):",
  { x: 0.5, y: 1.8, w: 9, fontSize: 14, color: WHITE }
);
slide.addText([
  { text: "1. Physical skills (takt time): ", options: { color: RED_ACCENT, bold: true } },
  { text: "Executing tasks strictly within the cycle limit without degrading safety.\n", options: { color: SLATE_400 } },
  { text: "2. Quality maintenance: ", options: { color: RED_ACCENT, bold: true } },
  { text: "Adherence to stringent zero-defect logic.\n", options: { color: SLATE_400 } },
  { text: "3. Kaizen participation: ", options: { color: RED_ACCENT, bold: true } },
  { text: "Active, documented participation in continuous iterative improvement.\n", options: { color: SLATE_400 } },
  { text: "4. Big picture view: ", options: { color: RED_ACCENT, bold: true } },
  { text: "Articulating exactly how microscopic line tasks support corporate objectives.\n", options: { color: SLATE_400 } },
  { text: "5. Problem solving: ", options: { color: RED_ACCENT, bold: true } },
  { text: "Independently utilizing '5 Whys' root-cause analysis and physically deploying countermeasures.", options: { color: SLATE_400 } }
], { x: 0.5, y: 2.3, w: 9, fontSize: 14, lineSpacing: 24 });


// 14. Ch 5 Leading
slide = pres.addSlide({ masterName: "DARK_THEME" });
addTitle(slide, "Facilitating horizontal alignment", "Chapter 5: Leading");
slide.addText(
  "Leadership at Toyota is a profound rejection of vertical, autocratic directives common in standard manufacturing. Instead, it is defined by meticulous facilitation, dismantling restrictive corporate silos, and empowering subordinates at the genba (the actual place value is created). Leaders are coaches, not drill sergeants.",
  { x: 0.5, y: 1.8, w: 9, fontSize: 14, color: SLATE_400, lineSpacing: 20 }
);
slide.addText("The obeya system (Big Room)", { x: 0.5, y: 3.2, fontSize: 16, color: RED_ACCENT, bold: true });
slide.addText(
  "Cross-functional engineers from conflicting departments converge in a highly visual workspace to practice genchi genbutsu. A3 problem solving documents plaster walls to demolish email chains and force face-to-face decisions.",
  { x: 0.5, y: 3.6, w: 9, fontSize: 14, color: WHITE, lineSpacing: 18 }
);
slide.addText("Toyota times (2020)", { x: 0.5, y: 4.5, fontSize: 16, color: RED_ACCENT, bold: true });
slide.addText(
  "Open-media channel projecting top management's unfiltered thoughts directly to the public & workforce.",
  { x: 0.5, y: 4.8, w: 9, fontSize: 14, color: WHITE }
);

// 15. TCISS
slide = pres.addSlide({ masterName: "DARK_THEME" });
addTitle(slide, "Democratizing innovation", "Chapter 5: Leading");
slide.addText(
  "The Toyota Creative Idea Suggestion System (TCISS), est. 1951, successfully democratized mass innovation, granting complete autonomy to line workers. Total recorded submissions exceeded 40M ideas by 2011.",
  { x: 0.5, y: 1.8, w: 9, fontSize: 14, color: SLATE_400, lineSpacing: 20 }
);
slide.addText("Financial incentive architecture:", { x: 0.5, y: 2.8, fontSize: 14, color: WHITE, bold: true });
slide.addText(
  "• Standard prize for any suggestion: 500 ¥\n• Outstanding prize (actionable): 2,000 ¥\n• Excellent prize (high impact): 5,000 ¥\n• The Best Award (system-wide change): 10,000 - 200,000 ¥",
  { x: 0.5, y: 3.2, w: 9, fontSize: 14, color: SLATE_400, lineSpacing: 20 }
);
slide.addText("The rookie award mandate:", { x: 0.5, y: 4.5, fontSize: 14, color: RED_ACCENT, bold: true });
slide.addText(
  "Exclusively targets 1st and 2nd-year entry employees, coercing them to generate at least 36 actionable efficiency suggestions annually (~3 per month) to radically break complacent habits.",
  { x: 0.5, y: 4.8, w: 9, fontSize: 14, color: WHITE, lineSpacing: 18 }
);


// 16. Ch 6 Controlling
slide = pres.addSlide({ masterName: "DARK_THEME" });
addTitle(slide, "Algorithmic control & oversight", "Chapter 6: Controlling");
slide.addText("Financial pressures & market reality (FY24 vs FY25)", { x: 0.5, y: 1.8, fontSize: 16, color: RED_ACCENT, bold: true });
slide.addText(
  "Rigorous models reveal a volatile dual reality: massive top-line revenue growth across global markets is being brutally offset by severe margin compression. This profit tightening is fundamentally caused by capital expenditures ($13.9B NC battery campus) and soaring macro-inflation surrounding raw materials.",
  { x: 0.5, y: 2.2, w: 9, fontSize: 14, color: SLATE_400, lineSpacing: 20 }
);
let fTableRows = [
  [ { text: "Metric", options: { bold: true, color: WHITE } }, { text: "Value / Delta", options: { bold: true, color: WHITE } } ],
  [ { text: "Global sales revenue", options: { color: SLATE_400 } }, { text: "48,036B ¥ (+6.5% YoY)", options: { color: "10B981" } } ],
  [ { text: "FY2024 operating margin", options: { color: SLATE_400 } }, { text: "11.9% (Historic high benchmark)", options: { color: "10B981" } } ],
  [ { text: "FY2025 operating margin forecast", options: { color: SLATE_400 } }, { text: "10.0% (-1.9 pts, triggered CEO change)", options: { color: "F97316" } } ],
  [ { text: "Return on equity (R.O.E.)", options: { color: SLATE_400 } }, { text: "13.6% (-2.2 pts)", options: { color: "F97316" } } ]
];
slide.addTable(fTableRows, { x: 0.5, y: 3.4, colW: [4, 4], rowH: 0.4, border: { type: 'solid', pt: 1, color: "1E293B" }, fill: "0F172A", valign: "middle" });


// 17. Compliance & Environmental
slide = pres.addSlide({ masterName: "DARK_THEME" });
addTitle(slide, "Compliance & environmental control", "Chapter 6: Controlling");

slide.addText("Executive compliance architecture", { x: 0.5, y: 1.8, fontSize: 16, color: RED_ACCENT, bold: true });
slide.addText(
  "Following catastrophic crash-test certification violations (Hino, Daihatsu), Toyota instituted draconian compliance rules. The centralized GCCO wields unmitigated veto authority over factory line compliance issues, directly bypassing middle management. Regional CCOs handle EU/NA nuances.",
  { x: 0.5, y: 2.2, w: 9, fontSize: 14, color: SLATE_400, lineSpacing: 20 }
);

slide.addText("Environmental & vendor supply control", { x: 0.5, y: 3.5, fontSize: 16, color: RED_ACCENT, bold: true });
slide.addText(
  "• Global EMIS cloud infrastructure: Automatically and algorithmically assesses the chemical toxicity risks of millions of parts in real-time to avoid EU/US violations.\n• TEAM award KPI framework: Third-party suppliers are relentlessly evaluated against microscopic defect rates, minute-level precision, and multi-year cost reduction.",
  { x: 0.5, y: 3.9, w: 9, fontSize: 14, color: SLATE_400, lineSpacing: 20 }
);

pres.writeFile({ fileName: "EOM_Presentation.pptx" }).then(() => {
    console.log("created EOM_Presentation.pptx");
});
