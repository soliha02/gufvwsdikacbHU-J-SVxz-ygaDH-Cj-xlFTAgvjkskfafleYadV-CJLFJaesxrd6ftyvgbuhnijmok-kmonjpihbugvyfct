let login = document.getElementById('login')
let password = document.getElementById('parol')
let knopka = document.getElementById('btn')
let Wrapper = document.getElementById('wrapper')
Wrapper.style.display = 'none'




knopka.addEventListener('click', ()=>{
    if (login.value == '1' && password.value == '1') {
        alert('Saytga hush kelibsiz janob')
        Wrapper.style.display = 'block'
    }else{
        alert('boring chichib keling')
    }
})
if (knopka ) {
    
}
