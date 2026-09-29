export type AchievementCategory = 'leadership' | 'ieee' | 'recognition' | 'internship' | 'competition';

export interface AchievementItem {
  id: string;
  categories: AchievementCategory[];
  title: string;
  organization: string;
  year?: string;
  badge?: string;
  tier?: string;
  description: string;
  details?: string[];
  featured?: boolean;
}

export const achievementsData: AchievementItem[] = [
  {
    id: "ieee-region-10-ambassador",
    categories: ["leadership", "ieee"],
    title: "IEEE Region 10 Ambassador",
    organization: "IEEE Region 10",
    year: "2026",
    badge: "Regional Leadership",
    featured: true,
    description: "Selected as an Ambassador associated with IEEE Region 10, supporting IEEE outreach, student engagement, professional awareness, and communication of opportunities within the IEEE community."
  },
  {
    id: "ieee-comsoc-chair",
    categories: ["leadership", "ieee"],
    title: "Chairperson",
    organization: "IEEE ComSoc Gujarat Student Chapter",
    year: "2026",
    badge: "Elected Leadership",
    featured: true,
    description: "Serving as Chairperson of the IEEE Communications Society Gujarat Student Chapter, supporting student engagement, technical activities, research discussions, communications engineering initiatives, and professional development.",
    details: [
      "Organizing and supporting IEEE technical activities and expert sessions",
      "Encouraging student participation in communications and wireless engineering",
      "Supporting research-oriented discussions and technical learning",
      "Mentoring and engaging students in engineering and research activities"
    ]
  },
  {
    id: "ieee-comsoc-member",
    categories: ["ieee"],
    title: "Student Member",
    organization: "IEEE Communications Society (ComSoc)",
    year: "2026",
    badge: "Professional Society",
    description: "Student member of IEEE Communications Society with interests spanning communications engineering, wireless systems, 6G, Non-Terrestrial Networks, and emerging communication technologies."
  },
  {
    id: "drdo-internship",
    categories: ["internship"],
    title: "Internship — DRDO",
    organization: "Defence Research and Development Organisation (DRDO)",
    badge: "Internship & Research Exposure",
    description: "Technical and research exposure through an internship with the Defence Research and Development Organisation."
  },
  {
    id: "iit-delhi-becon",
    categories: ["leadership", "recognition"],
    title: "Campus Ambassador — BECON 2026",
    organization: "IIT Delhi",
    year: "2026",
    tier: "Top 10% — Gold Tier",
    badge: "Campus Ambassador",
    description: "Selected as a Campus Ambassador for IIT Delhi's Business and Entrepreneurship Conclave (BECON 2026)."
  },
  {
    id: "edc-lor",
    categories: ["recognition"],
    title: "Letter of Recommendation",
    organization: "Entrepreneurship Development Cell (EDC)",
    year: "2025–2026",
    badge: "Official Commendation",
    description: "Received a Letter of Recommendation from the Entrepreneurship Development Cell in recognition of contributions to student technical, innovation, and entrepreneurial activities."
  },
  {
    id: "isro-robotics-challenge",
    categories: ["competition"],
    title: "ISRO Robotics Challenge — NakshatraX",
    organization: "ISRO / National Robotics Platform",
    year: "2025–2026",
    badge: "Competition Participation",
    description: "Technical competition involving robotics, autonomous systems, rover navigation, and engineering problem solving."
  },
  {
    id: "robo-fest",
    categories: ["competition"],
    title: "Robo Fest",
    organization: "Technical Robotics Competition",
    year: "2025",
    badge: "Competition Participation",
    description: "Participation involving robotics, sensor-actuator systems, microcontrollers, navigation, and hardware engineering."
  },
  {
    id: "tata-imagination-challenge",
    categories: ["competition"],
    title: "Tata Imagination Challenge",
    organization: "Tata Group",
    year: "2025",
    badge: "Competition Participation",
    description: "Participated in a multidisciplinary innovation and problem-solving challenge focused on developing solutions to real-world technological and societal challenges."
  },
  {
    id: "startup-innovation-4",
    categories: ["competition"],
    title: "Startup & Innovation 4.0",
    organization: "Innovation & Entrepreneurship Competition",
    year: "2025–2026",
    badge: "Competition Participation",
    description: "Participation involving innovation, entrepreneurship, technical problem solving, and technology-driven ideas."
  }
];
