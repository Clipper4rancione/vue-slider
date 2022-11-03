const slider = document.querySelector('.img-wrapper');
const thumbsSlider = document.querySelector('.container-thumbs');
//bottoni


const images = [
    {
        title   : "Ciberpunk Oriental City",
        caption : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, consectetur.",
        rif     : "cyberpunk.jpg"
    },
    
    {
        title   : "Cile",
        caption : "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        rif     : "chile.jpg"
    },

    {
        title   : "Colombia",
        caption : "Pablo's Home.",
        rif     : "mountain-lake.jpg"
    },

    {
        title   : "Perù",
        caption : "Lorem ipsum dolor sit amet consectetur adipisicing elit. amet consectetur adipisicing elit.",
        rif     : "peru.jpg"
    },

    {
        title   : "Argentina",
        caption : "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        rif     : "argentina.jpg"
    }
];
//CREO UN CONTATORE PER LE IMMAGINI, LE AGGIUNGO AD UNA COLLECTION ED ASSEGNO LA CLASSE ACTIVE AL PRIMO ELEMENTO
let counterImg = 0;

//console.table(images);


//STAMPO LE IMMAGINI NEL DOM

images.forEach(el  => {
    slider.innerHTML += getImageTemplate(el);
    thumbsSlider.innerHTML += getThumbsTemplate(el);
});

init();
//NAVIGAZIONE



const information = document.getElementsByClassName('info-text');
information[counterImg].classList.add('active-info');
//console.log(information)

const next = document.querySelector('.right');
const prev = document.querySelector('.left');
next.isNext = true;
prev.isNext = false;
next.addEventListener('click', nextPrev);
prev.addEventListener('click', nextPrev);








function init(){

    activeElements();
    automaticSlider()

}


function getImageTemplate(el){
    const {title, caption, rif} = el;

    return ` 
    <img class="item" src="img/${el.rif}" alt="${el.title}"> 
    
    <div class="info-text">
        <h2>${el.title}</h2>
        <p>${el.caption}</p>
    </div>
    `
};
function nextPrev(){
   /*
    1. disattivo le immagini a indice counterImages
    2. incremento o decremento il contatore
    3. attivo le immagini a indice counterImages
   */
    deactiveElements();
    if(this.isNext){
        counterImg++
        console.log('avanti');
        if(counterImg === images.length) counterImg = 0;
    }else{
        counterImg--
        console.log('dietro');
        if(counterImg < 0) counterImg = images.length - 1;
    }
    activeElements();
}
function getThumbsTemplate(el){
    const {title, rif} = el;

    return ` <img class="thumb" src="img/${el.rif}" alt="${el.title}"> `
}

function activeElements(){
    document.getElementsByClassName('item')[counterImg].classList.add('active');
    document.getElementsByClassName('thumb')[counterImg].classList.add('active-thumb');
}


function deactiveElements(){
    document.getElementsByClassName('item')[counterImg].classList.remove('active');
    document.getElementsByClassName('thumb')[counterImg].classList.remove('active-thumb');
}



function automaticSlider(){
    
    const autoplay = setInterval(function(){
        item[counterImg].classList.remove('active');
        thumb[counterImg].classList.remove('active-thumb');
        counterImg++;
        if(counterImg === images.length) counterImg = 0;
        item[counterImg].classList.add('active');
        thumb[counterImg].classList.add('active-thumb');
    }, 1000);
}