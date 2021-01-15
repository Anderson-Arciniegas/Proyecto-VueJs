<template>
    <div class="products-container">
   
     <div  v-for="item of productsCasual" :class="{'oculto' : cart.populars[item.id] < 5}" :key="item.id" >
        <router-link v-if="cart.populars[item.id] >= 5" class="container" v-bind:to="'/details/'+item.id ">
            <img width="150" :src="item.img[0]" alt=""/>

            <h3>{{ item.name }}</h3>
            <div>
                <h3 :class="{'oferta' : item.offer > 0}">{{ item.price }}$</h3>
                <h3 v-if="item.offer > 0">{{ item.offer }}$</h3>
            </div>
        </router-link>
     </div>
     <div v-for="item of productsSport" :class="{'oculto' : cart.populars[item.id] < 5}"  :key="item.id" >
        <router-link v-if="cart.populars[item.id] >= 5" class="container" v-bind:to="'/details/'+item.id">
            <img width="150" :src="item.img[0]" alt=""/>
        
            <h3>{{ item.name }}</h3>
            <div>
                <h3 :class="{'oferta' : item.offer > 0}" >{{ item.price }}$</h3>
                <h3 v-if="item.offer > 0">{{ item.offer }}$</h3>
            </div>
        </router-link>
     </div>
    </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
name: 'Products',
data() {
    return {
     imagen: 'Chelsea1'
    }
},
computed: {
     ...mapState(['productsCasual','productsSport','cart'])
},   
methods: {
 

},

}

</script>

<style lang="scss">
    $carrot: #ffa502;
    $blue-munsell: #048ba8ff;
    $charcoal: #2e4057ff;
    $android-green: #99c24dff;
    $jet: #2f2d2eff;
    $blanco:rgb(246, 246, 246);

.products-container{
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 50vh 50vh 50vh 50vh;
    background: $blanco;

    .oculto{
        display: none;
    }
  
    .container{
        display: flex;
        flex-direction: column;
        text-decoration: none;
        margin-left: 50px;
        margin-right: 50px;
        align-items: center;
        justify-content: center;
        background: $blue-munsell;
        border-radius: 10px;
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
        transition: 200ms;
        color: $jet;
      
        img{
            border-radius: 10px;
            margin-bottom: 10px;
            box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
            margin-top: 15px;
        }
        h3{
            margin-bottom: 5px;
        }

        .oferta{
            text-decoration: line-through;
            
            margin-right: 5px;
        }

        div{
            display:flex;
            flex-direction: row;
        }

        &:hover{
            box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.2);
            
        }
    }
}

</style>