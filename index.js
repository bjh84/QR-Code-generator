let imgBox = document.getElementById("imgBox");
let qrCode = document.getElementById("qrCode");
let link = document.getElementById("textBox");
let saveButton = document.getElementById("saveButton");

function generate() {
    qrCode.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + link.value;
    
    setTimeout(() => {
        saveButton.removeAttribute("hidden");
    }, 1000); 
}
