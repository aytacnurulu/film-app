
const createButton = document.querySelector(".movies-create-button");
const createMovieModal = new bootstrap.Modal(document.getElementById("createMovieModal"));
const deleteMovieModal = new bootstrap.Modal(document.getElementById("deleteMovieModal"));
const editButton = document.querySelector("#edit-button");
const deleteButton= document.querySelector("#delete-button");
createButton.addEventListener("click", () => {
  createMovieModal.show();
});

editButton.addEventListener("click", () => {
  createMovieModal.show();
});

deleteButton.addEventListener("click", () => {
  deleteMovieModal.show();
});