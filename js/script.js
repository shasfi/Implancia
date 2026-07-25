document.addEventListener('DOMContentLoaded', function () {

  /* Mobile nav toggle */
  var navToggle = document.getElementById('navToggle');
  var mainNav = document.getElementById('mainNav');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', function () {
      mainNav.classList.toggle('open');
    });
  }

  /* Mobile dropdown (Shop) toggle */
  var dropdownParents = document.querySelectorAll('.has-dropdown > a');
  dropdownParents.forEach(function (link) {
    link.addEventListener('click', function (e) {
      if (window.innerWidth <= 900) {
        e.preventDefault();
        link.parentElement.classList.toggle('open');
      }
    });
  });

  /* Products mega-menu: hover-to-open on desktop/mouse devices, tap-to-open
     on touch devices (Products -> Orthopedic Implants -> Screws/Plates -> sub-sub links) */
  var canHover = window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  document.querySelectorAll('.has-megamenu').forEach(function (megaLi) {
    var trigger = megaLi.querySelector('.megamenu-trigger');
    var mainBtns = megaLi.querySelectorAll('.megamenu-main-link');
    var closeTimer = null;

    function openMenu() {
      clearTimeout(closeTimer);
      document.querySelectorAll('.has-megamenu.open').forEach(function (other) {
        if (other !== megaLi) other.classList.remove('open');
      });
      megaLi.classList.add('open');
    }
    function scheduleClose() {
      clearTimeout(closeTimer);
      closeTimer = setTimeout(function () { megaLi.classList.remove('open'); }, 200);
    }
    function expandMainPanel(targetBtn) {
      var panel = document.getElementById(targetBtn.getAttribute('data-target'));
      if (!panel) return;
      mainBtns.forEach(function (otherBtn) {
        var otherPanel = document.getElementById(otherBtn.getAttribute('data-target'));
        if (otherPanel && otherPanel !== panel) {
          otherPanel.classList.remove('expanded');
          otherBtn.setAttribute('aria-expanded', 'false');
        }
      });
      panel.classList.add('expanded');
      targetBtn.setAttribute('aria-expanded', 'true');
    }

    mainBtns.forEach(function (btn) {
      var panel = document.getElementById(btn.getAttribute('data-target'));
      if (!panel) return;

      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        var willExpand = !panel.classList.contains('expanded');
        mainBtns.forEach(function (otherBtn) {
          var otherPanel = document.getElementById(otherBtn.getAttribute('data-target'));
          if (otherPanel && otherPanel !== panel) {
            otherPanel.classList.remove('expanded');
            otherBtn.setAttribute('aria-expanded', 'false');
          }
        });
        panel.classList.toggle('expanded', willExpand);
        btn.setAttribute('aria-expanded', willExpand ? 'true' : 'false');
      });

      if (canHover) {
        btn.addEventListener('mouseenter', function () {
          openMenu();
          expandMainPanel(btn);
        });
      }
    });

    if (trigger) {
      trigger.addEventListener('click', function (e) {
        e.stopPropagation();
        var willOpen = !megaLi.classList.contains('open');
        document.querySelectorAll('.has-megamenu.open').forEach(function (other) {
          if (other !== megaLi) other.classList.remove('open');
        });
        megaLi.classList.toggle('open', willOpen);
      });
      if (canHover) {
        trigger.addEventListener('mouseenter', openMenu);
      }
    }

    if (canHover) {
      megaLi.addEventListener('mouseleave', scheduleClose);
      megaLi.addEventListener('mouseenter', function () { clearTimeout(closeTimer); });
    }

    megaLi.querySelectorAll('.megamenu-sub-heading').forEach(function (heading) {
      var panel = document.getElementById(heading.getAttribute('data-target'));
      if (!panel) return;
      heading.addEventListener('click', function (e) {
        e.stopPropagation();
        var willExpand = !panel.classList.contains('expanded');
        /* accordion: collapse sibling sub-sub panels within the same menu */
        megaLi.querySelectorAll('.megamenu-sub-links.expanded').forEach(function (open) {
          if (open !== panel) {
            open.classList.remove('expanded');
            var sib = megaLi.querySelector('.megamenu-sub-heading[data-target="' + open.id + '"]');
            if (sib) sib.setAttribute('aria-expanded', 'false');
          }
        });
        panel.classList.toggle('expanded', willExpand);
        heading.setAttribute('aria-expanded', willExpand ? 'true' : 'false');
      });

      if (canHover) {
        heading.addEventListener('mouseenter', function () {
          megaLi.querySelectorAll('.megamenu-sub-links.expanded').forEach(function (open) {
            if (open !== panel) {
              open.classList.remove('expanded');
              var sib = megaLi.querySelector('.megamenu-sub-heading[data-target="' + open.id + '"]');
              if (sib) sib.setAttribute('aria-expanded', 'false');
            }
          });
          panel.classList.add('expanded');
          heading.setAttribute('aria-expanded', 'true');
        });
      }
    });
  });

  /* Close the mega-menu when clicking anywhere outside it */
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.has-megamenu')) {
      document.querySelectorAll('.has-megamenu.open').forEach(function (open) {
        open.classList.remove('open');
      });
    }
  });

  /* Close mega-menu/mobile nav on Escape */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      document.querySelectorAll('.has-megamenu.open').forEach(function (open) {
        open.classList.remove('open');
      });
    }
  });

  /* Close mobile nav when a normal link is clicked */
  document.querySelectorAll('.main-nav a:not(.has-dropdown > a)').forEach(function (link) {
    link.addEventListener('click', function () {
      mainNav.classList.remove('open');
    });
  });

  /* Scroll-to-top button */
  var scrollBtn = document.getElementById('scrollTop');

  if (scrollBtn) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 400) {
        scrollBtn.classList.add('visible');
      } else {
        scrollBtn.classList.remove('visible');
      }
    });

    scrollBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* Scroll-reveal animations */
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var revealTargets = document.querySelectorAll('.reveal, .reveal-stagger');
  var hasHash = !!window.location.hash;

  if (prefersReducedMotion || !('IntersectionObserver' in window) || hasHash) {
    /* When arriving via an anchor link (e.g. from the homepage "View Details"
       button) the browser jumps straight to the target before the scroll
       animation would ever fire, which is why the section used to appear
       empty / inconsistent. In that case just show everything immediately. */
    revealTargets.forEach(function (el) { el.classList.add('is-visible'); });
  } else {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    revealTargets.forEach(function (el) { revealObserver.observe(el); });

    /* Safety net: if for any reason (fast scrolling, layout shifts, etc.)
       an element never crosses the intersection threshold, force it to
       show after a short delay instead of leaving it permanently hidden. */
    setTimeout(function () {
      revealTargets.forEach(function (el) {
        if (!el.classList.contains('is-visible')) {
          el.classList.add('is-visible');
        }
      });
    }, 1500);
  }

  /* Animated count-up for the homepage stats bar */
  var countEls = document.querySelectorAll('[data-count-to]');
  if (countEls.length) {
    var animateCount = function (el) {
      var target = parseInt(el.getAttribute('data-count-to'), 10) || 0;
      var suffix = el.getAttribute('data-suffix') || '';
      var duration = 1400;
      var startTime = null;

      var step = function (timestamp) {
        if (!startTime) startTime = timestamp;
        var progress = Math.min((timestamp - startTime) / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3); /* ease-out cubic */
        var current = Math.floor(eased * target);
        el.textContent = current.toLocaleString() + suffix;
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          el.textContent = target.toLocaleString() + suffix;
        }
      };
      window.requestAnimationFrame(step);
    };

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      countEls.forEach(function (el) {
        var target = parseInt(el.getAttribute('data-count-to'), 10) || 0;
        el.textContent = target.toLocaleString() + (el.getAttribute('data-suffix') || '');
      });
    } else {
      var countObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCount(entry.target);
            countObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.4 });
      countEls.forEach(function (el) { countObserver.observe(el); });
    }
  }

  /* Make entire homepage product cards clickable (not just the title/button) */
  document.querySelectorAll('.card-clickable[data-href]').forEach(function (card) {
    card.addEventListener('click', function (e) {
      if (e.target.closest('a')) return; // let the real link handle its own click
      window.location.href = card.getAttribute('data-href');
    });
    card.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        window.location.href = card.getAttribute('data-href');
      }
    });
  });

});