
const createButton = document.querySelector(".movies-create-button");
const createMovieModal = new bootstrap.Modal(document.getElementById("createMovieModal"));

createButton.addEventListener("click", () => {
  createMovieModal.show();
});
