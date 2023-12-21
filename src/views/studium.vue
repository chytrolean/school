<template>
  <cock-won />
  <router-link to="/provoz-ekonomika-dopravy">Provoz a ekonomika dopravy</router-link>
  <router-link to="/ekonomika-podnikani">Ekonomika a podnikání</router-link>
  <router-link to="/it">Informační technologie</router-link>
  <router-link to="/mechanik">Mechanik strojů a zařízení</router-link>
  <router-link to="/kuchar-cisnik">Kuchař - čísník</router-link>
  <router-link to="/prodavac">Prodavač</router-link>
  <router-link to="/elektrikar-silnoproud">Elektrikář - silnoproud</router-link>
  <router-link to="/zednik">Zedník</router-link>
  <router-link to="/klempir">Klempíř</router-link>
  <router-link to="/Nastrojar">Nástrojář</router-link>
</template>

<script>
import cockWon from '../components/cock.vue'
export default {
    components: {
        cockWon
    }
}
</script>

<style>

</style>