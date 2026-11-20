// Link personali: incolla qui gli URL (stringa vuota = pulsante nascosto).
// Usati in home dai pulsanti con data-link="linkedin" / data-link="portfolio".
window.LINKS = {
  linkedin: '',   // es. 'https://www.linkedin.com/in/...'
  portfolio: ''   // es. 'https://....up.railway.app' (indirizzo pubblico di questo sito)
};
document.querySelectorAll('[data-link]').forEach(a => {
  const url = window.LINKS[a.dataset.link];
  if (url) { a.href = url; a.target = '_blank'; a.rel = 'noopener'; }
  else a.style.display = 'none';
});
document.querySelectorAll('[data-link-text]').forEach(el => {
  const url = window.LINKS[el.dataset.linkText];
  if (url) el.textContent = url.replace(/^https?:\/\//, '');
  else el.closest('.links-row')?.remove();
});
