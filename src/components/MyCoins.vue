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

.coinsMain {
    display: flex;
    justify-content: center;
}

.coinsRow {
    width: auto;
    display: grid;
    grid-template-columns: repeat(3, minmax(min-content, max-content));
}

.cardBody {
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    margin-top: 20px;
    padding: 20px 0;
}

.cardTitle {
    text-transform: capitalize;
}

.cardText {
    padding: 2px;
    border-radius: 10px;
    font-size: 12px;
    margin: 4px;
}

.availableAmount {
    padding: 2px;
    border-radius: 10px;
    font-size: 20px;
    font-weight: bold;
    margin: 6px;
    color: green;
}

.cardText:hover {
    color: white;
    background: #6ae6b4;
    cursor: pointer;
}

.descriptionsWrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}

@media only screen and (max-width: 800px) {
    .coinsRow {
        grid-template-columns: repeat(1, minmax(min-content, max-content));
    }
}

</style>

<template>

<div class="coinsMain">

    <div class="coinsRow"> 

        <div v-if='storedCoins.length == 0'>
            <p>No coins added to bank</p>
            <button v-on:click="goToMainPage()" class="buttonDetails">Go Back</button>
        </div>
        <div v-for='coinDetails in storedCoins' :key="coinDetails.id"> 
                <div class="cardBody" v-if='coinDetails.market_data'>
                    <h1 class="cardTitle">{{coinDetails.slug}}</h1>
                    <div class="descriptionsWrapper"> 
                        <p class="cardText">Symbol : {{coinDetails.symbol}}</p> 
                        <p class="cardText">Price : {{coinDetails.market_data.price_usd}}</p>
                        <p class="cardText">Btc price : {{coinDetails.market_data.price_btc}}</p>
                        <p class="cardText">Eth price : {{coinDetails.market_data.price_eth}}</p>
                        <p class="cardText">Last 24 hours volume : {{coinDetails.market_data.volume_last_24_hours}}</p>
                        <p class="cardText">Real volume last 24 hours: {{coinDetails.market_data.real_volume_last_24_hours}}</p>
                        <p class="cardText">Rank in market: {{coinDetails.marketcap.rank}}</p>
                        <p class="availableAmount">Available amount {{coinDetails.amount}}</p>
                    </div> 
                    <p>{{ count }}</p>
                    <button v-on:click="removeCoin(coinDetails)" class="buttonDetails">Remove</button>
                </div>
        </div>

    </div>

</div>

</template>

<script>

// @ is an alias to /src

export default {
    name: 'mycoins',
    methods: {
        goToMainPage: function() {
            this.$router.push("/coins");
        },
		removeCoin(coin) {
			this.$store.commit('removeCoin', coin)
		}
    },
    computed: {
        storedCoins () {
            return this.$store.state.storedCoins
        }
    }
}

</script>
