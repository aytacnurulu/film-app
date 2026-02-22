// catching edit modal
const editButton = document.getElementById("edit-button");
const deleteButton = document.getElementById("delete-button");
const deleteContactModal = new bootstrap.Modal(
  document.getElementById("deleteContactModal"),
);
const ContactModal = new bootstrap.Modal(
  document.getElementById("ContactModal"),
);

// bootsrap bundle js daxil edildiyi üçün aşağıdakı kodu yazmağa ehtiyac qalmır
// const deleteContactModal = new bootstrap.Modal(
//   document.getElementById("deleteContactModal"),
// );
// const ContactModal = new bootstrap.Modal(  
//   document.getElementById("ContactModal"),
// );