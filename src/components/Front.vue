<template>
    <div class="front">
        <router-link class="pestana1" to="/offers">
            <div >
            <h3>OFFERS !!!</h3>
            <h3>Up to 25%<br/>of descent </h3>
            </div>
        </router-link>
       
        <div class="container-2">
            <router-link class="pestana2" to="/populars">
            <div >
                <h3>The most sold!!!</h3>
            </div>
            </router-link>
            
            <div class="pestana3">
                <h3>Free shipping <br/> worldwide</h3>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
name: 'Front',
data() {
    return {
    
    }
},
computed: {
     ...mapState(['productsCasual','productsSport'])
}
}
</script>

<style lang="scss">
    $carrot: #ffa502;
    $blue-munsell: #048ba8ff;
    $charcoal: #2e4057ff;
    $android-green: #99c24dff;
    $jet: #2f2d2eff;
    $blanco:rgb(246, 246, 246);
    
    .front{
        width: 100%;
        display: flex;
        flex-direction: row;
        height: 80vh;
        background: $blanco;
        
        div{
            width: 100%;
            display: flex;
            flex-direction: column;
            height: 80vh;
        }
    }

    .pestana1{
        width: 100%;
        background-image: url("../../public/img/casual/BugattisMarron.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    
        transition: 400ms;
        font-size: 40px;
        text-decoration: none;
        h3{
            
            color: $android-green;
        }

        &:hover{
            font-size: 55px;
        }

        div{
            padding: 40px;
            width: 100%;
            height: 60vh;
         
            &:hover{
                 background-color: rgba(255, 255, 255, 0.2);
            }
        }

    }

    .container-2{
        height: 80vh;
    }

    .pestana2{
        width: 100%;
        
        background-image: url("../../public/img/sport/Lebron17_2.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        transition: 400ms;
        text-decoration: none;
        font-size: 20px;
        &:hover{
            font-size: 35px;
           
        }

        
        div{
            padding: 40px;
            width: 80%;
            height: 25vh;
         
            &:hover{
                 background-color: rgba(255, 255, 255, 0.2);
            }
        }
  
    }
    .pestana3{
        width: 100%;
        height: 40vh;
   
        background-image: url("../../public/img/envios.png");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        color: $jet;
        transition: 400ms;
        font-size: 20px;
        
        h3{
            margin: 40px;
        }

        
        &:hover{
            font-size: 35px;
         
        }

    }
</style>