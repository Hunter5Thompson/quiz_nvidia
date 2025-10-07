export const topic3Questions = [
  {
    topic: 3,
    difficulty: 'easy',
    question: 'What metric is most useful for measuring overall quiz accuracy?',
    options: ['Precision', 'Recall', 'F1-score', 'Accuracy'],
    correct: 3,
    explanation: 'Accuracy captures the ratio of correct answers to total questions in a quiz scenario.'
  },
  {
    topic: 3,
    difficulty: 'medium',
    question: 'Which technique helps evaluate agent reasoning quality beyond automated metrics?',
    options: [
      'Relying solely on BLEU scores',
      'Human-in-the-loop qualitative reviews',
      'Increasing batch size',
      'Reducing dataset size'
    ],
    correct: 1,
    explanation:
      'Human-in-the-loop reviews capture reasoning nuances, hallucination risks, and policy compliance beyond automated metrics.'
  },
  {
    topic: 3,
    difficulty: 'hard',
    question: 'During tuning, why is it important to log intermediate chain-of-thought artifacts?',
    options: [
      'They shorten inference times',
      'They enable reproducible debugging and failure analysis',
      'They automatically anonymize user data',
      'They enforce deterministic behavior'
    ],
    correct: 1,
    explanation:
      'Intermediate reasoning traces help teams diagnose hallucinations, tool misuse, and guardrail violations during tuning.'
  }
];
