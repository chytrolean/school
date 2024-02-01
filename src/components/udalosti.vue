<template>
  <div class="news">
    <div class="aktuality">
        <ul>
            <h2>AKTUALITY</h2>
            <li v-for="(item, index) in aktuality" :key="index">
                <div class="date">
                    <b class="b">{{item.day}}</b>
                    <b class="b">{{item.month}}</b>
                </div>
                <span class="span">{{item.txt}}</span>
            </li>
        </ul>
        <h3 class="more">VÍCE</h3>
    </div>
    <div class="akce">
        <ul>
            <h2>NADCHÁZEJÍCÍ AKCE</h2>
            <li v-for="(item, index) in akce" :key="index">
                <div class="date">
                    <b class="b">{{item.day}}</b>
                    <b class="b">{{item.month}}</b>
                </div>
                <span class="span">{{item.txt}}</span>
            </li>
        </ul>
        <h3 class="more">VÍCE</h3>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            aktuality: [
                {
                day: 24,
                month: 'Září',
                txt: 'Nějaká událost'
                }, {
                day: 18,
                month: 'Listopadu',
                txt: 'Nějaká událost'
                },
                {
                day: 24,
                month: 'Září',
                txt: 'Nějaká událost'
                }, {
                day: 18,
                month: 'Listopadu',
                txt: 'Nějaká událost'
                },
                {
                day: 24,
                month: 'Září',
                txt: 'Nějaká událost'
                }, {
                day: 18,
                month: 'Listopadu',
                txt: 'Nějaká událost'
                },
                {
                day: 24,
                month: 'Září',
                txt: 'Nějaká událost'
                }, {
                day: 18,
                month: 'Listopadu',
                txt: 'Nějaká událost'
                },
                {
                day: 24,
                month: 'Září',
                txt: 'Nějaká událost'
                }, {
                day: 18,
                month: 'Listopadu',
                txt: 'Nějaká událost'
                },
                ],
            akce: [
                {
                day: 11,
                month: 'Listopadu',
                txt: 'Nějaká akce'
            },
                {
                day: 11,
                month: 'Listopadu',
                txt: 'Nějaká akce'
            },
                {
                day: 11,
                month: 'Listopadu',
                txt: 'Nějaká akce'
            },
                {
                day: 11,
                month: 'Listopadu',
                txt: 'Nějaká akce'
            },
                {
                day: 11,
                month: 'Listopadu',
                txt: 'Nějaká akce'
            },
                {
                day: 11,
                month: 'Listopadu',
                txt: 'Nějaká akce'
            },
            {
                day: 11,
                month: 'Listopadu',
                txt: 'Nějaká akce'
            },
            ]
        }
    },
}
</script>

<style scoped>
*{
    color: #000;
}
.news div:not(.date){
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;    
}
li{
        border-left: 3px solid #ED1C24;

}
</style>