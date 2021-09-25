Vue.component('ItemProduct', {
    props : {
        premium : {
            type : Boolean,
            required : true,
            default : false
        }
    },
    template : `
    <div class="product row">

    <div class="product__img col">
        <img :src="image" alt="">
    </div>

    <div class="product__info col">
        <h1>
            {{ title }}
        </h1>
        <p>
            {{ description }}
        </p>
        <p v-if="inStock">
            In Stoock
        </p>
        <!-- <p v-else-if="inventory <= 10 && inventory > 0">
            Almost Sold Out!
        </p> -->
        <p 
            v-else
            :style="{ 'text-decoration' : 'line-through' }">
            Out of Stock
        </p>
        <p>
            Shipping: {{ shipping }}
        </p>

        <item-details :details="details"></item-details>

        <div>
            <h2>Variants</h2>
            <div 
                v-for="(item, index) in variants" 
                :key="index"
                class="color-box"
                :style="{backgroundColor: item.variantColor}"
                @mouseover="updateProduct(index)">

            </div>
        </div>

        <div>
            <h2>Sizes</h2>
            <label for="sizes">Choose your size</label>
            <select id="sizes">
                <option v-for="(size, index) in sizes" :key="index" value="size">{{ size }}</option>
            </select>
        </div>

        <button 
            :disabled="!inStock" 
            @click="addToCart" 
            class="btn btn-info w-100 mb-3" 
            :class="{ 'disabled-btn': !inStock }"
            >Add to Cart</button>
        <button 
            :disabled="!inStock" 
            @click="removeToCart" 
            class="btn btn-danger w-100  mb-3"
            :class="{ 'disabled-btn': !inStock }"
            >Remove from Cart</button>

    </div>

</div>
    `,
    data(){
        return{
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
            
        }
    },
    methods : {
        addToCart(){
            this.$emit('add-to-cart', 'sumar');
            // this.cart += 1;
        },
        removeToCart(){
            this.$emit('remove-to-cart', 'restar');
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
        },
        shipping(){
            return this.premium? 'Free' : '$10.900';
        }
    }

})