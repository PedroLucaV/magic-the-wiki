const errorMsg1 = document.getElementsByClassName('emptyMensage')[0]
const errorMsg2 = document.getElementsByClassName('emptyMensage')[1]
const errorMsg3 = document.getElementsByClassName('emptyMensage')[2]
const btn = document.getElementById('login');

function randNum(min, max) {
    let randomValue = Math.random() * (max - min) + min;
    randomValue = Number(randomValue).toFixed(2);
    return randomValue;
}

btn.addEventListener('click', (event) => {
    event.preventDefault();
    let id = randNum(1, 1000);
    const password = document.getElementById('password-register');
    const username = document.getElementById('username');
    const email = document.getElementById('user-email');
    const emailRegex = /^[a-z0-9\._]+@[a-z]+\.[a-z]{2,3}$/;
    const passwordRegex = /^[a-z0-9]{8,}$/i

    const passwordValue = password.value
    const usernameValue = username.value
    const emailValue = email.value

    if(passwordValue === '' || usernameValue === '' || emailValue === ''){
        if(usernameValue === ''){
            turnDisplayOn(errorMsg1)
        }else{
            turnDisplayOff(errorMsg1)
        }

        if(passwordRegex.test(passwordValue) === false){
            turnDisplayOn(errorMsg3)
        }else{
            turnDisplayOff(errorMsg3)
        }

        if(emailRegex.test(emailValue) === false){
            turnDisplayOn(errorMsg2)
        }else{
            turnDisplayOff(errorMsg2)
        }
    }else{
        window.location = '../index.html'
    }
});

function turnDisplayOn(el1) {
    el1.style.display = 'inherit';
}
function turnDisplayOff(el1) {
    el1.style.display = 'none';
}