let menu = document.querySelector('#menu')
let navbar = document.querySelector('.navbar')
let scrollBar = document.querySelector('.scroll-bar')
// import { fetch } from "node-fetch";
// const fetch = require('node-fetch');

// Github API call
// let githubData = async() => await fetch('https://api.github.com/users/amsalmeron')
// .then((response) => {
//     if (response.ok) {
//         return response.json()
//     }
// })
// .then(data => {
//     displayGithubData(data)
// }).catch((error) => error)

// githubData()

// let displayGithubData = (data) => {
//     const image = data.avatar_url
//     const name = data.login
//     const bio = data.bio

//     document.getElementById("main-avatar").src = image
//     document.getElementById("my-name").innerHTML = name
//     document.getElementById("my-bio").innerHTML = bio
// }



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