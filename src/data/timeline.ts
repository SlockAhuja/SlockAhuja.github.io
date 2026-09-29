export interface TimelineMilestone {
  year: string;
  title: string;
  category: 'leadership' | 'publication' | 'patent' | 'research' | 'project';
  categoryLabel: string;
  description: string;
  tags: string[];
}

export const timelineData: TimelineMilestone[] = [
  {
    year: "2026",
    title: "IEEE Region 10 Ambassador & ComSoc Leadership",
    category: "leadership",
    categoryLabel: "Regional Leadership",
    description: "Selected as IEEE Region 10 Ambassador supporting outreach and professional engagement. Serving as Chairperson of IEEE ComSoc Gujarat Student Chapter.",
    tags: ["IEEE Region 10", "IEEE ComSoc", "Student Leadership"]
  },
  {
    year: "2026",
    title: "DRDO Internship & Research Exposure",
    category: "research",
    categoryLabel: "Internship & Research",
    description: "Technical and research exposure through an internship with the Defence Research and Development Organisation (DRDO).",
    tags: ["DRDO", "Research Exposure", "Engineering"]
  },
  {
    year: "2026",
    title: "6G NTN Research Accepted at IEEE ACROSET 2026",
    category: "publication",
    categoryLabel: "Research & Publication",
    description: "Authored research paper on AI-enabled resource management for NTN-integrated 6G communication systems, accepted for presentation at IEEE ACROSET 2026.",
    tags: ["6G NTN", "AI Resource Allocation", "IEEE ACROSET 2026"]
  },
  {
    year: "2026",
    title: "IIT Delhi BECON 2026 Campus Ambassador",
    category: "leadership",
    categoryLabel: "Academic Recognition",
    description: "Selected as Campus Ambassador for IIT Delhi BECON 2026, achieving Top 10% Gold Tier distinction.",
    tags: ["IIT Delhi BECON", "Gold Tier", "Outreach"]
  },
  {
    year: "2026",
    title: "Quantum AI & Scientific Machine Learning Work",
    category: "research",
    categoryLabel: "Research Work",
    description: "Conducted experiments on 8-qubit variational quantum circuits (VQC-8q-L3) on Edge-IIoTset data (98.67% accuracy) and evaluated SIREN-based PINNs for nonlinear differential equations.",
    tags: ["Quantum ML", "VQC", "PINNs", "SIREN"]
  },
  {
    year: "2026",
    title: "EnhanceX & Farmer Friend AI Systems",
    category: "project",
    categoryLabel: "Technical Work",
    description: "Engineered EnhanceX-IR-1 compact neural model for low-latency image restoration and built the Farmer Friend AI agronomic decision-support system.",
    tags: ["EnhanceX", "Computer Vision", "Agritech AI"]
  },
  {
    year: "2025",
    title: "Semiconductor VLSI Publication in INFOMATRIX",
    category: "publication",
    categoryLabel: "Publication",
    description: "Published technical analysis 'Future of VLSI Design Using Open-Source EDA Tools' in INFOMATRIX Magazine Vol. 4, examining open-source silicon toolchains.",
    tags: ["VLSI", "CMOS", "Microwind", "INFOMATRIX 2025"]
  },
  {
    year: "2025",
    title: "Patent Application: Magnetic Roller-Based Load Transfer System",
    category: "patent",
    categoryLabel: "Patent Application",
    description: "Filed patent application MU_1943 for a magnetic roller load transfer mechanism designed to optimize load distribution and reduce mechanical contact friction.",
    tags: ["Patent MU_1943", "Hardware", "Load Transfer"]
  },
  {
    year: "2025",
    title: "Hardware Engineering & Robotics Challenges",
    category: "project",
    categoryLabel: "Engineering Projects",
    description: "Assembled Smart Pot IoT closed-loop irrigation prototype, analog timing circuits, and participated in ISRO Robotics Challenge NakshatraX & Robo Fest.",
    tags: ["Smart Pot IoT", "ISRO NakshatraX", "Robo Fest", "ESP32"]
  }
];
