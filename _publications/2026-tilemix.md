---
title: 'TileMix: Tile-Centric Mixed-Precision Attention for LLM Inference Acceleration'
icon:
year: 2026
order: 9
publication_type: preprint
authors: '**H. Zhang**, Q. Zhang, Q. Cao, H. Fan, Y. Huang, K. Sha, and Y. Feng'
venue: arXiv preprint
permalink: /publication/2026-tilemix
redirect_to: /publications/#pub-2026-tilemix
paperurl: https://arxiv.org/abs/2608.17336
codeurl: https://github.com/HanzhiZhang-Ulrica/TileMix
collection: publications
date: '2026-08-18'
doi: 10.48550/arXiv.2608.17336
abstract_source: https://arxiv.org/abs/2608.17336
abstract: >-
  Long-context prefill in large language models (LLMs) incurs substantial computation and memory traffic because
  dense self-attention computes quadratic query-key scores. Existing methods either use a uniform low-precision
  path or select token interactions, leaving spatial precision routing over hardware-aligned score tiles outside
  fused dense attention. We introduce TileMix, a tile-centric precision-routing kernel that makes numerical
  precision an executable spatial decision over score-tile groups within fused dense attention. TileMix
  partitions the attention matrix into hardware-aligned score tiles, packs routing decisions into compact
  bitmasks, and dispatches each tile group through FP16 or INT8 score computation while both paths update a
  shared online-softmax state. Scalable precision grouping lets each routing bit govern multiple adjacent key
  tiles, preserving hardware-aligned compute tiles and compact metadata at long contexts. By routing all legal
  tile groups, TileMix preserves dense token connectivity, requires no training, and supports grouped-query
  attention, variable-length batches, and INT8 key/value caches. Across LongEval, LV-Eval, and A100 prefill
  benchmarks on LLaMA, Qwen, and Vicuna, TileMix recovers long-context quality lost under uniform INT8 and
  improves prefill throughput over FP16, yielding a controllable accuracy-efficiency frontier across model
  families. The implementation is available at https://github.com/HanzhiZhang-Ulrica/TileMix.
bibtex_source: https://arxiv.org/abs/2608.17336
bibtex: |-
  @misc{zhang2026tilemix,
      title = {{TileMix}: Tile-Centric Mixed-Precision Attention for {LLM} Inference Acceleration},
      author = {Zhang, Hanzhi and Zhang, Qiao and Cao, Qinglei and Fan, Heng and Huang, Yan and Sha, Kewei and Feng, Yunhe},
      year = {2026},
      eprint = {2608.17336},
      archivePrefix = {arXiv},
      primaryClass = {cs.AI},
      doi = {10.48550/arXiv.2608.17336},
      url = {https://arxiv.org/abs/2608.17336}
  }
---
