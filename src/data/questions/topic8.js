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
  },
  {
    topic: 8,
    difficulty: 'easy',
    question: 'Which practice ensures alert fatigue is minimized for agent operations teams?',
    options: [
      'Routing every log line as an alert',
      'Using well-tuned thresholds and deduplicated notifications',
      'Disabling alerts entirely',
      'Sending alerts only via email once a month'
    ],
    correct: 1,
    explanation:
      'Calibrated alerts surface actionable issues without overwhelming responders, improving reliability.'
  },
  {
    topic: 8,
    difficulty: 'easy',
    question: 'Why keep runbooks available for on-call engineers supporting NVIDIA agents?',
    options: [
      'To document resolution steps, escalation paths, and verification checks',
      'To reduce observability coverage',
      'To hide incidents from auditors',
      'To replace automation entirely'
    ],
    correct: 0,
    explanation:
      'Runbooks provide structured guidance that speeds up triage and ensures consistent remediation.'
  },
  {
    topic: 8,
    difficulty: 'easy',
    question: 'What is the benefit of synthetic monitoring for agent endpoints?',
    options: [
      'It simulates user requests to catch issues before customers are impacted',
      'It removes the need for logging',
      'It disables autoscaling',
      'It increases downtime intentionally'
    ],
    correct: 0,
    explanation:
      'Synthetic probes validate availability and latency continuously, alerting teams early to regressions.'
  },
  {
    topic: 8,
    difficulty: 'easy',
    question: 'Which dashboard metric confirms agent throughput is meeting expectations?',
    options: ['Requests per second', 'Office temperature', 'Developer headcount', 'Printer usage'],
    correct: 0,
    explanation:
      'Requests per second indicates whether the system is handling expected load volumes.'
  },
  {
    topic: 8,
    difficulty: 'medium',
    question: 'How do SLO error budgets influence incident response for agent services?',
    options: [
      'They quantify remaining tolerance for errors, guiding whether to ship features or focus on reliability',
      'They eliminate the need for monitoring',
      'They disable change management',
      'They replace customer SLAs'
    ],
    correct: 0,
    explanation:
      'Error budgets help teams balance innovation and stability by defining acceptable downtime or failure periods.'
  },
  {
    topic: 8,
    difficulty: 'medium',
    question:
      'Why integrate distributed tracing into multi-agent systems?',
    options: [
      'To follow requests across services, revealing bottlenecks and failure points',
      'To replace logging entirely',
      'To disable autoscaling',
      'To increase latency on purpose'
    ],
    correct: 0,
    explanation:
      'Tracing illuminates how requests propagate, enabling faster debugging of complex interactions.'
  },
  {
    topic: 8,
    difficulty: 'medium',
    question:
      'What is the purpose of chaos engineering for NVIDIA agent platforms?',
    options: [
      'To proactively test resilience by injecting controlled failures',
      'To hide issues from stakeholders',
      'To increase outage duration',
      'To reduce observability'
    ],
    correct: 0,
    explanation:
      'Chaos experiments validate that safeguards work and help teams understand system limits before real incidents.'
  },
  {
    topic: 8,
    difficulty: 'medium',
    question: 'How can service-level indicators (SLIs) be aligned with agent user experience?',
    options: [
      'By selecting metrics that reflect latency, accuracy, and task success from the user perspective',
      'By tracking only CPU temperature',
      'By ignoring customer feedback',
      'By focusing solely on infrastructure cost'
    ],
    correct: 0,
    explanation:
      'Meaningful SLIs mirror how users perceive reliability, ensuring alerts drive customer-impacting improvements.'
  },
  {
    topic: 8,
    difficulty: 'medium',
    question: 'Why maintain incident retrospectives after major outages?',
    options: [
      'To capture root causes, lessons learned, and action items',
      'To assign blame publicly',
      'To delete evidence',
      'To repeat the same issues'
    ],
    correct: 0,
    explanation:
      'Retrospectives build organizational learning and ensure follow-up work prevents recurrence.'
  },
  {
    topic: 8,
    difficulty: 'medium',
    question: 'Which practice keeps alert noise low during planned maintenance?',
    options: [
      'Silencing alerts with maintenance windows and clear annotations',
      'Ignoring alerts entirely',
      'Triggering false alarms intentionally',
      'Deleting monitoring rules'
    ],
    correct: 0,
    explanation:
      'Maintenance windows prevent expected changes from paging responders unnecessarily.'
  },
  {
    topic: 8,
    difficulty: 'hard',
    question:
      'What telemetry should trigger automated failover for critical agent components?',
    options: [
      'Sustained unavailability, error spikes, or latency breaches',
      'Increased log volume only',
      'Number of developer commits',
      'Office occupancy rates'
    ],
    correct: 0,
    explanation:
      'Failover should react to metrics that indicate user impact, ensuring continuity of service.'
  },
  {
    topic: 8,
    difficulty: 'hard',
    question:
      'How do automated runbooks improve incident response efficiency?',
    options: [
      'They encode remediation steps that can be executed programmatically when triggers fire',
      'They replace security controls',
      'They eliminate human oversight',
      'They block scaling'
    ],
    correct: 0,
    explanation:
      'Automated runbooks reduce time to mitigation by performing predefined actions without manual intervention.'
  },
  {
    topic: 8,
    difficulty: 'hard',
    question:
      'Why implement anomaly detection on agent quality metrics such as accuracy or hallucination rate?',
    options: [
      'To spot degradations that traditional infrastructure metrics might miss',
      'To reduce evaluation coverage',
      'To disable monitoring',
      'To generate noise'
    ],
    correct: 0,
    explanation:
      'Quality anomalies can signal data drift or model issues that infrastructure metrics do not capture.'
  },
  {
    topic: 8,
    difficulty: 'hard',
    question:
      'Which governance requirement is satisfied by maintaining tamper-evident audit logs of agent actions?',
    options: [
      'Regulatory compliance and forensic readiness',
      'Marketing analytics',
      'UI theming',
      'Code formatting'
    ],
    correct: 0,
    explanation:
      'Audit logs provide trustworthy records needed for compliance reviews and investigations.'
  },
  {
    topic: 8,
    difficulty: 'hard',
    question:
      'How can observability teams ensure dashboards remain actionable as systems evolve?',
    options: [
      'By reviewing and updating visualizations regularly with stakeholder feedback',
      'By leaving dashboards untouched for years',
      'By adding every metric regardless of relevance',
      'By hiding dashboards'
    ],
    correct: 0,
    explanation:
      'Continuous iteration keeps dashboards aligned with current architectures and user needs.'
  },
  {
    topic: 8,
    difficulty: 'hard',
    question:
      'What role do load tests play in production readiness of NVIDIA agent services?',
    options: [
      'They validate capacity, uncover bottlenecks, and inform scaling policies before launch',
      'They guarantee zero latency',
      'They replace security reviews',
      'They eliminate monitoring'
    ],
    correct: 0,
    explanation:
      'Load testing provides data to size infrastructure correctly and ensure performance objectives can be met.'
  },
  {
    topic: 8,
    difficulty: 'hard',
    question:
      'Why should observability pipelines support high-cardinality labels like agent ID or tool name?',
    options: [
      'To enable granular analysis and targeted alerts for specific components',
      'To intentionally slow down queries',
      'To hide context from responders',
      'To reduce visibility'
    ],
    correct: 0,
    explanation:
      'Granular labels help teams pinpoint problematic agents or tools quickly.'
  },
  {
    topic: 8,
    difficulty: 'hard',
    question:
      'How do staged rollouts combined with observability reduce deployment risk?',
    options: [
      'They expose a small portion of traffic and monitor key metrics before full rollout',
      'They hide failures until later',
      'They remove alerts',
      'They eliminate QA'
    ],
    correct: 0,
    explanation:
      'Staged rollouts limit impact and allow quick rollback if metrics degrade.'
  }
];
