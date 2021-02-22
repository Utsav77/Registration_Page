function validate() { 
    var email = 
        document.forms["RegForm"]["email"]; 
    var username = 
        document.forms["RegForm"]["uname"];
    var password = 
        document.forms["RegForm"]["pswd"];
    var agree =
        document.forms["RegForm"]["remember"];

    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email.value == "") { 
        document.getElementById("mail").innerHTML = "Email address can't be blank";
        email.focus(); 
        return false; 
    } 

    if(email.value.match(mailformat)){
        document.getElementById("mail").innerHTML = "";
    }
    else{

        document.getElementById("mail").innerHTML = "Please enter a valid e-mail address."; 
        email.focus(); 
        return false; 
    }

    var letters = /^[A-Za-z]+$/;

    if (username.value == "") { 
        document.getElementById("name").innerHTML= "Please enter your name."; 
        username.focus(); 
        return false; 
    } 
        
    if(username.value.match(letters))
    {
        document.getElementById("name").innerHTML= ""; 
    }
    else{ 

        document.getElementById("name").innerHTML= "Username must contain only letters."; 
        username.focus(); 
        return false; 
    }

    if (password.value == "") { 
        document.getElementById("pass").innerHTML= "Please enter your password"; 
        password.focus(); 
        return false; 
    }

    if (password.value.length < 8 || password.value.length >= 16) { 
        document.getElementById("pass").innerHTML= "Password should be of length 8 to 15 characters"; 
        password.focus(); 
        return false; 
    }
    else {
        var pass =  /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;
        if(password.value.match(pass))
        {
            document.getElementById("pass").innerHTML= ""
        }
        else {
            document.getElementById("pass").innerHTML= "Password must contain at least a symbol, upper and lower case letters and a number"; 
            password.focus(); 
            return false; 
        }
    }

    if (agree.checked == true) { 
        document.getElementById("check").innerHTML= "";     
    }
    else{
        document.getElementById("check").innerHTML= "Please click the above checkbox to continue"; 
        agree.focus(); 
        return false;
    }


    return true; 
} 