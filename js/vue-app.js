const { createApp } = Vue;

createApp({
    data(){
        return{
            country: {
                images: [
                    
                    'cyberpunk.jpg',
                    'chile.jpg',
                    'mountain-lake.jpg',
                    'peru.jpg'
                
                ]
            }
        }
    }
}).mount('#app')