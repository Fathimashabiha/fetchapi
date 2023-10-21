const form = document.querySelector('#form')
const email = document.querySelector('#email')
const password = document.querySelector('#password')

form.addEventListener('submit',(e)=>{
    
    if (!validateInputs()){
        e.preventDefault();
    }
    else{
        alert("Login successfully")
    }

})

function validateInputs(){
    
    const emailVal = email.value.trim()
    const passwordVal = password.value.trim()
   
    let success=true
    
    
    if(emailVal===''){
        success=false
        setError(email,'Email is required')
        }
        else if(!validateEmail(emailVal)){
            success=false
           setError(email,'Please Enter a valid email')
        }
        else{
            setSuccess(email)
        }
    if(passwordVal===''){
        success=false
        setError(password,'Password is required')
    }
    else if(passwordVal.length<8){
        success=false
        setError(password,'Password must be atleast 8 character long')
    }
    else{
        setSuccess(password)
    }
    
    
    return success;
}
function setError(element,message){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')
    
    errorElement.innerText = message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}
function setSuccess(element){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')
    
    errorElement.innerText = '';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}

const validateEmail = (email) => {
    return String(email)
    .toLowerCase()
    .match(
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    );
}