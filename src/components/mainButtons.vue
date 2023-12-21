<template>
  <div class="btns">
    <div class="onas">
        <b>O NÁS</b>
    </div>
    <div class="kontakt">
        <b>KONTAKT</b>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.btns{
    position: absolute;
    top: 75%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: space-between;
    gap: 60px;
}
.onas, .kontakt{
    width: 120px;
    height: 40px;
    display: grid;
    place-items: center;
    cursor: pointer;
    transition: .2s;
    font-weight: bolder;
}
.onas{
    background: #ED1C24;
    color: #fff;
    border: 3px solid #ED1C24;
}
.onas:hover{
    background: transparent;
    background: #fdfdfd;
    color: #ED1C24;
}
.kontakt{
    background: #fdfdfd;
    color: #000;
    border: 3px solid black;
}
.kontakt:hover{
    background: #000;
    color: #fff;
}
</style>