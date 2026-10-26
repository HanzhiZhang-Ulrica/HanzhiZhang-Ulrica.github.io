---
layout: single
title: "🔬 Research"
permalink: /research/
author_profile: true
excerpt: "Efficient AI systems, hardware-aware LLM inference, and reliable and responsible AI."
---
Hanzhi's research primarily focuses on **⚡ Efficient AI Systems** and **🤖 Reliable and Responsible AI**.

## ⚡ Efficient AI Systems

Her primary research direction spans **hardware-aware LLM inference, sparse and mixed-precision computation, post-training quantization, GPU optimization, and HPC**. She conducts large-scale GPU experiments on **ALCF Polaris** and **TACC Lonestar6**.

### DAM: Adaptive Sparse Attention

**DAM: Dynamic Attention Mask for Long-Context Large Language Model Inference Acceleration** develops adaptive masks at the level of individual attention maps, preserving different attention patterns across layers and heads. The work explores efficient long-context inference without fine-tuning or predefined mask structures.

**ACL Findings 2025** · [Paper](https://aclanthology.org/2025.findings-acl.242/) · [Code](https://github.com/HanzhiZhang-Ulrica/DAM)

## 🤖 Reliable and Responsible AI

### Poly-FEVER: Multilingual Fact Verification

**Poly-FEVER** provides **77,973 labeled factual claims across 11 languages** for studying fact verification and hallucination detection in large language models. Hanzhi led the development of this benchmark to support research on reliable AI across languages.

**EMNLP Findings 2026** · [Paper](https://arxiv.org/abs/2503.16541) · [Dataset](https://huggingface.co/datasets/HanzhiZhang/Poly-FEVER)

### VQS-4K: Visual Query Segmentation in the Wild

**Towards Visual Query Segmentation in the Wild** introduces a benchmark with **4,111 videos and more than 1.3 million frames**. Hanzhi co-developed **VQS-4K** to study visual query segmentation in real-world video.

**NeurIPS 2026** · **Co-first author**, with Bing Fan and Minghao Li (*equal contribution*) · [Paper](https://arxiv.org/abs/2603.08898)

### D2SO: Safety-Critical Perception

**D2SO** investigates the detection of distant and small objects in vision-based autonomous vehicle systems, supporting safer perception in challenging driving environments.

**IEEE MOST 2025** · [Paper](https://doi.org/10.1109/MOST65065.2025.00013)

### Hallucination Analysis and Scientific Data

Her collaborative work includes **HALO**, which studies hallucination analysis and retrieval-augmented context for clinical decision making; **Harmful Factuality**, which examines how factual corrections can produce outputs that are true but unfaithful to the source; and **ByteScience**, which bridges scientific literature and structured data with language models.

[📚 Explore all peer-reviewed publications]({{ '/publications/' | relative_url }})

## 🤝 Grants, Computing Allocations & Collaborations

### Amazon Research Awards: TileRoute-Trainium · 2026–present

Hanzhi serves as **lead student researcher and proposal co-writer** on **TileRoute-Trainium**, an Amazon Research Awards project led by **Dr. Yunhe Feng** at UNT. In collaboration with **Qian Qu**, an Amazon scientist, she investigates efficient, mixed-precision LLM inference using **AWS Trainium accelerators**.

### Oak Ridge National Laboratory: AAIMS Group · 2026–present

As a **Research Collaborator** in the **Analytics and AI Methods at Scale (AAIMS) Group**, she works with **Dr. Emily Herron** and **Dr. Aditya Kashi** in **Dr. Feiyi Wang's group** on AI-based **3D boundary-to-domain operator learning for partial differential equations**. The ongoing collaboration is conducted remotely.

### ALCF Polaris Computing Allocations · 2024–present

Hanzhi serves as **PI** for computing allocations on **ALCF Polaris**, with **5,000 node-hours per allocation**, for the project *Large Language Models' Hallucination Detection and Mitigation Ability across Multi Languages*.

### Argonne Training Program on Extreme-Scale Computing · Summer 2024

She was competitively selected for **ATPESC 2024**, an intensive two-week program covering GPU computing, parallel programming models, and performance optimization on leadership-class supercomputers.

Her research training resources include a [TACC Lonestar6 HPC tutorial]({{ '/posts/2025/03/04/TACC_Longstar6_instruction/' | relative_url }}) and a [Docker setup tutorial]({{ '/posts/2023/10/16/docker_setup_instruction/' | relative_url }}), developed to help junior researchers conduct experiments independently.
