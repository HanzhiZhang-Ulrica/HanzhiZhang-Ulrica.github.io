---
title: 'TileQuant: Tile as the Precision-Allocation Unit for LLM Mixed-Precision Post-Training Quantization'
icon:
year: 2026
order: 10
publication_type: preprint
authors: '**H. Zhang**, Q. Zhang, Q. Cao, H. Fan, Y. Huang, K. Sha, and Y. Feng'
venue: arXiv preprint
permalink: /publication/2026-tilequant
redirect_to: /publications/#pub-2026-tilequant
paperurl: https://arxiv.org/abs/2611.07217
codeurl: https://github.com/HanzhiZhang-Ulrica/TileQuant
collection: publications
date: '2026-11-04'
doi: 10.48550/arXiv.2611.07217
abstract_source: https://arxiv.org/abs/2611.07217
abstract: >-
  Post-training quantization (PTQ) reduces large language model (LLM) deployment costs, but preserving quality
  requires accounting for uneven weight sensitivity. Uniform PTQ uses one weight bit-width, importance-aware PTQ
  adjusts scales or reconstructs weights within that width, and column-wise mixed precision retains selected
  columns at higher precision. However, sensitivity varies within columns, so whole-column retention also
  protects less sensitive weights, while runtime outlier detection adds decoding overhead. We therefore
  introduce TileQuant, a training-free framework that assigns precision to hardware-aligned 2D weight tiles.
  Offline calibration provides input-activation-aware scoring from forward statistics for lower calibration cost
  and gradient-informed scoring from loss sensitivity for stronger quality preservation. Within each
  projection's retention budget, the highest-scoring tiles remain at 16-bit and the rest use 8-bit. The
  resulting map guides reconstruction into compact weight buffers, which the kernel reuses for native integer
  and 16-bit computation with local accumulation to reduce memory traffic. Experiments show that TileQuant
  reaches 2.66x the original model's generation throughput. Across language modeling, reasoning, long-context
  retrieval, and question answering, it preserves quality and surpasses quantized and original models on
  multiple tasks. These results support selecting precision units that capture local sensitivity while enabling
  efficient hardware execution. The implementation is: https://github.com/HanzhiZhang-Ulrica/TileQuant
bibtex_source: https://arxiv.org/abs/2611.07217
bibtex: |-
  @misc{zhang2026tilequanttileprecisionallocationunit,
        title={TileQuant: Tile as the Precision-Allocation Unit for LLM Mixed-Precision Post-Training Quantization},
        author={Hanzhi Zhang and Qiao Zhang and Qinglei Cao and Heng Fan and Yan Huang and Kewei Sha and Yunhe Feng},
        year={2026},
        eprint={2611.07217},
        archivePrefix={arXiv},
        primaryClass={cs.LG},
        url={https://arxiv.org/abs/2611.07217},
  }
---
