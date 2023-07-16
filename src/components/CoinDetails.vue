<style scoped> 

.buttonDown {
    width: 120px;
    height: 20px;
    margin: 5px;
    background: #7bc464;
    border-radius: 8px;
    color: black;
}

.buttonDown:hover {
    cursor: pointer;
}

.cardBody {
    display: flex;
    flex-flow: column;
    align-items: center;
    margin-bottom: 120px;
}

.cardTitle {
    text-transform: capitalize;
}

.cardText {
    border: 1px solid #6ae6b4;
    width: 40%;
    padding: 10px;
    border-radius: 10px;
    font-size: 20px;
}

.cardText:hover {
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

.buttonsDiv {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.inputDiv {
    height: 20px;
}

@media only screen and (max-width: 600px) { 
    .cardText { 
        width: 90%;
    }

    .buttonsDiv {
        flex-direction: column;
        margin-top: 4px;
    }
    
    .buttonDown, .inputDiv, .inputAmount {
        width: 100%;
    }
}
</style>

<template>

<div> 
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
            </div>
            <div class="buttonsDiv">
                <div class="inputDiv">
                    <input class='inputAmount' type="number" :value="amount" @input="event => amount = event.target.value">
                </div>
                <button @click="addCoin()" class="buttonDown">Add to box</button>
                <button @click="goToMainPage()" class="buttonDown">Go Back</button>
            </div>
        </div>
</div>

</template>

<script>

// @ is an alias to /src
import axios from 'axios'
import { numberMixin } from '../mixins/index.js'

export default {
    name: 'coindetails',
    mixins: [numberMixin],
    mounted() {
        this.routeTest = this.$route.params.id
        axios({
            method: "GET",
            "url": `https://data.messari.io/api/v1/assets/${this.$route.params.id}/metrics`
        }).then(response => {
            this.coinDetails = response.data.data; 
        }, error => {
            console.error(error);
        });
    },
    data() {
        return {
            coinDetails: {},
            routeTest: "",
            amount: null
        }
    },
    methods: {
        goToMainPage: function() {
            this.$router.push("/coins");
        },
        addCoin: function() {
            if (this.amount === 0 || !this.checkNumber(this.amount)) {
                alert('Please insert a valid amount')
            } else if(!this.$store.state.storedCoins.some((coin) => coin.id === this.coinDetails.id)) {
                this.$store.commit('addCoin',{...this.coinDetails, amount: this.amount})
            }
             else {
                alert('This coin already exists in your box')
            }
        } 
    },
    computed: {
        storedCoins () {
            return this.$store.state.storedCoins
        }
    }
}

</script>
