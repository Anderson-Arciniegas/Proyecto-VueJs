<template>
    <div class="details">

           <div class="container-product" v-if="$route.params.id <= 3">
                <div class="container-image">
                    <div class="mini-images">
                    <img v-for="image of productsCasual[$route.params.id].img" v-bind:key="image.id" width="80" :src="image" @click="showImage(image,0)" @load="showImage(image,contador)" alt="">
                    </div>
                    <div>
                        <img width="400" :src="showedImage" alt="">
                    </div>
                </div>
                <div>
                    <h3>{{ productsCasual[$route.params.id].name }}</h3>
                    <div>
                        <h3 :class="{'oferta' : productsCasual[$route.params.id].offer > 0}" >Price: {{ productsCasual[$route.params.id].price }}$</h3>
                        <h3 v-if="productsCasual[$route.params.id].offer > 0">Offer Price: {{ productsCasual[$route.params.id].offer }}$</h3>
                    </div>
                    <h4>Type: {{ productsCasual[$route.params.id].type }}</h4>
                    <h4>Maker: {{ productsCasual[$route.params.id].maker }}</h4>

                    <h4>Color: </h4>
                    <div>
                       
                        <div v-for="color of productsCasual[$route.params.id].color" v-bind:key="color.id">

                            <button class="button-color" @click="cart.colors[cart.items.length] = color">{{ color }}</button>
                        </div>   
                        <input class="boton-buy" @click="buy(productsCasual[$route.params.id])" type="submit" value="Buy">
                     
                    </div>
                </div>
            </div>
            <div  class="container-product" v-if="$route.params.id > 3">
                <div class="container-image">
                    <div class="mini-images">
                    <img v-for="image of productsSport[$route.params.id - 4].img" v-bind:key="image.id" width="80" :src="image" @click="showImage(image,0)" @load="showImage(image,contador)" alt="">
                    </div>
                    <div>
                        <img width="400" :src="showedImage" alt="">
                    </div>
                </div>
                <div>
                    <h3>{{ productsSport[$route.params.id - 4].name }}</h3>
                   <div>
                        <h3 :class="{'oferta' : productsSport[$route.params.id - 4].offer > 0}" >Price: {{ productsSport[$route.params.id - 4].price }}$</h3>
                        <h3 v-if="productsSport[$route.params.id - 4].offer > 0">Offer Price: {{ productsSport[$route.params.id - 4].offer }}$</h3>
                    </div>
                    <h4>Type: {{ productsSport[$route.params.id - 4].type }}</h4>
                    <h4>Maker: {{ productsSport[$route.params.id - 4].maker }}</h4>

                    <h4>Color: </h4>
                    <div>
                       
                        <div v-for="color of productsSport[$route.params.id - 4].color" v-bind:key="color.id">
                            <button class="button-color" @click="cart.colors[cart.items.length] = color">{{ color }}</button>
                        </div>   
                        <input class="boton-buy" @click="buy(productsSport[$route.params.id - 4],chosenColor)"  type="submit" value="Buy">
                     
                    </div>
                </div>
            </div>

    </div>
    
</template>

<script>
import {mapState, mapMutations} from 'vuex';

export default {
name: 'Details',
data() {
    return {
     imagen: 'Chelsea1',
     showedImage: "",
     contador: 0,
     defColor: ''
    }
},
computed: {
     ...mapState(['productsCasual','productsSport','cart']),

},   
methods: {
    showImage(image,cont){

      if(cont == 0){
        this.showedImage = image;
        this.contador += 1;
       }
    },
    
    ...mapMutations(['buy']),

    chooseColor(color){

        this.defColor = color;
    }
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
    
    .details{
        background: $blanco;
        padding: 40px;
        padding-top: 20px;

        .container-product{

            display: flex;
            flex-direction: row;

            h3{
                margin: 10px;
            }
            
            h4{
                margin: 10px;
            }
    
            label{
                margin: 10px;
            }
        }

          .oferta{
            text-decoration: line-through;
            margin-right: 5px;
        }

        .container-image{
            width: 60%;
            display: flex;
            flex-direction: row;
          
            border-radius: 10px;
            margin-right: 30px;

            .mini-images{
                
                display: flex;
                flex-direction: column;
                img{
                    margin: 10px;
                    cursor: pointer;
                    border: 1px solid $jet;
                    border-radius: 10px;
                    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
                    transition: 400ms;

                    &:hover{
                        box-shadow: 6px 6px 8px rgba(0, 0, 0, 0.2);
                    }
                }
            }

        }

        .boton-buy{
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

        .button-color{
            margin: 5px;
            margin-left: 10px;
            width: 60px;
            height: 30px;
            cursor: pointer;
            border: 0;
            border-radius: 5px;
            font-size: 16px;
            font-weight: bold;
            transition: 400ms;
            background: $jet;
            color: white;
            &:hover{
               color: $carrot;
            }
            &:focus{
                color: $blue-munsell;
            }
        }

    }


</style>