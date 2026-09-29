export interface ResearchArea {
  id: string;
  title: string;
  category: string;
  icon: string;
  badge?: string;
  description: string;
  topics: string[];
}

export interface QuantumResultsData {
  architecture: string;
  qubits: number;
  layers: number;
  parameters: number;
  dataset: string;
  pcaComponents: number;
  varianceRetained: string;
  testAccuracy: string;
  correctClassifications: string;
  totalSamples: number;
  correctCount: number;
  features: string[];
}

export const researchAreas: ResearchArea[] = [
  {
    id: "ai-ml",
    title: "Artificial Intelligence",
    category: "AI & ML",
    icon: "Brain",
    description: "Machine learning, deep learning, intelligent decision systems and computer vision.",
    topics: ["Machine Learning", "Deep Neural Networks", "Computer Vision", "Decision Support Systems"]
  },
  {
    id: "quantum-ai",
    title: "Quantum AI",
    category: "Quantum",
    icon: "Atom",
    description: "Variational quantum circuits and quantum machine learning.",
    topics: ["Variational Quantum Circuits (VQC)", "Quantum ML", "Quantum-Classical Hybrid Methods"]
  },
  {
    id: "communications",
    title: "Communications",
    category: "Wireless Systems",
    icon: "Radio",
    description: "6G, NTN and intelligent wireless communication systems.",
    topics: ["6G Wireless Systems", "Non-Terrestrial Networks (NTN)", "Resource Management"]
  },
  {
    id: "scientific-computing",
    title: "Scientific Computing",
    category: "Numerical Methods",
    icon: "Binary",
    description: "Numerical methods, PDEs and computational mathematics.",
    topics: ["Differential Quadrature Methods (DQM)", "Exponential B-Splines", "SSP-RK54 Integration"]
  },
  {
    id: "physics-informed-ai",
    title: "Physics-Informed AI",
    category: "Scientific ML",
    icon: "Sigma",
    description: "Physics-informed neural networks and scientific machine learning.",
    topics: ["Physics-Informed Neural Networks (PINNs)", "SIREN Networks", "Differential Equation Solvers"]
  },
  {
    id: "semiconductor-vlsi",
    title: "Semiconductor & VLSI",
    category: "Hardware / Silicon",
    icon: "Cpu",
    description: "CMOS design, VLSI systems and open-source EDA.",
    topics: ["CMOS Logic Design", "Microwind", "Open-Source EDA Workflows", "Sequential Logic Cells"]
  },
  {
    id: "iot-smart-systems",
    title: "IoT & Smart Systems",
    category: "Connected Systems",
    icon: "Wifi",
    description: "Intelligent sensing, agriculture and connected systems.",
    topics: ["IoT Telemetry", "Agritech Sensors", "Edge Decision Logic"]
  },
  {
    id: "hardware-electronics",
    title: "Hardware",
    category: "Embedded & Physical",
    icon: "Layers",
    description: "Embedded systems, sensors and hardware-software integration.",
    topics: ["ESP32 / NodeMCU", "Sensor Signal Conditioning", "Mechanical & Load Systems"]
  }
];

export const quantumResultsData: QuantumResultsData = {
  architecture: "VQC-8q-L3 (Variational Quantum Circuit)",
  qubits: 8,
  layers: 3,
  parameters: 49,
  dataset: "Edge-IIoTset Flow Features",
  pcaComponents: 8,
  varianceRetained: "92.11%",
  testAccuracy: "98.67%",
  correctClassifications: "1,480 / 1,500",
  totalSamples: 1500,
  correctCount: 1480,
  features: [
    "24 Edge-IIoTset statistical flow features",
    "PCA reduction to 8 orthogonal components (92.11% variance)",
    "Angle-embedding layer into 8-qubit register",
    "3 strongly entangling variational layers (49 trainable parameters)",
    "Pauli-Z expectation measurements"
  ]
};
