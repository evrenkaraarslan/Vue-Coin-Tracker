<style scoped>

.addmargin {
    margin-top: 10px;
    margin-bottom: 10px;
} 
.mainDiv {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 10px;
    row-gap: 15px;
    margin: 20px;
}

.card {
    width: 100%;
}

.card-body {
    padding: 40px;
    border: 1px solid #dbb7b7;
    border-radius: 20px;
}

.card-title {
    text-transform: capitalize;
}

.buttonDetails {
    width: 50%;
    height: 40px;
    background: #7bc464;
    color: black;
    border-radius: 8px;
    border: 0;
    transition: 0.5s ease-in-out;
}

.buttonDetails:hover {
    cursor: pointer;
    border-radius: 20%;
}


@media only screen and (max-width: 600px) {
  .mainDiv {
    grid-template-columns: 1fr;
  }

  .card {
      width: 100%;
  }

  .buttonDetails {
      width: 98%;
  }
}
</style>

<template>

<div class="home"> 
    <div class="mainDiv"> 
        <div class="card" v-for="coin in coinlist" :key="coin.id">
            <div class="card-body" v-on:click="setSelectedCoin(coin.name)">
                <h2 class="card-title">{{coin.slug}}</h2>
                <p class="card-text">{{coin.symbol}}</p> 
                <button class="buttonDetails" v-on:click="goToDetailsPage(coin.id)">Details</button>
            </div>
        </div>
    </div> 
</div>

</template>

<script>

// @ is an alias to /src 
import axios from 'axios'

export default {
    name: 'coins',
    mounted() {
        axios({
            method: "GET",
            "url": "https://data.messari.io/api/v1/assets?fields=id,slug,symbol,metrics/market_data/price_usd"
        }).then(response => {
            this.coinlist = response.data.data;
        }, error => {
            // eslint-disable-next-line
            console.error(error);
        });
    },
    data() {
        return {
            coinlist: [],
            selectedCoin: ""
        }
    }, 
    methods: {
        setSelectedCoin: function(name) {
            this.selectedCoin = name;
        },
        goToDetailsPage: function(id) {
            this.$router.push("/coindetails/"+id);
        }
    }
}

</script>
