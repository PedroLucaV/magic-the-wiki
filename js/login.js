import data from '../data.json' assert{'type': 'json'};

const btn = document.getElementById('login')
btn.addEventListener('click', (event) => {
    event.preventDefault()
    const user = document.getElementById('user').value
    const password = document.getElementById('password').value

    const login = data.find((obj) => obj.usuario === user && obj.senha === password)

    console.log(user, password)
    console.log(login)

    if(login){
        window.location = '../index.html'
    }else{
        alert(`User ${user} not found!`)
    }
})