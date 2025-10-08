export const topic1Questions = [
  {
    topic: 1,
    difficulty: 'easy',
    question: 'What is the primary goal of agent architecture design in the NVIDIA Agentic AI stack?',
    options: [
      'Maximizing GPU utilization regardless of task outcomes',
      'Aligning agent capabilities with target use cases and constraints',
      'Focusing solely on LLM prompt engineering',
      'Avoiding modular components to reduce latency'
    ],
    correct: 1,
    explanation:
      'Effective architecture design ensures the agent\'s capabilities map to business goals, compliance constraints, and the surrounding system interfaces.'
  },
  {
    topic: 1,
    difficulty: 'medium',
    question: 'Which architectural pattern best supports multi-modal perception and reasoning for robotics workloads?',
    options: [
      'Single monolithic LLM agent',
      'Perception-planning-control pipeline with shared memory',
      'Prompt-chained question answering agent',
      'Hard-coded finite state machine'
    ],
    correct: 1,
    explanation:
      'Robotics workloads typically use a perception-planning-control pipeline with a shared memory bus to coordinate sensor fusion and actuation decisions.'
  },
  {
    topic: 1,
    difficulty: 'hard',
    question: 'When designing a resilient agent architecture, which mechanism most effectively mitigates hallucination propagation across agent teams?',
    options: [
      'Disabling autonomous tool calls',
      'Hierarchical validation agents with structured feedback loops',
      'Relying on deterministic temperature=0 generation',
      'Increasing context window size beyond 200k tokens'
    ],
    correct: 1,
    explanation:
      'Validation agents that run structured evaluation pipelines can intercept and correct erroneous outputs before they cascade downstream.'
  },
  {
    topic: 1,
    difficulty: 'easy',
    question:
      'Which design artifact documents the relationships between planner, worker, and reviewer agents in an NVIDIA deployment?',
    options: [
      'GPU memory allocation table',
      'Agent interaction diagram',
      'PCIe topology report',
      'Kernel launch manifest'
    ],
    correct: 1,
    explanation:
      'Interaction diagrams clarify how sub-agents coordinate, which messages they exchange, and where decision authority resides.'
  },
  {
    topic: 1,
    difficulty: 'easy',
    question:
      'Why should agent designers separate perception, planning, and action components when targeting robotics workloads?',
    options: [
      'To reuse CUDA kernels across unrelated projects',
      'To isolate responsibilities and simplify debugging and upgrades',
      'To eliminate the need for simulation',
      'To bypass safety reviews'
    ],
    correct: 1,
    explanation:
      'Clear separation keeps modules focused on their responsibilities, making it easier to improve perception or planning without destabilizing other parts.'
  },
  {
    topic: 1,
    difficulty: 'easy',
    question: 'What information is most critical to capture in an agent capability matrix?',
    options: [
      'LLM vendor marketing slogans',
      'Supported modalities, tools, and decision boundaries',
      'PCIe lane assignments',
      'Power supply serial numbers'
    ],
    correct: 1,
    explanation:
      'A capability matrix details which tasks the agent can perform, which inputs it accepts, and the scope of autonomous action.'
  },
  {
    topic: 1,
    difficulty: 'medium',
    question:
      'Which architectural strategy improves reuse when delivering multiple agent use cases across a business unit?',
    options: [
      'Creating bespoke monoliths for each use case',
      'Building a modular agent platform with shared services',
      'Limiting documentation to slide decks',
      'Hard-coding customer data sources in prompts'
    ],
    correct: 1,
    explanation:
      'A modular platform allows common perception, planning, and governance services to be reused while domain skills are added as plug-ins.'
  },
  {
    topic: 1,
    difficulty: 'medium',
    question:
      'How does an architecture decision record (ADR) benefit evolving NVIDIA agent solutions?',
    options: [
      'It automatically optimizes CUDA kernels',
      'It provides traceable reasoning behind architectural choices',
      'It generates GPU purchase orders',
      'It enforces network policies'
    ],
    correct: 1,
    explanation:
      'ADRs document why major decisions were made, allowing future teams to evaluate trade-offs and adjust designs responsibly.'
  },
  {
    topic: 1,
    difficulty: 'medium',
    question: 'Which component ensures agent memory state can be recovered after a node failure?',
    options: [
      'Stateless HTTP proxies only',
      'Replicated memory store with checkpointing',
      'Randomized prompt templates',
      'Unstructured file dumps on developer laptops'
    ],
    correct: 1,
    explanation:
      'Replicated state stores and checkpoints allow planners and workers to resume tasks without losing context after failures.'
  },
  {
    topic: 1,
    difficulty: 'medium',
    question:
      'What is the main architectural benefit of using an event-driven bus between NVIDIA agents?',
    options: [
      'Guaranteed zero-cost inference',
      'Loose coupling and scalable fan-out for new agent skills',
      'Elimination of logging requirements',
      'Ability to skip safety reviews'
    ],
    correct: 1,
    explanation:
      'Event buses decouple publishers from subscribers, enabling new skills or monitors to listen in without modifying existing workflows.'
  },
  {
    topic: 1,
    difficulty: 'medium',
    question:
      'Which architectural control supports deterministic routing of multimodal inputs to specialized NVIDIA agents?',
    options: [
      'Round-robin DNS only',
      'Input modality router with policy-based rules',
      'Random selection of downstream agents',
      'Client-side JavaScript timers'
    ],
    correct: 1,
    explanation:
      'A modality-aware router dispatches audio, vision, or text payloads to the sub-agent best equipped to process them, improving accuracy and efficiency.'
  },
  {
    topic: 1,
    difficulty: 'medium',
    question:
      'Why should NVIDIA agent architectures include a shared semantic memory layer?',
    options: [
      'To remove the need for telemetry',
      'To enable agents to ground reasoning on consistent facts and histories',
      'To keep GPU clocks synchronized',
      'To prevent CI/CD deployments'
    ],
    correct: 1,
    explanation:
      'Shared memory ensures agents read and write to a common set of facts, avoiding contradictory reasoning across planners and executors.'
  },
  {
    topic: 1,
    difficulty: 'medium',
    question:
      'Which consideration is essential when architecting agents that span on-premises and cloud NVIDIA infrastructure?',
    options: [
      'Ignoring latency differences',
      'Designing secure, low-latency communication links and consistent identity management',
      'Assuming homogeneous GPU generations',
      'Disabling encryption for speed'
    ],
    correct: 1,
    explanation:
      'Hybrid designs must address connectivity, identity, and compliance requirements to maintain consistent behavior across environments.'
  },
  {
    topic: 1,
    difficulty: 'hard',
    question:
      'How can architects enforce policy-compliant reasoning paths for autonomous NVIDIA agents?',
    options: [
      'Rely solely on developer training',
      'Implement guardrail agents that evaluate intermediate plans and tool calls',
      'Disable planning capabilities entirely',
      'Limit agents to single-step prompts'
    ],
    correct: 1,
    explanation:
      'Guardrail agents act as policy enforcers, inspecting plans before execution and ensuring compliance with governance rules.'
  },
  {
    topic: 1,
    difficulty: 'hard',
    question:
      'Which architectural technique supports high availability for mission-critical NVIDIA agent systems?',
    options: [
      'Single-zone deployment without failover',
      'Active-active redundancy with automated failover orchestration',
      'Manual daily backups only',
      'Running everything on a developer workstation'
    ],
    correct: 1,
    explanation:
      'Active-active deployments ensure workloads continue even if one region or cluster fails, meeting strict uptime objectives.'
  },
  {
    topic: 1,
    difficulty: 'hard',
    question:
      'Why do architects define bounded autonomy levels for NVIDIA agents interacting with production systems?',
    options: [
      'To minimize telemetry data volume',
      'To restrict the scope of unsupervised actions and simplify risk assessment',
      'To bypass change management',
      'To guarantee zero cost'
    ],
    correct: 1,
    explanation:
      'Autonomy levels delineate what agents can do alone versus what requires approval, keeping actions aligned with organizational risk tolerance.'
  },
  {
    topic: 1,
    difficulty: 'hard',
    question:
      'Which architectural element helps coordinate multi-agent task decomposition across GPUs with heterogeneous capabilities?',
    options: [
      'Ignoring GPU specs during planning',
      'A resource-aware scheduler that maps sub-tasks to compatible accelerators',
      'Manual SSH scripts',
      'Random task assignment to CPUs only'
    ],
    correct: 1,
    explanation:
      'Schedulers aware of GPU memory and compute profiles ensure that subtasks are dispatched to hardware that can execute them efficiently.'
  },
  {
    topic: 1,
    difficulty: 'hard',
    question:
      'How can NVIDIA agent architects limit cascading failure when integrating third-party APIs?',
    options: [
      'Allowing unlimited retries with no timeout',
      'Implementing bulkheads and timeouts around external dependencies',
      'Disabling observability agents',
      'Moving all logic into the LLM prompt'
    ],
    correct: 1,
    explanation:
      'Bulkheads isolate failures to specific components while timeouts prevent stuck calls, preserving the rest of the system.'
  },
  {
    topic: 1,
    difficulty: 'hard',
    question:
      'What is the role of a governance plane within complex NVIDIA agent architectures?',
    options: [
      'To manage GPU cooling fans',
      'To orchestrate policies, audit logs, and compliance checks across agent teams',
      'To schedule marketing campaigns',
      'To randomize prompt templates'
    ],
    correct: 1,
    explanation:
      'A governance plane enforces organizational controls, captures evidence, and harmonizes policy enforcement across distributed agents.'
  },
  {
    topic: 1,
    difficulty: 'hard',
    question:
      'Why might architects introduce simulation loops into NVIDIA agent platforms before live deployment?',
    options: [
      'To reduce the need for testing',
      'To validate behavior under edge conditions using digital twins',
      'To inflate infrastructure cost',
      'To replace evaluation metrics'
    ],
    correct: 1,
    explanation:
      'Digital twin simulations allow teams to rehearse complex scenarios and assess agent behavior before exposing production systems.'
  },
  {
    topic: 1,
    difficulty: 'hard',
    question:
      'Which architectural guard reduces the risk of privilege escalation by autonomous agents?',
    options: [
      'Giving every agent root credentials',
      'Applying least-privilege service identities and scoped tokens',
      'Sharing a single admin account across agents',
      'Storing credentials in source control'
    ],
    correct: 1,
    explanation:
      'Least-privilege identities limit each agent to the minimal actions required, constraining potential misuse or compromise.'
  },
  {
    topic: 1,
    difficulty: 'hard',
    question:
      'What architectural consideration ensures NVIDIA agents can comply with data residency regulations?',
    options: [
      'Centralizing all data in one global region',
      'Implementing region-aware data routing and storage policies',
      'Disabling logging entirely',
      'Allowing developers to export data manually'
    ],
    correct: 1,
    explanation:
      'Region-aware routing ensures sensitive data stays within required boundaries while still enabling coordinated agent workflows.'
  },
  {
    topic: 1,
    difficulty: 'hard',
    question:
      'How does incorporating evaluation agents within the architecture improve continuous deployment of NVIDIA agent skills?',
    options: [
      'They slow down the process unnecessarily',
      'They provide automated regression checks and gatekeeping before rollout',
      'They replace staging environments',
      'They remove the need for human review forever'
    ],
    correct: 1,
    explanation:
      'Evaluation agents act as quality gates, testing new skills against benchmarks before allowing production deployment.'
  }
];
