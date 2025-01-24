const app = Vue.createApp({
    data() {
        return {
            name: "Carrell",
            var: "pippolo",
            timeout: true,
        }
    },
    mounted() {
        this.isTimeout();
    },
    template: `
                <div v-if="timeout">
                    <img class="animate__animated animate__heartBeat animate__infinite rounded-full" src="assets/logo.png">
                    <span class="piskel">loading...</span>
                </div>
                <div v-else>
                    <h1> COGLIONE</h1>
                </div>
    `,
    methods:{
        isTimeout() {
            setTimeout(() => {
                this.timeout = false;
            }, 4000);
        }
    }
});

app.mount('#steve');