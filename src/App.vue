
<template>
  <div class="container">
    
    <navigation />
    
    <div class="routes">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import Navigation from './components/navigation.vue'
</script>

<style lang="scss" >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}

.container {
  display: flex;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}


.routes {
  width: 100%;
  padding:  0 5%;
  height: 100%;
}

.title-number {
  font-size: 70px;
}

.title-view {
  font-size: 40px;
}
</style>
