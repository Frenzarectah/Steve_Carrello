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
                    <ul class="main_table piskel">
                    <div class="title">Shoppinz List</div>
                    <li v-for='item in shopping_items'>{{item}}</li>
                    </ul>
                </div>
    `,
    methods:{
        isTimeout() {
            setTimeout(() => {
                this.timeout = false;
            }, 100);
        }
    },
    mounted(){
        axios.get('https://ohanahome.altervista.org/public/shopping_list')
            .then(response => {
                console.log(response);
                this.shopping_items = response.data.data.map(item =>{ return item.prodotto});
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }
});

app.mount('#steve');