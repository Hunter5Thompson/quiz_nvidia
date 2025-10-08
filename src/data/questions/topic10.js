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
  },
  {
    topic: 10,
    difficulty: 'easy',
    question: 'Which interface element helps humans understand why an agent took an action?',
    options: ['Action rationale panel', 'Hidden debug log', 'Random color changes', 'Silent notifications'],
    correct: 0,
    explanation:
      'A rationale panel explains decision factors, improving transparency and user trust.'
  },
  {
    topic: 10,
    difficulty: 'easy',
    question: 'Why should collaboration tools support undo or rollback for agent actions?',
    options: [
      'To let humans reverse unintended outcomes quickly',
      'To encourage risky behavior',
      'To reduce accountability',
      'To increase latency'
    ],
    correct: 0,
    explanation:
      'Rollback capabilities give humans confidence to experiment while maintaining control.'
  },
  {
    topic: 10,
    difficulty: 'easy',
    question: 'What is the benefit of annotating agent confidence alongside responses?',
    options: [
      'It signals how much scrutiny a human should apply',
      'It hides uncertainty',
      'It removes the need for review',
      'It increases risk'
    ],
    correct: 0,
    explanation:
      'Confidence cues help users decide when to verify or override agent suggestions.'
  },
  {
    topic: 10,
    difficulty: 'easy',
    question:
      'Why include guided onboarding for human teammates interacting with agents?',
    options: [
      'To teach best practices, safety limits, and escalation paths',
      'To reduce adoption',
      'To hide documentation',
      'To eliminate training materials'
    ],
    correct: 0,
    explanation:
      'Onboarding ensures humans know how to collaborate effectively and responsibly with agents.'
  },
  {
    topic: 10,
    difficulty: 'medium',
    question:
      'How do shared workspaces improve collaboration between humans and multi-agent teams?',
    options: [
      'They provide a common context for goals, status, and artifacts',
      'They limit transparency',
      'They remove audit trails',
      'They increase error rates'
    ],
    correct: 0,
    explanation:
      'Shared spaces keep everyone aligned on progress and enable smoother handoffs.'
  },
  {
    topic: 10,
    difficulty: 'medium',
    question:
      'Which feedback mechanism helps agents learn from human corrections?',
    options: [
      'Structured feedback forms tied to reinforcement signals',
      'Silent observation',
      'Random emoticons',
      'Disabling logging'
    ],
    correct: 0,
    explanation:
      'Structured feedback feeds training loops or reward models, improving future behavior.'
  },
  {
    topic: 10,
    difficulty: 'medium',
    question:
      'Why should human supervisors receive alerts when agents cross predefined risk thresholds?',
    options: [
      'To intervene quickly before harm occurs',
      'To reduce oversight',
      'To encourage autonomy drift',
      'To avoid accountability'
    ],
    correct: 0,
    explanation:
      'Threshold alerts prompt timely human review when situations become critical.'
  },
  {
    topic: 10,
    difficulty: 'medium',
    question: 'What is the value of session transcripts in collaborative agent interfaces?',
    options: [
      'They document interactions for later review, auditing, and training',
      'They reduce transparency',
      'They hide agent errors',
      'They remove context'
    ],
    correct: 0,
    explanation:
      'Transcripts provide a traceable history that supports learning and accountability.'
  },
  {
    topic: 10,
    difficulty: 'medium',
    question:
      'Why provide multi-modal explanations (text, visuals, audio) when appropriate?',
    options: [
      'To accommodate diverse user preferences and improve comprehension',
      'To obfuscate reasoning',
      'To increase noise',
      'To slow down workflows'
    ],
    correct: 0,
    explanation:
      'Different modalities help users grasp complex agent decisions more effectively.'
  },
  {
    topic: 10,
    difficulty: 'medium',
    question:
      'How do co-editing features support joint task execution with agents?',
    options: [
      'They allow humans to adjust agent-generated artifacts in real time',
      'They remove human control',
      'They hide agent contributions',
      'They prevent collaboration'
    ],
    correct: 0,
    explanation:
      'Co-editing keeps humans in the loop, enabling quick corrections and knowledge sharing.'
  },
  {
    topic: 10,
    difficulty: 'hard',
    question:
      'What governance mechanism ensures humans retain ultimate decision authority over critical actions?',
    options: [
      'Approval workflows with documented sign-off',
      'Autonomous overrides without review',
      'Untracked background changes',
      'Opaque decision logging'
    ],
    correct: 0,
    explanation:
      'Approval workflows capture human authorization before high-stakes steps proceed.'
  },
  {
    topic: 10,
    difficulty: 'hard',
    question:
      'Why should collaboration platforms capture rationale for denied agent recommendations?',
    options: [
      'To inform future agent tuning and highlight safety concerns',
      'To shame operators',
      'To reduce transparency',
      'To delete audit trails'
    ],
    correct: 0,
    explanation:
      'Documented rationales teach agents what went wrong and provide governance evidence.'
  },
  {
    topic: 10,
    difficulty: 'hard',
    question:
      'How do shared dashboards showing agent KPIs and risks support trust?',
    options: [
      'They keep stakeholders informed about performance, incidents, and mitigations',
      'They hide issues',
      'They prevent collaboration',
      'They replace documentation'
    ],
    correct: 0,
    explanation:
      'Transparent dashboards ensure everyone understands agent health and governance status.'
  },
  {
    topic: 10,
    difficulty: 'hard',
    question:
      'What role do simulation environments play in preparing humans to supervise agents?',
    options: [
      'They let teams practice scenarios safely before production',
      'They eliminate training requirements',
      'They hide edge cases',
      'They reduce observability'
    ],
    correct: 0,
    explanation:
      'Simulations build operator confidence and uncover usability gaps before real-world exposure.'
  },
  {
    topic: 10,
    difficulty: 'hard',
    question:
      'Why implement explainability reviews as part of release governance?',
    options: [
      'To verify that agents provide adequate reasoning artifacts for human oversight',
      'To slow down iteration unnecessarily',
      'To avoid documentation',
      'To reduce accountability'
    ],
    correct: 0,
    explanation:
      'Explainability reviews ensure new features maintain transparency and compliance expectations.'
  },
  {
    topic: 10,
    difficulty: 'hard',
    question:
      'How does configurable notification routing improve human-agent collaboration?',
    options: [
      'It sends the right alerts to the right stakeholders based on context',
      'It spams every channel',
      'It removes transparency',
      'It blocks human involvement'
    ],
    correct: 0,
    explanation:
      'Routing ensures critical information reaches decision-makers quickly without overwhelming others.'
  },
  {
    topic: 10,
    difficulty: 'hard',
    question:
      'Which practice keeps human feedback loops effective over time?',
    options: [
      'Regularly reviewing feedback quality, closing the loop with contributors, and updating training data',
      'Ignoring user comments',
      'Deleting historical feedback',
      'Limiting feedback channels'
    ],
    correct: 0,
    explanation:
      'Healthy feedback loops maintain engagement and ensure insights drive measurable improvements.'
  },
  {
    topic: 10,
    difficulty: 'hard',
    question:
      'Why should collaborative agents support role-based views and permissions?',
    options: [
      'To tailor information access and actions to each stakeholder',
      'To hide governance controls',
      'To remove accountability',
      'To increase confusion'
    ],
    correct: 0,
    explanation:
      'Role-based access ensures users see relevant data and prevents unauthorized actions.'
  }
];
