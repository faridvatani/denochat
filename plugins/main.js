function login() {
    if (document.getElementById("Specifications-input").value.length == 0) {
        alert("لطفا نام و نام خانوادگی خود را وارد کنید");
    } else {
        location.replace("index.html")
    }

}
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function logout() {
    location.replace("login.html")
}