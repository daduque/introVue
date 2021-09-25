Vue.component('ItemDetails', {
    props : {
        details : {
            type : Array,
            required : true
        }
    },
    template : `
  
        <div>
            <ul>
                <li v-for="item in details" :key="item.id"> 
                    {{ item }}
                </li>
            </ul>
        </div>

    `,
    data(){
        return{

        }
    },
    methods : {

    },
    computed : {

    }

})