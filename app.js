const app = Vue.createApp({
    data() {
        return {
            name: "Carrell",
            shopping_items: ['mela','pera','banana','caffe'],
           // timeout: true,
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
                <div v-else class="bg-[#abe54d] flex justify-center items-center h-screen">
                    <table class="main_table piskel">
                    <tr class="title">Shoppinz List</tr>
                    <tr v-for='item in shopping_items'>{{item}}<td></tr>
                    </table>
                </div>
    `,
    methods:{
        isTimeout() {
            setTimeout(() => {
                this.timeout = false;
            }, 100);
        }
    }
});

app.mount('#steve');