// Get references to HTML elements
const nameInput = document.getElementById('name-input');
const ratingInput = document.getElementById('rating-input');
const commentInput = document.getElementById('comment-input');
const submitButton = document.getElementById('submit-button');
const commentsContainer = document.getElementById('comments-container');

// Function to handle comment submission
function submitComment() {
  // Get the values from the input fields
  const name = nameInput.value;
  const rating = ratingInput.value;
  const comment = commentInput.value;

  // Create a new comment element
  const commentElement = document.createElement('div');
  commentElement.classList.add('comment');
  commentElement.innerHTML = `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Rating:</strong> ${rating}</p>
    <p><strong>Comment:</strong> ${comment}</p>
  `;

  // Append the comment to the comments container
  commentsContainer.appendChild(commentElement);

  // Save the comment to local storage
  saveComment({ name, rating, comment });

  // Clear the input fields
  nameInput.value = '';
  ratingInput.value = '1';
  commentInput.value = '';
}

// Function to save the comment to local storage
function saveComment(comment) {
  // Check if there are existing comments in local storage
  let comments = localStorage.getItem('comments');
  if (!comments) {
    // If no comments exist, create a new array and add the comment
    comments = [comment];
  } else {
    // If comments exist, parse the JSON string and add the comment
    comments = JSON.parse(comments);
    comments.push(comment);
  }

  // Store the updated comments array in local storage
  localStorage.setItem('comments', JSON.stringify(comments));
}

// Function to load comments from local storage
function loadComments() {
  // Get the comments from local storage
  const comments = localStorage.getItem('comments');

  if (comments) {
    // Parse the JSON string and iterate over each comment
    JSON.parse(comments).forEach(({ name, rating, comment }) => {
      // Create a new comment element
      const commentElement = document.createElement('div');
      commentElement.classList.add('comment');
      commentElement.innerHTML = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Rating:</strong> ${rating}</p>
        <p><strong>Comment:</strong> ${comment}</p>
      `;

      // Append the comment to the comments container
      commentsContainer.appendChild(commentElement);
    });
  }
}

// Attach event listener to the submit button
submitButton.addEventListener('click', submitComment);

// Load comments when the page loads
window.addEventListener('load', loadComments);
