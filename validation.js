 // validate form
 function validate() {
    // uname validation
    var uname = document.forms['myForm']['uname'].value;
    // console.log(uname);
    if (uname != "") {
        if (!/^[a-zA-Z]*$/g.test(uname)) {
            alert("Uname must contain alphabets only!!");
            return false;
        }
        if(uname.length <= 5){
            alert("Uname length must be more than 5");
            return false;
        }
    } else {
        alert("Please enter uname");
        return false;
    }

    // email validation
    var email = document.forms['myForm']['email'].value;
    if(email != ""){
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
            alert("Enter valid email address!!");
            return false;
        }
    } else {
        alert("Email must not be empty");
        return false;
    }

    // Phone number validation
    var number = document.forms['myForm']['phone'].value;
    if(number != ""){
        if(number.length != 10){
            alert("please enter valid phone number")
            return false;
        }
        if(number.charAt(0) == '0'){
            alert('Phone number must not start with 0');
            return false;
        }
    } else {
        alert("Phone number must not be empty")
        return false;
    }


    // validation for password
    var password = document.forms['myForm']['password'].value;
    if(password != "") {
        if(password.length < 8) {
            alert("minimum length of password must be 8");
            return false;
        }
        var regex = /^(?=.*\d)(?=.*[A-Z](?=.*[a-z]))(?=.*[a-zA-Z]).{8,}$/
        if(!regex.test(password)){
            alert("Password should contain atleast 1 Uppercase character, 1 lowercase character, 1 special symbol and 1 digit");
            return false;
        }

    } else {
        alert("Password must not be empty!!");
        return false;
    }

    // validation for confirm password
    var confirmPassword = document.forms['myForm']['confirmpwd'].value;
    if(confirmPassword != "") {
        if(password != confirmPassword) {
            alert("Confirm password must be same as password!");
            return false;
        }
    } else {
        alert("Please confirm the password!!");
        return false;
    }
}