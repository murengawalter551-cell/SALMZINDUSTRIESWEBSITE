const modeButton = document.querySelector('#modeButton');

// Apply saved mode on page load
if (localStorage.getItem('darkMode') === 'enabled') {
  document.body.classList.add('dark-mode');
  modeButton.textContent = 'Light Mode';
} else {
  modeButton.textContent = 'Dark Mode';
}

// Toggle dark mode on button click
modeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    modeButton.textContent = 'Light Mode';
    localStorage.setItem('darkMode', 'enabled'); // save preference
  } else {
    modeButton.textContent = 'Dark Mode';
    localStorage.setItem('darkMode', 'disabled'); // save preference
  }
});

let userName = prompt("Please enter your name:");
document.getElementById("welcomeHeading").textContent = 
    `Welcome to Salmz Motor Spares, ${userName}!`;
    let username = sessionStorage.getItem("username");

// Ask for name only if not already stored
if (!username) {
    username = prompt("Enter your name:");
    sessionStorage.setItem("username", username);
}
// Console info messages
console.info("User Name:", username);
console.info("Website:", "Salmz Motor Spares");
console.info("Status:", "Website loaded successfully");
// Select form and comments container
const commentForm = document.getElementById('commentForm');
const commentsContainer = document.getElementById('commentsContainer');

commentForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Stop page refresh

  // Get input values
  const name = document.getElementById('commentName').value.trim();
  const comment = document.getElementById('commentText').value.trim();

  // Validate inputs
  if (name === "" || comment === "") {
    alert("Please fill in both name and comment!");
    return;
  }

  // Create a new comment element
  const commentElement = document.createElement('div');
  commentElement.style.border = "1px solid #ccc";
  commentElement.style.padding = "10px";
  commentElement.style.margin = "5px 0";
  commentElement.style.borderRadius = "5px";
  commentElement.innerHTML = `<strong>${name}:</strong> <p>${comment}</p>`;

  // Add the comment to the container
  commentsContainer.appendChild(commentElement);

  // Clear the form
  commentForm.reset();
});
