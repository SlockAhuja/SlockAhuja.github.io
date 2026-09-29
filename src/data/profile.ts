export interface ProfileData {
  name: string;
  shortName: string;
  monogram: string;
  tagline: string;
  headline: string;
  subtitle: string;
  supportingText: string;
  institution: string;
  location: string;
  degree: string;
  expectedGraduation: string;
  currentSemester: string;
  currentCGPA?: string;
  philosophy: string;
  interests: string[];
  socials: {
    github?: string;
    email?: string;
    linkedin?: string;
    googleScholar?: string;
    orcid?: string;
    researchGate?: string;
  };
  environment: {
    gpu: string;
    os: string;
    subsystem: string;
    tools: string[];
  };
  principles: {
    title: string;
    tagline: string;
    description: string;
    icon: string;
  }[];
}

export const profileData: ProfileData = {
  name: "Slock Ahuja",
  shortName: "Slock",
  monogram: "SA",
  tagline: "ICT Engineering • Research • Technology",
  headline: "ICT Engineering Student • Researcher • Developer",
  subtitle: "Information and Communication Technology Engineering Student",
  supportingText: "Exploring intelligent systems across artificial intelligence, communications, hardware, scientific computing, IoT, and emerging technologies.",
  institution: "Marwadi University, Rajkot, Gujarat, India",
  location: "Rajkot, Gujarat, India",
  degree: "B.Tech in Information and Communication Technology (ICT)",
  expectedGraduation: "2028",
  currentSemester: "5th Semester",
  philosophy: "Building conceptual understanding from mathematical principles and physical constraints before engineering hardware and software implementations.",
  interests: [
    "Artificial Intelligence",
    "Machine Learning",
    "Deep Learning",
    "Quantum AI",
    "IoT & Smart Systems",
    "Embedded Systems",
    "Semiconductor / VLSI",
    "Hardware Design",
    "Wireless Communications",
    "6G / NTN",
    "Scientific Computing",
    "Numerical Methods",
    "Physics-Informed AI",
    "Computer Vision",
    "Automation",
    "Open-Source EDA"
  ],
  socials: {
    github: "https://github.com/SlockAhuja",
    email: "mailto:ahujaslock321@gmail.com"
  },
  environment: {
    gpu: "NVIDIA RTX A400 GPU",
    os: "Ubuntu Linux & Windows",
    subsystem: "WSL2 (Windows Subsystem for Linux)",
    tools: [
      "NVIDIA CUDA",
      "PyTorch",
      "Docker",
      "FFmpeg",
      "OpenCV",
      "Git & GitHub",
      "Microwind & Open-source EDA",
      "MATLAB"
    ]
  },
  principles: [
    {
      title: "Understand",
      tagline: "First-Principles",
      description: "Build conceptual understanding before implementation. Derive underlying equations and understand physical hardware constraints.",
      icon: "BookOpen"
    },
    {
      title: "Build",
      tagline: "Implementation",
      description: "Convert concepts into working technical systems across silicon layouts, firmware, and software architectures.",
      icon: "Cpu"
    },
    {
      title: "Validate",
      tagline: "Empirical Rigor",
      description: "Measure, test and reproduce results with systematic benchmarking, error metrics, and audited validation.",
      icon: "Activity"
    },
    {
      title: "Document",
      tagline: "Clarity & Sharing",
      description: "Record methodology, results, codebases, and limitations clearly for academic and technical peer review.",
      icon: "FileText"
    }
  ]
};
