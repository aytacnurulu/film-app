const categoryModal = new bootstrap.Modal(
  document.getElementById("categoryModal"),
);
const deleteCategoryModal = new bootstrap.Modal(
  document.getElementById("deleteCategoryModal"),
);

const categoriesCreateButton = document.getElementById(
  "categories-create-button",
);
const editCategoryButtons = document.querySelector("#edit-button");
const deleteCategoryButtons = document.querySelector("#delete-button");

categoriesCreateButton.addEventListener("click", () => {
  categoryModal.show();
});

editCategoryButtons.addEventListener("click", () => {
  categoryModal.show();
});

deleteCategoryButtons.addEventListener("click", () => {
  deleteCategoryModal.show();
});
