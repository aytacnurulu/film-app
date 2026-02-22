
const editButton = document.getElementById("edit-button");
const userModal = new bootstrap.Modal(document.getElementById("userModal"));

editButton.addEventListener("click", () => {
  userModal.show();
});
