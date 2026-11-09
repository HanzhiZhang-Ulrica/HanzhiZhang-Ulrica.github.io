---
title: 'Poly-FEVER: A Multilingual Hallucination Detection Benchmark'
icon:
year: 2026
order: 2
authors: '**H. Zhang**, S. Anjum, H. Fan, W. Zheng, Y. Huang, and Y. Feng'
venue: Findings of the Association for Computational Linguistics (**EMNLP Findings**)
permalink: /publication/2025-poly-fever-multilingual-fact-verification
paperurl: https://aclanthology.org/2026.findings-emnlp.540/
dataurl: https://huggingface.co/datasets/HanzhiZhang/Poly-FEVER
collection: publications
date: '2026-10-01'
date_precision: month
excerpt: A comprehensive multilingual benchmark with 77,973 labeled factual claims spanning 11 languages for fact verification
  and hallucination detection in Large Language Models.
doi: 10.18653/2026.findings-emnlp.540
abstract_source: https://aclanthology.org/2026.findings-emnlp.540/
abstract_license: CC BY 4.0
abstract_license_url: https://creativecommons.org/licenses/by/4.0/
abstract: >-
  We present Poly-FEVER, an open-source large-scale multilingual benchmark for hallucination detection through
  controlled factuality judgment in large language models. Poly-FEVER extends FEVER, Climate-FEVER, and SciFact
  to 77,973 Supported/Refuted claims aligned across 11 languages. We augment each claim with topic metadata from
  a 22-topic LDA model, enabling topic-aware analysis of multilingual factuality behavior. Translations are
  produced with Google Cloud Translation and validated by a targeted human audit, GEMBA, and COMETKiwi. We
  benchmark ChatGPT-3.5, LLaMA-2/3, Phi-3.5, and Mistral across three prompt families and evaluate robustness to
  model-generated rephrasing. We further analyze resource imbalance using web presence as a proxy for online
  claim availability, and evaluate retrieval-augmented factuality judgment with DPR over Wikipedia. Results show
  pronounced cross-lingual disparities under aligned claims, with stronger accuracy in high-resource languages
  such as English and Chinese and weaker accuracy in lower-resource languages such as Amharic and Tamil.
  Topic-aware prompting and retrieval provide selective gains, especially in Arabic and Amharic, while their
  effects vary across languages and can conflict with model priors. Poly-FEVER establishes a rigorous resource
  for responsible, language-adaptive hallucination detection and language-sensitive factuality evaluation. The
  proposed Poly-FEVER is available at: https://huggingface.co/datasets/HanzhiZhang/Poly-FEVER.
bibtex_source: https://aclanthology.org/2026.findings-emnlp.540/
bibtex: |-
  @inproceedings{zhang-etal-2026-poly,
      title = "Poly-{FEVER}: A Multilingual Hallucination Detection Benchmark",
      author = "Zhang, Hanzhi  and
        Anjum, Sumera  and
        Fan, Heng  and
        Zheng, Weijian  and
        Huang, Yan  and
        Feng, Yunhe",
      editor = "Lee, Hung-Yi  and
        Dev, Sunipa  and
        Li, Jessy  and
        Elliott, Desmond",
      booktitle = "Findings of the {A}ssociation for {C}omputational {L}inguistics: {EMNLP} 2026",
      month = oct,
      year = "2026",
      address = "Budapest, Hungary",
      publisher = "Association for Computational Linguistics",
      url = "https://aclanthology.org/2026.findings-emnlp.540/",
      doi = "10.18653/2026.findings-emnlp.540",
      pages = "11353--11369",
      ISBN = "979-8-89176-462-0",
      abstract = "We present Poly-FEVER, an open-source large-scale multilingual benchmark for hallucination detection through controlled factuality judgment in large language models. Poly-FEVER extends FEVER, Climate-FEVER, and SciFact to 77,973 Supported/Refuted claims aligned across 11 languages. We augment each claim with topic metadata from a 22-topic LDA model, enabling topic-aware analysis of multilingual factuality behavior. Translations are produced with Google Cloud Translation and validated by a targeted human audit, GEMBA, and COMETKiwi. We benchmark ChatGPT-3.5, LLaMA-2/3, Phi-3.5, and Mistral across three prompt families and evaluate robustness to model-generated rephrasing. We further analyze resource imbalance using web presence as a proxy for online claim availability, and evaluate retrieval-augmented factuality judgment with DPR over Wikipedia. Results show pronounced cross-lingual disparities under aligned claims, with stronger accuracy in high-resource languages such as English and Chinese and weaker accuracy in lower-resource languages such as Amharic and Tamil. Topic-aware prompting and retrieval provide selective gains, especially in Arabic and Amharic, while their effects vary across languages and can conflict with model priors. Poly-FEVER establishes a rigorous resource for responsible, language-adaptive hallucination detection and language-sensitive factuality evaluation. The proposed Poly-FEVER is available at: https://huggingface.co/datasets/HanzhiZhang/Poly-FEVER."
  }
redirect_to: /publications/#pub-2025-poly-fever-multilingual-fact-verification
---

A comprehensive multilingual benchmark with 77,973 labeled factual claims spanning 11 languages for fact verification and hallucination detection in Large Language Models.
