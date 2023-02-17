import {reviews} from './reviews.js';
const img = document.getElementById('person');
const name = document.getElementById('name');
const job = document.getElementById('job');
const info = document.getElementById('info');


const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const randomButton = document.querySelector('.randomButton');


let currentItem = 0;


window.addEventListener('DOMContentLoaded',function(){
    
    showPerson(currentItem)

});

// mostrar persona en funcion

function showPerson(person) {
    const item = reviews[currentItem];
    img.src = item.img;
    name.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

nextBtn.addEventListener('click',function(){
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson(currentItem)
})

prevBtn.addEventListener('click',function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length -1;
    }
    showPerson(currentItem)
})

randomButton.addEventListener('click',function(){
    currentItem = Math.floor(Math.random() * reviews.length)
    showPerson();
})
