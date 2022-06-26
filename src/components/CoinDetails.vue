<style scoped> 

.buttonDetails {
    width: 200px;
    height: 40px;
    background: #7bc464;
    border-radius: 8px;
    color: black;
}

.buttonDetails:hover {
    cursor: pointer;
}

.card-body {
    display: flex;
    flex-flow: column;
    align-items: center;
    margin-bottom: 120px;
}

.card-title {
    text-transform: capitalize;
}

.card-text {
    border: 1px solid #6ae6b4;
    width: 40%;
    padding: 10px;
    border-radius: 10px;
    font-size: 20px;
}

.card-text:hover {
    color: white;
    background: #6ae6b4;
    cursor: pointer;
}

.descriptionsWrapper {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
}

@media only screen and (max-width: 600px) { 
    .card-text { 
        width: 90%;
    }
}
</style>

<template>

<div class="home"> 
    <div class="card" v-for="coin in coinDetails" :key="coin.id"> 
        <div class="card-body" v-if="coin.id == routeTest">
            <h1 class="card-title">{{coin.slug}}</h1>
            <div class="descriptionsWrapper"> 
                <p class="card-text">Symbol : {{coin.symbol}}</p> 
                <p class="card-text">Price : {{coin.metrics.market_data.price_usd}}</p>
                <p class="card-text">Btc price : {{coin.metrics.market_data.price_btc}}</p>
                <p class="card-text">Eth price : {{coin.metrics.market_data.price_eth}}</p>
                <p class="card-text">Last 24 hours volume : {{coin.metrics.market_data.volume_last_24_hours}}</p>
                <p class="card-text">Highest last 24 hours: {{coin.metrics.market_data.ohlcv_last_24_hour.high}}</p>
                <p class="card-text">Lowest last 24 hours: {{coin.metrics.market_data.ohlcv_last_24_hour.low}}</p>
                <p class="card-text">Rank in market: {{coin.metrics.marketcap.rank}}</p>
            </div> 
            <button v-on:click="goToMainPage()" class="buttonDetails">Go Back</button>
        </div>
    </div>


</div>

</template>

<script>

// @ is an alias to /src
import axios from 'axios'

export default {
    name: 'coindetails',
    mounted() {
        this.routeTest = this.$route.params.id
        axios({
            method: "GET",
            "url": "https://data.messari.io/api/v1/assets" 
        }).then(response => {
            this.coinDetails = response.data.data; 
        }, error => {
            console.error(error);
        });
    },
    data() {
        return {
            coinDetails: {},
            routeTest: ""
        }
    },
    methods: {
        goToMainPage: function() {
            this.$router.push("/coins");
        }
    }
}

</script>
