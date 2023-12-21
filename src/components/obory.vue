<template>
    <div class="all">
        <h2>OBORY NA NAŠÍ ŠKOLE</h2>
        <div class="obory">
            <ul>
                <li v-for="(item, index) in matura" :key="index"> 
                    <b>{{item.name}}</b> 
                    <a :href="item.link">i</a>
                </li>
                <img src="../assets/grad.png" alt="">
            </ul>
            <ul>
                <li v-for="(item, index) in ucnak" :key="index">
                    <b>{{item.name}}</b>
                    <a :href="item.link">i</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            matura: [
                {
                    name: 'Provoz a ekonomika dopravy',
                    link: '/studium/doprava'
                },
                {
                    name: 'Ekonomika a podnikání',
                    link: '/studium/ekonomika'
                },
                {
                    name: 'Informační technologie',
                    link: '/studium/it'
                },
                {
                    name: 'Mechanik strojů a zařízení',
                    link: '/studium/mekanik'
                }
            ],
            ucnak: [
                {
                    name: 'Kuchař - číšník',
                    link: '/studium/kuchar'
                },
                {
                    name: 'Prodavač',
                    link: '/studium/prodavac'
                },
                {
                    name: 'Elektrikář - silnoproud',
                    link: '/studium/elektrikar'
                },
                {
                    name: 'Zedník',
                    link: '/studium/zednik'
                },
                {
                    name: 'Klempíř',
                    link: '/studium/klempir'
                },
                {
                    name: 'Nástrojář',
                    link: '/studium/nastrojar'
                },
            ],

        }
    },
}
</script>

<style scoped>
img{
    height: 300px;
    
}
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@700&family=Roboto&display=swap');
.all{
    margin-top: 100px;
}
h2{
    color: #ED1C24;
}
.obory{
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: space-around;
    gap: 15px;
}
ul{
    display: flex;
    flex-direction: column;
    gap: 15px;
    flex-shrink: 40%;
}
li{
    font-weight: bold;
    font-size: 1rem;
    width: 350px;
    height: 50px;
    background:#D9D9D9;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 5px;
    border-left: 5px solid #ED1C24;
}
b{
    width: 100%;
    margin: 0 auto;
}
a{
    font-family: 'Inter', sans-serif;
    width: 50px;
    height: 100%;
    background: #ED1C24;
    border: 3px solid #ED1C24;
    display: grid;
    place-items: center;
    color: #D9D9D9;
    font-size: 2rem;
    transition: .2s;
}
a:hover{
    background: #f0f0f0;
    color: #ED1C24;
}
</style>