function submitForm() {
  const books = Array.from(document.querySelectorAll('input[type=checkbox]:checked')).map(cb => cb.value);
  const name = document.getElementById('name').value;
  const whatsapp = document.getElementById('whatsapp').value;

  fetch('https://your-pythonanywhere-username.pythonanywhere.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, whatsapp, books })
  }).then(() => {
    Telegram.WebApp.close();
  });
}
