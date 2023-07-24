const form = document.querySelector('.content__form');
const emailInput = document.querySelector('.content__form-email-address');
const emailError = document.querySelector('.content__form-email-error');

form.addEventListener('submit', (event)=>{
    const regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    if(regExp.test(emailInput.value) == true){
        emailInput.style.border = '1px solid hsl(0, 36%, 70%)';
        emailInput.style.backgroundImage = 'url("")';
        emailError.innerHTML = '';
    }else{
        event.preventDefault();
        emailInput.style.border = '1px solid red';
        emailInput.style.backgroundImage = 'url("./src/images/icon-error.svg")';
        emailError.innerHTML = 'Please provide a valid email';
    }
});