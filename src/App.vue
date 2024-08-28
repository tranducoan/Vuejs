<script setup >
import {RouterLink } from "vue-router"  
</script>

<template>
  <header>
    <img class="logo" width="50px" height="50px" src="@/assets/logo.svg"  alt="vue logo"> 
    <nav>
      <RouterLink to="/"><div class="btn-main"> Home </div></RouterLink> 
      <RouterLink to="/Create">
      <div class="btn-action">Create </div>
    </RouterLink>

    </nav>

    
  </header>
  <router-view></router-view>
</template>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #282c34;
  padding: .4rem 2rem;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.15);
}
nav {
  display: flex;
  justify-content: center; /* Căn giữa các nút */
  flex-grow: 1; /* Cho phép nav chiếm không gian còn lại */
  column-gap: 1rem;
}


</style>
