const { createApp } = Vue;

createApp({
    data() {
        return {
            emails: [],  // Array per memorizzare gli indirizzi email generati
            emailCount: 10 // Numero di email da generare
        }
    },
    methods: {
        
    }
}).mount('#app');
