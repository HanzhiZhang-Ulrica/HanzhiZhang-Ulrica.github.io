---
title: 'HALO: Hallucination Analysis and Learning Optimization to Empower LLMs with Retrieval-Augmented Context for Guided
  Clinical Decision Making'
icon:
year: 2025
order: 6
authors: S. Anjum, **H. Zhang**, W. Zhou, E. J. Paek, X. Zhao, and Y. Feng
venue: 'IEEE/ACM Conference on Connected Health: Applications, Systems and Engineering Technologies (**IEEE/ACM CHASE**)'
permalink: /publication/2025-halo-hallucination-analysis
paperurl: https://arxiv.org/abs/2409.10011
codeurl: https://github.com/ResponsibleAILab/HALO
collection: publications
date: '2025-01-01'
date_precision: year
excerpt: A comprehensive framework for hallucination analysis and learning optimization that empowers Large Language Models
  with retrieval-augmented context for guided clinical decision making.
doi: 10.1145/3721201.3721385
bibtex_source: https://api.crossref.org/works/10.1145/3721201.3721385
bibtex: |-
  @inproceedings{anjum2025halo,
    author = {Anjum, Sumera and Zhang, Hanzhi and Zhou, Wenjun and Paek, Eun Jin and Zhao, Xiaopeng and Feng, Yunhe},
    title = {{HALO}: Hallucination Analysis and Learning Optimization to Empower {LLMs} with Retrieval-Augmented Context for Guided Clinical Decision Making},
    booktitle = {Proceedings of the ACM/IEEE International Conference on Connected Health: Applications, Systems and Engineering Technologies},
    series = {CHASE '25},
    year = {2025},
    pages = {187--198},
    publisher = {ACM},
    doi = {10.1145/3721201.3721385},
    url = {https://doi.org/10.1145/3721201.3721385}
  }
abstract_label: Abstract
abstract_source: https://arxiv.org/abs/2409.10011
abstract_license: CC BY 4.0
abstract_license_url: https://creativecommons.org/licenses/by/4.0/
abstract: >-
  Large language models (LLMs) have significantly advanced natural language
  processing tasks, yet they are susceptible to generating inaccurate or
  unreliable responses, a phenomenon known as hallucination. In critical
  domains such as health and medicine, these hallucinations can pose serious
  risks. This paper introduces HALO, a novel framework designed to enhance
  the accuracy and reliability of medical question-answering (QA) systems by
  focusing on the detection and mitigation of hallucinations. Our approach
  generates multiple variations of a given query using LLMs and retrieves
  relevant information from external open knowledge bases to enrich the
  context. We utilize maximum marginal relevance scoring to prioritize the
  retrieved context, which is then provided to LLMs for answer generation,
  thereby reducing the risk of hallucinations. The integration of LangChain
  further streamlines this process, resulting in a notable and robust increase
  in the accuracy of both open-source and commercial LLMs, such as Llama-3.1
  (from 44% to 65%) and ChatGPT (from 56% to 70%). This framework underscores
  the critical importance of addressing hallucinations in medical QA systems,
  ultimately improving clinical decision-making and patient care. The
  open-source HALO is available at: https://github.com/ResponsibleAILab/HALO.
redirect_to: /publications/#pub-2025-halo-hallucination-analysis
---

A comprehensive framework for hallucination analysis and learning optimization that empowers Large Language Models with retrieval-augmented context for guided clinical decision making.
