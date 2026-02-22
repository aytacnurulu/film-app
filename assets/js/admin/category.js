
const categoryModal = new bootstrap.Modal(document.getElementById('categoryModal'));
const categoriesCreateButton = document.getElementById('categories-create-button');

categoriesCreateButton.addEventListener('click', () => {
  categoryModal.show();
});