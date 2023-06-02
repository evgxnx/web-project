const nameInput = document.getElementById('name-input');
const ratingInputs = document.querySelectorAll('input[name="rating"]');
const commentInput = document.getElementById('comment-input');
const submitButton = document.getElementById('submit-button');
const commentsContainer = document.getElementById('comments-container');

function submitComment() {
  const name = nameInput.value;
  let rating;

  for (const input of ratingInputs) {
    if (input.checked) {
      rating = input.value;
      break;
    }
  }

  const comment = commentInput.value;

  const commentElement = document.createElement('div');
  commentElement.classList.add('comment');
  commentElement.innerHTML = `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Rating:</strong> ${rating}</p>
    <p><strong>Comment:</strong> ${comment}</p>
  `;

  commentsContainer.appendChild(commentElement);

  saveComment({ name, rating, comment });

  nameInput.value = '';
  commentInput.value = '';
  ratingInputs[0].checked = true;
}

function saveComment(comment) {
  let comments = localStorage.getItem('comments');
  if (!comments) {
    comments = [comment];
  } else {
    comments = JSON.parse(comments);
    comments.push(comment);
  }

  localStorage.setItem('comments', JSON.stringify(comments));
}

function loadComments() {
  const comments = localStorage.getItem('comments');

  if (comments) {
    JSON.parse(comments).forEach(({ name, rating, comment }) => {
      const commentElement = document.createElement('div');
      commentElement.classList.add('comment');
      commentElement.innerHTML = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Rating:</strong> ${rating}</p>
        <p><strong>Comment:</strong> ${comment}</p>
      `;
      commentsContainer.appendChild(commentElement);
    });
  }
}

submitButton.addEventListener('click', submitComment);

window.addEventListener('load', loadComments);
