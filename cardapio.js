var bars = document.querySelector('.burger-container ')
var items = document.querySelector('.items-container')
var logo = document.querySelector('.logo')
 function menuShow(){
    if(items.style.display == 'block'){
        bars.innerHTML = '   <i class="fa-solid fa-bars"></i>'
        items.style.display = 'none'
    }else{
        items.style.display = 'block'
        bars.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    }
 }


const block = document.querySelector('#container-inicio')
const imags = document.querySelectorAll('#container-inicio img')
let cont = 0

function slide(){
    cont++

    if(cont > imags.length - 1){
        cont = 0
    }
    block.style.transform = `translateX(${-cont * 700}px)`
}
setInterval(slide,2000)

function heart(){
    var heart = document.getElementById('favorito')
    if(heart.innerHTML = '<i class="fa-solid fa-heart"></i>'){
        heart.style.color = 'red'
        heart.style.filter = `opacity(${59}%)`
    }else{
        heart.innerHTML = '<i class="fa-regular fa-heart"></i>'
    }
}


function heart2(){
    var heart = document.getElementById('favorito2')
    if(heart.innerHTML = '<i class="fa-solid fa-heart"></i>'){
        heart.style.color = 'red'
        heart.style.filter = `opacity(${59}%)`
    }else{
        heart.innerHTML = '<i class="fa-regular fa-heart"></i>'
    }
}


function heart3(){
    var heart = document.getElementById('favorito3')
    if(heart.innerHTML = '<i class="fa-solid fa-heart"></i>'){
        heart.style.color = 'red'
        heart.style.filter = `opacity(${59}%)`
    }else{
        heart.innerHTML = '<i class="fa-regular fa-heart"></i>'
    }
}

function heart4(){
    var heart = document.getElementById('favorito4')
    if(heart.innerHTML = '<i class="fa-solid fa-heart"></i>'){
        heart.style.color = 'red'
        heart.style.filter = `opacity(${59}%)`
    }else{
        heart.innerHTML = '<i class="fa-regular fa-heart"></i>'
    }
}


const wrapper = document.querySelector('main.card-at')

let pressed = false
let startX = 0

wrapper.addEventListener('mousedown', function (e) {
    pressed = true 
    startX = e.clientX
    this.style.cursor = 'grabbing'
})


wrapper.addEventListener('mouseleave', function (e) {
    pressed = false
})

window.addEventListener('mouseup', function (e) {
    pressed = false
    wrapper.style.cursor = 'grab'
})

wrapper.addEventListener('mousemove', function (e) {
    if(!pressed){
       return
    }

    this.scrollLeft += startX - e.clientX

    
})



function loader(){
    document.querySelector('.loader-container').classList.add('fade-out')
}

function fadeOut(){
    setInterval(loader, 4000)
}

window.onload = fadeOut;
window.style.filter = `blur(${100}px)`