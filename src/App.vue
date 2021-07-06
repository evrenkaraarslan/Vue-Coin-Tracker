<template>
  <div id="app">
    <div class="logoMain" v-on:click="goToMainPage()">
        <img class="logoImage" src="./assets/logo.png" >
    </div>
    <router-view/>
  </div>
</template>

<style>
body {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center; 
}  
.centeralign {
    display: block;
    margin-left: auto;
    margin-right: auto;
}

.logoMain {
    background-color: black;
}

.logoImage {
  width: 100px;
  height: 100px;
}

.logoImage:hover {
  cursor: pointer;
}
</style>

<script> 
export default {  
  methods: {
        goToMainPage: function() {
            this.$router.push("/coins");
        }
    }
} 
</script>