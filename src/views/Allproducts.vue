<template>
  <div class="all-products">
    <Products/>
  </div>
</template>

<script>
// @ is an alias to /src
import Products from '@/components/Products.vue';

export default {
  name: 'Allproducts',
  components: {
    Products
  
  }
}
</script>