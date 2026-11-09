---
title: 'Harmful Factuality: LLMs Correcting What They Shouldn''t'
icon:
year: 2026
order: 3
authors: M. Li, **H. Zhang**, H. Fan, J. Ding, and Y. Feng
venue: Findings of the Conference of the European Chapter of the Association for Computational Linguistics (**EACL Findings**)
permalink: /publication/2026-harmful-factuality
paperurl: https://aclanthology.org/2026.findings-eacl.46/
codeurl: https://github.com/ResponsibleAILab/Harmful-Factuality-Hallucination
collection: publications
date: '2026-01-01'
date_precision: year
excerpt: A study of harmful factuality in large language models, examining how factual corrections can produce outputs
  that are true but unfaithful to the source.
doi: 10.18653/v1/2026.findings-eacl.46
abstract_source: https://aclanthology.org/2026.findings-eacl.46/
abstract: >-
  While Large Language Models (LLMs) are trained for factual accuracy, this objective can directly conflict with
  the critical demand for source fidelity. This paper isolates and formalizes this conflict as Harmful
  Factuality Hallucination (HFH): a previously overlooked failure mode where an LLM's attempt to “correct”
  perceived source errors results in an output that is factually true but unfaithful to the input. Unlike
  traditional hallucination research focused on models generating falsehoods, we investigate the harm of
  misplaced correctness. We introduce a reproducible framework to elicit and measure HFH using controlled
  entity-level perturbations (both soft, embedding-based and hard, instruction-based) paired with strategic
  entity selection. Across summarization, rephrasing, and QA tasks, our evaluation of diverse LLMs reveals that
  HFH is a prevalent behavior that worsens with model scale. We identify three underlying mechanisms and
  demonstrate that a simple instructional prompt can reduce HFH rates by approximately 50%. Our framework turns
  the abstract factuality–faithfulness tension into a measurable, actionable target for building more reliable
  LLM systems. Our code is publicly available at
  https://github.com/ResponsibleAILab/Harmful-Factuality-Hallucination.
bibtex_source: https://aclanthology.org/2026.findings-eacl.46/
bibtex: |-
  @inproceedings{li-etal-2026-harmful,
      title = "Harmful Factuality: {LLM}s Correcting What They Shouldn{'}t",
      author = "Li, Mingchen  and
        Zhang, Hanzhi  and
        Fan, Heng  and
        Ding, Junhua  and
        Feng, Yunhe",
      editor = "Demberg, Vera  and
        Inui, Kentaro  and
        Marquez, Llu{\'i}s",
      booktitle = "Findings of the {A}ssociation for {C}omputational {L}inguistics: {EACL} 2026",
      month = mar,
      year = "2026",
      address = "Rabat, Morocco",
      publisher = "Association for Computational Linguistics",
      url = "https://aclanthology.org/2026.findings-eacl.46/",
      doi = "10.18653/v1/2026.findings-eacl.46",
      pages = "896--912",
      ISBN = "979-8-89176-386-9",
      abstract = "While Large Language Models (LLMs) are trained for factual accuracy, this objective can directly conflict with the critical demand for source fidelity. This paper isolates and formalizes this conflict as Harmful Factuality Hallucination (HFH): a previously overlooked failure mode where an LLM{'}s attempt to ``correct'' perceived source errors results in an output that is factually true but unfaithful to the input. Unlike traditional hallucination research focused on models generating falsehoods, we investigate the harm of misplaced correctness. We introduce a reproducible framework to elicit and measure HFH using controlled entity-level perturbations (both soft, embedding-based and hard, instruction-based) paired with strategic entity selection. Across summarization, rephrasing, and QA tasks, our evaluation of diverse LLMs reveals that HFH is a prevalent behavior that worsens with model scale. We identify three underlying mechanisms and demonstrate that a simple instructional prompt can reduce HFH rates by approximately 50{\%}. Our framework turns the abstract factuality{--}faithfulness tension into a measurable, actionable target for building more reliable LLM systems. Our code is publicly available at \url{https://github.com/ResponsibleAILab/Harmful-Factuality-Hallucination}."
  }
abstract_license: CC BY 4.0
abstract_license_url: https://creativecommons.org/licenses/by/4.0/
redirect_to: /publications/#pub-2026-harmful-factuality
---

A study of harmful factuality in large language models, examining how factual corrections can produce outputs that are true but unfaithful to the source.
