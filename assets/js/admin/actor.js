const actorModal = new bootstrap.Modal(document.getElementById("actorModal"));
const deleteModal = new bootstrap.Modal(document.getElementById("deleteModal"));

const actorsCreateButton = document.getElementById("actors-create-button");
const editButtons = document.querySelector("#edit-button");
const deleteButtons = document.querySelector("#delete-button");

actorsCreateButton.addEventListener("click", () => {
  actorModal.show();
});

editButtons.addEventListener("click", () => {
  actorModal.show();
});

deleteButtons.addEventListener("click", () => {
  deleteModal.show();
});
