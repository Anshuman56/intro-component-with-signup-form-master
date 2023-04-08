const form = document.querySelector('form')
const button = document.querySelector('button')
const firstName = document.querySelector('#first')
const lastName = document.querySelector('#last')
const email = document.querySelector('#email')
const pass = document.querySelector('#pass')


form.addEventListener('submit', hasValue)
button.addEventListener('click', hasValue)
 
function hasValue(e){
    e.preventDefault();
    
    if(firstName.value.length === 0){
        document.querySelector('#error-icon-first').style.display='block';
        document.querySelector('#error-msg-first').style.display='block';
        firstName.style.border ='2px solid hsl(0, 100%, 74%)';
        
    }
    else{
        document.querySelector('#error-icon-first').style.display='none';
        document.querySelector('#error-msg-first').style.display='none';
        firstName.style.border ='';
    }
    
    if(lastName.value.length === 0){
        document.querySelector('#error-icon-last').style.display='block';
        document.querySelector('#error-msg-last').style.display='block';
        lastName.style.border ='2px solid hsl(0, 100%, 74%)';
        
    }
    else{
        document.querySelector('#error-icon-last').style.display='none';
        document.querySelector('#error-msg-last').style.display='none';
        lastName.style.border ='';
    }
    
    if(email.value.length === 0){
        document.querySelector('#error-icon-email').style.display='block';
        document.querySelector('#error-msg-email').style.display='block';
        email.style.border ='2px solid hsl(0, 100%, 74%)';
    
    }
    else{
        document.querySelector('#error-icon-email').style.display='none';
        document.querySelector('#error-msg-email').style.display='none';
        email.style.border ='';
    }
    
    if(pass.value.length === 0){
        document.querySelector('.error-icon-pass').style.display='block';
        document.querySelector('.error-msg-pass').style.display='block';
        pass.style.border ='2px solid hsl(0, 100%, 74%)';
        
    }
    else{
        document.querySelector('.error-icon-pass').style.display='none';
        document.querySelector('.error-msg-pass').style.display='none';
        pass.style.border ='';
    }
    
}