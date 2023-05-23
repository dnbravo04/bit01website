function navbar() {
    var x = document.getElementById("links")
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

var fname = document.getElementById("name")
var phone = document.getElementById("phone")
var email = document.getElementById("email")
var message = document.getElementById("message")
var contact = document.getElementsByName("contact")

submitData.addEventListener("click", function(event){ 
    event.preventDefault()
    var data = {
        "name":fname.value,
        "phone":phone.value,
        "email":email.value,
        "message":message.value,
        "contact":contact.value
    }
    console.log(JSON.stringify(data))
});


