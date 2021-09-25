var app = new Vue({
    el: '#app',
    data: {
        premium: true,
        cart: []
    },
    methods: {
        updateCart(id) {

            this.cart.push(id);
        },
        removeFromCart(id) {
            let flag = false;
            for (var i = this.cart.length - 1; i >= 0; i--) {
                if (!flag) {
                    if (this.cart[i] === id) {
                        this.cart.splice(i, 1);
                        flag=true;
                    }
                }
            }
        }
    },
    computed: {

    }
})