/* =========================================================
   IMPLANCIA — ADD TO CART + WHATSAPP CHECKOUT
   ---------------------------------------------------------
   Real multi-product cart (persisted in localStorage) with a
   header cart button + slide-out drawer, and a full cart page
   (cart.html). Checkout does not process online payment —
   instead it hands the customer's details + itemized cart off
   to WhatsApp, pre-filled, so the visitor only has to hit Send.
   This matches how orthopedic implant distributors/hospitals
   actually place orders (sales-assisted, not self-checkout).
========================================================= */

(function () {
  var STORAGE_KEY = 'implancia_cart_list';
  var WHATSAPP_NUMBER = '923073838115'; // store's WhatsApp number, digits only, country code first
  var MOQ = 1; // allow simple per-product quantity changes from the shop cards
  var SHIPPING_RATE_PER_KG = 20; // USD — example air-freight rate, Pakistan -> USA (confirm exact rate with courier at checkout)

  function getItems() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch (e) {
      return [];
    }
  }

  function saveItems(items) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    renderBadge();
    renderDrawerList();
    if (typeof window.renderCartPage === 'function') window.renderCartPage();
  }

  function addItem(item) {
    var items = getItems();
    var existing = items.find(function (i) {
      return i.id === item.id && i.material === item.material &&
             i.diameter === item.diameter && i.length === item.length &&
             i.option4 === item.option4;
    });
    if (existing) {
      existing.qty = (existing.qty || 1) + (item.qty || 1);
    } else {
      item.qty = Math.max(1, parseInt(item.qty, 10) || 1);
      items.push(item);
    }
    saveItems(items);
    return items;
  }

  function updateQty(index, qty) {
    var items = getItems();
    if (!items[index]) return;
    qty = Math.max(1, parseInt(qty, 10) || 1);
    items[index].qty = qty;
    saveItems(items);
  }

  function removeItem(index) {
    var items = getItems();
    items.splice(index, 1);
    saveItems(items);
  }

  function clearItems() {
    saveItems([]);
  }

  function getCount() {
    return getItems().reduce(function (sum, i) { return sum + (i.qty || 1); }, 0);
  }

  function getSubtotal() {
    return getItems().reduce(function (sum, i) {
      var price = parseFloat(String(i.price || '0').replace(/[^0-9.]/g, '')) || 0;
      return sum + price * (i.qty || 1);
    }, 0);
  }

  function getTotalWeightKg() {
    return getItems().reduce(function (sum, i) {
      var weight = parseFloat(i.weight) || 0;
      return sum + weight * (i.qty || 1);
    }, 0);
  }

  function getShippingEstimate() {
    return getTotalWeightKg() * SHIPPING_RATE_PER_KG;
  }

  /* ---------- UI: badge on the header cart button ---------- */
  function renderBadge() {
    var count = getCount();
    document.querySelectorAll('.cart-count').forEach(function (el) {
      el.textContent = count;
      el.style.display = count > 0 ? 'inline-flex' : 'none';
    });
  }

  /* ---------- UI: inject header cart button (once per page, product pages only) ---------- */
  function injectHeaderButton() {
    var path = window.location.pathname.split('/').pop() || 'index.html';
    var cartRelevantPages = ['products.html', 'product-detail.html', 'cart.html'];
    if (cartRelevantPages.indexOf(path) === -1) return;

    var cta = document.querySelector('.header-cta');
    var headerActions = document.getElementById('headerActions');
    var navToggle = document.getElementById('navToggle');
    var headerInner = document.querySelector('.header-inner');
    if (!headerInner || document.getElementById('cartListBtn')) return;

    var btn = document.createElement('button');
    btn.type = 'button';
    btn.id = 'cartListBtn';
    btn.className = 'cart-list-btn';
    btn.setAttribute('aria-label', 'View cart');
    btn.innerHTML = '&#128722; <span class="cart-list-btn-label">Cart</span> <span class="cart-count">0</span>';
    btn.addEventListener('click', toggleDrawer);

    if (headerActions && navToggle) {
      headerActions.insertBefore(btn, navToggle);
    } else if (cta) {
      headerInner.insertBefore(btn, cta);
    } else {
      headerInner.appendChild(btn);
    }
  }

  /* ---------- UI: slide-out drawer with the current cart ---------- */
  function buildDrawer() {
    if (document.getElementById('cartDrawer')) return;

    var overlay = document.createElement('div');
    overlay.id = 'cartDrawerOverlay';
    overlay.className = 'cart-drawer-overlay';
    overlay.addEventListener('click', closeDrawer);

    var drawer = document.createElement('aside');
    drawer.id = 'cartDrawer';
    drawer.className = 'cart-drawer';
    drawer.setAttribute('aria-hidden', 'true');
    drawer.innerHTML =
      '<div class="cart-drawer-header">' +
        '<h3>Your Cart</h3>' +
        '<button type="button" class="cart-drawer-close" aria-label="Close">&times;</button>' +
      '</div>' +
      '<div id="cartDrawerList" class="cart-drawer-list"></div>' +
      '<div class="cart-drawer-footer">' +
        '<button type="button" id="cartDrawerClear" class="btn btn-outline btn-sm">Clear Cart</button>' +
        '<a href="cart.html" class="btn btn-primary btn-sm">View Cart &amp; Checkout</a>' +
      '</div>';

    document.body.appendChild(overlay);
    document.body.appendChild(drawer);

    drawer.querySelector('.cart-drawer-close').addEventListener('click', closeDrawer);
    document.getElementById('cartDrawerClear').addEventListener('click', function () {
      clearItems();
    });
  }

  function renderDrawerList() {
    var list = document.getElementById('cartDrawerList');
    if (!list) return;
    var items = getItems();

    if (items.length === 0) {
      list.innerHTML = '<p class="cart-drawer-empty">Your cart is empty. Browse the <a href="products.html">shop</a> and click &ldquo;Add to Cart&rdquo; on any product.</p>';
      return;
    }

    list.innerHTML = items.map(function (item, idx) {
      return (
        '<div class="cart-drawer-item">' +
          '<div class="cart-drawer-item-info">' +
            '<strong>' + escapeHtml(item.name) + '</strong>' +
            '<span>' + [item.material, item.diameter, item.length, item.option4].filter(Boolean).map(escapeHtml).join(' &middot; ') + '</span>' +
            '<span>Qty: ' + item.qty + (item.price ? ' &middot; ' + escapeHtml(item.price) : '') + '</span>' +
          '</div>' +
          '<button type="button" class="cart-drawer-remove" data-idx="' + idx + '" aria-label="Remove item">&times;</button>' +
        '</div>'
      );
    }).join('');

    list.querySelectorAll('.cart-drawer-remove').forEach(function (btn) {
      btn.addEventListener('click', function () {
        removeItem(parseInt(btn.getAttribute('data-idx'), 10));
      });
    });
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function openDrawer() {
    var drawer = document.getElementById('cartDrawer');
    var overlay = document.getElementById('cartDrawerOverlay');
    if (!drawer) return;
    renderDrawerList();
    drawer.classList.add('open');
    overlay.classList.add('open');
    drawer.setAttribute('aria-hidden', 'false');
  }

  function closeDrawer() {
    var drawer = document.getElementById('cartDrawer');
    var overlay = document.getElementById('cartDrawerOverlay');
    if (!drawer) return;
    drawer.classList.remove('open');
    overlay.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
  }

  function toggleDrawer() {
    var drawer = document.getElementById('cartDrawer');
    if (drawer && drawer.classList.contains('open')) {
      closeDrawer();
    } else {
      openDrawer();
    }
  }

  /* ---------- Toast confirmation ---------- */
  function showToast(message) {
    var toast = document.querySelector('.cart-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'cart-toast';
      toast.setAttribute('role', 'status');
      toast.setAttribute('aria-live', 'polite');
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('visible');
    clearTimeout(showToast._t);
    showToast._t = setTimeout(function () { toast.classList.remove('visible'); }, 2400);
  }

  /* ---------- Wire up any "Add to Cart" buttons found on the page ---------- */
  function wireAddToCartButtons() {
    document.querySelectorAll('.add-to-cart-btn').forEach(function (btn) {
      if (btn._cartWired) return;
      btn._cartWired = true;
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        var selectedQty = Math.max(1, parseInt(btn.getAttribute('data-qty'), 10) || 1);
        var item = {
          id: btn.getAttribute('data-product-id') || btn.getAttribute('data-product-name'),
          name: btn.getAttribute('data-product-name') || 'Item',
          material: btn.getAttribute('data-material') || '',
          diameter: btn.getAttribute('data-diameter') || '',
          length: btn.getAttribute('data-length') || '',
          option4: btn.getAttribute('data-option4') || '',
          price: btn.getAttribute('data-price') || '',
          image: btn.getAttribute('data-image') || '',
          weight: btn.getAttribute('data-weight') || '0',
          qty: selectedQty
        };
        addItem(item);
        showToast(item.name + ' added to cart');
        openDrawer();
      });
    });
  }

  /* ---------- Build the WhatsApp checkout link from the current cart ---------- */
  function buildWhatsAppLink(customer) {
    var items = getItems();
    var lines = [];
    lines.push('Hello Implancia, I would like to place an order:');
    lines.push('');
    items.forEach(function (item, i) {
      lines.push((i + 1) + '. ' + item.name +
        (item.material ? ' — ' + item.material : '') +
        (item.diameter ? ', ' + item.diameter : '') +
        (item.length ? ', ' + item.length : '') +
        (item.option4 ? ', ' + item.option4 : '') +
        ' — Qty: ' + item.qty +
        (item.price ? ' — ' + item.price + ' each' : ''));
    });
    var subtotal = getSubtotal();
    if (subtotal > 0) {
      lines.push('');
      lines.push('Estimated Subtotal: $' + subtotal.toFixed(2));
    }
    var shipping = getShippingEstimate();
    if (shipping > 0) {
      lines.push('Estimated USA Shipping (~' + getTotalWeightKg().toFixed(1) + 'kg @ $' + SHIPPING_RATE_PER_KG + '/kg): $' + shipping.toFixed(2));
      lines.push('Estimated Grand Total: $' + (subtotal + shipping).toFixed(2));
    }
    lines.push('');
    lines.push('My details:');
    lines.push('Name: ' + (customer.name || ''));
    lines.push('Company / Hospital: ' + (customer.company || 'N/A'));
    lines.push('Role: ' + (customer.role || 'N/A'));
    lines.push('Email: ' + (customer.email || 'N/A'));
    if (customer.notes) {
      lines.push('');
      lines.push('Notes: ' + customer.notes);
    }

    return 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(lines.join('\n'));
  }

  /* ---------- Wire up generic static WhatsApp CTAs (Get Started, Contact Us, etc.) ---------- */
  function wireGenericWhatsAppCtas() {
    document.querySelectorAll('a.whatsapp-cta[data-message]').forEach(function (el) {
      var msg = el.getAttribute('data-message');
      el.setAttribute('href', 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(msg));
      el.setAttribute('target', '_blank');
      el.setAttribute('rel', 'noopener');
    });
  }

  window.ImplanciaCart = {
    getItems: getItems,
    addItem: addItem,
    updateQty: updateQty,
    removeItem: removeItem,
    clearItems: clearItems,
    getCount: getCount,
    getSubtotal: getSubtotal,
    getTotalWeightKg: getTotalWeightKg,
    getShippingEstimate: getShippingEstimate,
    SHIPPING_RATE_PER_KG: SHIPPING_RATE_PER_KG,
    openDrawer: openDrawer,
    showToast: showToast,
    refreshButtons: wireAddToCartButtons,
    buildWhatsAppLink: buildWhatsAppLink,
    WHATSAPP_NUMBER: WHATSAPP_NUMBER,
    MOQ: MOQ
  };

  document.addEventListener('DOMContentLoaded', function () {
    injectHeaderButton();
    buildDrawer();
    renderBadge();
    renderDrawerList();
    wireAddToCartButtons();
    wireGenericWhatsAppCtas();
  });
})();
