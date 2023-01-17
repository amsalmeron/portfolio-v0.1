let menu = document.querySelector('#menu')
let navbar = document.querySelector('.navbar')
let scrollBar = document.querySelector('.scroll-bar')

const avatarURL = document.getElementById('avatarURL')
const avatarBio = document.getElementById('avatarBio')

githubApiData();

function githubApiData() {
    fetch('https://api.github.com/users/amsalmeron')
    .then(response => response.json())
    .then(response => {
        avatarBio.innerHTML = response.bio
        avatarURL.setAttribute("src", response.avatar_url)
    })
}


menu.addEventListener('click',() => {
    menu.classList.toggle('fa-times')
    navbar.classList.toggle('nav-toggle')
})

window.onscroll = () => {
    menu.classList.remove('fa-times')
    navbar.classList.remove('nav-toggle')
    scrollIndicator()
}

function scrollIndicator(){
    let maxHeight = window.document.body.scrollHeight - window.innerHeight;
    let percentage = ((window.scrollY) / maxHeight) * 100
    scrollBar.style.width = percentage + '%'
}