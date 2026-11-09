---
layout: default
title: "Publications"
permalink: /publications/
author_profile: true
excerpt: "Peer-reviewed publications by Hanzhi Zhang on efficient AI systems, language models, and reliable and responsible AI."
---
<div class="content-page publications-page">
  <h1 class="page__title">{{ page.title }}</h1>
  <div class="publication-intro"><p>For full publication list, please go to my <a href="https://scholar.google.com/citations?user=piQO0TQAAAAJ&hl=en">Google Scholar profile</a>.</p></div>
  <label class="visually-hidden" for="pubSearch">Filter publications by title, author, or year</label>
  <input type="search" class="pub-search" id="pubSearch" placeholder="Filter by title, author, or year..." aria-controls="pubList">
  <div class="section-card" id="pubList">
    {% assign publications = site.publications | sort: 'order' %}
    {% assign years = publications | group_by: 'year' %}
    {% for year in years %}
    <section class="publication-year" aria-labelledby="year-{{ year.name }}">
      <h2 id="year-{{ year.name }}">{{ year.name }}</h2>
      {% for publication in year.items %}
      <article class="pub-entry" data-pub-searchable>
        <span class="year-badge" aria-hidden="true">{{ publication.year }}</span>
        <div class="pub-title">{{ publication.title | escape }}</div>
        <div class="pub-authors">{{ publication.authors | markdownify | remove: '<p>' | remove: '</p>' }}</div>
        <div class="pub-venue">{{ publication.venue | markdownify | remove: '<p>' | remove: '</p>' }}, {{ publication.year }}.</div>
        {% if publication.equal_contribution %}<div class="pub-equal"><em>* {{ publication.equal_contribution }} </em></div>{% endif %}
        <div class="pub-actions">{% include publication-links.html publication=publication %} <a class="btn-pill btn-link" href="{{ publication.url | relative_url }}">[details]</a></div>
      </article>
      {% endfor %}
    </section>
    {% endfor %}
  </div>
  <p id="pubStatus" class="visually-hidden" role="status" aria-live="polite"></p>
  <p id="pubEmpty" hidden>No publications match your search.</p>
</div>
