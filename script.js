
let firstPassword = document.getElementById('password1');
let secondPassword = document.getElementById('password2');
const form = document.querySelector('form');
const password1Input = document.querySelector('.password1');
const password2Input = document.querySelector('.password2');




form.addEventListener('submit', (e)=> {
    checkPassword(firstPassword.value,secondPassword.value);
    e.preventDefault();
    
})



function checkPassword(firstPassword,secondPassword) {
if(firstPassword != secondPassword){
    password1Input.classList.add('error');
    password2Input.classList.add('error');
    alert('Error, passwords do not match');
} else if(firstPassword === secondPassword){
    password1Input.classList.remove('error');
    password2Input.classList.remove('error');
}
   console.log(firstPassword,secondPassword);

}