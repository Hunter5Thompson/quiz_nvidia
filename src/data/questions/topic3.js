export const topic3Questions = [
  {
    topic: 3,
    difficulty: 'easy',
    question: 'What metric is most useful for measuring overall quiz accuracy?',
    options: ['Precision', 'Recall', 'F1-score', 'Accuracy'],
    correct: 3,
    explanation: 'Accuracy captures the ratio of correct answers to total questions in a quiz scenario.'
  },
  {
    topic: 3,
    difficulty: 'medium',
    question: 'Which technique helps evaluate agent reasoning quality beyond automated metrics?',
    options: [
      'Relying solely on BLEU scores',
      'Human-in-the-loop qualitative reviews',
      'Increasing batch size',
      'Reducing dataset size'
    ],
    correct: 1,
    explanation:
      'Human-in-the-loop reviews capture reasoning nuances, hallucination risks, and policy compliance beyond automated metrics.'
  },
  {
    topic: 3,
    difficulty: 'hard',
    question: 'During tuning, why is it important to log intermediate chain-of-thought artifacts?',
    options: [
      'They shorten inference times',
      'They enable reproducible debugging and failure analysis',
      'They automatically anonymize user data',
      'They enforce deterministic behavior'
    ],
    correct: 1,
    explanation:
      'Intermediate reasoning traces help teams diagnose hallucinations, tool misuse, and guardrail violations during tuning.'
  },
  {
    topic: 3,
    difficulty: 'easy',
    question: 'Which visualization quickly shows distribution of agent scores across evaluation runs?',
    options: ['Pie chart', 'Box plot', 'Line drawing', '3D scatter without axes'],
    correct: 1,
    explanation:
      'Box plots highlight medians, quartiles, and outliers, making them ideal for understanding score dispersion.'
  },
  {
    topic: 3,
    difficulty: 'easy',
    question: 'Why should evaluation datasets contain both success and failure examples?',
    options: [
      'To inflate benchmark numbers',
      'To measure robustness across expected and edge-case scenarios',
      'To reduce annotation workload',
      'To simplify logging'
    ],
    correct: 1,
    explanation:
      'Balanced datasets reveal how agents behave in common and challenging cases, exposing weaknesses that need mitigation.'
  },
  {
    topic: 3,
    difficulty: 'easy',
    question: 'What does a confusion matrix capture during quiz evaluation?',
    options: [
      'GPU utilization per kernel',
      'Counts of true/false positives and negatives for each class',
      'Latency per HTTP request',
      'Amount of training data used'
    ],
    correct: 1,
    explanation:
      'Confusion matrices summarize prediction outcomes, showing where the agent confuses different answer classes.'
  },
  {
    topic: 3,
    difficulty: 'easy',
    question: 'Which statistic helps track improvement between evaluation cycles?',
    options: ['Mean score delta', 'RGB histogram', 'GPU fan speed', 'Keyboard layout'],
    correct: 0,
    explanation:
      'Comparing mean score deltas across iterations indicates whether changes are improving or degrading performance.'
  },
  {
    topic: 3,
    difficulty: 'easy',
    question: 'Why is annotator agreement measured when building evaluation sets?',
    options: [
      'To track GPU clock rates',
      'To ensure labels are consistent and reliable for benchmarking',
      'To speed up inference',
      'To eliminate the need for testing'
    ],
    correct: 1,
    explanation:
      'High agreement signals that humans interpret questions similarly, producing trustworthy ground truth.'
  },
  {
    topic: 3,
    difficulty: 'medium',
    question:
      'What evaluation approach measures agent performance on tasks outside the training distribution?',
    options: [
      'In-distribution accuracy only',
      'Out-of-distribution stress testing',
      'Token-level perplexity on the training set',
      'Manual GPU profiling'
    ],
    correct: 1,
    explanation:
      'OOD stress tests expose how agents generalize to unfamiliar inputs, an important safety and reliability signal.'
  },
  {
    topic: 3,
    difficulty: 'medium',
    question: 'Why include latency measurements alongside accuracy metrics?',
    options: [
      'Latency has no effect on user satisfaction',
      'To balance quality with responsiveness for production readiness',
      'To reduce dataset size',
      'To avoid logging'
    ],
    correct: 1,
    explanation:
      'Agents must meet both quality and responsiveness targets; tracking latency ensures evaluation reflects real-world constraints.'
  },
  {
    topic: 3,
    difficulty: 'medium',
    question: 'Which metric best captures calibrated confidence estimates?',
    options: ['Brier score', 'Frames per second', 'Shader throughput', 'Disk IOPS'],
    correct: 0,
    explanation:
      'Brier scores measure the accuracy of probabilistic predictions, indicating whether the agent is well-calibrated.'
  },
  {
    topic: 3,
    difficulty: 'medium',
    question:
      'How do evaluation harnesses prevent data leakage when comparing model variants?',
    options: [
      'By sharing prompts between train and test splits',
      'By enforcing strict dataset partitioning and reproducible seeds',
      'By disabling logging',
      'By ignoring dataset schemas'
    ],
    correct: 1,
    explanation:
      'Controlled partitions and seeded shuffles ensure no variant accidentally trains on evaluation data.'
  },
  {
    topic: 3,
    difficulty: 'medium',
    question:
      'What insight does plotting learning curves across evaluation rounds provide?',
    options: [
      'Hardware power consumption details',
      'Trends in performance as more training data or iterations are applied',
      'GPU driver versions',
      'Frontend layout adjustments'
    ],
    correct: 1,
    explanation:
      'Learning curves reveal diminishing returns or sudden improvements, guiding prioritization of further tuning.'
  },
  {
    topic: 3,
    difficulty: 'medium',
    question:
      'Why track both aggregate and per-category scores in NVIDIA agent evaluations?',
    options: [
      'To meet graphic design guidelines',
      'To expose whether improvements benefit all skills or just a subset',
      'To reduce the number of questions',
      'To increase manual review effort'
    ],
    correct: 1,
    explanation:
      'Category-level analysis shows if certain knowledge areas lag behind, prompting targeted data collection.'
  },
  {
    topic: 3,
    difficulty: 'medium',
    question: 'Which method helps validate that evaluation code produces repeatable results?',
    options: [
      'Running tests once informally',
      'Version controlling evaluation harnesses with automated CI checks',
      'Disabling unit tests',
      'Using undocumented scripts'
    ],
    correct: 1,
    explanation:
      'CI-backed evaluation harnesses ensure metrics are recalculated consistently and catch accidental regressions.'
  },
  {
    topic: 3,
    difficulty: 'medium',
    question:
      'What does counterfactual evaluation reveal when testing agent responses?',
    options: [
      'GPU scheduling policies',
      'How small changes to prompts or inputs alter agent decisions',
      'CSS theme compatibility',
      'Audio codec latency'
    ],
    correct: 1,
    explanation:
      'Counterfactual tests probe sensitivity to perturbations, highlighting brittle reasoning or overfitting.'
  },
  {
    topic: 3,
    difficulty: 'medium',
    question:
      'Why include qualitative rubrics for human scorers evaluating agent explanations?',
    options: [
      'To limit the number of evaluators',
      'To drive consistent scoring criteria and reduce subjectivity',
      'To avoid training evaluators',
      'To skip audits'
    ],
    correct: 1,
    explanation:
      'Shared rubrics align evaluators on what constitutes strong reasoning versus unacceptable output.'
  },
  {
    topic: 3,
    difficulty: 'hard',
    question: 'How can evaluation pipelines detect regressions introduced by new tool integrations?',
    options: [
      'Rely on manual spot checks only',
      'Add tool-specific benchmarks and compare against historical baselines',
      'Disable monitoring dashboards',
      'Ignore tool outputs in scoring'
    ],
    correct: 1,
    explanation:
      'Dedicated benchmarks for each tool ensure new integrations meet or exceed prior performance before release.'
  },
  {
    topic: 3,
    difficulty: 'hard',
    question:
      'Which statistical test helps determine if observed improvements are significant across evaluation runs?',
    options: ['T-test or Wilcoxon test', 'RGB differencing', 'FFT analysis', 'URL encoding'],
    correct: 0,
    explanation:
      'Significance tests quantify whether score differences are likely due to changes rather than random variation.'
  },
  {
    topic: 3,
    difficulty: 'hard',
    question:
      'Why should evaluation frameworks capture provenance of datasets and prompts?',
    options: [
      'To complicate governance reviews',
      'To support audits, reproducibility, and compliance checks',
      'To slow down development intentionally',
      'To avoid version control'
    ],
    correct: 1,
    explanation:
      'Knowing dataset lineage ensures evaluations can be justified and recreated when regulations or policies require evidence.'
  },
  {
    topic: 3,
    difficulty: 'hard',
    question: 'How does adversarial evaluation improve agent robustness?',
    options: [
      'By removing hard examples',
      'By exposing failure modes under intentionally challenging inputs',
      'By disabling guardrails',
      'By lowering accuracy thresholds'
    ],
    correct: 1,
    explanation:
      'Adversarial prompts simulate worst-case conditions, highlighting vulnerabilities that need mitigation.'
  },
  {
    topic: 3,
    difficulty: 'hard',
    question:
      'What role do calibration plots play in agent evaluation dashboards?',
    options: [
      'They visualize alignment between predicted confidence and actual outcomes',
      'They monitor GPU thermal envelopes',
      'They display user growth',
      'They manage deployment pipelines'
    ],
    correct: 0,
    explanation:
      'Calibration plots show whether the agent\'s confidence scores are trustworthy, guiding threshold adjustments.'
  },
  {
    topic: 3,
    difficulty: 'hard',
    question:
      'Why maintain evaluation playbooks for NVIDIA agent teams?',
    options: [
      'To document repeatable procedures for running benchmarks, triaging failures, and reporting results',
      'To store unused assets',
      'To replace monitoring dashboards',
      'To keep data scientists from collaborating'
    ],
    correct: 0,
    explanation:
      'Playbooks encode best practices so new team members can execute evaluations consistently and efficiently.'
  },
  {
    topic: 3,
    difficulty: 'hard',
    question:
      'Which governance requirement is addressed by storing signed evaluation reports?',
    options: [
      'GPU lifecycle management',
      'Auditability and traceability of release decisions',
      'Frontend localization',
      'Keyboard shortcuts'
    ],
    correct: 1,
    explanation:
      'Signed reports provide evidence that releases passed agreed-upon tests, satisfying regulatory and internal audit demands.'
  }
];
