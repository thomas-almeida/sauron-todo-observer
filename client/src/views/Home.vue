<template>
  <SideMenu />
  <div class="container">
    <div class="container-content">
      
    </div>
  </div>
</template>

<script setup>
  import SideMenu from '@/components/SideMenu.vue'
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.container-content {
  width: 75%;
}

.heading {
  padding: 5px 35px;
  margin-bottom: 4rem;
}
</style>
