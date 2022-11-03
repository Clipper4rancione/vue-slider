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
            }
        }
    }
}).mount('#app')