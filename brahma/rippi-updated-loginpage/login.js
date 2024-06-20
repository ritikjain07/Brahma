document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    alert(`Sign up successful with email: ${email}`);
});

document.getElementById("google-btn").addEventListener("click", function() {
    alert("Sign up with Google clicked");
});
