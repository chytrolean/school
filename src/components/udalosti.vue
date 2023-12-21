<template>
  <div class="news">
    <div class="aktuality">
        <ul>
            <h2>AKTUALITY</h2>
            <li v-for="(item, index) in aktuality" :key="index">
                <div class="date">
                    <b>{{item.day}}</b>
                    <b>{{item.month}}</b>
                </div>
                <span>{{item.txt}}</span>
            </li>
        </ul>
        <h3 class="more">VÍCE</h3>
    </div>
    <div class="akce">
        <ul>
            <h2>NADCHÁZEJÍCÍ AKCE</h2>
            <li v-for="(item, index) in akce" :key="index">
                <div class="date">
                    <b>{{item.day}}</b>
                    <b>{{item.month}}</b>
                </div>
                <span>{{item.txt}}</span>
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
.news{
    margin-top: 5vh;
    width: 100%;
    display: flex;
    justify-content: space-around;
}
.news div{
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;    
}
.news div ul{
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
}
.news div li{
    width: 100%;
    background:#D9D9D9;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-block: 5px;
    border-left: 3px solid #ED1C24;
}
.date{
    display: flex;
    flex-direction: column;
    padding-left: 10px;

}
b{
    text-align: left;
}
span{
    padding-right: 15px;
}
.more{
    margin-top: 5vh;
    padding: 10px;
    width: 30%;
    background: #ED1C24;
    border: 3px solid #ED1C24;
    color: #fdfdfd;
    cursor: pointer;
    transition: .2s;
}
.more:hover{
    background: #fdfdfd;
    color: #ED1C24;
}

</style>