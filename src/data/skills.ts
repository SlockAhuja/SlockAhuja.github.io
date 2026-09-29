export interface SkillCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
  skills: {
    name: string;
    level?: 'Advanced' | 'Proficient' | 'Hands-on';
    tag?: string;
  }[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "programming",
    name: "Programming Languages",
    icon: "Code2",
    description: "Core languages utilized for algorithm implementation, systems programming, and high-performance computing.",
    skills: [
      { name: "Python", level: "Advanced", tag: "Primary" },
      { name: "C / C++", level: "Proficient", tag: "Systems" },
      { name: "MATLAB", level: "Proficient", tag: "Scientific" },
      { name: "JavaScript / TypeScript", level: "Proficient", tag: "Full-Stack" }
    ]
  },
  {
    id: "ai-ml",
    name: "AI, ML & Quantum Computing",
    icon: "Brain",
    description: "Machine learning frameworks, deep neural architectures, scientific ML, and parameterized quantum circuits.",
    skills: [
      { name: "PyTorch", level: "Advanced", tag: "Deep Learning" },
      { name: "Scikit-Learn", level: "Advanced", tag: "Classical ML" },
      { name: "Physics-Informed NNs (PINNs)", level: "Advanced", tag: "Scientific ML" },
      { name: "Quantum ML (VQC)", level: "Proficient", tag: "Quantum AI" },
      { name: "Computer Vision", level: "Proficient", tag: "Image/Video" },
      { name: "NumPy & Pandas", level: "Advanced", tag: "Data Analysis" },
      { name: "Matplotlib & Seaborn", level: "Proficient", tag: "Visualization" },
      { name: "OpenAI API", level: "Proficient", tag: "LLM Systems" }
    ]
  },
  {
    id: "ai-infrastructure",
    name: "AI Infrastructure & Acceleration",
    icon: "Layers",
    description: "High-throughput inference engines, GPU acceleration toolchains, and containerized deployment pipelines.",
    skills: [
      { name: "NVIDIA CUDA", level: "Proficient", tag: "GPU Compute" },
      { name: "TensorRT", level: "Hands-on", tag: "Inference Engine" },
      { name: "ONNX Runtime", level: "Proficient", tag: "Model Export" },
      { name: "OpenCV", level: "Advanced", tag: "Vision Ops" },
      { name: "FFmpeg", level: "Proficient", tag: "Media Pipeline" },
      { name: "Docker", level: "Proficient", tag: "Containers" },
      { name: "n8n Automation", level: "Proficient", tag: "Workflows" }
    ]
  },
  {
    id: "engineering-eda",
    name: "Engineering & EDA Tools",
    icon: "Cpu",
    description: "Electromagnetic, numerical simulation, and silicon layout electronic design automation suites.",
    skills: [
      { name: "Microwind", level: "Advanced", tag: "CMOS Layout" },
      { name: "Open-Source EDA", level: "Proficient", tag: "Silicon Design" },
      { name: "HFSS", level: "Hands-on", tag: "EM Simulation" },
      { name: "ANSYS", level: "Hands-on", tag: "Physics Sim" },
      { name: "OpenEMS", level: "Hands-on", tag: "FDTD Solver" },
      { name: "MATLAB Simulink", level: "Proficient", tag: "Systems Sim" }
    ]
  },
  {
    id: "hardware-embedded",
    name: "Hardware & Embedded Systems",
    icon: "CircuitBoard",
    description: "Cyber-physical sensor nodes, embedded micro-controllers, analog signal conditioning, and electronics prototyping.",
    skills: [
      { name: "ESP32 / NodeMCU", level: "Advanced", tag: "Microcontrollers" },
      { name: "Sensors & Signal Conditioning", level: "Advanced", tag: "Capacitive / Analog" },
      { name: "Embedded C/C++", level: "Proficient", tag: "Firmware" },
      { name: "Discrete Circuit Design", level: "Proficient", tag: "Analog/Digital" },
      { name: "Robotics Hardware", level: "Proficient", tag: "Actuators/Power" }
    ]
  },
  {
    id: "web-software",
    name: "Web & API Development",
    icon: "Globe",
    description: "Modern modular frontend and high-throughput backend APIs for interactive research tools and data visualization.",
    skills: [
      { name: "React", level: "Advanced", tag: "Frontend" },
      { name: "FastAPI", level: "Advanced", tag: "Async API" },
      { name: "Vite", level: "Advanced", tag: "Build Tool" },
      { name: "Tailwind CSS", level: "Advanced", tag: "Styling" },
      { name: "Next.js", level: "Proficient", tag: "Full-Stack" },
      { name: "Node.js", level: "Proficient", tag: "Backend" },
      { name: "Flask", level: "Proficient", tag: "Microservices" }
    ]
  },
  {
    id: "research-methods",
    name: "Scientific Research & Validation",
    icon: "GraduationCap",
    description: "Formal academic dissemination, numerical analysis, experimental design, and mathematical derivation.",
    skills: [
      { name: "LaTeX", level: "Advanced", tag: "Academic Typesetting" },
      { name: "Numerical PDEs & DQM", level: "Advanced", tag: "Differential Eq" },
      { name: "Scientific Computing", level: "Advanced", tag: "Algorithm Rigor" },
      { name: "Experimental Validation", level: "Advanced", tag: "Statistical Auditing" },
      { name: "Data Analysis", level: "Advanced", tag: "Error Norms" }
    ]
  }
];
