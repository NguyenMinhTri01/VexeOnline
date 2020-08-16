<template>
  <div>
    <NavbarHome />
    <router-view />
  </div>
</template>

<script>
import NavbarHome from '../../components/navbarHome';
export default {  
  components : {
    NavbarHome
  }

}
</script>

<style>

</style>