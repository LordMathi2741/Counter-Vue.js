const app = Vue.createApp({
    data(){
        return{
            count: 0
        }
    },
    methods: {
        increase(){
            this.count = this.count + 1
        },
        clear(){
            this.count = 0
        }
    }
})
app.mount('#myapp')