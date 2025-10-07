export const topic10Questions = [
  {
    topic: 10,
    difficulty: 'easy',
    question: 'What design principle keeps human operators confident when collaborating with agents?',
    options: [
      'Opaque reasoning and hidden decisions',
      'Transparent explanations and feedback loops',
      'Silent autonomous overrides',
      'Unbounded context windows'
    ],
    correct: 1,
    explanation:
      'Providing clear explanations and feedback builds trust and enables humans to guide agent behavior effectively.'
  },
  {
    topic: 10,
    difficulty: 'medium',
    question: 'Which UX technique reduces cognitive load for human supervisors?',
    options: [
      'Displaying every token generated',
      'Summarizing intent, actions, and outcomes in dashboards',
      'Hiding failure cases',
      'Removing confirmation prompts'
    ],
    correct: 1,
    explanation:
      'Summaries help supervisors focus on key decisions, improving oversight efficiency and safety.'
  },
  {
    topic: 10,
    difficulty: 'hard',
    question: 'Why is configurable autonomy essential for human-AI collaboration?',
    options: [
      'It guarantees zero latency',
      'It lets teams adjust control boundaries based on risk and context',
      'It eliminates training requirements',
      'It removes the need for logging'
    ],
    correct: 1,
    explanation:
      'Configurable autonomy allows organizations to calibrate agent freedom to their governance model and task criticality.'
  }
];
