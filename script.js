const alphabets='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const smallAlpha='abcdefghijklmnopqrstuvwxyz'
const numbers='0123456789'
const symbols='~@#$%^&*?|'
let combined=alphabets+smallAlpha+numbers+symbols

let length=12;

let input=document.getElementById('password')
let btn=document.querySelector('button')
btn.addEventListener('click',()=>{
    let password=''
    password+=alphabets[Math.floor(Math.random(alphabets)*alphabets.length)]
    password+=smallAlpha[Math.floor(Math.random(alphabets)*smallAlpha.length)]
    password+=numbers[Math.floor(Math.random(alphabets)*numbers.length)]
    password+=symbols[Math.floor(Math.random(alphabets)*symbols.length)]

    while (password.length<length){
        let e=combined[Math.floor(Math.random(alphabets)*combined.length)]
        password+=e
    }
    input.value=password
})

let copy=document.querySelector('.fa-copy')
copy.addEventListener('click',async ()=>{
    input.select()
    // document.execCommand('copy')
    try {
        await navigator.clipboard.writeText(input.value);
        alert('Content copied to clipboard');
      } catch (err) {
        alert('Failed to copy: ', err);
      }
})
