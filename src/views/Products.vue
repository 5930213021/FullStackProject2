<template>
  <div>
    <h1>Product List</h1>
    <HelloWorld></HelloWorld>
    <HelloWorld></HelloWorld>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
export default {
    name: 'products',
    components: {
    HelloWorld
  }
}
</script>
