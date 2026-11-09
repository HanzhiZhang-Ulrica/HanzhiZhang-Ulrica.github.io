---
title: 'DAM: Dynamic Attention Mask for Long-Context Large Language Model Inference Acceleration'
icon:
year: 2025
order: 4
authors: '**H. Zhang**, H. Fan, K. Sha, Y. Huang, and Y. Feng'
venue: Findings of the Annual Meeting of the Association for Computational Linguistics (**ACL Findings**)
permalink: /publication/2025-dam-dynamic-attention-mask
paperurl: https://aclanthology.org/2025.findings-acl.242/
codeurl: https://github.com/HanzhiZhang-Ulrica/DAM
collection: publications
date: '2025-01-01'
date_precision: year
excerpt: A breakthrough approach to long-context inference in large language models by dynamically learning adaptive attention
  masks at the granularity of individual attention maps.
doi: 10.18653/v1/2025.findings-acl.242
abstract_source: https://aclanthology.org/2025.findings-acl.242/
abstract: >-
  Long-context understanding is crucial for many NLP applications, yet transformers struggle with efficiency due
  to the quadratic complexity of self-attention. Sparse attention methods alleviate this cost but often impose
  static, predefined masks, failing to capture heterogeneous attention patterns. This results in suboptimal
  token interactions, limiting adaptability and retrieval accuracy in long-sequence tasks. This work introduces
  a dynamic sparse attention mechanism that assigns adaptive masks at the attention-map level, preserving
  heterogeneous patterns across layers and heads. Unlike existing approaches, our method eliminates the need for
  fine-tuning and predefined mask structures while maintaining computational efficiency. By learning
  context-aware attention structures, it achieves high alignment with full-attention models, ensuring minimal
  performance degradation while reducing memory and compute overhead. This approach provides a scalable
  alternative to full attention, enabling the practical deployment of large-scale Large Language Models (LLMs)
  without sacrificing retrieval performance. DAM is available at: https://github.com/HanzhiZhang-Ulrica/DAM.
bibtex_source: https://aclanthology.org/2025.findings-acl.242.bib
bibtex: |-
  @inproceedings{zhang-etal-2025-dam,
      title = "{DAM}: Dynamic Attention Mask for Long-Context Large Language Model Inference Acceleration",
      author = "Zhang, Hanzhi  and
        Fan, Heng  and
        Sha, Kewei  and
        Huang, Yan  and
        Feng, Yunhe",
      editor = "Che, Wanxiang  and
        Nabende, Joyce  and
        Shutova, Ekaterina  and
        Pilehvar, Mohammad Taher",
      booktitle = "Findings of the {A}ssociation for {C}omputational {L}inguistics: {ACL} 2025",
      month = jul,
      year = "2025",
      address = "Vienna, Austria",
      publisher = "Association for Computational Linguistics",
      url = "https://aclanthology.org/2025.findings-acl.242/",
      doi = "10.18653/v1/2025.findings-acl.242",
      pages = "4663--4676",
      ISBN = "979-8-89176-256-5"
  }
abstract_license: CC BY 4.0
abstract_license_url: https://creativecommons.org/licenses/by/4.0/
redirect_to: /publications/#pub-2025-dam-dynamic-attention-mask
---

A breakthrough approach to long-context inference in large language models by dynamically learning adaptive attention masks at the granularity of individual attention maps.
