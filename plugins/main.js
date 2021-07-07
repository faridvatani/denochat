function login() {
    if (document.getElementById("Specifications-input").value.length == 0) {
        alert("لطفا نام و نام خانوادگی خود را وارد کنید");
    } else {
        location.replace("index.html")
    }

}