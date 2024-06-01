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

function openvent() {
    var vent = document.querySelector('.vent');
    vent.style.display = 'block';
}

function closevent() {
    var vent = document.querySelector('.vent');
    vent.style.display = 'none';
}

function confirmvent() {
    var vent = document.querySelector('.vent');
    vent.style.display = 'none';

    // You can add your logic here for handling the confirmation
    var nomClient = document.getElementById('nom').value;
    var dateLivraison = document.getElementById('date').value;
    var produitNom = document.getElementById('produitNom').value;
    var produitQuantity = document.getElementById('produitQuantity').value;

    // Example: Outputting the values to console
    console.log('Nom Client:', nomClient);
    console.log('Date Livraison:', dateLivraison);
    console.log('Produit:', produitNom);
    console.log('Quantité:', produitQuantity);
}

function editProduct() {
    document.getElementById('editPopup').style.display = 'flex';
}

function closeEditPopup() {
    document.getElementById('editPopup').style.display = 'none';
}

function deleteProduct() {
    document.getElementById('deletePopup').style.display = 'flex';
}

function closeDeletePopup() {
    document.getElementById('deletePopup').style.display = 'none';
}

function confirmDelete() {
    // Handle delete confirmation logic here
    console.log('Deleting operation...');
    closeDeletePopup();
}