function submitForm() {
  const selectedBooks = Array.from(document.querySelectorAll('input[type=checkbox]:checked')).map(cb => cb.value);
  const name = document.getElementById('name').value;
  const whatsapp = document.getElementById('whatsapp').value;

  if (!name || !whatsapp || selectedBooks.length === 0) {
    alert("Please fill all fields and select at least one book.");
    return;
  }

  fetch('https://yourusername.pythonanywhere.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, whatsapp, books: selectedBooks })
  }).then(() => {
    Telegram.WebApp.close();
  });
}
