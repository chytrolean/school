<template>
<div class="all">
      <div class="nazev">
        <h2>Ekonomika a podnikání</h2>
        <h2>63-41-M/01</h2>
    </div>
    <div class="upper">
        <p>Obor Ekonomika a podnikání na naší střední odborné škole poskytuje studentům komplexní pohled na svět obchodu a podnikání. Během studia se studenti naučí základům ekonomiky, finančnímu plánování a strategickému řízení podniků. Program zahrnuje též témata jako marketing, účetnictví a podnikové finance.</p>
        <img src="/src/assets/business.png" alt="">
    </div>
    <h2>Co se u nás naučíš?</h2>
    <ul>
        <li v-for="(item, index) in items" :key="index" class="learn">
                <svg width="50" height="50" viewBox="10 -15 85 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M53.125 63.75C70.7291 63.75 85 49.4791 85 31.875C85 14.2709 70.7291 0 53.125 0C35.5209 0 21.25 14.2709 21.25 31.875C21.25 49.4791 35.5209 63.75 53.125 63.75ZM50.3516 43.1402L68.0599 21.8902L66.5234 20.6098L49.5161 41.0186L39.6654 31.1679L38.2512 32.5821L48.8762 43.2071L49.6505 43.9814L50.3516 43.1402Z" fill="#00A524"/>
                </svg>
                {{item.txt}}
        </li>
    </ul>
    <div class="info">
    <h2>Informace o oboru</h2>
        <div class="line">
            <h3>Forma studia:</h3> <span>Čtyřleté denní studium s absolvováním maturitní zkoušky.</span>
        </div>
        <div class="line">
            <h3>Cílová skupina:</h3> <span>Absolventi základní školy - dívky i chlapci.</span>
        </div>
        <div class="line">
            <h3>Přijímací zkoušky:</h3> <span>Ano</span>
        </div>
        <h3>Kritéria přijetí: </h3> 
        <ul>
            <li>Z 8. ročníku: Zohledňuje se závěrečné vysvědčení, zejména matematický průměr známek.</li>
            <li>Z 9. ročníku: Přihlíží se k pololetnímu vysvědčení s důrazem na matematický průměr známek.</li>
        </ul>
    </div>
    <div class="absolventi">
        <h2>Absolventi se uplatní:</h2>
        <span>Dopravní společnosti: Pracovat mohou ve veřejné nebo soukromé dopravě, například v provozování autobusových, železničních nebo leteckých linek.</span>
        <span>Logistické společnosti: Absolventi mohou najít zaměstnání ve firmách specializujících se na správu a optimalizaci dodavatelských řetězců a skladování.</span>
        <span>Dopravní infrastruktura: Uplatnit se mohou ve správě a údržbě dopravních sítí, včetně silnic, železnic a letišť.</span>
        <span>Právní poradenství v dopravě: Získané znalosti o právních aspektech dopravy umožňují práci v oblasti práva a poradenství.</span>
        <span>Technologické společnosti: S ohledem na moderní technologie v dopravě mohou pracovat v firmách vyvíjejících a implementujících inovativní dopravní technologie a aplikace.</span>
    </div>
    <div class="predmety">
        <ul>
        <h2>Povinné předměty:</h2>
            <li v-for="(item, index) in povinne" :key="index">
                {{item}}
            </li>
        </ul>
        <ul>
        <h2>Výběrové předměty:</h2>
            <li v-for="(item, index) in vyberove" :key="index">
                {{item}}
            </li>
        <predmety-btns />
        </ul>
    </div>
</div>
<footer></footer>
</template>

<script>
import predmetyBtns from '../../components/predmetyBtns.vue'

export default {
    components: {
        predmetyBtns
    },
    data() {
        return {
            items: [
                {
                    txt: 'Studenti se naučí efektivně spravovat finance podniku, včetně rozpoznání a plánování nákladů, tvorby rozpočtu a analýzy finančních výsledků.'
                },
                {
                    txt: 'Získají znalosti o tvorbě a implementaci marketingových strategií, propagaci produktů a služeb, a budování značky.'
                },
                {
                    txt: 'Studenti se seznámí s praktickými aspekty podnikání, včetně zakládání a řízení firmy a strategického plánování.'
                },
                {
                    txt: 'Získají schopnost analyzovat ekonomické trendy a porozumět makroekonomickým principům.'
                },
                {
                    txt: 'Kromě technických znalostí se studenti naučí efektivní komunikaci, týmové spolupráci a vedení.'
                },

            ],
            povinne: [
                'Český jazyk',
                'Cizí jazyk 1',
                'Občanská nauka',
                'Dějepis',
                'Matematika',
                'Základy přírodních věd',
                'Tělesná výchova',
                'Dopravní zeměpis',
                'Doprava a přeprava',
                'Zbožíznalství',
                'Logistika a obslužné systémy',
                'Ekonomika',
                'Právní nauka',
                'Práce s počítačem',
                'Praxe',
            ],
            vyberove: [
                'Cizí jazyk 2',
                'Zpracování dokumentů na PC',
                'Datové komunikace',
                'Počítačové systémy',
                'Účetnictví',
                'Celní deklarace v rámci EU',
                'Ekologie a ochrana životního prostředí',
            ]
        }
    },

}
</script>

<style scoped>
.all{

    width: 80%;
    margin: 10vh auto 0 auto;
    text-align: left;
}
h2{
    color: #ed1c24;
    font-weight: 800;
}
.nazev{
    display: flex;
    flex-direction: column;
}
.upper{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.upper p {
    font-size: 1.5em;
    font-weight: bold;
    width: 55%;
}
img{
    margin-top: -50px;
    height: 300px;
    aspect-ratio: 1;
}
ul{
    margin-block: 25px;
}
.learn{
    font-size: 1.25em;
    font-weight: 800;
    display: flex;
    align-items: center;
    gap:5px;
}
svg{
    padding: 0;
}
.info{
    margin-top: 50px;
}
.info h2{
    margin-bottom: 15px;
}
.info h3{
    font-size: 1.35em;
}
.info span{
    font-weight: bold;
}
.line{
    display: flex;
    align-items: center;
    gap: 5px;
}
span{
    font-size: 1.25em;
}
.info li{
    list-style: inside;
    font-size: 1.25em;
    text-indent: 25px;
}
.absolventi{
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.absolventi h2{
    margin-bottom: 10px; 
}
.absolventi span {
    font-weight: bolder;
}
.predmety{
    position: relative;
    margin-top: 50px;
    display: flex;
    justify-content: center;
    justify-content: space-between;
}
.predmety ul {
    display: flex;
    flex-direction: column;
    flex: 1;
} 
.predmety ul li {
    list-style: inside;
    font-weight: bold;
}
.svg{
  height: 267px;
  width: 100%;
  margin-bottom: 0;
}
</style>