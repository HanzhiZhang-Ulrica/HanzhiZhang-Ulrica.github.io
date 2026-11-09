// Interactions adapted from sbryngelson/academic-website-template (MIT).
(function () {
  'use strict';

  var root = document.documentElement;
  var navToggle = document.querySelector('.navbar-toggler');
  var navMenu = document.getElementById('navbarNav');
  var navbar = document.querySelector('.navbar');

  function closeNavigation(restoreFocus) {
    if (!navToggle || !navMenu) return;
    navMenu.classList.remove('show');
    navToggle.setAttribute('aria-expanded', 'false');
    if (restoreFocus) navToggle.focus();
  }

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      var open = navMenu.classList.toggle('show');
      navToggle.setAttribute('aria-expanded', String(open));
    });
    navMenu.addEventListener('click', function (event) {
      if (event.target.closest('a.nav-link')) closeNavigation(false);
    });
  }

  var themeToggle = document.getElementById('darkModeToggle');
  var themeIcon = document.querySelector('#themeIcon use');
  function updateThemeControl() {
    var dark = root.getAttribute('data-bs-theme') === 'dark';
    if (themeToggle) themeToggle.setAttribute('aria-pressed', String(dark));
    if (themeIcon) themeIcon.setAttribute('href', dark ? '#icon-moon' : '#icon-sun');
  }
  updateThemeControl();
  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      var next = root.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-bs-theme', next);
      try { localStorage.setItem('theme', next); } catch (_) {}
      updateThemeControl();
    });
  }

  document.querySelectorAll('[data-pub-toggle]').forEach(function (button) {
    var panel = document.getElementById(button.getAttribute('data-pub-toggle'));
    if (!panel) return;
    button.addEventListener('click', function () {
      var expanded = button.getAttribute('aria-expanded') !== 'true';
      button.setAttribute('aria-expanded', String(expanded));
      panel.hidden = !expanded;
      panel.classList.toggle('show', expanded);
    });
  });

  document.querySelectorAll('[data-copy-bib]').forEach(function (button) {
    var panel = document.getElementById(button.getAttribute('data-copy-bib'));
    var code = panel && panel.querySelector('.pub-bibtex');
    var status = panel && panel.querySelector('.copy-status');
    if (!code || !status) return;
    button.addEventListener('click', function () {
      button.disabled = true;
      button.classList.remove('copied');
      status.textContent = '';
      Promise.resolve().then(function () {
        if (!navigator.clipboard || !navigator.clipboard.writeText) throw new Error('Clipboard unavailable');
        return navigator.clipboard.writeText(code.textContent.trim());
      }).then(function () {
        button.textContent = 'Copied';
        button.classList.add('copied');
        status.textContent = 'BibTeX copied to clipboard.';
      }).catch(function () {
        button.textContent = 'Copy failed';
        status.textContent = 'Could not copy. Please select and copy the BibTeX text.';
      }).finally(function () {
        button.disabled = false;
      });
    });
  });

  var pubSearch = document.getElementById('pubSearch');
  if (pubSearch) {
    var publications = Array.from(document.querySelectorAll('[data-pub-searchable]'));
    var groups = document.querySelectorAll('[data-publication-group]');
    var pubList = document.getElementById('pubList');
    var pubStatus = document.getElementById('pubStatus');
    var pubEmpty = document.getElementById('pubEmpty');
    function normalizePublicationSearch(value) {
      return value.replace(/\s+/g, ' ').toLowerCase().trim();
    }
    function publicationAuthorAliases(bibtex) {
      // Index only authors, not the editors or abstract elsewhere in BibTeX.
      var field = bibtex.match(/^\s*author\s*=\s*(?:"((?:\\.|[^"\\])*)"|\{([^{}]*)\})/im);
      if (!field) return '';
      return (field[1] || field[2] || '').split(/\s+and\s+/i).map(function (author) {
        var name = author.trim();
        var parts = name.split(/\s*,\s*/);
        return parts.length === 2 ? name + ' | ' + parts[1] + ' ' + parts[0] : name;
      }).join(' | ');
    }
    var publicationSearchText = publications.map(function (entry) {
      var citation = entry.querySelector('.publication-citation');
      var bibtex = entry.querySelector('.pub-bibtex');
      return normalizePublicationSearch((citation ? citation.textContent : '') + ' | ' +
        publicationAuthorAliases(bibtex ? bibtex.textContent : ''));
    });
    function filterPublications() {
      var query = normalizePublicationSearch(pubSearch.value);
      var count = 0;
      publications.forEach(function (entry, index) {
        entry.hidden = !publicationSearchText[index].includes(query);
        if (!entry.hidden) count += 1;
      });
      groups.forEach(function (group) {
        group.hidden = !Array.from(group.querySelectorAll('[data-pub-searchable]')).some(function (entry) {
          return !entry.hidden;
        });
      });
      if (pubList) pubList.hidden = count === 0;
      if (pubEmpty) pubEmpty.hidden = count !== 0;
      if (pubStatus) pubStatus.textContent = count + ' of ' + publications.length + ' publications shown.';
    }
    pubSearch.addEventListener('input', filterPublications);
    filterPublications();

    function revealPublicationTarget(hash) {
      if (!hash || !hash.startsWith('#pub-')) return;
      var targetId;
      try { targetId = decodeURIComponent(hash.slice(1)); } catch (_) { return; }
      var target = document.getElementById(targetId);
      if (!target || !target.matches('[data-pub-searchable]') || !target.hidden) return;
      pubSearch.value = '';
      filterPublications();
      target.scrollIntoView({ block: 'start', behavior: 'auto' });
    }
    window.addEventListener('hashchange', function () {
      revealPublicationTarget(window.location.hash);
    });
    // Capture before the search overlay removes its result links on close.
    // Click handling also covers a target whose hash is already in the URL.
    document.addEventListener('click', function (event) {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      var link = event.target.closest('a[href]');
      if (!link || (link.target && link.target !== '_self') || link.hasAttribute('download')) return;
      var destination;
      try { destination = new URL(link.href, window.location.href); } catch (_) { return; }
      if (destination.origin === window.location.origin && destination.pathname === window.location.pathname && destination.search === window.location.search) {
        revealPublicationTarget(destination.hash);
      }
    }, true);
    revealPublicationTarget(window.location.hash);
  }

  var topButton = document.createElement('button');
  topButton.type = 'button';
  topButton.className = 'back-to-top';
  topButton.setAttribute('aria-label', 'Back to top');
  var arrow = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  arrow.setAttribute('class', 'icon');
  arrow.setAttribute('aria-hidden', 'true');
  arrow.setAttribute('focusable', 'false');
  var arrowUse = document.createElementNS('http://www.w3.org/2000/svg', 'use');
  arrowUse.setAttribute('href', '#icon-arrow-up');
  arrow.appendChild(arrowUse);
  topButton.appendChild(arrow);
  document.body.appendChild(topButton);
  topButton.addEventListener('click', function () {
    var main = document.getElementById('main');
    if (main && document.activeElement === topButton) main.focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  });
  function updateScrollControls() {
    topButton.classList.toggle('visible', window.scrollY > 400);
    if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 10);
  }
  window.addEventListener('scroll', updateScrollControls, { passive: true });
  updateScrollControls();

  var searchToggle = document.getElementById('searchToggle');
  var overlay = document.getElementById('searchOverlay');
  var searchInput = document.getElementById('searchInput');
  var results = document.getElementById('searchResults');
  var searchClose = document.getElementById('searchClose');
  var previousFocus;
  var backgroundState = [];
  var previousOverflow = '';
  var searchDataPromise;
  var requestNumber = 0;
  var debounceTimer;

  function isSearchOpen() {
    return overlay && overlay.classList.contains('open');
  }
  function openSearch() {
    if (!overlay || !searchInput || isSearchOpen()) return;
    previousFocus = document.activeElement;
    backgroundState = Array.from(document.querySelectorAll('.navbar, #main, .site-footer, .back-to-top, .skip-link')).map(function (element) {
      var state = { element: element, inert: element.inert };
      element.inert = true;
      return state;
    });
    previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    overlay.inert = false;
    overlay.setAttribute('aria-hidden', 'false');
    overlay.classList.add('open');
    searchInput.focus();
  }
  function closeSearch() {
    if (!isSearchOpen()) return;
    clearTimeout(debounceTimer);
    requestNumber += 1;
    backgroundState.forEach(function (state) { state.element.inert = state.inert; });
    backgroundState = [];
    document.body.style.overflow = previousOverflow;
    overlay.classList.remove('open');
    if (previousFocus && previousFocus.isConnected && !previousFocus.closest('[inert]')) {
      previousFocus.focus();
    } else if (searchToggle) {
      searchToggle.focus();
    }
    overlay.inert = true;
    overlay.setAttribute('aria-hidden', 'true');
    searchInput.value = '';
    results.replaceChildren();
    results.removeAttribute('aria-busy');
  }
  if (searchToggle) searchToggle.addEventListener('click', openSearch);
  if (searchClose) searchClose.addEventListener('click', closeSearch);
  if (overlay) {
    overlay.addEventListener('click', function (event) {
      if (event.target === overlay || event.target.closest('a.search-result-item')) closeSearch();
    });
  }

  document.addEventListener('keydown', function (event) {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
      event.preventDefault();
      if (isSearchOpen()) closeSearch(); else openSearch();
      return;
    }
    if (event.key === 'Escape') {
      if (isSearchOpen()) {
        event.preventDefault();
        closeSearch();
      } else if (navMenu && navMenu.classList.contains('show')) {
        event.preventDefault();
        closeNavigation(true);
      }
    }
    if (event.key === 'Tab' && isSearchOpen()) {
      var focusable = Array.from(overlay.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), [tabindex="0"]')).filter(function (element) {
        return element.getClientRects().length > 0;
      });
      var first = focusable[0];
      var last = focusable[focusable.length - 1];
      if (event.shiftKey && (document.activeElement === first || !overlay.contains(document.activeElement))) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && (document.activeElement === last || !overlay.contains(document.activeElement))) {
        event.preventDefault();
        first.focus();
      }
    }
  });
  document.addEventListener('focusin', function (event) {
    if (isSearchOpen() && !overlay.contains(event.target)) searchInput.focus();
  });

  function cleanText(value) {
    return String(value || '').replace(/\{[%{][\s\S]*?[%}]\}/g, ' ').replace(/\s+/g, ' ').trim();
  }
  function showMessage(message) {
    var messageElement = document.createElement('div');
    messageElement.className = 'search-no-results';
    messageElement.textContent = message;
    results.replaceChildren(messageElement);
  }
  function loadSearchData() {
    if (searchDataPromise) return searchDataPromise;
    var baseurl = (document.body.getAttribute('data-baseurl') || '').replace(/\/$/, '');
    searchDataPromise = fetch(baseurl + '/assets/search.json').then(function (response) {
      if (!response.ok) throw new Error('Search index request failed');
      return response.json();
    }).then(function (data) {
      if (!Array.isArray(data)) throw new Error('Search index is invalid');
      return data.map(function (item) {
        var url;
        try { url = new URL(item.url, window.location.href); } catch (_) { return null; }
        if (url.origin !== window.location.origin || !/^https?:$/.test(url.protocol)) return null;
        return { title: cleanText(item.title), content: cleanText(item.content), url: url.href };
      }).filter(function (item) { return item && item.title; });
    }).catch(function (error) {
      searchDataPromise = null;
      throw error;
    });
    return searchDataPromise;
  }
  function renderResults(query, data) {
    var lowerQuery = query.toLowerCase();
    var matches = data.filter(function (item) {
      return (item.title + ' ' + item.content).toLowerCase().includes(lowerQuery);
    });
    if (!matches.length) {
      showMessage('No results for “' + query + '”.');
      return;
    }
    var fragment = document.createDocumentFragment();
    var status = document.createElement('p');
    status.className = 'visually-hidden';
    status.textContent = matches.length + (matches.length === 1 ? ' result found.' : ' results found.');
    fragment.appendChild(status);
    matches.forEach(function (item) {
      var link = document.createElement('a');
      link.className = 'search-result-item';
      link.href = item.url;
      var title = document.createElement('div');
      title.className = 'search-result-title';
      title.textContent = item.title;
      var snippet = document.createElement('div');
      snippet.className = 'search-result-snippet';
      var matchIndex = item.content.toLowerCase().indexOf(lowerQuery);
      var start = Math.max(0, matchIndex - 45);
      var excerpt = item.content.slice(start, start + 180);
      snippet.textContent = (start ? '…' : '') + excerpt + (start + excerpt.length < item.content.length ? '…' : '');
      link.appendChild(title);
      link.appendChild(snippet);
      fragment.appendChild(link);
    });
    results.replaceChildren(fragment);
  }
  if (searchInput && results) {
    searchInput.addEventListener('input', function () {
      clearTimeout(debounceTimer);
      var request = ++requestNumber;
      var query = cleanText(searchInput.value);
      results.removeAttribute('aria-busy');
      if (!query) {
        results.replaceChildren();
        return;
      }
      debounceTimer = setTimeout(function () {
        results.setAttribute('aria-busy', 'true');
        showMessage('Searching…');
        loadSearchData().then(function (data) {
          if (request === requestNumber && isSearchOpen()) renderResults(query, data);
        }).catch(function () {
          if (request === requestNumber && isSearchOpen()) showMessage('Could not load search. Please try again.');
        }).finally(function () {
          if (request === requestNumber) results.removeAttribute('aria-busy');
        });
      }, 150);
    });
  }
})();
