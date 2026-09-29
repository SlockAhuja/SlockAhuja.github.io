export interface PatentItem {
  id: string;
  title: string;
  applicationNumber: string;
  year: string;
  status: string;
  field: string;
  summary: string;
  keyFeatures: string[];
}

export const patentsData: PatentItem[] = [
  {
    id: "patent-mu-1943",
    title: "Magnetic Roller-Based Load Transfer System",
    applicationNumber: "MU_1943",
    year: "2025",
    status: "Patent / Application Filed",
    field: "Mechanical, Magnetic & Load Transfer Systems",
    summary: "An engineered load-bearing apparatus utilizing strategically arranged magnetic roller components to optimize directional load distribution, reduce mechanical friction wear, and provide dynamic structural stability under heavy variable payloads.",
    keyFeatures: [
      "Strategic magnetic roller array minimizing mechanical surface contact friction",
      "Dynamic load stabilization across multi-axial weight shifts",
      "Robust physical engineering designed for continuous industrial load transfer"
    ]
  }
];
