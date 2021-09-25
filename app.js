var app = new Vue({
    el: '#app',
    data : {
        premium : true,
        cart : 0
    },
    methods: {
        updateCart(message) {

            if (message === 'sumar') {
                this.cart += 1;
            }else{
                this.cart > 0? this.cart-- : this.cart;
            }
        }
    },
    computed : {

    }
})