
function validateEmail(emailField){
    var emailField="ygcyct[.com"
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (reg.test(emailField.value) == false) 
    {
        
        return false;
    }

    return true;

}
console.log(validateEmail("hbcbscsci[.com"));