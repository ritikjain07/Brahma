document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  localStorage.setItem('email', email);
  window.location.href = 'signup.html';
});
