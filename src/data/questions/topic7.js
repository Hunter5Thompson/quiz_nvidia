export const topic7Questions = [
  {
    topic: 7,
    difficulty: 'easy',
    question: 'Which NVIDIA platform provides accelerated infrastructure for training and deploying AI agents?',
    options: ['NVIDIA AI Enterprise', 'GeForce NOW', 'NVIDIA Broadcast', 'CUDA Samples'],
    correct: 0,
    explanation: 'NVIDIA AI Enterprise delivers optimized infrastructure, software, and management for AI workloads.'
  },
  {
    topic: 7,
    difficulty: 'medium',
    question: 'Why is NVIDIA Triton often paired with NeMo models in production?',
    options: [
      'Triton handles streaming inference and scaling, complementing NeMo\'s model capabilities',
      'Triton replaces the need for GPUs',
      'NeMo only supports CPU inference',
      'Triton is required for local development'
    ],
    correct: 0,
    explanation:
      'Triton provides optimized inference serving, while NeMo supplies domain-adapted models—together they enable production deployments.'
  },
  {
    topic: 7,
    difficulty: 'hard',
    question: 'What advantage does NVIDIA NIM offer for enterprise agent workloads?',
    options: [
      'Pre-built, containerized microservices with consistent APIs',
      'Unlimited free public GPU time',
      'Automatic UI generation for agents',
      'Guaranteed 1ms inference latency'
    ],
    correct: 0,
    explanation:
      'NIM provides standardized, optimized microservices that simplify deployment, scaling, and lifecycle management of AI models.'
  },
  {
    topic: 7,
    difficulty: 'easy',
    question: 'Which NVIDIA solution provides managed APIs for speech, language, and vision foundation models?',
    options: ['NVIDIA NIM', 'Nsight Systems', 'NVIDIA Broadcast', 'PhysX'],
    correct: 0,
    explanation:
      'NIM exposes ready-to-use microservices that wrap optimized multimodal models with consistent APIs.'
  },
  {
    topic: 7,
    difficulty: 'easy',
    question: 'Why are GPUs critical for large-scale agent inference?',
    options: [
      'They accelerate parallel tensor operations required by modern models',
      'They slow down computation',
      'They replace the need for batching',
      'They eliminate memory requirements'
    ],
    correct: 0,
    explanation:
      'GPUs deliver massive parallelism that keeps inference latency low for large language and vision models.'
  },
  {
    topic: 7,
    difficulty: 'easy',
    question: 'Which management layer in NVIDIA AI Enterprise simplifies lifecycle operations for AI clusters?',
    options: ['Base Command Manager', 'Notepad', 'Spreadsheet macros', 'FTP servers'],
    correct: 0,
    explanation:
      'Base Command Manager orchestrates provisioning, monitoring, and updates for GPU clusters running AI workloads.'
  },
  {
    topic: 7,
    difficulty: 'easy',
    question:
      'What benefit does using CUDA-optimized libraries provide to agent developers?',
    options: [
      'They deliver high-performance primitives for common operations',
      'They reduce numerical accuracy intentionally',
      'They disable GPU acceleration',
      'They only work on CPUs'
    ],
    correct: 0,
    explanation:
      'CUDA libraries offer tuned kernels for math, vision, and signal processing, letting developers build faster agents.'
  },
  {
    topic: 7,
    difficulty: 'easy',
    question:
      'Why use NVIDIA GPU Cloud (NGC) registries when deploying agent services?',
    options: [
      'To access curated containers, models, and Helm charts optimized for NVIDIA hardware',
      'To store vacation photos',
      'To manage office Wi-Fi',
      'To compile CPU kernels'
    ],
    correct: 0,
    explanation:
      'NGC hosts validated software stacks that reduce integration effort and ensure compatibility with NVIDIA platforms.'
  },
  {
    topic: 7,
    difficulty: 'medium',
    question: 'How does Triton Inference Server optimize GPU utilization?',
    options: [
      'By supporting dynamic batching, concurrent model execution, and multiple backends',
      'By forcing single-threaded execution',
      'By disabling mixed precision',
      'By ignoring model priorities'
    ],
    correct: 0,
    explanation:
      'Triton packs requests efficiently and runs models concurrently, maximizing throughput on each GPU.'
  },
  {
    topic: 7,
    difficulty: 'medium',
    question: 'What is the advantage of using NeMo Framework for agent model customization?',
    options: [
      'It provides domain-adaptation recipes, data curation pipelines, and distributed training support',
      'It only trains vision models',
      'It removes the need for evaluation',
      'It requires manual CUDA programming for each layer'
    ],
    correct: 0,
    explanation:
      'NeMo offers tooling to fine-tune foundation models with enterprise data using scalable infrastructure.'
  },
  {
    topic: 7,
    difficulty: 'medium',
    question:
      'Why pair NVIDIA TensorRT with deployed language models?',
    options: [
      'To optimize model execution graphs and enable faster inference',
      'To remove batching',
      'To force CPU-only execution',
      'To add manual scheduling overhead'
    ],
    correct: 0,
    explanation:
      'TensorRT compiles models into highly optimized runtimes that leverage GPU hardware efficiently.'
  },
  {
    topic: 7,
    difficulty: 'medium',
    question:
      'Which NVIDIA solution helps manage multi-tenant GPU clusters for agent workloads?',
    options: ['NVIDIA GPU Operator', 'Text editor', 'Spreadsheet budget', 'Manual SSH scripts'],
    correct: 0,
    explanation:
      'GPU Operator automates deployment of drivers, monitoring, and runtime components across Kubernetes clusters.'
  },
  {
    topic: 7,
    difficulty: 'medium',
    question:
      'How does Multi-Instance GPU (MIG) technology benefit agent deployments?',
    options: [
      'It partitions a GPU into isolated slices to run multiple workloads with guaranteed quality of service',
      'It disables GPU memory',
      'It increases power draw intentionally',
      'It prevents virtualization'
    ],
    correct: 0,
    explanation:
      'MIG lets teams serve several models on one GPU while isolating resources for predictable performance.'
  },
  {
    topic: 7,
    difficulty: 'medium',
    question:
      'Why monitor GPU telemetry such as utilization, memory, and thermals for agent services?',
    options: [
      'To detect bottlenecks, capacity issues, or hardware faults early',
      'To slow down inference intentionally',
      'To reduce observability',
      'To replace alerts'
    ],
    correct: 0,
    explanation:
      'Telemetry guides scaling decisions and ensures GPUs operate within safe ranges.'
  },
  {
    topic: 7,
    difficulty: 'medium',
    question:
      'Which storage technology supports high-throughput data access for training large agent models on NVIDIA DGX systems?',
    options: ['GPUDirect Storage', 'DVD drives', 'Floppy disks', 'Email attachments'],
    correct: 0,
    explanation:
      'GPUDirect Storage bypasses CPUs to stream data directly from NVMe to GPUs, accelerating training pipelines.'
  },
  {
    topic: 7,
    difficulty: 'hard',
    question:
      'How do enterprises enforce workload isolation when sharing GPU clusters among multiple agent teams?',
    options: [
      'By combining Kubernetes namespaces, RBAC, and resource quotas',
      'By giving everyone cluster-admin rights',
      'By removing monitoring',
      'By sharing root SSH keys'
    ],
    correct: 0,
    explanation:
      'Isolation controls prevent noisy neighbors and enforce governance boundaries across shared infrastructure.'
  },
  {
    topic: 7,
    difficulty: 'hard',
    question:
      'Why integrate NVIDIA Fleet Command for edge agent deployments?',
    options: [
      'It provides centralized management, updates, and monitoring for distributed edge GPUs',
      'It disables security patches',
      'It requires manual file transfers',
      'It prevents scaling'
    ],
    correct: 0,
    explanation:
      'Fleet Command streamlines deployment and lifecycle management of AI applications across remote sites.'
  },
  {
    topic: 7,
    difficulty: 'hard',
    question:
      'Which technology accelerates secure networking between GPU nodes in large-scale clusters?',
    options: ['NVIDIA BlueField DPUs', 'Dial-up modems', 'Serial cables', 'Infrared links'],
    correct: 0,
    explanation:
      'BlueField DPUs offload networking, storage, and security tasks, enhancing throughput and isolation for AI workloads.'
  },
  {
    topic: 7,
    difficulty: 'hard',
    question:
      'How do enterprises keep agent infrastructure costs predictable when scaling across clouds?',
    options: [
      'By leveraging usage dashboards, capacity planning, and auto-shutdown policies',
      'By ignoring telemetry',
      'By running everything on-demand without monitoring',
      'By disabling budgeting tools'
    ],
    correct: 0,
    explanation:
      'Cost controls and usage analytics prevent overruns while ensuring capacity is available when needed.'
  },
  {
    topic: 7,
    difficulty: 'hard',
    question:
      'Why adopt infrastructure-as-code for provisioning NVIDIA AI clusters?',
    options: [
      'To deliver repeatable, version-controlled deployments across environments',
      'To configure clusters manually every time',
      'To avoid documentation',
      'To reduce auditability'
    ],
    correct: 0,
    explanation:
      'IaC ensures consistent cluster setup, supporting compliance and disaster recovery.'
  },
  {
    topic: 7,
    difficulty: 'hard',
    question:
      'What practice keeps multi-modal agent services responsive during peak demand?',
    options: [
      'Implementing load balancing with autoscaling and GPU-aware scheduling',
      'Disabling batching',
      'Removing caching',
      'Relying on a single node'
    ],
    correct: 0,
    explanation:
      'Balanced workloads and smart schedulers distribute traffic and scale resources to maintain latency targets.'
  },
  {
    topic: 7,
    difficulty: 'hard',
    question:
      'How does integrating security scanning into container registries protect agent platforms?',
    options: [
      'It detects vulnerabilities and compliance issues before deployment',
      'It slows down inference',
      'It removes logging',
      'It blocks scaling'
    ],
    correct: 0,
    explanation:
      'Scanning ensures container images meet security standards, reducing the risk of compromised deployments.'
  },
  {
    topic: 7,
    difficulty: 'hard',
    question:
      'Which monitoring strategy captures end-to-end performance across GPU, network, and application layers?',
    options: [
      'Integrated observability stacks combining metrics, traces, and logs',
      'Single log file on a server',
      'Manual checks once a month',
      'Unstructured emails'
    ],
    correct: 0,
    explanation:
      'Full-stack observability correlates issues across layers, expediting root cause analysis for agent services.'
  }
];
