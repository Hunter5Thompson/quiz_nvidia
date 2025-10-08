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
  },
  {
    topic: 2,
    difficulty: 'easy',
    question: 'What metadata should every registered tool in an NVIDIA agent catalog include?',
    options: [
      'GPU clock speed',
      'Purpose, input schema, output schema, and auth requirements',
      'Employee phone numbers',
      'Monitor refresh rate'
    ],
    correct: 1,
    explanation:
      'Clear metadata ensures planners can select the correct tool and pass properly formatted requests with appropriate credentials.'
  },
  {
    topic: 2,
    difficulty: 'easy',
    question: 'Why are tool health pings useful for agent orchestrators?',
    options: [
      'They permanently disable scaling',
      'They indicate availability so planners can route requests appropriately',
      'They increase inference latency',
      'They store agent prompts'
    ],
    correct: 1,
    explanation:
      'Health indicators allow orchestrators to avoid unhealthy services and trigger failover logic when needed.'
  },
  {
    topic: 2,
    difficulty: 'easy',
    question:
      'Which NVIDIA service offers guardrail policy enforcement to control tool invocation and responses?',
    options: [
      'NeMo Guardrails',
      'OpenGL Driver',
      'CUDA Visual Profiler',
      'GeForce Experience'
    ],
    correct: 0,
    explanation:
      'NeMo Guardrails provides policy enforcement pipelines that gate agent interactions with tools.'
  },
  {
    topic: 2,
    difficulty: 'easy',
    question: 'What is a benefit of using standardized JSON schemas for agent tools?',
    options: [
      'They make prompts longer for no reason',
      'They ensure consistent validation and reduce integration errors',
      'They require manual parsing for every call',
      'They prevent monitoring'
    ],
    correct: 1,
    explanation:
      'Schema validation catches malformed requests early and simplifies integration across different agent components.'
  },
  {
    topic: 2,
    difficulty: 'medium',
    question:
      'When chaining multiple tool calls, what mechanism keeps intermediate outputs accessible to later steps?',
    options: [
      'Deleting memory after each call',
      'Shared scratchpad or blackboard memory with structured entries',
      'Hard-coded global variables in prompts',
      'Disabling plan tracking'
    ],
    correct: 1,
    explanation:
      'A structured scratchpad allows planners and workers to reference previous tool outputs, enabling coherent multi-step workflows.'
  },
  {
    topic: 2,
    difficulty: 'medium',
    question:
      'How do retry policies with exponential backoff help tool orchestration?',
    options: [
      'They overwhelm downstream systems',
      'They smooth load spikes and reduce duplicate work during transient failures',
      'They eliminate the need for metrics',
      'They force agents offline'
    ],
    correct: 1,
    explanation:
      'Controlled retries limit immediate replays, giving services time to recover while still attempting completion.'
  },
  {
    topic: 2,
    difficulty: 'medium',
    question:
      'Which pattern helps agents coordinate tool invocations that depend on each other\'s outputs?',
    options: [
      'Independent random execution',
      'Planner with dependency graph and topological execution',
      'Manual execution by operators',
      'Simultaneous execution of all tools regardless of order'
    ],
    correct: 1,
    explanation:
      'Planners that understand dependency graphs ensure prerequisites run before downstream tools that rely on their results.'
  },
  {
    topic: 2,
    difficulty: 'medium',
    question: 'Why should tool adapters implement structured error codes and messages?',
    options: [
      'To intentionally confuse operators',
      'To help agents decide on fallback strategies and notify humans precisely',
      'To hide failures',
      'To increase log volume without value'
    ],
    correct: 1,
    explanation:
      'Structured errors allow planners to branch intelligently—retry, escalate, or switch tools—while providing actionable observability.'
  },
  {
    topic: 2,
    difficulty: 'medium',
    question:
      'What configuration enables NVIDIA agents to use private enterprise APIs securely?',
    options: [
      'Hard-coded API keys in the prompt',
      'Secrets management integration with scoped tokens',
      'Sharing admin credentials in chat',
      'Plaintext credentials stored in git'
    ],
    correct: 1,
    explanation:
      'Secrets managers deliver short-lived credentials securely, preventing leakage and enabling least privilege access.'
  },
  {
    topic: 2,
    difficulty: 'medium',
    question:
      'Which orchestration component records every tool call for auditability?',
    options: [
      'GPU thermal daemon',
      'Tool invocation logger or event sink',
      'CSS preprocessor',
      'Static CDN'
    ],
    correct: 1,
    explanation:
      'A dedicated logging sink preserves metadata, inputs, outputs, and outcomes for compliance and debugging.'
  },
  {
    topic: 2,
    difficulty: 'medium',
    question: 'Why is it important to model tool cost and latency characteristics?',
    options: [
      'To ignore SLA commitments',
      'To enable planners to choose the most efficient path under constraints',
      'To prevent caching',
      'To require manual approvals for every call'
    ],
    correct: 1,
    explanation:
      'Cost and latency profiles help planners optimize workflows and enforce policy budgets or user experience targets.'
  },
  {
    topic: 2,
    difficulty: 'medium',
    question:
      'How can NVIDIA developers safely expose experimental tools to agents?',
    options: [
      'By deploying them straight to production',
      'By gating them behind feature flags and staged rollout policies',
      'By letting any user toggle them arbitrarily',
      'By disabling monitoring'
    ],
    correct: 1,
    explanation:
      'Feature flags and staged rollouts allow controlled experimentation with fallback to stable tools if issues arise.'
  },
  {
    topic: 2,
    difficulty: 'hard',
    question:
      'Which strategy prevents planner agents from over-invoking expensive tools when uncertainty is high?',
    options: [
      'Removing budget checks',
      'Incorporating utility-based decision policies and spending caps',
      'Manually tracking every call',
      'Randomly blocking tools'
    ],
    correct: 1,
    explanation:
      'Utility models let planners weigh benefit against cost while caps enforce hard limits on spending or tool usage.'
  },
  {
    topic: 2,
    difficulty: 'hard',
    question:
      'How do orchestrators maintain consistency when tools update their API versions?',
    options: [
      'Ignore versioning entirely',
      'Use version negotiation and backward-compatible adapters',
      'Force agents to guess payload formats',
      'Require immediate manual retraining of LLMs'
    ],
    correct: 1,
    explanation:
      'Adapters that translate between versions and explicit negotiation protocols prevent breaking changes from disrupting workflows.'
  },
  {
    topic: 2,
    difficulty: 'hard',
    question:
      'What is the advantage of sandboxing tool execution for autonomous agents?',
    options: [
      'It slows down GPU clocks',
      'It confines tool side effects, protecting critical systems from unintended actions',
      'It disables caching',
      'It removes the need for testing'
    ],
    correct: 1,
    explanation:
      'Sandboxing limits the blast radius if an agent makes an incorrect call or encounters a malicious response.'
  },
  {
    topic: 2,
    difficulty: 'hard',
    question:
      'Which mechanism coordinates long-running tool jobs without blocking the agent\'s reasoning loop?',
    options: [
      'Synchronous busy-waiting',
      'Asynchronous callbacks or polling combined with state updates',
      'Permanent sleep',
      'Manual email notifications'
    ],
    correct: 1,
    explanation:
      'Async coordination lets the agent continue planning while the job runs, updating the scratchpad when results arrive.'
  },
  {
    topic: 2,
    difficulty: 'hard',
    question:
      'How can tool governance enforce data minimization requirements?',
    options: [
      'By logging raw user data everywhere',
      'By defining policies that redact or tokenize sensitive fields before tool calls',
      'By disabling authentication',
      'By ignoring privacy regulations'
    ],
    correct: 1,
    explanation:
      'Policy engines can transform payloads to remove unnecessary personal data, satisfying privacy constraints.'
  },
  {
    topic: 2,
    difficulty: 'hard',
    question:
      'Why would architects introduce circuit breaker logic specifically for tool orchestration layers?',
    options: [
      'To hide observability signals',
      'To stop cascading failures from repeatedly calling degraded services',
      'To reduce code reuse',
      'To increase spending intentionally'
    ],
    correct: 1,
    explanation:
      'Circuit breakers cut off failing dependencies, protecting the planner and users from repeated errors.'
  },
  {
    topic: 2,
    difficulty: 'hard',
    question:
      'What approach enables agents to choose between multiple equivalent tools dynamically?',
    options: [
      'Random selection only',
      'A tool ranking service that considers performance history and policies',
      'Hard-coding a single option forever',
      'Disabling evaluation metrics'
    ],
    correct: 1,
    explanation:
      'Ranking services provide context-aware recommendations so planners select the best available tool for each request.'
  },
  {
    topic: 2,
    difficulty: 'hard',
    question:
      'Which pattern integrates human approval into sensitive tool execution flows?',
    options: [
      'Executing everything autonomously',
      'Human-in-the-loop checkpoints triggered by policy conditions',
      'Ignoring policy requirements',
      'Storing approvals in local text files'
    ],
    correct: 1,
    explanation:
      'Policy-driven checkpoints prompt humans to review actions before they are executed, satisfying governance expectations.'
  }
];
