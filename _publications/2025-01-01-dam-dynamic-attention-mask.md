---
title: "DAM: Dynamic Attention Mask for Long-Context Large Language Model Inference Acceleration"
collection: publications
permalink: /publication/2025-01-01-dam-dynamic-attention-mask
excerpt: 'DAM introduces a breakthrough approach to long-context inference in large language models by dynamically learning adaptive attention masks at the granularity of individual attention maps.'
date: 2025-05-01
venue: 'ACL Findings 2025 (Accepted)'
paperurl: 'https://github.com/HanzhiZhang-Ulrica/DAM'
citation: 'Hanzhi Zhang, Heng Fan, Kewei Sha, Yan Huang, Yunhe Feng. (2025). "DAM: Dynamic Attention Mask for Long-Context Large Language Model Inference Acceleration." <i>Proceedings of the Findings of the Association for Computational Linguistics: ACL 2025</i>.'
---

DAM (Dynamic Attention Mask) introduces a breakthrough approach to long-context inference in large language models. Unlike traditional sparse attention methods that rely on static, predefined patterns, DAM dynamically learns adaptive attention masks at the granularity of individual attention maps. This preserves the heterogeneous patterns across different layers and heads while significantly reducing computational overhead. The key innovation is that DAM eliminates the need for fine-tuning by learning context-aware attention structures from frozen pretrained models, making it immediately applicable to existing LLMs without modification. 