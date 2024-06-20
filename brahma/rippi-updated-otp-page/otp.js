document.addEventListener("DOMContentLoaded", () => {
    const otpInputs = document.querySelectorAll(".otp-inputs input");
  
    otpInputs.forEach((input, index) => {
      input.addEventListener("input", () => {
        if (input.value.length === 1) {
          if (index < otpInputs.length - 1) {
            otpInputs[index + 1].focus();
          } else {
            input.blur();
          }
        }
      });
  
      input.addEventListener("keydown", (e) => {
        if (e.key === "Backspace" && input.value === "") {
          if (index > 0) {
            otpInputs[index - 1].focus();
          }
        }
      });
    });
  
    document.getElementById("otp-form").addEventListener("submit", (event) => {
      event.preventDefault();
      let otp = "";
      otpInputs.forEach(input => {
        otp += input.value;
      });
      alert(`OTP entered: ${otp}`);
    });
  });
  