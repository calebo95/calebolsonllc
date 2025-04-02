// contact.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the default form submission
  
      // Gather form data
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
  
      // Create a subject and body for the email
      const subject = encodeURIComponent('Message from Website');
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
  
      // Construct the mailto URL
      const mailtoLink = `mailto:calebolson95@gmail.com?subject=${subject}&body=${body}`;
  
      // Open the default email client with the mailto link
      window.location.href = mailtoLink;
    });
  });
  