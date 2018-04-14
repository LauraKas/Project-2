function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("First name must be filled out");
        return false;
    }
    var x = document.forms["myForm"]["lname"].value;
    if (x == "") {
        alert("Last name must be filled out");
        return false;
    }
    var x = document.forms["myForm"]["message"].value;
    if (x == "") {
        alert("Message must be filled out");
        return false;
    }



}
