import throttle from 'lodash.throttle'; 

const form = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-state";

form.addEventListener('input', throttle(onFormDataUpdate, 500)); 
form.addEventListener('submit', onFormSubmit);

function onFormDataUpdate() {

    const email = form.email.value; 
    const message = form.message.value; 

    const formData = {
        email, 
        message, 
    }
    
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
}

const savedInfo = JSON.parse(localStorage.getItem(localStorageKey));

    
if (savedInfo) {
    form.email.value = savedInfo.email;
    form.message.value = savedInfo.message;
} else {
    form.email.value = ""; 
    form.message.value = "";
}

function onFormSubmit(event) {
    event.preventDefault();

    const email = form.email.value; 
    const message = form.message.value; 
    const formData = {
        email, 
        message, 
    }

    console.log(formData);
    form.reset();
    localStorage.removeItem(localStorageKey);
}

