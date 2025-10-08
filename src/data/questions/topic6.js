export const topic6Questions = [
  {
    topic: 6,
    difficulty: 'easy',
    question: 'What is a common approach to integrate structured enterprise data into agents?',
    options: ['CSV file uploads only', 'Knowledge graphs or vectorized databases', 'Manual copy and paste', 'GPU BIOS updates'],
    correct: 1,
    explanation:
      'Knowledge graphs and vector databases provide structured retrieval interfaces suited for agent knowledge integration.'
  },
  {
    topic: 6,
    difficulty: 'medium',
    question: 'Which retrieval method balances accuracy and performance for frequently updated datasets?',
    options: ['Static prompt templates', 'Hybrid BM25 + semantic search', 'Temperature=0 decoding', 'Manual dataset review'],
    correct: 1,
    explanation:
      'Hybrid retrieval combines lexical precision with semantic recall, ensuring up-to-date results for dynamic datasets.'
  },
  {
    topic: 6,
    difficulty: 'hard',
    question: 'Why is metadata governance critical when connecting agents to knowledge bases?',
    options: [
      'It accelerates GPU clock speeds',
      'It enables precise access control, auditing, and retention policies',
      'It eliminates the need for encryption',
      'It replaces prompt engineering'
    ],
    correct: 1,
    explanation:
      'Metadata governance ensures that knowledge access complies with organizational policies, privacy rules, and audit requirements.'
  },
  {
    topic: 6,
    difficulty: 'easy',
    question: 'What process converts raw documents into embeddings for agent retrieval?',
    options: ['Vectorization', 'Rasterization', 'Serialization', 'Compression'],
    correct: 0,
    explanation:
      'Vectorization maps text into numerical embeddings that enable similarity search in retrieval systems.'
  },
  {
    topic: 6,
    difficulty: 'easy',
    question: 'Why should ingestion pipelines normalize document formats before indexing?',
    options: [
      'To ensure consistent parsing and metadata extraction',
      'To reduce governance controls',
      'To increase storage costs',
      'To slow down retrieval'
    ],
    correct: 0,
    explanation:
      'Normalization simplifies downstream processing, ensuring embeddings capture comparable structure across sources.'
  },
  {
    topic: 6,
    difficulty: 'easy',
    question: 'Which NVIDIA toolchain supports building retrieval-augmented generation workflows?',
    options: ['NeMo Retriever', 'NVIDIA Broadcast', 'DLSS', 'NVENC'],
    correct: 0,
    explanation:
      'NeMo Retriever provides utilities for indexing, retrieving, and augmenting LLM responses with enterprise data.'
  },
  {
    topic: 6,
    difficulty: 'easy',
    question:
      'What is the purpose of chunking documents before embedding them into a knowledge base?',
    options: [
      'To keep tokens within manageable sizes and improve retrieval granularity',
      'To eliminate metadata',
      'To prevent versioning',
      'To reduce evaluation coverage'
    ],
    correct: 0,
    explanation:
      'Chunking creates smaller segments that are easier to embed, retrieve, and cite in responses.'
  },
  {
    topic: 6,
    difficulty: 'easy',
    question: 'Why should ingestion jobs track document source and lineage?',
    options: [
      'To comply with audits and enable trust scoring',
      'To inflate storage usage',
      'To remove governance checks',
      'To skip deduplication'
    ],
    correct: 0,
    explanation:
      'Source metadata supports provenance tracking, helping agents and humans assess credibility.'
  },
  {
    topic: 6,
    difficulty: 'medium',
    question:
      'Which retrieval architecture mixes semantic similarity with rule-based filters like time range or department?',
    options: [
      'Hybrid retrieval combining vector search with structured queries',
      'Pure keyword search only',
      'Manual email forwarding',
      'Random sampling'
    ],
    correct: 0,
    explanation:
      'Hybrid retrieval adds structured filters to ensure results match policy constraints while staying relevant.'
  },
  {
    topic: 6,
    difficulty: 'medium',
    question: 'How do freshness indicators influence agent knowledge grounding?',
    options: [
      'They let agents prioritize recent, high-trust documents',
      'They disable caching',
      'They slow inference',
      'They replace evaluation'
    ],
    correct: 0,
    explanation:
      'Freshness and trust scores guide retrieval to current, reliable information, reducing outdated responses.'
  },
  {
    topic: 6,
    difficulty: 'medium',
    question:
      'Why should retrieval systems support multi-lingual embeddings for global enterprises?',
    options: [
      'To allow agents to access knowledge across languages consistently',
      'To limit access to one region',
      'To avoid translation workflows',
      'To reduce GPU utilization'
    ],
    correct: 0,
    explanation:
      'Multi-lingual embeddings bridge language barriers, ensuring agents can reason over localized content.'
  },
  {
    topic: 6,
    difficulty: 'medium',
    question:
      'What practice helps prevent duplicates from skewing knowledge base retrieval results?',
    options: [
      'Deduplication and similarity thresholding during ingestion',
      'Manual review only',
      'Ignoring duplicates',
      'Random deletions'
    ],
    correct: 0,
    explanation:
      'Removing duplicates keeps retrieval clean and prevents agents from over-weighting repeated content.'
  },
  {
    topic: 6,
    difficulty: 'medium',
    question: 'How can agents provide citations when using retrieved knowledge?',
    options: [
      'By linking to document IDs and metadata stored alongside embeddings',
      'By guessing sources',
      'By omitting references',
      'By citing unrelated media'
    ],
    correct: 0,
    explanation:
      'Storing document identifiers with embeddings enables agents to reference exact sources in responses.'
  },
  {
    topic: 6,
    difficulty: 'medium',
    question:
      'Why integrate policy filters into the retrieval stage instead of only at response time?',
    options: [
      'To reduce the chance restricted data is even surfaced to the language model',
      'To slow down retrieval',
      'To disable monitoring',
      'To bypass audits'
    ],
    correct: 0,
    explanation:
      'Filtering early prevents exposure of sensitive content and simplifies downstream guardrail enforcement.'
  },
  {
    topic: 6,
    difficulty: 'medium',
    question:
      'What is the benefit of incremental indexing for frequently changing knowledge bases?',
    options: [
      'It updates only new or modified documents, reducing latency and cost',
      'It requires complete re-ingestion daily',
      'It disables version control',
      'It ignores deletions'
    ],
    correct: 0,
    explanation:
      'Incremental updates keep indexes fresh without reprocessing entire corpora, enabling near-real-time knowledge availability.'
  },
  {
    topic: 6,
    difficulty: 'hard',
    question:
      'Which strategy enforces least-privilege access when agents query sensitive knowledge stores?',
    options: [
      'Shared admin credentials',
      'Scoped service accounts with attribute-based access control',
      'Unauthenticated queries',
      'Public API keys'
    ],
    correct: 1,
    explanation:
      'Scoped identities ensure agents access only approved collections and operations based on policy attributes.'
  },
  {
    topic: 6,
    difficulty: 'hard',
    question:
      'How do retrieval pipelines ensure regulatory compliance when handling personal data?',
    options: [
      'By applying classification, masking, and retention policies during ingestion and serving',
      'By ignoring privacy laws',
      'By storing everything unencrypted',
      'By removing access logs'
    ],
    correct: 0,
    explanation:
      'Integrated privacy controls keep sensitive data protected and traceable across the knowledge lifecycle.'
  },
  {
    topic: 6,
    difficulty: 'hard',
    question:
      'Why configure retrieval services with latency budgets and circuit breakers?',
    options: [
      'To avoid cascading failures and maintain responsiveness under load',
      'To remove autoscaling',
      'To disable caching',
      'To increase downtime'
    ],
    correct: 0,
    explanation:
      'Latency guards and circuit breakers protect the agent experience when upstream knowledge services degrade.'
  },
  {
    topic: 6,
    difficulty: 'hard',
    question:
      'What benefit do evaluation benchmarks provide for retrieval-augmented agents?',
    options: [
      'They measure grounding accuracy, citation quality, and latency impact',
      'They automatically fix bugs',
      'They replace observability',
      'They reduce governance requirements'
    ],
    correct: 0,
    explanation:
      'Benchmarks quantify how well retrieval improves answers and ensure updates do not regress quality.'
  },
  {
    topic: 6,
    difficulty: 'hard',
    question:
      'How can teams prevent prompt injections from retrieved content?',
    options: [
      'By sanitizing retrieved text and applying guardrails before passing to the LLM',
      'By trusting all content',
      'By disabling retrieval',
      'By ignoring monitoring'
    ],
    correct: 0,
    explanation:
      'Sanitization and guardrails detect malicious patterns embedded in documents, keeping the agent on-policy.'
  },
  {
    topic: 6,
    difficulty: 'hard',
    question:
      'Why maintain detailed usage logs for knowledge retrieval operations?',
    options: [
      'To support audits, anomaly detection, and capacity planning',
      'To slow down systems',
      'To replace caching',
      'To expose secrets'
    ],
    correct: 0,
    explanation:
      'Logs reveal how knowledge is accessed, helping teams detect misuse and forecast infrastructure needs.'
  },
  {
    topic: 6,
    difficulty: 'hard',
    question:
      'What role do knowledge distillation pipelines play in NVIDIA agent ecosystems?',
    options: [
      'They compress or summarize knowledge into efficient formats for retrieval and reasoning',
      'They increase storage sizes',
      'They remove citations',
      'They disable memory'
    ],
    correct: 0,
    explanation:
      'Distillation pipelines transform large corpora into concise, high-signal artifacts that agents can use effectively.'
  },
  {
    topic: 6,
    difficulty: 'hard',
    question:
      'How does monitoring embedding drift support high-quality retrieval?',
    options: [
      'It detects when models or data changes reduce similarity accuracy',
      'It eliminates the need for retraining',
      'It disables alerts',
      'It increases downtime'
    ],
    correct: 0,
    explanation:
      'Embedding drift metrics highlight when re-embedding or model updates are necessary to maintain retrieval quality.'
  },
  {
    topic: 6,
    difficulty: 'hard',
    question:
      'Which approach keeps knowledge bases aligned with evolving business taxonomies?',
    options: [
      'Automated taxonomy synchronization and metadata updates',
      'Static schemas forever',
      'Manual spreadsheet tracking only',
      'Ignoring taxonomy changes'
    ],
    correct: 0,
    explanation:
      'Synchronization pipelines ensure metadata reflects current business structures, improving retrieval relevance.'
  }
];
