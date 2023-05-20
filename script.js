// Match Password
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
// Contact Us link to email with subject
function contactUs() {
    if(window.confirm('To Contact us click OK to send an Email to contactus@acciojob.com')){
        window.location.href='mailto://contactus@acciojob.com?subject=Need%20Assistance';
    }
}
// Login alert
function logOut() {
    alert('You need to login first.');
}

// Match Password Not-Working
// function matchPassword(form) {
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