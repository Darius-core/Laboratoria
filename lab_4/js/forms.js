
function checkForm(){
    var error = false; //status błędu, czy występuje
    var errorText = ""; //komunikat błędu
    var contactName = document.getElementById("contactName"); 
    var contactSurname = document.getElementById("contactSurname"); 
    var contactEmail = document.getElementById("contactEmail"); 
    var contactInfo = document.getElementById("contactInfo"); 

    if(contactName.value == ""){
        errorText += " * imię\n";
        error = true;
    }
    if(contactSurname.value == ""){
        errorText += " * nazwisko\n";
        error = true;
    }
    if(contactEmail.value == ""){
        errorText += " * email\n";
        error = true;
    }else{
        var email = contactEmail.value;
        var regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/;
        if(regex.test(email)==false){
            errorText += " - błędny email\n";
            error = true;
        }
    }
    
    if(contactInfo.value == ""){
        errorText += " * brak informacji\n";
        error = true;
    }


    if(!error) return true;
    else{
        // alert("Nie wypełniono pól: \n"+errorText);
        return false;
    }
}

