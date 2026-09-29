export interface PublicationItem {
  id: string;
  title: string;
  venue: string;
  year: string;
  type: string;
  status: 'published' | 'accepted' | 'submitted' | 'under_review' | 'research_work';
  abstract: string;
  topics: string[];
  demoUrl?: string;
  pdfUrl?: string;
  doiUrl?: string;
  bibtex?: string;
}

export const publicationsData: PublicationItem[] = [
  {
    id: "pub-6g-ntn-acroset-2026",
    title: "AI-Enabled Resource Management for NTN Integrated 6G Communication Systems",
    venue: "Accepted at IEEE ACROSET 2026",
    year: "2026",
    type: "Conference Paper (Accepted)",
    status: "accepted",
    abstract: "Presents an AI-driven framework for multi-dimensional resource allocation in Non-Terrestrial Network (NTN) integrated 6G cellular architectures. Formulates channel-predictive scheduling algorithms to optimize bandwidth distribution, satellite handovers, and minimize latency across heterogeneous terrestrial and orbital links.",
    topics: [
      "6G Wireless Systems",
      "Non-Terrestrial Networks (NTN)",
      "AI Resource Management",
      "Wireless Communications"
    ],
    demoUrl: "https://slockahuja.github.io/AI_Based_resource_management/",
    bibtex: `@inproceedings{ahuja2026ntn,
  title={AI-Enabled Resource Management for NTN Integrated 6G Communication Systems},
  author={Ahuja, Slock},
  booktitle={IEEE International Conference on Advanced Communications, Robotics, and Smart Engineering Technologies (ACROSET 2026)},
  year={2026},
  note={Accepted}
}`
  },
  {
    id: "pub-vlsi-infomatrix-2025",
    title: "Future of VLSI Design Using Open-Source EDA Tools",
    venue: "INFOMATRIX Magazine 2025, Volume 4",
    year: "2025",
    type: "Magazine Article",
    status: "published",
    abstract: "Examines the shifting paradigm in semiconductor education and integrated circuit prototyping catalyzed by open-source Electronic Design Automation (EDA) toolchains. Explores physical layout verification, CMOS logic cell design, and methodologies for bridging academia and semiconductor industry workflows.",
    topics: [
      "CMOS Physical Layout",
      "Open-Source EDA",
      "VLSI Design",
      "Microwind"
    ],
    bibtex: `@article{ahuja2025vlsi,
  title={Future of VLSI Design Using Open-Source EDA Tools},
  author={Ahuja, Slock},
  journal={INFOMATRIX Magazine},
  volume={4},
  year={2025}
}`
  },
  {
    id: "pub-pinn-fisher-siren",
    title: "Physics-Informed Neural Network Solution of the Nonlinear Fisher Reaction-Diffusion Equation: An Audited High-Precision SIREN Framework",
    venue: "Scientific Machine Learning",
    year: "2026",
    type: "Research Work",
    status: "research_work",
    abstract: "Investigates the numerical solution of the nonlinear Fisher reaction-diffusion PDE using Sinusoidal Representation Networks (SIREN) embedded in a Physics-Informed Neural Network framework. Benchmarks gradient residual convergence against high-order differential quadrature schemes under steep traveling wave regimes.",
    topics: [
      "Physics-Informed Neural Networks",
      "Nonlinear Differential Equations",
      "SIREN",
      "Scientific Machine Learning"
    ],
    bibtex: `@article{ahuja2026pinn,
  title={Physics-Informed Neural Network Solution of the Nonlinear Fisher Reaction-Diffusion Equation: An Audited High-Precision SIREN Framework},
  author={Ahuja, Slock},
  year={2026}
}`
  }
];
