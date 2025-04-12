
function checkForm(){
    var error = false; //status błędu, czy występuje
     
    var contactName = document.getElementById("contactName"); 
    var contactSurname = document.getElementById("contactSurname"); 
    var contactEmail = document.getElementById("contactEmail"); 
    var contactInfo = document.getElementById("contactInfo"); 

    if(contactName.value == ""){
        document.getElementById("errorName").innerHTML="Wymagane"; //komunikat błędu
        document.getElementById("errorName").className="invalid-feedback";

        document.getElementById("contactName").classList.add("is-invalid"); // dodanie podświetlenia i ikonki błędu
        error = true;
    }else{
        document.getElementById("errorName").innerHTML="";
        document.getElementById("errorName").className="hide";

        document.getElementById("contactName").classList.remove("is-invalid");
        document.getElementById("contactName").classList.add("is-valid"); // dodanie podświetlenia i ikonki poprawność
    }

    if(contactSurname.value == ""){
        document.getElementById("errorSurname").innerHTML="Wymagane";
        document.getElementById("errorSurname").className="invalid-feedback";

        document.getElementById("contactSurname").classList.add("is-invalid");
        error = true;
    }else{
        document.getElementById("errorSurname").innerHTML="";
        document.getElementById("errorSurname").className="hide";

        document.getElementById("contactSurname").classList.remove("is-invalid");
        document.getElementById("contactSurname").classList.add("is-valid");
    }

    if(contactEmail.value == ""){
        document.getElementById("errorEmail").innerHTML="Wymagane";
        document.getElementById("errorEmail").className="invalid-feedback";

        document.getElementById("contactEmail").classList.add("is-invalid");
        error = true;
    }else{
        var email = contactEmail.value;
        var regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/;
        if(regex.test(email)==false){
            document.getElementById("errorEmail").innerHTML="Nieprawidłowy email!";
            document.getElementById("errorEmail").className="invalid-feedback";

            document.getElementById("contactEmail").classList.add("is-invalid");
            error = true;
        }else{
            document.getElementById("errorEmail").innerHTML="";
            document.getElementById("errorEmail").className="hide";

            document.getElementById("contactEmail").classList.remove("is-invalid");
            document.getElementById("contactEmail").classList.add("is-valid");
        }
    }
    
    if(contactInfo.value == ""){
        document.getElementById("errorInfo").innerHTML="Wymagane";
        document.getElementById("errorInfo").className="invalid-feedback";

        document.getElementById("contactInfo").classList.add("is-invalid");
        
        error = true;
    }else{

        document.getElementById("errorInfo").innerHTML="";
        document.getElementById("errorInfo").className="hide";

        document.getElementById("contactInfo").classList.remove("is-invalid");
        document.getElementById("contactInfo").classList.add("is-valid");
    }


    if(!error) return true;
    else{
        return false;
    }
}