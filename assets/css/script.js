// 1. Current Date & Time Display
function updateDateTime() {
  const now = new Date();
  const options = {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  };
  const dateTimeStr = now.toLocaleDateString('en-US', options);
  const element = document.getElementById('datetime');
  if (element) {
    element.innerText = dateTimeStr;
  }
}

setInterval(updateDateTime, 1000);
updateDateTime();

// 2. Confirmation Popup Window on Login Form Submission
$(document).ready(function () {
  $('#loginForm').on('submit', function (e) {
    e.preventDefault(); // Prevent page refresh

    const username = $('#username').val();

    // JS Confirmation popup
    const isConfirmed = confirm(
      'Are you sure you want to submit the login details for: ' +
        username +
        '?',
    );

    if (isConfirmed) {
      alert('Login successful! Welcome back, ' + username + '.');
      window.location.href = 'index.html'; // Redirect to Home
    }
  });
});
