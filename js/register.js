const fs = require('fs');
const password = document.getElementById('password-register').value
const username = document.getElementById('username').value
const email = document.getElementById('user-email').value
let encryptRandnum = 0

console.log(password+typeof(password))

function randNum(min, max){
    return Math.random() * (max - min) + min;
}

let id = randNum(1, 1000)

let registerData = {
    "id": id,
    "user": username,
    "senha": password,
    "email": email
}

fs.writeFile('../data.json', JSON.stringify(registerData, null, 2), 'utf-8', (error, result) =>{
    if(error){
        console.error(error)
        return;
    }

    console.log(result)
})