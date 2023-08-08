const logout = async () => {
    try {
      const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        window.location.replace('/login'); // Redirect after successful logout
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Logout failed');
      }
    } catch (error) {
      console.error('Logout error:', error);
      // Handle the error, such as displaying an error message to the user
    }
  };
  
  document.addEventListener('DOMContentLoaded', () => {
    // Attach the logout function to the logout button
    const logoutButton = document.querySelector('#logout');
    if (logoutButton) {
      logoutButton.addEventListener('click', logout);
    }
  });
  