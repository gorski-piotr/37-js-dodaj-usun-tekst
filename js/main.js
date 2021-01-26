let buttonAdd = document.getElementById("dodaj");
let buttonDelete = document.getElementById("usun");
let paragraph = document.getElementById("tekst");

buttonAdd.onclick = function() {
    paragraph.textContent = "WOW ALE CZAD :D";
}

buttonDelete.onclick = function() {
    paragraph.textContent = "";
}