export const topic8Questions = [
  {
    topic: 8,
    difficulty: 'easy',
    question: 'What practice helps maintain agent reliability in production?',
    options: ['Ignoring logs to reduce storage', 'Implementing health checks and monitoring', 'Disabling alerts', 'Using manual deployments only'],
    correct: 1,
    explanation: 'Health checks and monitoring provide early detection of failures and performance regressions.'
  },
  {
    topic: 8,
    difficulty: 'medium',
    question: 'Which signal is most important for detecting tool execution drift?',
    options: ['GPU core temperature', 'Latency and error rate metrics', 'Number of front-end users', 'Disk fragmentation'],
    correct: 1,
    explanation:
      'Monitoring latency and error trends for each tool indicates when service contracts are being violated or degraded.'
  },
  {
    topic: 8,
    difficulty: 'hard',
    question: 'Why should you implement circuit breakers around external tool calls?',
    options: [
      'To prevent TLS handshakes',
      'To isolate failing dependencies and avoid cascading outages',
      'To maximize GPU utilization',
      'To enable prompt injection defenses'
    ],
    correct: 1,
    explanation:
      'Circuit breakers detect repeated failures and temporarily halt requests, protecting the agent from cascading system outages.'
  }
];
