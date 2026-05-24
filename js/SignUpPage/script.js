const params = new URLSearchParams(window.location.search);
    const role = params.get('role');
    if (role) document.getElementById('role').value = role;

    function handleRegister() {
      const fullname = document.getElementById('fullname').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const terms = document.getElementById('terms').checked;
      if (!fullname || !email || !password) {
        alert('Please fill in all fields.');
        return;
      }
      if (!terms) {
        alert('Please agree to the Terms and Conditions.');
        return;
      }
      // TODO: connect to backend
      alert('Account created successfully!');
    }