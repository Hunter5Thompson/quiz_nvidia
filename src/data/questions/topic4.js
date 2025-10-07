export const topic4Questions = [
  {
    topic: 4,
    difficulty: 'easy',
    question: 'Which NVIDIA service simplifies deploying conversational agents at scale?',
    options: ['NVIDIA Triton Inference Server', 'CUDA Toolkit', 'JetPack SDK', 'Nsight Compute'],
    correct: 0,
    explanation:
      'Triton Inference Server handles scalable deployment, versioning, and GPU optimization for AI models including agents.'
  },
  {
    topic: 4,
    difficulty: 'medium',
    question: 'What deployment strategy helps reduce downtime when updating agent models?',
    options: [
      'Manual server restarts',
      'Blue-green deployments with traffic shifting',
      'Deleting previous model versions',
      'Relying on a single availability zone'
    ],
    correct: 1,
    explanation:
      'Blue-green deployments let teams gradually shift traffic to a new version while maintaining a fallback path.'
  },
  {
    topic: 4,
    difficulty: 'hard',
    question: 'Which scaling concern is most critical for streaming multi-turn agent conversations?',
    options: [
      'GPU fan speed',
      'Autoscaling websocket gateways and state stores',
      'Disabling TLS termination',
      'Blocking retries to enforce quotas'
    ],
    correct: 1,
    explanation:
      'Streaming conversations rely on elastic gateways and shared memory/state services to maintain responsiveness under load.'
  }
];
