const app = Vue.createApp({
    data() {
        return {
            name: "Carrell",
            shopping_items: ['mela','pera','banana','caffe'],
            timeout: true,
        }
    },
    template: `
                <div v-if="timeout"  class="flex justify-center items-center h-screen">
                    <img class="animate__animated animate__heartBeat animate__infinite rounded-full" src="assets/logo.png">
                    <span class="piskel">loading...</span>
                </div>
                <div v-else class="bg-[#abe54d] flex justify-center items-center h-screen">
                    <ul class="main_table piskel">
                    <div class="title">Shoppinz List</div>
                    <li v-for='(item,index) in shopping_items' :key='index'>{{item}}
                        <button v-if='index === shopping_items.length-1'>+</button>
                        <button v-else='index != shopping_items.length-1'>-</button>
                    </li>
                    </ul>
                </div>
    `,
    mounted(){
        axios.get('https://ohanahome.altervista.org/public/shopping_list')
            .then(response => {
                this.shopping_items = response.data.data.map(item =>{ return item.prodotto});
                this.timeout = false;
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }
});

app.mount('#steve');