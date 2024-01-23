<template>
    <div class="btns">
        <router-link to="/ucebni-plan">
            <div class="onas">
                <b>UČEBNÍ PLÁN</b>
            </div>
        </router-link>
        <router-link to="/prijimacky" >
            <div class="kontakt">
                <b>INFORMACE O PŘIJÍMAČKÁCH</b>
            </div>
        </router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.btns{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    position: absolute;
    bottom: 0;
}
.onas, .kontakt{
    height: 40px;
    display: grid;
    place-items: center;
    cursor: pointer;
    transition: .2s;
    font-weight: bolder;
}

.onas{
    color: #fff;
    width: 150px;
    background: #ED1C24;
    border: 3px solid #ED1C24;
}
.onas:hover{
    background: transparent;
    background: #fdfdfd;
    color: #ED1C24;
}


.kontakt{
    width: 300px;
    background: #fdfdfd;
    color: #000;
    border: 3px solid black;
}
.kontakt:hover{
    background: #000;
    color: #fff;
}

</style>