document.querySelector('#copy-email').addEventListener('click', async () => {
  const status = document.querySelector('#copy-status');
  try {
    await navigator.clipboard.writeText('madhusachin01@gmail.com');
    status.textContent = 'Email copied';
  } catch {
    status.textContent = 'Email: madhusachin01@gmail.com';
  }
});
