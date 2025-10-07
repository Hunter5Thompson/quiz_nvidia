export const topic1Questions = [
  {
    topic: 1,
    difficulty: 'easy',
    question: 'What is the primary goal of agent architecture design in the NVIDIA Agentic AI stack?',
    options: [
      'Maximizing GPU utilization regardless of task outcomes',
      'Aligning agent capabilities with target use cases and constraints',
      'Focusing solely on LLM prompt engineering',
      'Avoiding modular components to reduce latency'
    ],
    correct: 1,
    explanation:
      'Effective architecture design ensures the agent\'s capabilities map to business goals, compliance constraints, and the surrounding system interfaces.'
  },
  {
    topic: 1,
    difficulty: 'medium',
    question: 'Which architectural pattern best supports multi-modal perception and reasoning for robotics workloads?',
    options: [
      'Single monolithic LLM agent',
      'Perception-planning-control pipeline with shared memory',
      'Prompt-chained question answering agent',
      'Hard-coded finite state machine'
    ],
    correct: 1,
    explanation:
      'Robotics workloads typically use a perception-planning-control pipeline with a shared memory bus to coordinate sensor fusion and actuation decisions.'
  },
  {
    topic: 1,
    difficulty: 'hard',
    question: 'When designing a resilient agent architecture, which mechanism most effectively mitigates hallucination propagation across agent teams?',
    options: [
      'Disabling autonomous tool calls',
      'Hierarchical validation agents with structured feedback loops',
      'Relying on deterministic temperature=0 generation',
      'Increasing context window size beyond 200k tokens'
    ],
    correct: 1,
    explanation:
      'Validation agents that run structured evaluation pipelines can intercept and correct erroneous outputs before they cascade downstream.'
  }
];
