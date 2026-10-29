/* ============================================
   RPG SKILLS - Formulário de discussões (discussoes.html, via FormSubmit)
   Valida campos, soma dos anexos (máx. 10 MB) e mostra aviso de enviado.
   ============================================ */
(function (RPG) {
  'use strict';

  var MAX_BYTES = 10 * 1024 * 1024;
  var MB = 1024 * 1024;

  function formatSize(bytes) {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < MB) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / MB).toFixed(2) + ' MB';
  }

  function formatMb(bytes) {
    return (bytes / MB).toFixed(bytes >= MB ? 2 : 1);
  }

  function init() {
    var form = document.getElementById('discuss-form');
    if (!form) return;

    var t = RPG.i18n.t;
    var tf = RPG.i18n.tf;
    var $ = function (id) { return document.getElementById(id); };
    var nextInput = $('discuss-next');
    var errorEl = $('discuss-error');
    var successEl = $('discuss-success');
    var submitBtn = $('discuss-submit');
    var meterFill = $('discuss-meter-fill');
    var meterText = $('discuss-meter-text');
    var meterLeft = $('discuss-meter-left');
    var fileInputs = [1, 2, 3].map(function (n) { return $('discuss-file-' + n); }).filter(Boolean);
    var sent = /[?&]enviado=1(?:&|$)/.test(location.search || '');

    /* FormSubmit volta para esta URL com ?enviado=1 depois de enviar. */
    function setNextUrl() {
      if (!nextInput) return;
      try {
        var url = new URL(location.href);
        url.searchParams.set('enviado', '1');
        url.hash = '';
        nextInput.value = url.toString();
      } catch (e) {
        nextInput.value = 'discussoes.html?enviado=1';
      }
    }

    function renderSuccess() {
      if (!successEl) return;
      successEl.hidden = !sent;
      successEl.classList.toggle('is-visible', sent);
      successEl.innerHTML = sent
        ? '<strong>' + t('discussoes.success.title', 'Mensagem enviada!') + '</strong>' +
          '<span>' + t('discussoes.success.text', 'Obrigado. Assim que possível, respondo no e-mail que você informou.') + '</span>'
        : '';
    }

    function showError(msg) {
      if (!errorEl) return;
      errorEl.textContent = msg;
      errorEl.hidden = !msg;
      errorEl.classList.toggle('is-visible', !!msg);
    }

    function selectedFiles() {
      return fileInputs.map(function (i) { return i.files && i.files[0]; }).filter(Boolean);
    }

    function totalBytes() {
      return selectedFiles().reduce(function (sum, f) { return sum + (f.size || 0); }, 0);
    }

    function renderSlots() {
      fileInputs.forEach(function (input, idx) {
        var nameEl = $('discuss-file-name-' + (idx + 1));
        var slot = input.closest('.discuss-file-slot');
        var file = input.files && input.files[0];
        if (nameEl) {
          nameEl.removeAttribute('data-i18n');
          nameEl.textContent = file ? file.name + ' (' + formatSize(file.size || 0) + ')' : t('discussoes.files.none', 'Nenhum arquivo');
        }
        if (slot) slot.classList.toggle('has-file', !!file);
      });
    }

    function renderMeter() {
      var used = totalBytes();
      var over = used > MAX_BYTES;
      var pct = Math.min(100, Math.round(used / MAX_BYTES * 100));
      if (meterFill) {
        meterFill.style.width = pct + '%';
        meterFill.classList.toggle('is-warn', pct >= 80 && !over);
        meterFill.classList.toggle('is-over', over);
      }
      if (meterText) {
        meterText.textContent = over
          ? tf('discussoes.files.meter.over', 'Limite excedido: {used} / 10 MB', { used: formatMb(used) })
          : tf('discussoes.files.meter.used', '{used} MB de 10 MB usados', { used: formatMb(used) });
      }
      if (meterLeft) {
        meterLeft.textContent = over
          ? t('discussoes.files.meter.over.short', 'Remova arquivos')
          : tf('discussoes.files.meter.free', '{free} MB livres', { free: formatMb(MAX_BYTES - used) });
      }
      form.classList.toggle('discuss-form--over', over);
    }

    function render() {
      renderSlots();
      renderMeter();
      renderSuccess();
    }

    fileInputs.forEach(function (input) {
      input.addEventListener('change', function () {
        showError(totalBytes() > MAX_BYTES ? t('discussoes.error.size', 'Os anexos juntos passam de 10 MB. Remova alguns arquivos.') : '');
        renderSlots();
        renderMeter();
      });
    });

    form.addEventListener('submit', function (e) {
      var field = function (name) { return String((form.elements.namedItem(name) || {}).value || '').trim(); };
      var error = '';
      if (!field('name') || !field('email') || !field('message')) {
        error = t('discussoes.error.required', 'Preencha nome, e-mail e mensagem.');
      } else if (totalBytes() > MAX_BYTES) {
        error = t('discussoes.error.size', 'Os anexos juntos passam de 10 MB. Remova alguns arquivos.');
      }
      showError(error);
      if (error) { e.preventDefault(); return; }
      setNextUrl();
      if (submitBtn) {
        submitBtn.disabled = true;
        var label = submitBtn.querySelector('[data-i18n="discussoes.submit"]') || submitBtn;
        label.textContent = t('discussoes.sending', 'Enviando…');
      }
    });

    if (sent) {
      try {
        var clean = new URL(location.href);
        clean.searchParams.delete('enviado');
        history.replaceState({}, '', clean.pathname + clean.search + clean.hash);
      } catch (e) { /* URL antiga */ }
    }

    /* Voltar pelo histórico após o envio reabilita o botão. */
    window.addEventListener('pageshow', function (e) {
      if (e.persisted && submitBtn) { submitBtn.disabled = false; RPG.i18n.apply(submitBtn); }
    });

    setNextUrl();
    RPG.i18n.onChange(render);
  }

  RPG.formDiscussoes = { init: init };
})(window.RPG = window.RPG || {});
