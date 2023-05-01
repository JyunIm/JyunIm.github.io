const toggleBtn = document.querySelector('.toggle-btn');
const hiddenContent = document.querySelector('.hidden-content');

toggleBtn.addEventListener('click', () => {
  hiddenContent.classList.toggle('show');
});
