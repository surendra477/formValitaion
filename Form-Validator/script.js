const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const confirm = document.getElementById('password1')

function showError(input,message)
{
    const formcontrol = input.parentElement;
     formcontrol.className = 'from-control error'
     const small = formcontrol.querySelector('small')
     small.innerHTML = message;
}

function showSuccess(input)
{
        const formcontrol = input.parentElement;
        formcontrol.className = 'from-control success'

}

form.addEventListener('submit',function(e){
    e.preventDefault();
    
    if(username.value === "")
    {
        showError(username , 'username is required')
    }else 
    {
        showSuccess(username);
    }
    if(email.value === "")
    {
        showError(email, "email is required")
    }else{
        showSuccess(email)
    }if(password.value === "")
    {
        showError(password, "password is required")
    }else{
        showSuccess(password)
    }
    if(confirm.value === "")
    {
        showError(confirm, "password is required")
    }
    else{
        showSuccess(confirm)
    }
   
});