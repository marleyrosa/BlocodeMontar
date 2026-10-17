/*
 * Side cart: adds products without leaving the page and refreshes the
 * cart-drawer section through the Section Rendering API. Without JavaScript
 * the forms and links keep working and go to /cart.
 */
(function () {
  var SECTION = 'cart-drawer';
  var root = window.Shopify && Shopify.routes ? Shopify.routes.root : '/';
  var lastFocus = null;

  function drawer() {
    return document.querySelector('[data-cart-drawer]');
  }

  function updateCount(count) {
    document.querySelectorAll('.site-header__count').forEach(function (el) {
      el.textContent = count;
      el.hidden = Number(count) === 0;
    });
  }

  function render(html) {
    var doc = new DOMParser().parseFromString(html, 'text/html');
    var fresh = doc.querySelector('[data-cart-drawer]');
    var current = drawer();
    if (!fresh || !current) return;
    current.innerHTML = fresh.innerHTML;
    updateCount(fresh.getAttribute('data-count'));
  }

  function open(added) {
    var el = drawer();
    if (!el) return;
    lastFocus = document.activeElement;
    el.hidden = false;
    document.body.classList.add('cart-drawer-open');
    var note = el.querySelector('[data-cart-drawer-added]');
    if (note) note.hidden = !added;
    var panel = el.querySelector('.cart-drawer__panel');
    if (panel) panel.focus();
  }

  function close() {
    var el = drawer();
    if (!el || el.hidden) return;
    el.hidden = true;
    document.body.classList.remove('cart-drawer-open');
    if (lastFocus) lastFocus.focus();
  }

  function busy(on) {
    var el = drawer();
    if (el) el.classList.toggle('is-busy', on);
  }

  function post(url, body) {
    return fetch(root + url, {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: body
    }).then(function (res) {
      return res.json().then(function (data) {
        if (!res.ok) throw data;
        return data;
      });
    });
  }

  function refresh() {
    return fetch(root + '?sections=' + SECTION)
      .then(function (res) { return res.json(); })
      .then(function (data) { render(data[SECTION]); });
  }

  document.addEventListener('submit', function (event) {
    var form = event.target;
    var action = form.getAttribute('action') || '';
    // Forms with their own handler (the product page) call CartDrawer.open().
    if (event.defaultPrevented || action.indexOf('/cart/add') === -1) return;
    event.preventDefault();

    var button = form.querySelector('[type="submit"]');
    if (button) button.disabled = true;

    var body = new FormData(form);
    body.append('sections', SECTION);

    post('cart/add.js', body)
      .then(function (data) {
        if (data.sections) render(data.sections[SECTION]);
        else return refresh();
      })
      .then(function () { open(true); })
      .catch(function (error) {
        window.alert((error && (error.description || error.message)) || 'Erro ao adicionar.');
      })
      .finally(function () {
        if (button) button.disabled = false;
      });
  });

  document.addEventListener('click', function (event) {
    var target = event.target;

    if (target.closest('.site-header__cart')) {
      if (!drawer()) return;
      event.preventDefault();
      open(false);
      return;
    }

    if (target.closest('[data-cart-drawer-close]')) {
      close();
      return;
    }

    var change = target.closest('[data-cart-change]');
    if (change) {
      var body = new FormData();
      body.append('id', change.getAttribute('data-cart-change'));
      body.append('quantity', change.getAttribute('data-quantity'));
      body.append('sections', SECTION);
      busy(true);
      post('cart/change.js', body)
        .then(function (data) {
          if (data.sections) render(data.sections[SECTION]);
          else return refresh();
        })
        .catch(function (error) {
          window.alert((error && (error.description || error.message)) || 'Erro ao atualizar.');
        })
        .finally(function () {
          busy(false);
          var panel = drawer() && drawer().querySelector('.cart-drawer__panel');
          if (panel) panel.focus();
        });
    }
  });

  window.CartDrawer = {
    open: function () {
      return refresh().then(function () { open(true); });
    }
  };

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') close();
  });
})();
