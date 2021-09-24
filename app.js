var app = new Vue({
    el: '#app',
    data : {
        brand : 'D.A.D',
        product : 'Socks',
        description : 'lorem ipsum text.',
        image2 : './img/blueSocks.png',
        inStock : true,
        inventory : 10,
        details: ["80% Cotton", "20% Polyester", "Neutral gender"],
        variants : [
            {
                variantID : 1122,
                variantColor: '#248c54',
                variantImage : './img/greenSocks.png'
            },
            {
                variantID : 3344,
                variantColor: '#202e3f',
                variantImage: './img/blueSocks.png'
            }
        ],
        sizes : ['S', 'M', 'L', 'XL'],
        cart : 0
    },
    methods: {
        addToCart(){
            this.cart += 1;
        },
        removeToCart(){
            this.cart > 0? this.cart-- : this.cart;
        },
        updateProduct(variantImage){
            this.image2 = variantImage;
        }
    },
    computed : {
        title(){
            return this.brand + ' ' + this.product;
        }
    }
})