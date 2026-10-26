---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
excerpt: "Peer-reviewed publications by Hanzhi Zhang on efficient AI systems, language models, and reliable and responsible AI."
---

For full publication list, please go to my [Google Scholar profile](https://scholar.google.com/citations?user=piQO0TQAAAAJ&hl=en).

{% assign publications = site.publications | sort: 'order' %}
{% assign previous_year = 0 %}
{% for publication in publications %}
{% if publication.year != previous_year %}

---

## **{{ publication.year }}**

{% assign previous_year = publication.year %}
{% endif %}
<p><strong>{{ publication.title | escape }}</strong><br>
{{ publication.authors | markdownify | remove: '<p>' | remove: '</p>' }}<br>
{{ publication.venue | markdownify | remove: '<p>' | remove: '</p>' }}, {{ publication.year }}.<br>
{% if publication.equal_contribution %}<em>* {{ publication.equal_contribution }} </em><br>{% endif %}
{% include publication-links.html publication=publication %} <a href="{{ publication.url | relative_url }}">[details]</a></p>
{% endfor %}
