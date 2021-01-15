import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart:{
      money: 0, 
      items:[],
      colors:[],
      populars:[0,0,12,0,2,0,8,5,0,6,0,0]
      },
    productsCasual: [
      {id:0,name:"Bugatti Classic", type:"Boots" , maker:"Bugatti", color:["Brown"], price:180, offer: 135, img:["./img/casual/BugattisMarron.jpg", "./img/casual/BugattiMarron2.jpg", "./img/casual/BugattiMarron3.jpg"] },
  
      {id:1,name:"Bugatti DackStorm",type:"Boots", maker:"Bugatti", color:["Black"], price:240, offer: 0, img:["./img/casual/BugattiNegro1.jpg","./img/casual/BugattiNegro2.jpg", "./img/casual/BugattiNegro3.jpg"] },
  
      {id:2,name:"Chelsea Classic", type:"Boots", maker:"Chalcea", color:["Brown"], price:110, offer: 90, img:["./img/casual/chelsea1.jpg","./img/casual/Chelsea2.jpg","./img/casual/Chelsea3.jpg"] },
  
      {id:3,name:"Timberland Classic", type:"Boots", maker:"Timberland", color:["Yellow","Black","Green"], price:120, offer: 0, img:["./img/casual/TA2.jpg","./img/casual/TA3.jpg","./img/casual/TN1.jpg","./img/casual/Tverde1.jpg"] }
  
    ],
    productsSport: [
        {id:4,name:"Jordan Max Aura", type:"Sport" , maker:"Nike", color:["Black","Red","White"], price:130, offer: 0, img:["./img/sport/JMA1.jpg","./img/sport/JMA2.jpg","./img/sport/JMA3.jpg"] },
    
        {id:5,name:"Jordan Mars 270", type:"Sport" , maker:"Nike", color:["Black","Multi"], price:120, offer: 0, img:["./img/sport/JordanMars2.jpg","./img/sport/JordanMars1.jpg"] },
    
        {id:6,name:"Lebron 17", type:"Sport" , maker:"Nike", color:["Black","White","Multi"], price:160, offer: 120, img:["./img/sport/Lebron17.jpg","./img/sport/Lebron17_2.jpg","./img/sport/Lebron7_3.jpg"] },
    
        {id:7,name:"Lebron Witness 4", type:"Sport" , maker:"Nike", color:["Black","Gray","Purple"], price:140, offer: 0, img:["./img/sport/Lebron3_2.jpg","./img/sport/Lebron4.jpg","./img/sport/Lebron4_3.jpg"] },
    
        {id:8,name:"Kyrie Irving 2", type:"Sport" , maker:"Nike", color:["Black"], price:120, offer: 100, img:["./img/sport/kyrie2.jpg"] },
    
        {id:9,name:"Kyrie Irving 3", type:"Sport" , maker:"Nike", color:["Red"], price:130, offer: 100, img:["./img/sport/kyrie3.jpg"] },
    
        {id:10,name:"Kyrie Irving 5", type:"Sport" , maker:"Nike", color:["Black"], price:150, offer: 0, img:["./img/sport/kyrie5.jpg"] },
    
        {id:11,name:"Kevin Durant Trey 5 VII", type:"Sport" , maker:"Nike", color:["Black","Gray"], price:125, offer: 0, img:["./img/sport/KD1.jpg","./img/sport/KD2.jpg"] }
    ]
    
  },
  mutations: {
    buy(state, product){
     
      if(product.offer > 0){

        state.cart.money = state.cart.money + product.offer;

      }else{
        state.cart.money = state.cart.money + product.price;
      }
      
     state.cart.items[state.cart.items.length]= product;
     state.cart.populars[product.id] += 1;


     if(state.cart.colors[state.cart.items.length] == null){

      state.cart.colors.push(product.color[0]);
     }
  
    },
    deleteItem(state,index){

      if(state.cart.items[index].offer > 0){

        state.cart.money -= state.cart.items[index].offer;

      }else{
        state.cart.money -= state.cart.items[index].price;
      }
      
     
      state.cart.items.splice(index,1);
      state.cart.colors.splice(index,1);
    
    }
  
  },
  actions: {
  

  },
  modules: {
  }
})
