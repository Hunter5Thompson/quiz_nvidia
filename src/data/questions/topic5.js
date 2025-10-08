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
  },
  {
    topic: 5,
    difficulty: 'easy',
    question: 'What is the role of a scratchpad memory in agent planning?',
    options: [
      'Persisting knowledge for years',
      'Holding intermediate thoughts and tool results during a session',
      'Managing GPU scheduling',
      'Controlling authentication'
    ],
    correct: 1,
    explanation:
      'Scratchpads provide short-term working memory for the planner to track steps and reasoning in progress.'
  },
  {
    topic: 5,
    difficulty: 'easy',
    question: 'Why should planners tag memory entries with metadata like source and timestamp?',
    options: [
      'To inflate storage usage',
      'To enable filtering, freshness checks, and auditability',
      'To replace authorization',
      'To slow down retrieval'
    ],
    correct: 1,
    explanation:
      'Metadata helps agents assess relevance, trust, and recency when retrieving stored knowledge.'
  },
  {
    topic: 5,
    difficulty: 'easy',
    question: 'Which storage option is commonly used for semantic agent memory retrieval?',
    options: ['Vector database', 'CSV file on desktop', 'Email inbox', 'Clipboard history'],
    correct: 0,
    explanation:
      'Vector databases index embeddings for similarity search, enabling agents to recall related facts efficiently.'
  },
  {
    topic: 5,
    difficulty: 'easy',
    question: 'Why is access control important for shared agent memory stores?',
    options: [
      'To keep GPUs idle',
      'To ensure only authorized agents and users can read or write sensitive knowledge',
      'To increase latency intentionally',
      'To remove the need for governance'
    ],
    correct: 1,
    explanation:
      'Access controls prevent unauthorized disclosure or modification of organizational knowledge.'
  },
  {
    topic: 5,
    difficulty: 'medium',
    question:
      'How do planners decide which memory entries to retrieve for a new task?',
    options: [
      'By random sampling only',
      'By embedding the query and running similarity search with relevance scoring',
      'By fetching all data regardless of cost',
      'By deleting existing memory first'
    ],
    correct: 1,
    explanation:
      'Similarity search returns the most relevant knowledge snippets, helping the agent ground its reasoning.'
  },
  {
    topic: 5,
    difficulty: 'medium',
    question: 'What is the benefit of decay policies for long-term agent memory?',
    options: [
      'They ensure obsolete or stale knowledge is expired or down-ranked over time',
      'They guarantee instant recall of every fact',
      'They disable retention policies',
      'They increase risk of hallucination'
    ],
    correct: 0,
    explanation:
      'Decay policies keep memory fresh by removing or reducing the weight of outdated information.'
  },
  {
    topic: 5,
    difficulty: 'medium',
    question: 'Why maintain separation between personal, team, and global memory spaces?',
    options: [
      'To complicate retrieval',
      'To respect data ownership, privacy, and relevance boundaries',
      'To prevent backups',
      'To increase inference cost'
    ],
    correct: 1,
    explanation:
      'Segmented memory ensures agents apply the right scope of knowledge and comply with privacy requirements.'
  },
  {
    topic: 5,
    difficulty: 'medium',
    question:
      'Which planning heuristic helps agents choose the next action when multiple options exist?',
    options: [
      'Utility scoring combining success probability and cost',
      'Random selection always',
      'Ignoring task context',
      'Guessing based on alphabetical order'
    ],
    correct: 0,
    explanation:
      'Utility scores let agents compare alternative steps and prioritize the highest expected value path.'
  },
  {
    topic: 5,
    difficulty: 'medium',
    question:
      'How do hierarchical planners improve complex NVIDIA agent workflows?',
    options: [
      'They limit agents to single-step tasks',
      'They break objectives into sub-goals handled by specialized sub-planners',
      'They remove the need for memory',
      'They disable tool use'
    ],
    correct: 1,
    explanation:
      'Hierarchy allows high-level planners to delegate sub-tasks to focused agents, scaling to complex missions.'
  },
  {
    topic: 5,
    difficulty: 'medium',
    question: 'What is the advantage of storing tool execution outcomes in memory?',
    options: [
      'To replay old outputs as if new',
      'To inform future planning with evidence of success, failure, or cost',
      'To disable human feedback',
      'To reduce logging'
    ],
    correct: 1,
    explanation:
      'Historical tool results help planners decide whether to reuse a tool or adjust strategies based on past performance.'
  },
  {
    topic: 5,
    difficulty: 'medium',
    question:
      'Why should memory systems support semantic search as well as keyword filtering?',
    options: [
      'Keywords always capture context',
      'Semantic search retrieves conceptually similar knowledge even without exact terms',
      'Semantic search increases hallucination risk by design',
      'Keyword-only search meets all needs'
    ],
    correct: 1,
    explanation:
      'Semantic retrieval broadens recall to related ideas, improving agent comprehension.'
  },
  {
    topic: 5,
    difficulty: 'hard',
    question:
      'How can planners avoid infinite loops when executing task graphs with conditional branches?',
    options: [
      'By never using loops',
      'By tracking visited states and enforcing iteration limits',
      'By ignoring branch conditions',
      'By disabling retries entirely'
    ],
    correct: 1,
    explanation:
      'State tracking and limits ensure planners progress and escape cycles that could stall the workflow.'
  },
  {
    topic: 5,
    difficulty: 'hard',
    question: 'Which policy prevents sensitive information from being written to shared memory unintentionally?',
    options: [
      'Open write access for all agents',
      'Content classification with redaction or encryption rules',
      'Manual trust only',
      'Deleting memory support'
    ],
    correct: 1,
    explanation:
      'Classification policies detect sensitive content and enforce masking, encryption, or blocking before storage.'
  },
  {
    topic: 5,
    difficulty: 'hard',
    question: 'Why do enterprise planners maintain provenance data for memory entries?',
    options: [
      'To reduce auditability',
      'To trace who created knowledge, under what context, and with which approvals',
      'To increase storage cost only',
      'To limit search speed'
    ],
    correct: 1,
    explanation:
      'Provenance supports trust, compliance, and the ability to revoke or correct outdated knowledge.'
  },
  {
    topic: 5,
    difficulty: 'hard',
    question:
      'How can planners reconcile conflicting information retrieved from memory?',
    options: [
      'Pick the earliest entry automatically',
      'Assess source reliability scores and request human review if needed',
      'Delete both entries',
      'Ignore the conflict'
    ],
    correct: 1,
    explanation:
      'Evaluating trust scores and escalating ambiguous cases prevents propagation of incorrect knowledge.'
  },
  {
    topic: 5,
    difficulty: 'hard',
    question:
      'What strategy allows agents to plan over long horizons without exceeding context limits?',
    options: [
      'Embedding entire corporate knowledge into prompts',
      'Summarizing progress periodically and refreshing context from memory',
      'Disabling memory retrieval',
      'Randomly sampling context'
    ],
    correct: 1,
    explanation:
      'Periodic summarization keeps the working context concise while retaining essential information in long-term memory.'
  },
  {
    topic: 5,
    difficulty: 'hard',
    question:
      'Which memory architecture supports compliance with regional data residency rules?',
    options: [
      'Single global bucket for all data',
      'Region-scoped storage clusters with access policies',
      'Local spreadsheets',
      'Manual file transfers'
    ],
    correct: 1,
    explanation:
      'Region-scoped clusters ensure data stays where regulations require while still participating in planning workflows.'
  },
  {
    topic: 5,
    difficulty: 'hard',
    question: 'How do planners incorporate human feedback into memory refinement?',
    options: [
      'Ignore human input',
      'Store reviewer notes and adjust memory weights or status accordingly',
      'Delete reviewed entries automatically',
      'Disable learning loops'
    ],
    correct: 1,
    explanation:
      'Human feedback flags trustworthy knowledge and identifies items needing correction or deprecation.'
  },
  {
    topic: 5,
    difficulty: 'hard',
    question:
      'Why do planners maintain execution logs alongside memory updates?',
    options: [
      'To slow down workflows',
      'To provide traceability for decisions, enabling audits and debugging',
      'To replace guardrails',
      'To increase storage arbitrarily'
    ],
    correct: 1,
    explanation:
      'Execution logs link decisions to context and outcomes, helping teams explain agent behavior.'
  },
  {
    topic: 5,
    difficulty: 'hard',
    question:
      'How can planners ensure memory updates do not degrade model behavior over time?',
    options: [
      'Skip evaluation',
      'Run continuous validation and regression tests on memory-augmented tasks',
      'Disable monitoring',
      'Randomly delete entries'
    ],
    correct: 1,
    explanation:
      'Automated evaluations verify that new knowledge improves or maintains performance before broad use.'
  }
];
