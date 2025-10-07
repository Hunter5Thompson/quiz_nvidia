export const topic7Questions = [
  {
    topic: 7,
    difficulty: 'easy',
    question: 'Which NVIDIA platform provides accelerated infrastructure for training and deploying AI agents?',
    options: ['NVIDIA AI Enterprise', 'GeForce NOW', 'NVIDIA Broadcast', 'CUDA Samples'],
    correct: 0,
    explanation: 'NVIDIA AI Enterprise delivers optimized infrastructure, software, and management for AI workloads.'
  },
  {
    topic: 7,
    difficulty: 'medium',
    question: 'Why is NVIDIA Triton often paired with NeMo models in production?',
    options: [
      'Triton handles streaming inference and scaling, complementing NeMo\'s model capabilities',
      'Triton replaces the need for GPUs',
      'NeMo only supports CPU inference',
      'Triton is required for local development'
    ],
    correct: 0,
    explanation:
      'Triton provides optimized inference serving, while NeMo supplies domain-adapted models—together they enable production deployments.'
  },
  {
    topic: 7,
    difficulty: 'hard',
    question: 'What advantage does NVIDIA NIM offer for enterprise agent workloads?',
    options: [
      'Pre-built, containerized microservices with consistent APIs',
      'Unlimited free public GPU time',
      'Automatic UI generation for agents',
      'Guaranteed 1ms inference latency'
    ],
    correct: 0,
    explanation:
      'NIM provides standardized, optimized microservices that simplify deployment, scaling, and lifecycle management of AI models.'
  }
];
