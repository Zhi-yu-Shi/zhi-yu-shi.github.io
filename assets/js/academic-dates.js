// A GitHub Pages build can predate a change in academic affiliation.
const december = Date.parse("2026-12-01T00:00:00-08:00");
const preview = new URLSearchParams(location.search).get("asof") === "2026-12" && Date.now() < december;
const asOf = preview ? december : Date.now();
if (preview) {
  const note = document.getElementById("profile-preview-note");
  if (note) note.hidden = false;
}
for (const label of document.querySelectorAll("[data-effective-at]")) {
  if (asOf >= Date.parse(label.dataset.effectiveAt)) {
    label.textContent = label.dataset.after;
  }
}
