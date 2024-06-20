document.getElementById('otp-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Collect all OTP input values
  const otpInputs = document.querySelectorAll('.otp-inputs input');
  let otp = '';
  otpInputs.forEach(input => otp += input.value);

  // Simulate OTP verification success
  if (otp === '123456') { // Assuming '123456' is the correct OTP for demonstration
    alert('OTP Verified!');
    // Redirect to a success page or logged-in dashboard
    window.location.href = 'success.html';
  } else {
    alert('Invalid OTP! Please try again.');
  }
});
