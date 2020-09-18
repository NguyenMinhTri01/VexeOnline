<template>
  <div id="app">
    <VueHeadful :title="title" :description="description" />
    <router-view/>
  </div>
</template>

<script>
import VueHeadful from 'vue-headful';
export default {
  components : {
    VueHeadful
  },
  computed : {
    title () {
      return this.$store.state.header.title;
    },
    description () {
      return this.$store.state.header.description;
    }
  }
};
</script>
<style>
</style>
