<template>
<ul class="pc">
    <li v-for="(nav, index) in navs" :key="(nav, index)"  >
           <router-link :to = nav.link >{{nav.name}}</router-link>
    </li>
</ul>
<div id="mb">
    <div id="menuToggle" @click="fce()" :class="{full: menu}">
        <input type="checkbox" />
        <span :class="{rot: menu}"></span>
        <span :class="{rot: menu}"></span>
        <span :class="{rot: menu}"></span>
    </div>
    <ul class="mb"  v-if="menu">
            <li v-for="(nav, index) in navs" :key="(nav, index)" @click="fce"  >
                <router-link :to = nav.link >{{nav.name}}</router-link>
            </li>
    </ul>
</div>
</template>

<script>
export default {
    name:'Navbar',
    data() {
        return {
            menu : false,
            navs:[
                {name: 'Domů', link:'/'},
                {name: 'aktuality', link: '/aktuality'},
                {name: 'škola', link: '/skola'},
                {name: 'studium', link: '/studium'  },
                {name: 'bakaláři', link: '/bak'  },
                {name: 'PARTNEŘI', link: '/partners'}],
        }
        
    },
    methods: {
        fce(){
            this.menu = !this.menu
        }
    }

}
</script>
<style scoped>
    #menuToggle{
    width: 50px;
    padding: 10px;
    background: #ED1C24;
    position: relative;
    z-index: 1;
    -webkit-user-select: none;
    user-select: none;
    }

    #menuToggle input{
    display: block;
    width: 40px;
    height: 32px;
    position: absolute;
    top: 7px;
    left: 5px;
    cursor: pointer; 
    opacity: 0; /* hide this */
    z-index: 2; /* and place it over the hamburger */
    -webkit-touch-callout: none;
    }
    #menuToggle span{
    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    position: relative;
    background: #cdcdcd;
    border-radius: 3px;
    z-index: 1;
    transform-origin: 4px 0px;
    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                opacity 0.55s ease;
    }

    #menuToggle span:first-child{
    transform-origin: 0% 0%;
    }

    #menuToggle span:nth-last-child(2){
    transform-origin: 0% 100%;
    }
    .rot:nth-child(2){
    opacity: 1;
    transform: rotate(45deg) translate(2px);
    background: #232323;
    }

    .rot:nth-child(3){
    opacity: 0 !important;
    }

    .rot:nth-child(4){
    transform: rotate(-45deg) translate(-1.5px);
    background: #232323;
    }
    .full{
        width: 100% !important;
    }
    .pc{
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
        list-style-type: none;
    }
    .pc li{
        flex: 1;
        text-decoration: none;
        height: 12vh;
        font-weight: bold;
        text-transform: uppercase;
        cursor: pointer;
    }
    a{
        background: #ED1C24;
        color: #fff;
        height: 100%;
        width:100%;
        display: grid;
        place-items: center;
        transition: .3s;
    }
    #mb{
        position: absolute;
        display: none;
    }
    .mb{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100vw;
        background: #ED1C24;
        height: 100vh;
    }
    .mb li{

        width: 80%;
        flex: 1;
    }
    a:hover{
        background: #fff;
        color: #000;
    }
    a:focus{
        background: #fff;
        color: #000;
    }
    .logo{
      background: #fff;
    }
    .logo img{
        height: 80%;
        width: 80%;
    }
    @media screen and (max-width: 600px) {
        .pc{
            display: none;
        }
        #mb{
            display: block;
        }
    }
</style>