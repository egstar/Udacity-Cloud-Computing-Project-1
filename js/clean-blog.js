let navTab = document.querySelector('.masthead')
let navBar = document.getElementById('mainNav')
let navItems = document.querySelectorAll('.nav-item')

window.addEventListener('scroll', function() {
    if(window.scrollY > navTab.offsetHeight){
        navBar.style=  'background:rgba(69, 74, 78, .9);color:white;height:2.3rem;'
    } else {
        navBar.style= 'background:rgba(52, 58, 64, 0.247);color:white;'
    }
})

window.addEventListener('load', function(){
    if(this.location.hash === "#About"){
        navItems[1].classList.add('nav-active')
    } else if(this.location.hash === "#Post"){
        navItems[2].classList.add('nav-active')
    } else if(this.location.hash === "#Contact"){
        navItems[3].classList.add('nav-active')
    } else {
        navItems[0].classList.add('nav-active')
    }
    
    if(window.scrollY > navTab.offsetHeight){
        navBar.style=  'background:rgba(69, 74, 78, .9);color:white;height:2.3rem;'
    } else {
        navBar.style= 'background:rgba(52, 58, 64, 0.247);color:white;'
    }
}) 
for(let eachNav of navItems){
    eachNav.addEventListener('click', function(){
        if(!this.classList.contains('nav-active')){
           let activeItem = document.querySelector('.nav-active')
            activeItem.classList.remove('nav-active')
            this.classList.add('nav-active')
        }
    })
}

