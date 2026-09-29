export interface ExploringTopic {
  title: string;
  category: string;
  description: string;
  status: string;
}

export const exploringTopics: ExploringTopic[] = [
  {
    title: "AI + Hardware Co-Design",
    category: "Silicon & AI",
    description: "Designing silicon-aware neural networks and lightweight edge acceleration architectures tailored for constrained physical platforms.",
    status: "Active Research"
  },
  {
    title: "Semiconductor Engineering & Open EDA",
    category: "Semiconductors",
    description: "Deepening CMOS circuit layout, standard cell design, and contributing to open-source silicon verification ecosystems.",
    status: "Prototyping"
  },
  {
    title: "Quantum AI & Variational Circuits",
    category: "Quantum",
    description: "Scaling parameterized quantum circuits and exploring quantum error mitigation in hybrid NISQ algorithms.",
    status: "Benchmarking"
  },
  {
    title: "Scientific Machine Learning (PINNs)",
    category: "Numerical AI",
    description: "Auditing multi-physics PINNs and neural operators for high-dimensional nonlinear fluid dynamics and reaction-diffusion systems.",
    status: "Validation"
  },
  {
    title: "6G & NTN Communication Systems",
    category: "Next-Gen Networks",
    description: "Simulating high-density satellite constellation handovers and AI-driven dynamic spectrum access.",
    status: "Conference Paper Accepted"
  },
  {
    title: "GPU Computing & Model Quantization",
    category: "HPC",
    description: "Developing custom CUDA kernels and TensorRT pipelines for sub-millisecond edge video restoration.",
    status: "Library Engineering"
  }
];

export const futureVisionText = {
  theme: "Building intelligent systems where AI, hardware, communications, and scientific computing converge.",
  pillars: [
    {
      title: "Semiconductor & AI Hardware",
      description: "Pioneering custom silicon-efficient AI accelerators, standard cell CMOS methodologies, and open-source EDA ecosystems."
    },
    {
      title: "Intelligent Wireless Networks",
      description: "Architecting autonomous, self-healing 6G Non-Terrestrial Networks integrating orbital satellites with ultra-low latency terrestrial grids."
    },
    {
      title: "Scientific AI & Quantum Computing",
      description: "Uniting mathematical rigor, physics-informed neural solvers, and quantum machine learning to simulate complex physical systems."
    },
    {
      title: "Cyber-Physical Robotics & IoT",
      description: "Deploying resilient edge sensor networks and autonomous robotic systems capable of real-time field perception and decision-making."
    }
  ]
};
