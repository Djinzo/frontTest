let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", (e) => {
    let arrowParent = e.target.parentElement.parentElement; //selecting main parent of arrow
    arrowParent.classList.toggle("showMenu");
  });
}
let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu");
console.log(sidebarBtn);
sidebarBtn.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

function editProduct() {
  document.getElementById("editPopup").style.display = "flex";
}

function closeEditPopup() {
  document.getElementById("editPopup").style.display = "none";
}

function deleteProduct() {
  document.getElementById("deletePopup").style.display = "flex";
}

function closeDeletePopup() {
  document.getElementById("deletePopup").style.display = "none";
}

function confirmDelete() {
  // Handle delete confirmation logic here
  console.log("Deleting operation...");
  closeDeletePopup();
}

function alertAddToStock() {
  var stock = document.querySelector(".stock");
  stock.style.display = "block";
}

document.getElementById("cancelButton").addEventListener("click", function () {
  var stock = document.querySelector(".stock");
  stock.style.display = "none";
});
document.getElementById("confirmButton").addEventListener("click", function () {
  var stock = document.querySelector(".stock");
  stock.style.display = "none";
});
