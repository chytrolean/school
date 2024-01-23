<template>
<div class="all">
      <div class="nazev">
        <h2>Provoz a ekonomika dopravy</h2>
        <h2>37-41-M/01</h2>
    </div>
    <div class="upper">
        <p>Obor Provoz a ekonomika dopravy na naší střední odborné škole poskytuje studentům hluboké porozumění fungování dopravní infrastruktury a ekonomickým aspektům spojeným s pohybem osob a zboží.</p>
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
    <svg class="svg" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 63.6322L53.3611 53.9038C106.722 44.0707 213.444 24.6138 320.167 28.7981C426.889 32.9824 533.611 60.8078 640.333 75.4528C747.056 90.0978 853.778 91.5623 960.5 83.2983C1067.22 75.139 1173.94 57.3558 1280.67 41.6647C1387.39 25.9737 1494.11 12.3747 1600.83 5.88909C1707.56 -0.491944 1814.28 0.135724 1867.64 0.554152L1921 0.867961V264.478H1867.64C1814.28 264.478 1707.56 264.478 1600.83 264.478C1494.11 264.478 1387.39 264.478 1280.67 264.478C1173.94 264.478 1067.22 264.478 960.5 264.478C853.778 264.478 747.056 264.478 640.333 264.478C533.611 264.478 426.889 264.478 320.167 264.478C213.444 264.478 106.722 264.478 53.3611 264.478H0V63.6322Z" fill="#FF0F00"/>
<path d="M0 130.755L53.3611 124.108C106.722 117.388 213.444 104.093 320.167 106.952C426.889 109.811 533.611 128.825 640.333 138.833C747.056 148.84 853.778 149.841 960.5 144.194C1067.22 138.618 1173.94 126.467 1280.67 115.744C1387.39 105.022 1494.11 95.7295 1600.83 91.2977C1707.56 86.9373 1814.28 87.3662 1867.64 87.6521L1921 87.8666V268H1867.64C1814.28 268 1707.56 268 1600.83 268C1494.11 268 1387.39 268 1280.67 268C1173.94 268 1067.22 268 960.5 268C853.778 268 747.056 268 640.333 268C533.611 268 426.889 268 320.167 268C213.444 268 106.722 268 53.3611 268H0V130.755Z" fill="#FFC163"/>
</svg>
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
                    txt: 'Studenti se naučí efektivně spravovat silnice, železnice, letiště a vodní cesty pro optimální provoz.'
                },
                {
                    txt: 'Získají dovednosti v řízení nákladů a financování dopravních projektů, včetně analýzy přínosů a nákladů.'
                },
                {
                    txt: 'Studium principů logistiky jim umožní efektivně pohybovat zbožím a materiály v dodavatelském řetězci.'
                },
                {
                    txt: 'Získají povědomí o právních aspektech dopravy, včetně předpisů a bezpečnostních standardů.'
                },
                {
                    txt: 'Seznámí se s nejnovějšími technologiemi v dopravě, jako jsou inteligentní dopravní systémy a sledování vozidel.'
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