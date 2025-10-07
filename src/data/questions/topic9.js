export const topic9Questions = [
  {
    topic: 9,
    difficulty: 'easy',
    question: 'Why must agent teams consider AI safety guidelines?',
    options: [
      'To improve GPU binning yields',
      'To ensure agents act responsibly and comply with regulations',
      'To unlock higher batch sizes',
      'To reduce cloud storage costs'
    ],
    correct: 1,
    explanation:
      'Safety guidelines help ensure agents do not cause harm, violate policies, or expose sensitive information.'
  },
  {
    topic: 9,
    difficulty: 'medium',
    question: 'What control mitigates prompt injection risks in enterprise agents?',
    options: [
      'Allowing unfiltered tool execution',
      'Instruction filtering and policy guardrails',
      'Disabling authentication',
      'Increasing temperature'
    ],
    correct: 1,
    explanation:
      'Guardrails inspect user input and agent outputs to block unsafe instructions and maintain policy compliance.'
  },
  {
    topic: 9,
    difficulty: 'hard',
    question: 'Which compliance requirement is most relevant for agents handling EU customer data?',
    options: ['DMCA', 'GDPR', 'SOX', 'PCI-DSS'],
    correct: 1,
    explanation: 'GDPR defines data protection and privacy requirements for EU individuals.'
  }
];
