function matchPassword(){
    var pass1=document.form.password.value;
    var pass2=document.form.confirm_password.value;

    if(pass1 === pass2){
        return true;
    }
    else{
        alert("Passwords mismatch! Please retry.");
        return false;
    }
}

function contactUs() {
    if(window.confirm('To Contact us click OK to send an Email to contactus@acciojob.com')){
        window.location.href='mailto://contactus@acciojob.com';
    }
}
function logOut() {
    alert('You need to login first.');
}

// function checkPassword(form) {
//     const password = form.pass.value;
//     const confirmPassword = form.cPass.value;
//     if(password.value !== confirmPassword.value) {
//         confirm_password.setCustomValidity("Passwords Don't Match");
//         return false;
//     } else {
//         confirm_password.setCustomValidity('');
//         return true;
//     }
// }