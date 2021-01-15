<template>
   
    <div class="cart">
        <div class="container-titles">
            <h2 class="titulo-cart">Cart</h2>
            <h2 class="total">Total: {{ cart.money }}</h2>
            <button class="boton-finish">Finish</button>
         </div>
        <div class="container-item-cart">
            <table>
                <tr>
                    <th><h2>Image</h2></th>
                    <th><h2>Name</h2></th>
                    <th><h2>Maker</h2></th>
                    <th><h2>Color</h2></th>
                    <th><h2>Price</h2></th>
                    <th><h3>Delete</h3></th>
                </tr>

            <tr class="item-cart" v-for="(item, index) of cart.items" v-bind:key="item.id">
                <td><img width="100" :src="item.img[0]" alt=""></td>
                <td><h3>{{ item.name }}</h3></td>
                <td><h3>{{ item.maker }}</h3></td>
                <td><h3>{{ cart.colors[index] }}</h3></td> 
                <td><h3 :class="{'oferta1' : item.offer > 0}" >{{ item.price }}$</h3>
                <h3 v-if="item.offer > 0">{{ item.offer }}$</h3></td>
                <td><button class="boton-delete" @click="deleteItem(index)" >Delete</button></td>
            </tr>
            </table>
        </div>
        
    </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex';

export default {
name: 'Cart',
data() {
    return {
  
    }
},
computed: {
     ...mapState(['cart'])
},   
methods: {
 
    ...mapMutations(['deleteItem'])
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
 
    .cart{
        background: $blanco;
          width: 100%;
    }

    .container-titles{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        padding: 20px;
    }

    .oferta1{
        display: none;
    }

    .container-item-cart{
        width: 100%;
        
        display: flex;
        flex-direction: column;

        .item-cart{
           td{
               text-align: center;
           }
        }
    }

     .boton-delete{
            margin: 10px;
            width: 80px;
            height: 40px;
            cursor: pointer;
            background: $carrot;
            border: 0;
            border-radius: 5px;
            font-size: 16px;
            font-weight: bold;
            transition: 400ms;

            &:hover{
                background: red;
            }
        }
         .boton-finish{
            margin: 10px;
            width: 80px;
            height: 40px;
            cursor: pointer;
            background: $carrot;
            border: 0;
            border-radius: 5px;
            font-size: 16px;
            font-weight: bold;
            transition: 400ms;

            &:hover{
                background: $android-green;
            }
        }
</style>