const { createApp } = Vue;

createApp({
    data() {
        return {
            emails: [],  // Array per memorizzare gli indirizzi email generati
            emailCount: 10 // Numero di email da generare
        }
    },
    methods: {
        generateTenEmails() {
            this.emails = [];  // Pulisce l'array prima di iniziare a generare le email
            for (let i = 0; i < this.emailCount; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((resp) => {
                        this.emails.push(resp.data.response);
                    });
            }
        }
    }
}).mount('#app');
