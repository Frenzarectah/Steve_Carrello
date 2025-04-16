const app = Vue.createApp({
    data() {
        return {
            name: "Carrell",
            shopping_items: [],
            timeout: true,
        }
    },
    template: `
                <div v-if="timeout" class="flex justify-center items-center h-screen bg-[#a4243b]">
                    <img class="animate__animated animate__heartBeat animate__infinite rounded-full w-1/2" src="assets/logo.png">
                </div>
                <div v-else class="bg-[#a4243b] flex justify-center items-center h-screen">  
                <ul class="main_table lilita">
                <div class="title">Shoppinz List</div>  
                    <li v-for='(item,index) in shopping_items' :key='index'>{{item.item}}
                        <button v-if='index === shopping_items.length-1'>+</button>
                        <button v-else @click="deleteItem(item.id)">-</button>
                    </li>
                    </ul>
                </div>
    `,
    mounted(){
        axios.get('https://ohanahome.altervista.org/public/shopping_list')
            .then(response => {
                this.shopping_items = response.data.data.map(item =>{ return {item: item.prodotto, id: item.id}});
                this.timeout = false;
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    },
    methods: {
        deleteItem(id){
            axios.delete('https://ohanahome.altervista.org/public/shopping_list/'+id)
            .then(()=>{
            return axios.get('https://ohanahome.altervista.org/public/shopping_list');
            })
            .then(response => {
                this.shopping_items = response.data.data.map(item => {
                    return { item: item.prodotto, id: item.id };
                });
            })
        }    
    },
});

app.mount('#steve');