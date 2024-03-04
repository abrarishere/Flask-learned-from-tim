function deleteNote(noteId) {
  fetch('/delete-note', {
    method: 'POST',
    body: JSON.stringify({ noteId: noteId }),

  }).then((_res) => {
    window.location.href = '/'
  });
}

// Get all close buttons
var closeButtons = document.querySelectorAll('.close');

// Add click event listener to each close button
closeButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    // Find the closest alert element and remove it
    button.closest('.alert').remove();
  });
});