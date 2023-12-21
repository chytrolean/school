<template>
<ul>
    <li v-for="(nav, index) in navs" :key="index" :class="nav.trida">
           <router-link :to = nav.link >{{nav.name}}
            <img v-if="nav.obr" v-bind:src="nav.obrazek">
            </router-link>
    </li>
</ul>
</template>

<script>
export default {
    name:'Navbar',
    data() {
        return {
            navs:[
                {obrazek: '../src/assets/svg.svg', link: '/', trida:'logo', obr:true},
                {name: 'aktuality', link: '/aktuality'},
                {name: 'škola', link: '/skola'},
                {name: 'studium', link: '/studium'  },
                {name: 'bakaláři', link: '/bak'  },
                {name: 'PARTNEŘI', link: '/partners'}]
        }
    },

}
</script>
<style scoped>
    ul{
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
        list-style-type: none;
    }
    li{
        flex: 1;
        text-decoration: none;
        height: 100%;
        background: #ED1C24;
        font-weight: bold;
        text-transform: uppercase;
        cursor: pointer;
    }
    a{
        color: #fff;
        height: 100%;
        width:100%;
        display: grid;
        place-items: center;
        transition: .3s;
    }
    a:hover{
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
</style>