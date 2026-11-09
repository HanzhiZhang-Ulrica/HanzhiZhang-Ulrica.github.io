---
title: 'TriAttention: Unified Sparse Mixed-Precision Attention for Long-Context LLM Inference'
year: 2026
order: 11
publication_type: preprint
authors: '**H. Zhang**, Q. Zhang, Q. Cao, H. Fan, Y. Huang, K. Sha, and Y. Feng'
venue: arXiv preprint
permalink: /publication/2026-triattention
redirect_to: /publications/#pub-2026-triattention
paperurl: https://arxiv.org/abs/2611.07256
codeurl: https://github.com/HanzhiZhang-Ulrica/TriAttention
doi: 10.48550/arXiv.2611.07256
collection: publications
date: '2026-11-05'
excerpt: Unified sparse mixed-precision attention for long-context LLM inference.
abstract_label: Abstract
abstract_source: https://arxiv.org/abs/2611.07256
abstract_license: CC0 1.0 (arXiv metadata)
abstract_license_url: https://info.arxiv.org/help/policies/submission_agreement.html#metadata-license
abstract: >-
  Sparsity and quantization reduce the cost of attention by skipping
  interactions and lowering the precision of those retained. However, useful
  interactions differ in their precision requirements: some tolerate
  low-precision scores while remaining sensitive to removal. We therefore
  introduce TriAttention, which assigns query-key (QK) tiles to skipping,
  4-bit, or 8-bit computation, using 4-bit to retain quantization-tolerant
  interactions at lower cost. To represent compactly, we encode each head's
  computation regions with two diagonal-distance boundaries, keeping policy
  storage independent of context length. Offline calibration then evaluates
  candidate boundary pairs using normalized projected-output errors and
  complete-tile execution costs. Using these measurements, a model-wide
  allocator selects each head's boundaries to minimize calibration error
  under a shared computation budget. During prefill, the selected boundaries
  generate precision-grouped traversals for a fused kernel that skips omitted
  tiles and combines contributions from both QK precisions into one normalized
  attention output. The quantized keys and values prepared during prefill are
  then reused in a compressed key-value (KV) cache for decoding, reducing
  repeated reads of prompt data. Experiments show that TriAttention achieves
  end-to-end generation speedups of up to 7.88x over the Torch attention and
  2.65x over the BF16 baseline. Meanwhile, TriAttention maintains quality
  comparable to the original models on general-purpose and long-context
  tasks. These results show how a compact retention-and-precision policy
  translates local sensitivities into attention computation and repeated
  KV-cache access. The implementation is
  https://github.com/HanzhiZhang-Ulrica/TriAttention.
bibtex_source: https://arxiv.org/abs/2611.07256
bibtex: |-
  @misc{zhang2026triattention,
    author = {Zhang, Hanzhi and Zhang, Qiao and Cao, Qinglei and Fan, Heng and Huang, Yan and Sha, Kewei and Feng, Yunhe},
    title = {{TriAttention}: Unified Sparse Mixed-Precision Attention for Long-Context {LLM} Inference},
    year = {2026},
    eprint = {2611.07256},
    archivePrefix = {arXiv},
    primaryClass = {cs.LG},
    url = {https://arxiv.org/abs/2611.07256}
  }
---

Unified sparse mixed-precision attention for long-context LLM inference.
