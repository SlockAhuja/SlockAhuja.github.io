export type ProjectCategory = 'all' | 'research' | 'ai' | 'hardware' | 'iot' | 'communications' | 'quantum' | 'vlsi' | 'scientific-computing';

export interface ProjectItem {
  id: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  typeLabel: string;
  status: 'published' | 'accepted' | 'submitted' | 'under_review' | 'research_work';
  statusDisplay?: string;
  summary: string;
  description: string;
  demoUrl?: string;
  githubUrl?: string;
  technologies: string[];
  specs?: { label: string; value: string }[];
  architectureSteps?: { step: string; detail: string }[];
  stats?: { label: string; value: string }[];
  featured?: boolean;
}

export const projectsData: ProjectItem[] = [
  {
    id: "6g-ntn-resource-management",
    title: "AI-Enabled Resource Management for NTN Integrated 6G Communication Systems",
    category: "communications",
    categoryLabel: "Communications & 6G",
    typeLabel: "Research Work",
    status: "accepted",
    statusDisplay: "Accepted — IEEE ACROSET 2026",
    summary: "AI-enabled resource management framework for Non-Terrestrial Network (NTN) integrated 6G communication systems.",
    description: "Formulates intelligent multi-dimensional resource scheduling across high-mobility LEO satellite constellations and terrestrial 6G base stations to optimize bandwidth distribution, mitigate Doppler shifts, and minimize latency.",
    demoUrl: "https://slockahuja.github.io/AI_Based_resource_management/",
    technologies: ["AI", "6G", "NTN", "Wireless Communications", "Resource Management", "Python"],
    specs: [
      { label: "Architecture", value: "6G NTN Integrated Network" },
      { label: "Focus", value: "Dynamic Power & Bandwidth Scheduling" },
      { label: "Demonstration", value: "Interactive Web Simulation Deployed" }
    ],
    featured: true
  },
  {
    id: "exponential-bspline-dqm",
    title: "Exponential Cubic B-Spline DQM for Multidimensional PDEs",
    category: "scientific-computing",
    categoryLabel: "Scientific Computing",
    typeLabel: "Research Work",
    status: "research_work",
    statusDisplay: "Research Work",
    summary: "Numerical investigation of multidimensional convection-diffusion equations using exponential cubic B-splines, differential quadrature methods and SSP-RK54 time integration.",
    description: "Investigates exponential cubic B-spline weighting parameters inside a differential quadrature formulation to suppress non-physical oscillations in boundary layers of stiff convection-diffusion equations, solved in time with Strong Stability Preserving Runge-Kutta (SSP-RK54).",
    technologies: ["Exponential Cubic B-Spline", "Differential Quadrature Method", "SSP-RK54", "2D PDE", "3D PDE", "Adaptive p-method", "Error Analysis"],
    specs: [
      { label: "Spatial Method", value: "Exponential Cubic B-Spline DQM" },
      { label: "Time-Stepping", value: "SSP-RK54 (5-Stage, 4th Order)" },
      { label: "Validation", value: "2D & 3D Convection-Diffusion Error Norms" }
    ],
    featured: true
  },
  {
    id: "pinn-fisher-siren",
    title: "Physics-Informed Neural Networks for Nonlinear Reaction-Diffusion",
    category: "ai",
    categoryLabel: "Physics-Informed AI",
    typeLabel: "Research Work",
    status: "research_work",
    statusDisplay: "Research Work",
    summary: "Research and experimentation involving physics-informed neural networks for differential equations and scientific machine learning.",
    description: "Evaluates Sinusoidal Representation Networks (SIREN) and GPU-accelerated automatic differentiation for solving nonlinear reaction-diffusion equations (Fisher PDE) without traditional mesh discretization.",
    technologies: ["PINNs", "SIREN", "Numerical PDEs", "GPU Acceleration", "Scientific Machine Learning", "PyTorch"],
    specs: [
      { label: "Model Basis", value: "Sinusoidal Representation Network (SIREN)" },
      { label: "Target PDE", value: "Nonlinear Fisher Reaction-Diffusion" },
      { label: "Optimization", value: "GPU Autograd Residual Minimization" }
    ],
    featured: true
  },
  {
    id: "quantum-ai-blockchain-security",
    title: "Quantum AI & Smart-City Security Framework",
    category: "quantum",
    categoryLabel: "Quantum AI",
    typeLabel: "Technical & Research Work",
    status: "research_work",
    statusDisplay: "Empirical Framework",
    summary: "A framework integrating Variational Quantum Circuits (VQC) with a blockchain ledger for adaptive trust scoring and anomaly mitigation in smart city IoT systems.",
    description: "Evaluates 8-qubit variational quantum classifiers on Edge-IIoTset telemetry, feeding threat probabilities into a dynamic blockchain trust scoring layer to enforce adaptive policy decisions across four discrete states.",
    technologies: ["Quantum Machine Learning", "Variational Quantum Circuits", "Edge-IIoTset", "Blockchain Trust Layer", "IoT Security"],
    architectureSteps: [
      { step: "IoT Data", detail: "Telemetry and flow features generated from connected smart devices." },
      { step: "Quantum AI", detail: "VQC-8q-L3 model with 3 variational layers & 49 trainable weights." },
      { step: "Threat Probability", detail: "Pauli-Z expectation measurements yielding anomaly estimates." },
      { step: "Blockchain Trust Layer", detail: "Decentralized consensus ledger tracking device reputation." },
      { step: "Dynamic Trust Score", detail: "Continuous mathematical trust score adjustment algorithm." },
      { step: "Adaptive Decision", detail: "Policy enforcement: ALLOW, MONITOR, ISOLATE, or REVOKE." }
    ],
    stats: [
      { label: "Qubits & Layers", value: "8 Qubits • 3 Layers" },
      { label: "Parameters", value: "49 Trainable Weights" },
      { label: "Test Accuracy", value: "98.67% (1,480 / 1,500)" },
      { label: "PCA Retention", value: "92.11% (8 Components)" }
    ],
    featured: true
  },
  {
    id: "enhancex-ai-library",
    title: "EnhanceX: AI Video & Image Enhancement Library",
    category: "ai",
    categoryLabel: "Computer Vision",
    typeLabel: "Software Project",
    status: "research_work",
    statusDisplay: "Software Project",
    summary: "A software project exploring AI-based video and image enhancement techniques including stabilization, super-resolution, denoising and frame interpolation.",
    description: "An open-source computer vision codebase exploring lightweight neural restoration backbones. Features the custom EnhanceX-IR-1 model designed for low-latency visual enhancement.",
    technologies: ["C++", "CUDA", "Python", "ONNX", "TensorRT", "OpenCV", "PyTorch"],
    specs: [
      { label: "Model Architecture", value: "EnhanceX-IR-1 (proposed_compact_naf_v0)" },
      { label: "Channel Width", value: "32 Channels" },
      { label: "NAF-style Blocks", value: "4 Blocks" },
      { label: "Parameters", value: "17,379 Parameters" },
      { label: "Model Size", value: "~0.0673 MB" }
    ],
    featured: true
  },
  {
    id: "farmer-friend-ai",
    title: "Farmer Friend AI: Decision-Support Agriculture System",
    category: "ai",
    categoryLabel: "Applied AI & Agritech",
    typeLabel: "Technical Project",
    status: "research_work",
    statusDisplay: "Experiment Results",
    summary: "An AI-assisted agricultural decision-support concept combining structured agricultural data, deterministic rules, machine learning and natural-language explanations.",
    description: "Synthesizes agronomic sensor data (soil pH, moisture, temperature, rainfall) with Random Forest models to provide crop recommendations and yield estimations.",
    technologies: ["Python", "Pandas", "NumPy", "Scikit-Learn", "Random Forest", "FastAPI", "React", "ESP32 / NodeMCU"],
    stats: [
      { label: "Augmented Dataset", value: "10,010 Samples" },
      { label: "Crop Rec Accuracy", value: "98.79%" },
      { label: "Yield Model Fit", value: "0.9973 R²" }
    ],
    specs: [
      { label: "Dataset Fields", value: "Farm ID, Soil pH, Moisture, Temp, Rainfall, Crop, Fertilizer, Pesticide, Yield, Sustainability" }
    ],
    featured: true
  },
  {
    id: "open-source-eda-cmos-vlsi",
    title: "Semiconductor & VLSI Design with Open-Source EDA",
    category: "vlsi",
    categoryLabel: "Semiconductor & VLSI",
    typeLabel: "Technical & Publication Work",
    status: "published",
    statusDisplay: "Published in INFOMATRIX 2025",
    summary: "Design and verification of CMOS logic cells, SR latches, and NAND circuits using Microwind and open-source EDA toolchains.",
    description: "Explores physical layout synthesis and verification for fundamental CMOS logic cells, investigating how open-source EDA workflows facilitate semiconductor education.",
    technologies: ["CMOS Design", "VLSI", "Microwind", "Open-source EDA", "Digital Circuits", "CMOS Logic", "SR Latch"],
    specs: [
      { label: "Publication", value: "INFOMATRIX Magazine 2025, Vol. 4" },
      { label: "Circuits", value: "Inverter Chains, SR Latches, NAND Logic" }
    ],
    featured: true
  },
  {
    id: "smart-pot-iot",
    title: "Smart Pot IoT Automated Closed-Loop Irrigation",
    category: "iot",
    categoryLabel: "IoT & Embedded",
    typeLabel: "Hardware Project",
    status: "research_work",
    statusDisplay: "Hardware Prototype",
    summary: "Automated plant irrigation system utilizing ESP32/NodeMCU, capacitive soil moisture sensing, and pump control.",
    description: "Microcontroller hardware prototype monitoring soil moisture via corrosion-resistant capacitive probes and driving automated DC water pumps with threshold hysteresis.",
    technologies: ["ESP32", "NodeMCU", "Capacitive Moisture Sensor", "Water Pump", "Automated Irrigation", "C++ / Arduino"]
  },
  {
    id: "magnetic-roller-load-transfer",
    title: "Magnetic Roller-Based Load Transfer System",
    category: "hardware",
    categoryLabel: "Mechanical & Physical",
    typeLabel: "Patent Application",
    status: "research_work",
    statusDisplay: "Patent Ref: MU_1943 (2025)",
    summary: "Engineered load-bearing mechanism utilizing magnetic roller elements to optimize load distribution and reduce mechanical contact wear.",
    description: "Hardware engineering project formulating a magnetic roller load transfer apparatus for multi-axial load stabilization.",
    technologies: ["Load Distribution", "Magnetic Roller Mechanism", "Kinematic Design", "Mechanical Engineering"],
    specs: [
      { label: "Application Ref", value: "MU_1943" },
      { label: "Year", value: "2025" }
    ],
    featured: true
  },
  {
    id: "soil-analysis-drone-concept",
    title: "Drone-Based Soil Analysis System Concept",
    category: "iot",
    categoryLabel: "Sensory Concept",
    typeLabel: "Technical Concept",
    status: "research_work",
    statusDisplay: "Engineering Concept",
    summary: "Drone + signal-based soil analysis concept for remote agricultural soil moisture and composition evaluation.",
    description: "Conceptual aerial remote sensing framework combining RF signal reflection analysis and multi-spectral telemetry for rapid farmland scanning.",
    technologies: ["Remote Sensing", "RF Signal Analysis", "Drone Payload Concept", "Agritech Telemetry"]
  },
  {
    id: "handheld-soil-scanner",
    title: "Handheld Soil Scanner Concept",
    category: "iot",
    categoryLabel: "Portable Instrumentation",
    typeLabel: "Technical Concept",
    status: "research_work",
    statusDisplay: "Design Concept",
    summary: "Concept for portable agricultural soil analysis and parameter measurement in the field.",
    description: "Conceptual ergonomic field tool integrating multiparameter soil probes with an on-board display and wireless diagnostic synchronization.",
    technologies: ["Multiparameter Sensing", "OLED Display", "Field Instrumentation", "BLE Communication"]
  },
  {
    id: "pedometer-circuit",
    title: "Discrete Pedometer Pulse Timing Circuit",
    category: "hardware",
    categoryLabel: "Hardware Electronics",
    typeLabel: "Hardware Project",
    status: "research_work",
    statusDisplay: "Electronics Project",
    summary: "Hardware electronics step-counting pulse generation circuit with discrete analog conditioning.",
    description: "Designed a discrete circuit capturing human gait impulses, filtering raw analog spikes through Schmitt triggers into clean digital pulses.",
    technologies: ["Analog Signal Conditioning", "Schmitt Trigger", "Digital Counters", "Circuit Prototyping"]
  },
  {
    id: "mosquito-repellent-circuit",
    title: "Electronic Acoustic Frequency Generator",
    category: "hardware",
    categoryLabel: "Hardware Electronics",
    typeLabel: "Hardware Project",
    status: "research_work",
    statusDisplay: "Electronics Project",
    summary: "Acoustic frequency oscillator circuit generating targeted ultrasonic repellent bands.",
    description: "Discrete 555-timer astable multi-vibrator circuit tuned to ultrasonic output frequencies through piezoelectric transducers.",
    technologies: ["555 Timer", "Acoustic Oscillator", "Piezoelectric Transducer", "PCB Prototyping"]
  }
];
