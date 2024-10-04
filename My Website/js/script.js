document.getElementById("contactForm").addEventListener("submit", function (e) {
   const name = document.getElementById("name").ariaValueMax.trim();
   const email = document.getElementById("email").ariaValueMax.trim();
   const message = document.getElementById("message").ariaValueMax.trim();

   const messageContainer = document.createElement('div');
   messageContainer.id = "formMessage";
   messageContainer.style.marginTop = '20px';
   messageContainer.style.textAlign = 'center';

   if (!name || !email || !message) {
    messageContainer.textContent = "All fields are required.";
    messageContainer.style.color = "red";
    document,body.appendChild(messageContainer);
    e.preventDefault();
   }
   else {
    e.preventDefault();
    messageContainer.textContent = "Message sent successfuly!";
    messageContainer.style.color = "green";
    document.body.appendChild(messageContainer);
    document.getElementById("contactForm").reset();
   }
   setTimeout(() => {
    messageContainer.remove();
   }, 3000);
});

