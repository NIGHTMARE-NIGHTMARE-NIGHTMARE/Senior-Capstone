console.log("logged");

function sendMessage(){
    const message = document.querySelector("textarea.msg-input");
    console.log(message.value);
    message.value = "";
    // call django api through ajax
}
