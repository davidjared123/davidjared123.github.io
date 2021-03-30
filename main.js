const form = document.querySelector('.formulario');
const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
       
form.addEventListener('submit', e => {
    //Se muestra un texto a modo de ejemplo, luego va a ser un icono
    e.preventDefault()
    if (e.target.email.value.trim() === '' || emailRegex.test(e.target.value)) {
        form.classList.add('form--error')
        e.preventDefault()
    }
    
    console.log(e.target.email.value)
});

form.email.addEventListener('focus', ()=>{
    form.classList.remove('form--error')
})
