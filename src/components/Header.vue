<template>
    <div class="header">
        <div class="container-1">
            <router-link to="/"><h1 class="titulo">Xion</h1></router-link>
           
            <input type="text" id="search" placeholder="Search...">
            
            <router-link to="/cart"><h3>Cart: {{cart.money}}$</h3></router-link>
        </div>   
        <div class="container-2">
            <div class="aux1"></div>
            <div class="menu">
                <div class="nav">
                    <ul>
                        <li><router-link to="/">Home</router-link></li> 
                        <li><router-link to="/products">Products</router-link></li>
                        <li><router-link to="/populars">Populars</router-link></li>
                        <li><router-link to="/Offers">Offers</router-link></li>
                    </ul>
                </div>     
            </div> 
            <div class="aux2"></div>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex';


export default {
    name: 'Header',
    data() {
        return {
           
        }
    },
    computed: {
        ...mapState(['cart'])
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
    .header{
       background: $blanco;
       display: flex;
       flex-direction: column;
       align-items: center;
       height: 20vh;
      

      a{
          text-decoration: none;
          color: $blanco;
          transition: 400ms;

          &:hover{
              font-size: 18px;
          }
      }

        .container-1{
       
        background: $blue-munsell;
        width: 93%;
        height: 10vh;
        color: white;
        padding-left: 7%; 
        
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        height: 10vh;
    

            input{
                
                width: 40%;
                height: 25px;
                border-radius: 10px;
                border: 0;
                outline: none;
                padding: 5px;
                font-size: 16px;
                padding-left: 10px;
                padding-right: 10px;
            }

            h3{
                width: 150px;  
            }
        }

        .titulo{
            font-size: 40px;
            font-weight: bold;
            
        }

        .router-link-exact-active{
            background: $blue-munsell;
        }

        .container-2{
            width: 70%;
            display: flex;
            justify-content: space-around;
            height: 6vh;
           
            .aux1{
                width: 20%;
                background: $carrot;
                margin: 0;
                transform: skew(40deg);
                border-bottom-left-radius: 10px;
            }

             .aux2{
                width: 20%;
                background: $carrot;
                margin: 0;
                transform: skew(-40deg);
                border-bottom-right-radius: 10px;
            }
        }

        .menu{

            position: absolute;
            z-index: 10;
            width: 40%;
            height: 6vh;
            background: $carrot;
            color: black;
            font-weight: bold;
            padding-left: 10px;
            padding-right: 10px;
     
            .nav{
               ul{
                height: 6vh;

                display: flex;
                flex-direction: row;
                list-style: none;
                justify-content: space-around;
                align-items: center;

                li{
                    width: 100%;
                    height: 6vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    a{
                        text-decoration: none;
                        color: black;
                        width: 90%;
                        height: 4vh;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        transition: 400ms;
                        border-radius: 10px;
                        
                        &:hover{
                            background: $blue-munsell;
                            color: white;
                        }
                    }

                }
               }
            }
        }
    }

</style>