export const topic5Questions = [
  {
    topic: 5,
    difficulty: 'easy',
    question: 'What component stores an agent\'s long-term knowledge for future tasks?',
    options: ['Prompt prefix', 'Vector database memory', 'GPU cache', 'HTTP cookie'],
    correct: 1,
    explanation: 'Vector memories allow agents to persist and retrieve long-term knowledge embeddings across sessions.'
  },
  {
    topic: 5,
    difficulty: 'medium',
    question: 'Which planning technique enables agents to decompose complex objectives into manageable steps?',
    options: ['Temperature sampling', 'Task graph planning', 'Token pruning', 'Beam search'],
    correct: 1,
    explanation:
      'Task graphs or DAG-based planners help agents break down goals, assign dependencies, and monitor progress systematically.'
  },
  {
    topic: 5,
    difficulty: 'hard',
    question: 'Why is hybrid memory (short-term scratchpad plus long-term store) valuable for enterprise agents?',
    options: [
      'It reduces GPU driver requirements',
      'It balances immediate reasoning context with durable organizational knowledge',
      'It eliminates the need for access controls',
      'It guarantees sub-millisecond latency'
    ],
    correct: 1,
    explanation:
      'Hybrid memory keeps short-term reasoning concise while preserving high-value context, improving accuracy and compliance.'
  }
];
