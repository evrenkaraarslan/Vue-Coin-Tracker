<template>
  <div id="app">
    <div class="logoMain">
      <div v-on:click="goToMainPage()">
          <img class="logoImage" src="./assets/bitcoin.jpg" >
      </div>
      <div class='myCoins' v-on:click="goToMyCoins()">
          <img class="logoImage" src="./assets/bankIcon.jpg" >
          <p class='coinNumber' v-if='storedCoins.length > 0'>{{ storedCoins.length }}</p>
      </div>
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
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: black;
}

.logoImage {
  width: 60px;
  height: 60px;
}

.logoImage:hover {
  cursor: pointer;
}

.myCoins {
  display: flex;
  align-items: center;
}

.coinNumber {
  margin-left: 20px;
  font-size: 20px;
  color: white;
}
</style>

<script> 
export default {  
  methods: {
        goToMainPage: function() {
            this.$router.push("/coins");
        },
        goToMyCoins: function() {
            this.$router.push("/mycoins");
        }
  },
  computed: {
      storedCoins () {
          return this.$store.state.storedCoins
      }
  }
} 
</script>