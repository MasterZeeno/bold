window.addEventListener('load', () => {
  // Check if a CSRF token already exists in local storage
  let csrfToken = localStorage.getItem('csrfToken');

  // Generate a random CSRF token if none exists
  if (!csrfToken) {
    csrfToken = generateToken();
    localStorage.setItem('csrfToken', csrfToken);
  }

  // Function to generate a secure random CSRF token using the crypto API
  function generateToken() {
    const randomBytes = crypto.getRandomValues(new Uint8Array(32));
    return Array.from(randomBytes).map(byte => byte.toString(16).padStart(2, '0')).join('');
  }

  // Set the CSRF token in the hidden form input field
  const csrfTokenInput = document.querySelector('input[name="csrf_tams_token"]');
  csrfTokenInput.value = csrfToken;

  // Handle form submission with basic client-side validation
  const loginForm = document.getElementById('login-form');
  const successMessage = document.getElementById('successMessage');

  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Get input fields for username and password
    const username = loginForm.querySelector('input[name="username"]');
    const password = loginForm.querySelector('input[name="password"]');

    // Simulate login process (Replace this with actual login logic)
    if (username.value === 'admin' && password.value === 'password') {
      successMessage.textContent = 'Login Successful!';
      document.documentElement.setAttribute('data-zee-result', 'success');
    } else {
      successMessage.textContent = 'Invalid credentials.';
      document.documentElement.setAttribute('data-zee-result', 'error');
    }
    
    loginForm.disabled = true;
    
    // Reset form and UI after 3.692 seconds
    setTimeout(() => {
      resetForm(username, password, successMessage, loginForm);
    }, 3692);
  });

  // Function to reset form inputs and messages
  function resetForm(username, password, messageEl, loginForm) {
    document.documentElement.setAttribute('data-zee-result', 'none');
    username.value = '';
    password.value = '';
    messageEl.textContent = '';
    loginForm.disabled = false;
  }
});






