window.addEventListener('load', () => {
  // Generate a random CSRF token
  function generateToken() {
    const randomBytes = crypto.getRandomValues(new Uint8Array(32));
    return Array.from(randomBytes).map((byte) => byte.toString(16).padStart(2, '0')).join('');
  }
  
  // Get the CSRF token input element
  const csrfTokenInput = document.getElementsByName("csrf_tams_token")[0];
  
  // Generate and set the CSRF token
  const csrfToken = generateToken();
  csrfTokenInput.value = csrfToken;
  
  // Store the token in local storage
  localStorage.setItem('csrfToken', csrfToken);
  
  // Handle form submission
  const loginForm = document.getElementById('login-form');
  const successMessage = document.getElementById('successMessage');
  
  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
  
    // Replace with your actual login logic
    const username = document.querySelector('input[name="username"]').value;
    const password = document.querySelector('input[name="password"]').value;
  
    // Example: Simulate successful login
    if (username === 'admin' && password === 'password') {
      successMessage.textContent = 'Login Successful!';
      successMessage.classList.add('success');
    } else {
      successMessage.textContent = 'Invalid username or password.';
      successMessage.classList.remove('success');
    }
  });
});