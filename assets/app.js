/* Manger le monde — petits comportements. Le site fonctionne sans JavaScript. */
(function () {
  "use strict";

  /* ---- Filtre des sources ---- */
  var chips = document.querySelectorAll(".chip");
  var search = document.querySelector(".search");
  var items = document.querySelectorAll("#sources-en-ligne .links li");
  var groups = document.querySelectorAll("#sources-en-ligne .group");
  var count = document.querySelector(".count");
  var empty = document.querySelector(".empty");
  var current = "tout";

  function norm(s) {
    return s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
  }
  function apply() {
    var q = search ? norm(search.value.trim()) : "";
    var shown = 0;
    items.forEach(function (li) {
      var okChap = current === "tout" || li.dataset.chap === current;
      var okText = !q || norm(li.textContent).indexOf(q) !== -1;
      var ok = okChap && okText;
      li.hidden = !ok;
      if (ok) shown++;
    });
    groups.forEach(function (g) {
      g.hidden = !g.querySelector("li:not([hidden])");
    });
    if (count) count.textContent = shown + (shown > 1 ? " sources affichées" : " source affichée");
    if (empty) empty.style.display = shown ? "none" : "block";
  }
  chips.forEach(function (c) {
    c.addEventListener("click", function () {
      current = c.dataset.filter;
      chips.forEach(function (o) { o.setAttribute("aria-pressed", o === c ? "true" : "false"); });
      apply();
    });
  });
  if (search) search.addEventListener("input", apply);
  if (chips.length) {
    document.querySelector(".filters").hidden = false;
    apply();
  }

  /* ---- Citation : ajoute l'adresse réelle du site ---- */
  var url = document.querySelector("[data-site-url]");
  if (url && /^https?:/.test(location.href)) {
    url.textContent = location.origin + location.pathname.replace(/index\.html$/, "");
  }
  var btn = document.querySelector(".copy");
  if (btn && navigator.clipboard) {
    btn.hidden = false;
    btn.addEventListener("click", function () {
      var txt = document.querySelector(".cite__box").innerText.replace(/\s+/g, " ").trim();
      navigator.clipboard.writeText(txt).then(function () {
        var old = btn.textContent;
        btn.textContent = "Copié ✓";
        setTimeout(function () { btn.textContent = old; }, 1800);
      });
    });
  }
})();
