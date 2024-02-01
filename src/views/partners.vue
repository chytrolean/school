<template>
  <div class="upper">
    <div class="left">
        <h2>Partneři</h2>
        <p>Jsme hrdí na spolupráci s renomovanými firmami a institucemi, které nám umožňují poskytovat vysoce kvalitní vzdělání a otevírají našim studentům dveře k praktickým zkušenostem ve svých odvětvích. Společně s našimi partnery vytváříme prostředí propojující teorii s praxí, a tím připravujeme naše studenty na úspěšný vstup do profesního života. Děkujeme všem našim partnerům za jejich důležitý přínos k rozvoji naší školy a k úspěchům našich studentů.</p>
    </div>
    <div class="right">
        <img src="/src/assets/deal.png" alt="">
    </div>
  </div>
  <div class="btns">
    <a href="#">MARKETING CLUB LINZ</a>
    <a href="#">BONUS o.p.s</a>
    <a href="#">AUTO-MOTO-ACADEMY</a>
  </div>
  <footer></footer>
</template>

<script>
export default {

}
</script>

<style scoped>
    .upper{
        display: flex;
        justify-content: space-between;
        width: 80%;
        margin: 0 auto;
        margin-top: 5vh !important;
    }
    h2{
        font-weight: bold;
        margin-bottom: 2vh;
    }
    .left{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 50%;
    }
    p{
        text-align: left;
        font-size: 1.5vw;
        font-weight: bold;
    }
    img{
        height: 300px;
        aspect-ratio: 1;
    }
    .btns{
        width: 70%;
        margin: 0 auto;
        display: flex;
        justify-content: space-evenly;
    }
    a{
        font-weight: bold;
        padding: 10px;
        background: #ED1C24;
        border: 3px solid #ED1C24;
        color: #fdfdfd !important;
        cursor: pointer;
        transition: .2s;
    }
    a:hover{
        background: #fdfdfd;
        color: #ED1C24 !important;
    }
</style>