document.addEventListener('DOMContentLoaded', function() {
  const email = localStorage.getItem('email');
  if (email) {
    document.getElementById('email').value = email;
  }
});

document.getElementById('signup-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const mobile = document.getElementById('mobile').value;
  const email = document.getElementById('email').value;
  const address = document.getElementById('address').value;

  const user = {
    firstName,
    lastName,
    mobile,
    email,
    address,
  };

  // Simulate registration success
  alert('Sign Up Successful! Please verify your OTP.');
  window.location.href = 'otp.html';
});
