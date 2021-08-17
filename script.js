let form = document.getElementById("form");
let email = document.getElementById("email");

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    if (!validateEmail(email.value)) {
        email.classList.add('errorBorder');
        document.querySelector('.errorIcon').style.display = 'block';
        document.querySelector('.errorMessage').innerHTML = 'Please provide a valid e-mail';
    } else {
        email.classList.remove('errorBorder');
        email.style.borderColor = 'var(--sec-pale-blue)';
        document.querySelector('.errorIcon').style.display = 'none';
        document.querySelector('.errorMessage').innerHTML = 'E-mail registered!';
        document.querySelector('.errorMessage').style.color = 'var(--sec-pale-blue)';
    }
})




function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}