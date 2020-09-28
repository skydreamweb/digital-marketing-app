<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "App",
  methods: {
    ...mapActions("login", ["handleAuthStateChange"])
  },
  created(){
    this.$q.loading.show({
    delay: 400 // ms
})
  },
  mounted(){
    this.handleAuthStateChange()
    this.$q.loading.hide()
  }
};
</script>
