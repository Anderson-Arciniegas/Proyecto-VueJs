<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
  import Header from '@/components/Header.vue';

export default {
  components: {
    Header
  }
}
</script>


<style lang="scss" scope>

    $carrot: #ffa502;
    $blue-munsell: #048ba8ff;
    $charcoal: #2e4057ff;
    $android-green: #99c24dff;
    $jet: #2f2d2eff;

@font-face{

    font-family: "CenturyGothic";
    src: url("assets/fuentes/CenturyGothic.ttf");
}

*{
  margin: 0;
  padding: 0;
}

#app {
  font-family: "CenturyGothic";

  color: #2c3e50;
 
}


#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
