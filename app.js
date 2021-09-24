var app = new Vue({
    el: '#app',
    data : {
        brand : 'D.A.D',
        product : 'Socks',
        description : 'lorem ipsum text.',
        inventory : 10,
        details: ["80% Cotton", "20% Polyester", "Neutral gender"],
        selectedVariant : 0,
        variants : [
            {
                variantID : 1122,
                variantColor: '#248c54',
                variantImage : './img/greenSocks.png',
                variantQuantity : 10
            },
            {
                variantID : 3344,
                variantColor: '#202e3f',
                variantImage: './img/blueSocks.png',
                variantQuantity : 0
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
        updateProduct(index){
            this.selectedVariant = index;
            // console.log(index);
        }
    },
    computed : {
        title(){
            return this.brand + ' ' + this.product;
        },
        image(){
            return this.variants[this.selectedVariant].variantImage
        },
        inStock(){
            return this.variants[this.selectedVariant].variantQuantity
        }
    }
})