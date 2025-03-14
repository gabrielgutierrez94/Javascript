let signUp = document.getElementById('signUp');
let signIn = document.getElementById('signIn');
let nameImput = document.getElementById('name');
let title = document.getElementById('title');

signIn.onclick = function() {
    nameImput.style.maxHeight = '0px';
    title.innerHTML = 'Login';
    signUp.classList.add('disable');
    signIn.classList.remove('disable');
}

signUp.onclick = function() {
    nameImput.style.maxHeight = '60px';
    title.innerHTML = 'Registrate';
    signUp.classList.remove('disable');
    signIn.classList.add('disable');
}