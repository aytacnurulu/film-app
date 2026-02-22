// catching edit modal
const editButton = document.getElementById("edit-button");
const deleteButton = document.getElementById("delete-button");
const deleteCommentModal = new bootstrap.Modal(
  document.getElementById("deleteCommentModal"),
);
const commentModal = new bootstrap.Modal(
  document.getElementById("commentModal"),
);

editButton.addEventListener("click", function () {
  commentModal.show();
});
deleteButton.addEventListener("click", function () {
  deleteCommentModal.show();
});
