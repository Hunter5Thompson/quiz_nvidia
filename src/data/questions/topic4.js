export const topic4Questions = [
  {
    topic: 4,
    difficulty: 'easy',
    question: 'Which NVIDIA service simplifies deploying conversational agents at scale?',
    options: ['NVIDIA Triton Inference Server', 'CUDA Toolkit', 'JetPack SDK', 'Nsight Compute'],
    correct: 0,
    explanation:
      'Triton Inference Server handles scalable deployment, versioning, and GPU optimization for AI models including agents.'
  },
  {
    topic: 4,
    difficulty: 'medium',
    question: 'What deployment strategy helps reduce downtime when updating agent models?',
    options: [
      'Manual server restarts',
      'Blue-green deployments with traffic shifting',
      'Deleting previous model versions',
      'Relying on a single availability zone'
    ],
    correct: 1,
    explanation:
      'Blue-green deployments let teams gradually shift traffic to a new version while maintaining a fallback path.'
  },
  {
    topic: 4,
    difficulty: 'hard',
    question: 'Which scaling concern is most critical for streaming multi-turn agent conversations?',
    options: [
      'GPU fan speed',
      'Autoscaling websocket gateways and state stores',
      'Disabling TLS termination',
      'Blocking retries to enforce quotas'
    ],
    correct: 1,
    explanation:
      'Streaming conversations rely on elastic gateways and shared memory/state services to maintain responsiveness under load.'
  },
  {
    topic: 4,
    difficulty: 'easy',
    question: 'What deployment artifact describes infrastructure requirements for an NVIDIA agent service?',
    options: ['Kubernetes manifest', 'Spreadsheet of GPU prices', 'Physical whiteboard photo', 'Browser bookmark'],
    correct: 0,
    explanation:
      'Manifests declare replicas, resources, and configuration needed to run agent services in Kubernetes or similar platforms.'
  },
  {
    topic: 4,
    difficulty: 'easy',
    question: 'Why are readiness probes important for agent microservices?',
    options: [
      'They slow down deployments intentionally',
      'They signal when a service is prepared to receive traffic',
      'They replace observability',
      'They disable autoscaling'
    ],
    correct: 1,
    explanation:
      'Readiness checks prevent traffic from routing to pods before necessary initialization completes, reducing failed requests.'
  },
  {
    topic: 4,
    difficulty: 'easy',
    question:
      'Which NVIDIA platform provides managed microservices for quickly hosting foundation models used by agents?',
    options: ['NVIDIA NIM', 'CUDA Samples', 'GeForce Experience', 'OpenGL Shaders'],
    correct: 0,
    explanation:
      'NIM packages models as containerized microservices with standardized APIs, simplifying deployment.'
  },
  {
    topic: 4,
    difficulty: 'easy',
    question:
      'What is the purpose of setting resource requests and limits for agent workloads in Kubernetes?',
    options: [
      'To randomly throttle services',
      'To ensure the scheduler reserves adequate CPU/GPU resources and prevents noisy neighbors',
      'To disable monitoring',
      'To avoid scaling policies'
    ],
    correct: 1,
    explanation:
      'Proper requests and limits guarantee agent pods receive predictable resources and avoid contention.'
  },
  {
    topic: 4,
    difficulty: 'easy',
    question:
      'Which logging practice supports troubleshooting after deploying NVIDIA agents?',
    options: [
      'Writing logs to ephemeral local disks only',
      'Centralizing structured logs with correlation IDs',
      'Avoiding timestamps in logs',
      'Deleting logs daily'
    ],
    correct: 1,
    explanation:
      'Centralized structured logs provide the context needed to trace requests across distributed services.'
  },
  {
    topic: 4,
    difficulty: 'medium',
    question:
      'How can deployment teams minimize cold-start latency for GPU-powered agent endpoints?',
    options: [
      'By unloading models between requests',
      'By pre-warming model instances and using persistent GPU allocations',
      'By disabling autoscaling',
      'By reducing health checks'
    ],
    correct: 1,
    explanation:
      'Keeping models loaded and ready avoids costly initialization when new requests arrive.'
  },
  {
    topic: 4,
    difficulty: 'medium',
    question: 'What strategy balances cost and performance for variable agent traffic?',
    options: [
      'Static provisioning of maximum capacity',
      'Autoscaling policies with GPU-aware metrics',
      'Manual scaling once per quarter',
      'Relying on developer laptops'
    ],
    correct: 1,
    explanation:
      'Autoscalers that monitor queue depth, latency, or GPU utilization scale resources up and down as demand fluctuates.'
  },
  {
    topic: 4,
    difficulty: 'medium',
    question:
      'Why should agent deployment pipelines include canary analysis?',
    options: [
      'To intentionally increase incident rates',
      'To compare metrics between baseline and new versions before full rollout',
      'To skip monitoring dashboards',
      'To reduce documentation'
    ],
    correct: 1,
    explanation:
      'Canary analysis validates that new versions meet performance and reliability targets before broader exposure.'
  },
  {
    topic: 4,
    difficulty: 'medium',
    question:
      'Which component handles secrets distribution for agent deployments in a zero-trust environment?',
    options: ['ConfigMap', 'Secrets manager with dynamic credentials', 'Local text file', 'Environment hardcoding'],
    correct: 1,
    explanation:
      'Dedicated secret managers issue scoped, short-lived credentials that align with zero-trust principles.'
  },
  {
    topic: 4,
    difficulty: 'medium',
    question: 'Why monitor both ingress and egress traffic for deployed agents?',
    options: [
      'To comply with color palettes',
      'To detect anomalies, prevent data exfiltration, and ensure SLAs',
      'To replace observability tools',
      'To disable encryption'
    ],
    correct: 1,
    explanation:
      'Bidirectional monitoring provides visibility into request load and outbound dependencies, enabling faster incident response.'
  },
  {
    topic: 4,
    difficulty: 'medium',
    question: 'What deployment pattern simplifies rollback of misbehaving agent skills?',
    options: [
      'Forgetting previous versions',
      'Maintaining immutable releases with versioned artifacts',
      'Editing production containers manually',
      'Rebooting hosts'
    ],
    correct: 1,
    explanation:
      'Immutable, versioned artifacts allow quick rollback by redeploying the last known good release.'
  },
  {
    topic: 4,
    difficulty: 'medium',
    question:
      'How does infrastructure-as-code support NVIDIA agent operations?',
    options: [
      'By keeping configurations undocumented',
      'By providing repeatable, auditable provisioning of environments',
      'By disabling staging environments',
      'By increasing manual maintenance'
    ],
    correct: 1,
    explanation:
      'IaC ensures environments can be recreated consistently and tracked in version control.'
  },
  {
    topic: 4,
    difficulty: 'medium',
    question:
      'Why use multi-cluster or multi-region deployments for critical agent services?',
    options: [
      'To complicate monitoring',
      'To achieve resilience against regional outages and meet latency requirements',
      'To double operational cost intentionally',
      'To avoid compliance checks'
    ],
    correct: 1,
    explanation:
      'Distributed deployments provide redundancy and allow users in different regions to access low-latency endpoints.'
  },
  {
    topic: 4,
    difficulty: 'medium',
    question:
      'What purpose does feature flagging serve when releasing new agent skills?',
    options: [
      'It hides version numbers',
      'It enables gradual exposure and quick disablement if issues occur',
      'It removes the need for QA',
      'It blocks A/B testing'
    ],
    correct: 1,
    explanation:
      'Feature flags let operators dial up exposure safely and roll back instantly if problems arise.'
  },
  {
    topic: 4,
    difficulty: 'hard',
    question:
      'Which deployment guardrail protects data when agents interact with third-party APIs?',
    options: [
      'Plaintext credentials in container images',
      'Egress filtering with allowlists and data loss prevention',
      'Random VPN usage',
      'Disabling TLS verification'
    ],
    correct: 1,
    explanation:
      'Egress controls ensure only approved destinations are reachable and prevent sensitive data from leaving the network.'
  },
  {
    topic: 4,
    difficulty: 'hard',
    question:
      'How can teams maintain consistent performance when deploying agents across mixed GPU generations?',
    options: [
      'Ignore hardware differences',
      'Use optimized runtime profiles and benchmarking per GPU type',
      'Deploy only to CPUs',
      'Disable telemetry'
    ],
    correct: 1,
    explanation:
      'Tailored runtime profiles ensure kernels and model configs match each GPU\'s capabilities for predictable performance.'
  },
  {
    topic: 4,
    difficulty: 'hard',
    question: 'Why integrate deployment pipelines with governance approval workflows?',
    options: [
      'To slow down releases unnecessarily',
      'To document sign-offs for compliance and risk management',
      'To remove automation',
      'To force manual updates'
    ],
    correct: 1,
    explanation:
      'Approval workflows capture accountability and ensure regulated changes meet required reviews before promotion.'
  },
  {
    topic: 4,
    difficulty: 'hard',
    question:
      'What strategy limits the blast radius when deploying experimental agent features?',
    options: [
      'Deploy everywhere simultaneously',
      'Use staged environments and progressive traffic shaping',
      'Disable monitoring until stable',
      'Bypass SLO tracking'
    ],
    correct: 1,
    explanation:
      'Progressive rollout confines risk to small user segments while teams validate performance and behavior.'
  },
  {
    topic: 4,
    difficulty: 'hard',
    question:
      'Which observability signals should trigger automated rollback for agent services?',
    options: [
      'Improved latency',
      'Sustained error spikes, SLO breaches, or safety violations',
      'Increased GPU memory headroom',
      'Lower logging volume'
    ],
    correct: 1,
    explanation:
      'Automated rollback relies on clear thresholds like error rates or policy violations to protect user experience.'
  },
  {
    topic: 4,
    difficulty: 'hard',
    question:
      'Why should infrastructure teams maintain golden images for agent-serving nodes?',
    options: [
      'To ensure consistent drivers, libraries, and security patches across deployments',
      'To disable CI/CD',
      'To prevent horizontal scaling',
      'To avoid using containers'
    ],
    correct: 0,
    explanation:
      'Golden images provide a vetted baseline with known compatibility, reducing configuration drift.'
  },
  {
    topic: 4,
    difficulty: 'hard',
    question:
      'How do service-level objectives (SLOs) influence agent deployment strategies?',
    options: [
      'They are unrelated to deployments',
      'They define targets that determine scaling, redundancy, and rollback decisions',
      'They only matter for offline evaluation',
      'They replace incident response'
    ],
    correct: 1,
    explanation:
      'SLOs guide capacity planning, alert thresholds, and release gates to meet user expectations.'
  },
  {
    topic: 4,
    difficulty: 'hard',
    question:
      'What benefit do deployment runbooks provide to NVIDIA operations teams?',
    options: [
      'They document repeatable steps, decision trees, and escalation paths for incidents',
      'They store marketing copy',
      'They replace backups',
      'They eliminate the need for automation'
    ],
    correct: 0,
    explanation:
      'Runbooks ensure teams respond consistently under pressure and capture institutional knowledge.'
  }
];
