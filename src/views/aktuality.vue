<template>
  <div class="news">
    <div class="aktuality">
            <ul>
                <li class="obj" v-for="item in aktuality" :key="item.id" :id="item.id">
                    <router-link
                    class="block" 
                    :to="{name: 'aktualitaDetail', 
                    params: {slug: item.slug, id: item.id}}"
                     :nadpis = item.nadpis>
                        <div class="img">
                            <img :src="item.img" alt="">
                        </div>
                        <h2>{{item.nadpis}}</h2>
                    </router-link>
                    <div class="txt">
                        <div class="date">
                            <small class="b">{{item.day}}.</small>
                            <small class="b">{{item.month}}.</small>
                            <small class="b">{{item.year}}.</small>
                        </div>
                        <small class="ath">{{item.author}}</small>
                        <small><router-link class="vice" :to="{name: 'aktualitaDetail',params: {slug: item.slug, id: item.id}}"> více </router-link></small>
                    </div>
                </li>
            </ul>
    </div>
    <!--<div class="aktuality">
        <ul>
            <li v-for="(item, index) in aktuality" :key="index">
                <div class="col">
                    <div class="row">
                        <div class="date">
                            <b class="b">{{item.day}}</b>
                            <b class="b">{{item.month}}</b>
                        </div>
                        <span class="span">{{item.txt}}</span>
                        <h3 class="more" @click="item.drop = !item.drop">VÍCE</h3>
                    </div>
                        <div class="dropDown" v-if="item.drop">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit aliquid, debitis velit voluptatem maxime, consequuntur non itaque repudiandae labore qui exercitationem assumenda adipisci est, quod beatae earum sint architecto error?
                            Voluptatum ratione quas, corrupti quae eligendi eveniet sapiente. Provident accusamus, voluptates dolor, odit explicabo fugiat aut vel nihil odio quasi quos illo, modi amet laudantium sapiente quod magni praesentium unde?
                            Eaque molestias voluptates iusto laudantium esse sint eveniet harum velit dolorum dolorem, veritatis nisi ratione fugiat, enim, ex dolore iste beatae doloribus nesciunt quisquam odio molestiae magni modi. Quasi, nesciunt?</p>
                        </div>
                </div>
            </li>
        </ul>
    </div>
    <div class="akce">
        <ul>
            <h2>NADCHÁZEJÍCÍ AKCE</h2>
            <li v-for="(item, index) in akce" :key="index">
                <div class="col">
                    <div class="row">
                        <div class="date">
                            <b class="b">{{item.day}}</b>
                            <b class="b">{{item.month}}</b>
                        </div>
                        <span class="span">{{item.txt}}</span>
                        <h3 class="more" @click="item.drop = !item.drop">VÍCE</h3>
                    </div>
                        <div class="dropDown" v-if="item.drop">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit aliquid, debitis velit voluptatem maxime, consequuntur non itaque repudiandae labore qui exercitationem assumenda adipisci est, quod beatae earum sint architecto error?
                            Voluptatum ratione quas, corrupti quae eligendi eveniet sapiente. Provident accusamus, voluptates dolor, odit explicabo fugiat aut vel nihil odio quasi quos illo, modi amet laudantium sapiente quod magni praesentium unde?
                            Eaque molestias voluptates iusto laudantium esse sint eveniet harum velit dolorum dolorem, veritatis nisi ratione fugiat, enim, ex dolore iste beatae doloribus nesciunt quisquam odio molestiae magni modi. Quasi, nesciunt?</p>
                        </div>
                </div>
            </li>
        </ul>
    </div>-->
  <footer></footer>
  </div>
</template>

<script>
import akt from '../aktuality.json'
export default {
     data() {
        return {
            name: 'aktuality',
            drop: false, 
            aktuality: akt,
            akce: [
                {
                day: 11,
                month: 'Listopadu',
                author: 'Nějaká akce'
            },
                {
                day: 11,
                month: 'Listopadu',
                author: 'Nějaká akce'
            },
                {
                day: 11,
                month: 'Listopadu',
                author: 'Nějaká akce'
            },
                {
                day: 11,
                month: 'Listopadu',
                author: 'Nějaká akce'
            },
                {
                day: 11,
                month: 'Listopadu',
                author: 'Nějaká akce'
            },
                {
                day: 11,
                month: 'Listopadu',
                author: 'Nějaká akce'
            },
                {
                day: 11,
                month: 'Listopadu',
                author: 'Nějaká akce'
            },
            ]
        }
    },
}
</script>

<style scoped>
    h2{
    }
    .news{
        flex-direction: column;
        max-width: 1200px;
        align-items: center;
        margin: 0 auto;
    }
    .aktuality, .akce{
        width: 90%;
    }
    ul{
        
        display: flex;
        flex-direction: row !important;
        justify-content: center;
        flex-wrap: wrap;
        gap: 3px !important;
    }
    .obj{
        display: flex;
        flex-direction: column;
        background: #fff;
        width: 340px;
        padding: 15px;
    }
    li .img{
        width: 250px;
        overflow: hidden;
        margin: 0 auto;
    }
    img{
        width: 100%;
        height: 100%;
        transition: .3s;
    }
    li img:hover{
        transform: scale(1.05);
    }
    .txt{
        display: flex;
        align-items: center;
    }
    .vice{
        color: #ed1c24;
    }
    .block,.txt {
        width: 250px;
    }
    .block:hover h2{
        color: rgb(209, 0, 0);
    }
    .date{
        display: flex;
        flex-direction: row;
    }
    .more{
        background: #fff;
        border: 1px solid black;
        color:  #000 !important;
        margin-top: 0;
        padding: 5px 20px 5px 20px;
        border-radius: 5px;
        width: 100px;
    }
    .more:hover{
        background: #000;
        color: #fff !important;
    }
    .ath{
        color: #000;
        border-inline: 1px solid #000;
        padding-inline: 3px;
        margin-inline: 2px;
        font-weight: 600;
    }
    .dropDown{
                background: #fff;
    }
    @media screen and (max-width: 600px) {
        .news{
            margin-top: 0;
        }
    }
</style>