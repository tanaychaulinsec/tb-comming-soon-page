/*===== SAVE GOOGLE SHEET JS =====*/
const scriptURL = 'https://script.google.com/macros/s/AKfycbwWe0DPPtjlspCL8xAWuUTutwnpOX9t9qW8nsnBUuZWa3Jzm_6Y2KlLd6p8GxQXFsVp4w/exec';

const form = document.forms['contacts_form'];

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => response.json())
    .then(data => {
      if (data.result === 'success') {
        alert("Thank you! Your form is submitted successfully.");
        window.location.reload();
      } else {
        alert("There was an error submitting the form. Please try again.");
      }
    })
    .catch(error => console.error('Error!', error.message));
});