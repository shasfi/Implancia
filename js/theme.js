/* Implancia — Theme Toggle (Light / Dark / System)
   Loaded on every page. Injects a small toggle into the header and
   applies the chosen theme via a data-theme attribute on <html>. */
(function () {
  'use strict';

  var STORAGE_KEY = 'implancia-theme'; // 'light' | 'dark' | 'system'
  var root = document.documentElement;

  function systemPrefersDark() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  function getStoredPreference() {
    try {
      return localStorage.getItem(STORAGE_KEY) || 'system';
    } catch (e) {
      return 'system';
    }
  }

  function applyTheme(pref) {
    var effective = pref === 'system' ? (systemPrefersDark() ? 'dark' : 'light') : pref;
    if (effective === 'dark') {
      root.setAttribute('data-theme', 'dark');
    } else {
      root.removeAttribute('data-theme');
    }
    root.setAttribute('data-theme-pref', pref);
  }

  // Apply immediately (before full DOM ready) to avoid a flash of the wrong theme.
  applyTheme(getStoredPreference());

  function setPreference(pref) {
    try { localStorage.setItem(STORAGE_KEY, pref); } catch (e) { /* ignore */ }
    applyTheme(pref);
    updateActiveButton(pref);
  }

  function labelFor(pref) {
    if (pref === 'light') return { icon: '\u2600\uFE0F', text: 'Light' };
    if (pref === 'dark') return { icon: '\uD83C\uDF19', text: 'Dark' };
    return { icon: '\uD83D\uDDA5\uFE0F', text: 'System' };
  }

  function updateActiveButton(pref) {
    var options = document.querySelectorAll('.theme-toggle-option');
    options.forEach(function (opt) {
      opt.classList.toggle('active', opt.getAttribute('data-theme-choice') === pref);
    });
    var trigger = document.getElementById('themeToggleTrigger');
    if (trigger) {
      var info = labelFor(pref);
      trigger.querySelector('.theme-toggle-icon').textContent = info.icon;
      trigger.querySelector('.theme-toggle-label').textContent = info.text;
    }
  }

  function closeMenu() {
    var wrap = document.getElementById('themeToggle');
    if (wrap) wrap.classList.remove('open');
  }

  function injectToggle() {
    var headerInner = document.querySelector('.header-inner');
    var headerActions = document.getElementById('headerActions');
    var navToggle = document.getElementById('navToggle');
    if (!headerInner || document.getElementById('themeToggle')) return;

    var wrap = document.createElement('div');
    wrap.className = 'theme-toggle';
    wrap.id = 'themeToggle';

    var trigger = document.createElement('button');
    trigger.type = 'button';
    trigger.id = 'themeToggleTrigger';
    trigger.className = 'theme-toggle-trigger';
    trigger.setAttribute('aria-haspopup', 'true');
    trigger.setAttribute('aria-expanded', 'false');
    trigger.setAttribute('aria-label', 'Change theme');
    trigger.innerHTML =
      '<span class="theme-toggle-icon">\u2600\uFE0F</span>' +
      '<span class="theme-toggle-label">Light</span>' +
      '<span class="theme-toggle-caret">\u25BC</span>';
    trigger.addEventListener('click', function (e) {
      e.stopPropagation();
      var isOpen = wrap.classList.toggle('open');
      trigger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    var menu = document.createElement('div');
    menu.className = 'theme-toggle-menu';
    menu.setAttribute('role', 'menu');

    var options = [
      { key: 'light', icon: '\u2600\uFE0F', label: 'Light', hint: null },
      { key: 'dark', icon: '\uD83C\uDF19', label: 'Dark', hint: null },
      { key: 'system', icon: '\uD83D\uDDA5\uFE0F', label: 'System', hint: 'Matches your device' }
    ];

    options.forEach(function (opt) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'theme-toggle-option';
      btn.setAttribute('data-theme-choice', opt.key);
      btn.setAttribute('role', 'menuitemradio');
      btn.innerHTML =
        '<span class="theme-toggle-option-icon">' + opt.icon + '</span>' +
        '<span class="theme-toggle-option-text">' + opt.label +
          (opt.hint ? '<span class="theme-toggle-option-hint">' + opt.hint + '</span>' : '') +
        '</span>' +
        '<span class="theme-toggle-check">\u2713</span>';
      btn.addEventListener('click', function () {
        setPreference(opt.key);
        closeMenu();
      });
      menu.appendChild(btn);
    });

    wrap.appendChild(trigger);
    wrap.appendChild(menu);

    if (headerActions && navToggle) {
      headerActions.insertBefore(wrap, navToggle);
    } else if (navToggle && navToggle.parentNode === headerInner) {
      headerInner.insertBefore(wrap, navToggle);
    } else {
      headerInner.appendChild(wrap);
    }

    document.addEventListener('click', function (e) {
      if (!wrap.contains(e.target)) closeMenu();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });

    updateActiveButton(getStoredPreference());
  }

  // Keep in sync with OS-level changes while "system" is selected.
  if (window.matchMedia) {
    var mq = window.matchMedia('(prefers-color-scheme: dark)');
    var onChange = function () {
      if (getStoredPreference() === 'system') applyTheme('system');
    };
    if (mq.addEventListener) mq.addEventListener('change', onChange);
    else if (mq.addListener) mq.addListener(onChange);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectToggle);
  } else {
    injectToggle();
  }
})();
