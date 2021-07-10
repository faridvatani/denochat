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

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
$(function() {
    // Initializes and creates emoji set from sprite sheet
    window.emojiPicker = new EmojiPicker({
        emojiable_selector: '[data-emojiable=true]',
        assetsPath: 'http://onesignal.github.io/emoji-picker/lib/img/',
        popupButtonClasses: 'far fa-laugh-beam'
    });
    // Finds all elements with `emojiable_selector` and converts them to rich emoji input fields
    // You may want to delay this step if you have dynamically created input fields that appear later in the loading process
    // It can be called as many times as necessary; previously converted input fields will not be converted again
    window.emojiPicker.discover();
});
var inputText = document.querySelector("#chat-box");
var btnSend = document.querySelector(".message-send");
var messageArea = document.querySelector(".user-message-section");
var Message_section = document.querySelector(".message-section");
btnSend.addEventListener("click", (e) => {
    var mess = inputText.value;
    var section = document.createElement('div');
    section.className += "user-message-section";
    var user_message = document.createElement('div');
    user_message.className += "user-message";
    var paragraph = document.createElement('p');
    paragraph.textContent = mess;
    user_message.appendChild(paragraph);
    Message_section.appendChild(user_message);
    messageArea.append(Message_section)
    inputText.value = "";
    $(".chat-input").empty();
    $(".emoji-wysiwyg-editor div").remove();
});