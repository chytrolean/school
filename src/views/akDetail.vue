<template>
    <div class="coint">
      <img :src="aktualita.img" alt="" class="aktImg">
        <div class="txt">
            <h2>{{aktualita.nadpis}}</h2>
            <div class="info">
                <div class="info-date">
                    <small>{{aktualita.day}}.</small>
                    <small>{{aktualita.month}}.</small>
                </div>
                <small><router-link to="/aktuality">aktuality</router-link></small>
                <small>autor: <b>{{aktualita.author}}<b></small>
            </div>
            <p>{{aktualita.txt}}</p>
        </div>

        <footer></footer>
    </div>
</template>

<script>
import akt from '../aktuality.json'
export default {
    computed : {
        aktualita() {
            //return Object.assign({}, akt);
            return Object.entries(akt).find(([key, value]) => value.slug == this.slug)[1]
        }
    },
    /*data() {
        return {
          // aktualita: ,

        }
    },*/
    props: ['slug'],
    mounted() {
    },
    /*created() {
      fetch(`http://localhost:3000/aktuality/${this.id}`)
        .then((res) => res.json())
        .then((akt) => {
          this.akt = aktuality;
        });
    }*/


}
</script>

<style scoped>
    .coint{
        width: 80%;
        background: #fff;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
    }
    h2{
        text-align: left;
        text-transform: uppercase;
    }
    .txt{
        width: calc(100% - 20px);
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    img{
        width: 100%;
        height: 400px;
    }
     .info{
        text-align: left;
        display: flex;
        gap: 2px;
    }
    small{
        font-size: 15px;
    }
    a{
        color: #ed1c24;
        border-inline: 1px solid black;
        padding-inline: 2px;
        text-align: center;
    }
    p{
        text-align: left;
        text-indent: 15px;
    }
</style>