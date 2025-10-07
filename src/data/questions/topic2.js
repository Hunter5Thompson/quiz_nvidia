export const topic2Questions = [
  {
    topic: 2,
    difficulty: 'easy',
    question: 'Which SDK is commonly used to build tool-enabled agents on NVIDIA platforms?',
    options: ['React Native', 'NVIDIA NeMo Guardrails', 'TensorFlow Lite', 'Electron'],
    correct: 1,
    explanation:
      'NeMo Guardrails provides policy enforcement, tool calling, and workflow controls tailored to NVIDIA\'s agent ecosystem.'
  },
  {
    topic: 2,
    difficulty: 'medium',
    question: 'What is a recommended practice when orchestrating multiple tools within an agent?',
    options: [
      'Calling tools sequentially without context',
      'Using a planner agent to manage tool invocation and state',
      'Hard-coding API calls into the LLM prompt',
      'Avoiding retries to limit cost'
    ],
    correct: 1,
    explanation:
      'Planner agents keep track of objectives, intermediate results, and tool availability, improving reliability and traceability.'
  },
  {
    topic: 2,
    difficulty: 'hard',
    question: 'Why is dependency isolation critical when packaging agent tools for deployment?',
    options: [
      'It shortens inference token sequences',
      'It prevents prompt injection attempts',
      'It avoids conflicting library versions that can break runtime execution',
      'It guarantees deterministic outputs'
    ],
    correct: 2,
    explanation:
      'Tools often rely on native bindings or GPU drivers; isolating dependencies ensures compatibility and predictable runtime behavior.'
  }
];
