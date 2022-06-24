// Display all checlout details except the payment method
function displayDetails() {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let fullName = "<h3>Fullname: " + firstName + lastName + "</h3>";
    let address =
        "<h3>Address: " + document.getElementById("address").value + "</h3>";
    let region =
        "<h3>Region: " + document.getElementById("region").value + "</h3>";
    let contactNum =
        "<h3>Contact: " + document.getElementById("contact").value + "</h3>";

    let display = document.getElementById("details");

    display.innerHTML = fullName + address + region + contactNum;

    // if (firstName != "" && lastName != "") {
    //     document.getElementById("checkoutDetails").style.display = "block";
    // }
}

// Display the selected payment method
function displayPaymentMethod(method) {
    document.getElementById("paymentMethod").innerHTML = method;
}
