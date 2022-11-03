const { createApp } = Vue;

createApp({
    data(){
        return{
            country: {
                images: [
                    
                    'img/cyberpunk.jpg',
                    'img/chile.jpg',
                    'img/mountain-lake.jpg',
                    'img/peru.jpg',
                    'img/argentina.jpg'
                ],
                name: [
                    'Ciberpunk Oriental City',
                    'Cile',
                    'Colombia',
                    'Perù',
                    'Argentina'
                ],
                caption: [
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, consectetur.',
                    
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit.',

                    'Pablo\'s Home.',

                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. amet consectetur adipisicing elit.',

                    'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
                ]
            },
            activeImage: 0
        }
    },
    methods: {
        changeClick(indice){
            this.activeImage = indice;
        },
        nextPrev(isNext){
            isNext ? this.activeImage++ : this.activeImage--

            if(this.activeImage === this.country.images.length){
                this.activeImage = 0;
            }else if(this.activeImage < 0){
                this.activeImage = this.country.images.length -1;
            }
        },
        next(){
            this.activeImage++;

            if(this.activeImage === this.country.images.length) this.activeImage = 0;
        },
        autoplay(){
            let play = setInterval(this.next, 1200)
        },     
        stopTime(){
           clearInterval(this.play);
        }
    },
    mounted(){
        //console.log('montata');
        this.autoplay();
    }
}).mount('#app')