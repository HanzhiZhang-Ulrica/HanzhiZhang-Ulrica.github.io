---
title: Towards Visual Query Segmentation in the Wild
icon:
year: 2026
order: 1
authors: B. Fan<sup>*</sup>, M. Li<sup>*</sup>, **H. Zhang**<sup>*</sup>, S. Dong, N. P. Mareedu, X. Liu, W. Shi, Y. Feng, Y. Huang,
  and H. Fan
venue: Advances in Neural Information Processing Systems (**NeurIPS**)
permalink: /publication/2026-visual-query-segmentation
paperurl: https://arxiv.org/abs/2603.08898
equal_contribution: Bing Fan, Minghao Li, and Hanzhi Zhang contributed equally.
collection: publications
date: '2026-01-01'
date_precision: year
excerpt: A benchmark for visual query segmentation in real-world video. Hanzhi co-developed **VQS-4K**, containing **4,111
  videos and more than 1.3 million frames**.
doi: 10.48550/arXiv.2603.08898
codeurl: https://github.com/VAIL-Fan/VQS
dataurl: https://huggingface.co/datasets/bf0820/VQS-4K
abstract_source: https://arxiv.org/abs/2603.08898
abstract_license: CC0
abstract_license_url: https://creativecommons.org/publicdomain/zero/1.0/
abstract: >-
  In this paper, we introduce visual query segmentation (VQS), a new paradigm of visual query localization (VQL)
  that aims to segment all pixel-level occurrences of an object of interest in an untrimmed video, given a
  visual query. Compared with existing VQL locating only the last appearance of a target using bounding boxes,
  VQS enables more comprehensive (i.e., all object occurrences) and precise (i.e., pixel-level masks)
  localization, making it more practical for real-world scenarios. To foster research on this task, we introduce
  VQS-4K, a large-scale benchmark dedicated to VQS. Specifically, VQS-4K consists of 4,111 videos with more than
  1.3 million frames, and covers a diverse set of 222 object categories. Each video is paired with a visual
  query defined by a frame outside search video and its target mask, and annotated with spatial-temporal
  masklets corresponding to the queried target. To ensure high quality, all videos in VQS-4K are manually
  labeled with meticulous inspection and iterative refinement. To our best knowledge, VQS-4K is the first
  benchmark specifically designed for VQS. Furthermore, to stimulate future research, we present a simple yet
  effective method, named VQ-SAM, which extends SAM 2 by leveraging target-specific and background distractor
  cues from the video to progressively evolve the memory through a novel multi-stage framework with an adaptive
  memory generation (AMG) module for VQS, significantly improving the performance. In our experiments on VQS-4K,
  VQ-SAM achieves promising results and surpasses existing methods, evidencing its effectiveness. With VQS-4K
  and VQ-SAM, we expect to inspire more future research and applications on VQS. Our benchmark and code are
  released at https://github.com/VAIL-Fan/VQS.
bibtex_source: https://github.com/VAIL-Fan/VQS#citation
bibtex: |-
  @inproceedings{fan2026vqs,
    title     = {Towards Visual Query Segmentation in the Wild},
    author    = {Fan, Bing and Li, Minghao and Zhang, Hanzhi and Dong, Shaohua and
                 Mareedu, Naga Prudhvi and Liu, Xiaoqiong and Shi, Weishi and
                 Feng, Yunhe and Huang, Yan and Fan, Heng},
    booktitle = {Advances in Neural Information Processing Systems},
    year      = {2026}
  }
redirect_to: /publications/#pub-2026-visual-query-segmentation
---

A benchmark for visual query segmentation in real-world video. Hanzhi co-developed **VQS-4K**, containing **4,111 videos and more than 1.3 million frames**.
