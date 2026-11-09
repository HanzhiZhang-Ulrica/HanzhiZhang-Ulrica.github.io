---
title: 'AlignQuant: Tile-Aligned Mixed-Precision Quantization for Efficient LLM Generation'
year: 2026
order: 8
publication_type: preprint
authors: '**H. Zhang**, Q. Zhang, Q. Cao, H. Fan, Y. Huang, K. Sha, and Y. Feng'
venue: arXiv preprint
permalink: /publication/2026-alignquant
redirect_to: /publications/#pub-2026-alignquant
paperurl: https://arxiv.org/abs/2610.07457
codeurl: https://github.com/HanzhiZhang-Ulrica/AlignQuant
doi: 10.48550/arXiv.2610.07457
collection: publications
date: '2026-10-05'
excerpt: Tile-aligned mixed-precision post-training quantization for efficient LLM generation.
abstract_label: Abstract
abstract_source: https://arxiv.org/abs/2610.07457
abstract_license: CC0 1.0 (arXiv metadata)
abstract_license_url: https://info.arxiv.org/help/policies/submission_agreement.html#metadata-license
abstract_formatting: Mathematical notation is rendered as plain text; the implementation link is expanded to its URL.
abstract: >-
  Fine-grained mixed-precision quantization promises efficient large language
  model inference, but local precision choices can conflict with regular GPU
  storage and computation units. This precision-boundary mismatch limits the
  translation of compression into practical acceleration. We introduce
  AlignQuant, a post-training quantization method that uses GPU-compatible
  two-dimensional weight tiles as the common unit of precision allocation,
  compact storage, and execution. This shared partition lets precision follow
  sensitivity within output channels. Joint prefill/decode calibration scores
  precision reductions using projection-output perturbations weighted by
  language-model loss gradients under quantized activations. Phase-normalized
  scores prioritize higher precision for tiles important to either phase
  under a model-wide weight-storage budget. Each tile stores one selected
  representation, while phase-specialized kernels reuse the packed model and
  expand lower-bit weights for INT8 computation with 8-bit activations. Across
  four LLMs spanning 3B to 14B parameters, AlignQuant achieves up to 2.50×
  generation speedup over BF16 while preserving model quality. Evaluations
  further cover three GPUs and contexts up to 64K tokens. These results show
  that local precision flexibility and regular GPU execution can coexist
  through a shared tile unit. The implementation is available at
  https://github.com/HanzhiZhang-Ulrica/AlignQuant.
bibtex_source: https://arxiv.org/abs/2610.07457
bibtex: |-
  @misc{zhang2026alignquant,
    author = {Zhang, Hanzhi and Zhang, Qiao and Cao, Qinglei and Fan, Heng and Huang, Yan and Sha, Kewei and Feng, Yunhe},
    title = {{AlignQuant}: Tile-Aligned Mixed-Precision Quantization for Efficient {LLM} Generation},
    year = {2026},
    eprint = {2610.07457},
    archivePrefix = {arXiv},
    primaryClass = {cs.LG},
    url = {https://arxiv.org/abs/2610.07457}
  }
---

Tile-aligned mixed-precision post-training quantization for efficient LLM generation.
