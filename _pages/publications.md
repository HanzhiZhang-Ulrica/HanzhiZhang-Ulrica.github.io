---
layout: default
title: "Publications"
permalink: /publications/
author_profile: true
excerpt: "Publications and preprints by Hanzhi Zhang on efficient AI systems, language models, and reliable and responsible AI."
---
<div class="content-page publications-page">
  <h1 class="page__title">{{ page.title }}</h1>
  <div class="publication-intro"><p>For full publication list, please go to my <a href="https://scholar.google.com/citations?user=piQO0TQAAAAJ&hl=en">Google Scholar profile</a>.</p></div>
  <label class="visually-hidden" for="pubSearch">Filter publications by title, author, or year</label>
  <input type="search" class="pub-search" id="pubSearch" placeholder="Filter by title, author, or year..." aria-controls="pubList">
  <div id="pubList">
    {% assign publications = site.publications | sort: 'order' %}
    {% assign preprints = publications | where: 'publication_type', 'preprint' | sort: 'date' | reverse %}
    {% assign proceedings = publications | where_exp: 'publication', "publication.publication_type != 'preprint'" %}
    {% if preprints.size > 0 %}
    <section class="section-card publication-group" aria-labelledby="preprints" data-publication-group>
      <h2 id="preprints">Preprints</h2>
      {% for publication in preprints %}
        {% include editorial/publication-entry.html publication=publication %}
      {% endfor %}
    </section>
    {% endif %}
    {% if proceedings.size > 0 %}
    <section class="section-card publication-group" aria-labelledby="conference-proceedings" data-publication-group>
      <h2 id="conference-proceedings">Refereed Conference Proceedings</h2>
      {% for publication in proceedings %}
        {% include editorial/publication-entry.html publication=publication %}
      {% endfor %}
    </section>
    {% endif %}
  </div>
  <p id="pubStatus" class="visually-hidden" role="status" aria-live="polite"></p>
  <p id="pubEmpty" hidden>No publications match your search.</p>
</div>
