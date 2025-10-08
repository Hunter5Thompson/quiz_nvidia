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
  },
  {
    topic: 9,
    difficulty: 'easy',
    question: 'Why should agents disclose when users interact with automated systems?',
    options: [
      'To comply with transparency expectations and build user trust',
      'To increase inference latency',
      'To avoid content filtering',
      'To reduce observability'
    ],
    correct: 0,
    explanation:
      'Transparency helps users understand they are engaging with AI and supports ethical guidelines.'
  },
  {
    topic: 9,
    difficulty: 'easy',
    question: 'Which safety measure prevents agents from sharing confidential data inadvertently?',
    options: ['Output filtering and redaction policies', 'Higher sampling temperature', 'Disabling monitoring', 'Random retries'],
    correct: 0,
    explanation:
      'Output filters enforce policies that remove or mask sensitive information before delivery.'
  },
  {
    topic: 9,
    difficulty: 'easy',
    question: 'What is the role of consent management when agents process personal data?',
    options: [
      'Ensuring users agree to data usage and can revoke permissions',
      'Increasing compute cost',
      'Reducing logging',
      'Eliminating encryption'
    ],
    correct: 0,
    explanation:
      'Consent records demonstrate lawful data processing and respect user preferences.'
  },
  {
    topic: 9,
    difficulty: 'easy',
    question: 'Why are safety review boards important for enterprise agent deployments?',
    options: [
      'They evaluate risks, approve releases, and oversee mitigation plans',
      'They write frontend code',
      'They tune GPU clocks',
      'They manage office furniture'
    ],
    correct: 0,
    explanation:
      'Safety boards provide governance to ensure agents meet organizational and regulatory standards before launch.'
  },
  {
    topic: 9,
    difficulty: 'medium',
    question:
      'Which policy helps prevent agents from generating discriminatory outcomes?',
    options: [
      'Fairness guidelines with bias testing and mitigation workflows',
      'Ignoring demographic data',
      'Relying solely on prompt engineering',
      'Removing evaluation'
    ],
    correct: 0,
    explanation:
      'Fairness policies require measurement and remediation steps to reduce harmful bias in outputs.'
  },
  {
    topic: 9,
    difficulty: 'medium',
    question:
      'Why should agents maintain audit trails of tool usage and decisions?',
    options: [
      'To support investigations, compliance reporting, and accountability',
      'To increase latency',
      'To replace monitoring',
      'To limit transparency'
    ],
    correct: 0,
    explanation:
      'Audit trails document who did what and when, providing evidence for regulators and internal reviews.'
  },
  {
    topic: 9,
    difficulty: 'medium',
    question:
      'Which defense protects agents from malicious prompt content delivered through documents?',
    options: [
      'Content sanitization and input validation',
      'Trusting all inputs',
      'Disabling guardrails',
      'Ignoring logs'
    ],
    correct: 0,
    explanation:
      'Sanitization removes or neutralizes dangerous instructions before they reach the agent core.'
  },
  {
    topic: 9,
    difficulty: 'medium',
    question: 'What is the purpose of human-in-the-loop escalation policies for high-risk actions?',
    options: [
      'To require human approval before executing sensitive or irreversible tasks',
      'To slow down routine work unnecessarily',
      'To eliminate autonomy entirely',
      'To reduce accountability'
    ],
    correct: 0,
    explanation:
      'Escalation ensures humans review critical decisions, limiting potential harm.'
  },
  {
    topic: 9,
    difficulty: 'medium',
    question:
      'Why implement rate limiting and quotas on agent tool usage?',
    options: [
      'To prevent abuse, runaway costs, or denial-of-service scenarios',
      'To reduce logging accuracy',
      'To remove observability',
      'To increase data exposure'
    ],
    correct: 0,
    explanation:
      'Controls on usage protect resources and guard against malicious or unintended overuse.'
  },
  {
    topic: 9,
    difficulty: 'medium',
    question:
      'What safety mechanism validates agent outputs against policy rules before release?',
    options: [
      'Post-processing guardrail agents or validators',
      'Raw model outputs without checks',
      'Disabling monitoring',
      'Random sampling only'
    ],
    correct: 0,
    explanation:
      'Validator agents inspect responses to ensure they meet compliance and safety criteria.'
  },
  {
    topic: 9,
    difficulty: 'hard',
    question:
      'How do differential privacy techniques support responsible agent analytics?',
    options: [
      'They add controlled noise to data outputs, protecting individual privacy while allowing aggregate insights',
      'They remove all analytics',
      'They guarantee zero compute cost',
      'They disable compliance checks'
    ],
    correct: 0,
    explanation:
      'Differential privacy balances utility with privacy by masking individual contributions.'
  },
  {
    topic: 9,
    difficulty: 'hard',
    question:
      'Why maintain model cards and system documentation for NVIDIA agents?',
    options: [
      'To describe capabilities, limitations, training data, and evaluation results for stakeholders',
      'To hide system behavior',
      'To increase incident counts',
      'To avoid transparency'
    ],
    correct: 0,
    explanation:
      'Model cards communicate responsible use guidelines and known risks, supporting informed deployment.'
  },
  {
    topic: 9,
    difficulty: 'hard',
    question:
      'Which governance process ensures ongoing compliance after an agent is deployed?',
    options: [
      'Periodic audits and control assessments',
      'Launching and forgetting',
      'Relying on user complaints',
      'Removing policies'
    ],
    correct: 0,
    explanation:
      'Regular audits verify controls remain effective and adapt to evolving regulations.'
  },
  {
    topic: 9,
    difficulty: 'hard',
    question:
      'How can red-teaming exercises improve agent safety posture?',
    options: [
      'By simulating adversarial attacks to uncover vulnerabilities',
      'By reducing testing',
      'By disabling incident response',
      'By removing guardrails'
    ],
    correct: 0,
    explanation:
      'Red-teaming identifies weaknesses before attackers exploit them, enabling proactive fixes.'
  },
  {
    topic: 9,
    difficulty: 'hard',
    question:
      'Why should safety teams monitor agent decisions for disparate impact across user groups?',
    options: [
      'To detect unfair outcomes and trigger mitigation efforts',
      'To increase throughput only',
      'To remove compliance requirements',
      'To reduce transparency'
    ],
    correct: 0,
    explanation:
      'Monitoring disparate impact helps organizations correct bias and meet ethical commitments.'
  },
  {
    topic: 9,
    difficulty: 'hard',
    question:
      'What policy governs safe storage and rotation of credentials used by agents?',
    options: [
      'Secrets management with rotation schedules and access controls',
      'Sharing passwords openly',
      'Embedding keys in prompts',
      'Disabling authentication'
    ],
    correct: 0,
    explanation:
      'Secrets management ensures credentials remain protected and refreshed, reducing breach risk.'
  },
  {
    topic: 9,
    difficulty: 'hard',
    question: 'How does incident response planning contribute to agent safety?',
    options: [
      'It defines detection, communication, and remediation procedures for safety events',
      'It slows containment',
      'It replaces audits',
      'It prevents monitoring'
    ],
    correct: 0,
    explanation:
      'Prepared response plans enable teams to act quickly and transparently during safety incidents.'
  }
];
