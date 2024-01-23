<template>
  <div class="all">
    <h2>Domov mládeže</h2>
    <p>Domov mládeže prošel rozsáhlou rekonstrukcí v roce 2017, přičemž všechny pokoje byly vybaveny novým nábytkem, okny a podlahovou krytinou. Ubytování žáků je dostupné v dvou, tří a čtyřlůžkových pokojích. Celá budova je pokryta wifi sítí s přístupem na internet a nabízí studovnu vybavenou počítačovými stanicemi.</p>
    <p>Na každém patře najdete klubovnu s LCD televizorem, kde mají žáci přístup k herní konzoli Xbox 360 s Kinectem, klavíru, elektronickým šipkám, stolu na stolní tenis a stolnímu fotbálku. Na vychovatelně si mohou žáci vypůjčit deskové hry.</p>
    <p>Volný čas mohou žáci strávit v tělocvičně školy, kde jsou pravidelně pořádány sportovní kroužky domova mládeže, včetně florbalu, fotbalu, přehazované a vybíjené. Dále mají možnost účastnit se kroužků vaření, pečení a výrobních činností, jako jsou malování na trička, výroba mýdel, výrobky z pryskyřice, encaustika, pletení a další.</p>
    <p>Žáci mají přístup k kuchyňce pro občasné ohřívání jídla, varné konvici, lednici a mikrovlnné troubě. Cena za ubytování v domově mládeže činí měsíčně 900 Kč/osobu na pokojích bez sociálního zařízení (sociální zařízení je vždy na patře společné), nebo 1100 Kč/osobu na pokojích s vlastním sociálním zařízením.</p>
    <p>Přihlášky do domova mládeže jsou dostupné ke stažení na webových stránkách školy. Zájemci o ubytování musí vyplnit přihlášku, oskenovat a zaslat elektronicky na uvedený email, nebo přihlášku zaslat poštou na adresu školy, případně odevzdat osobně v sekretariátu školy nebo na budově domova mládeže.</p>
    <p>Martin Jahoda - vedoucí domova mládeže <br> Mgr. Karel Chalupa - ředitel školy</p>
    <div class="down">
      <div class="prihlasky">
        <h2>Přihláška ke stažení: </h2>
        <p>Přihláška k ubytování na DM (strana 1) 
          <a href="../src/assets/Prihlaska-1.jpg" download="../src/assets/Prihlaska-1.jpg"> 
            <svg width="15" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M18 7.41176H12.8571V0H5.14286V7.41176H0L9 16.0588L18 7.41176ZM0 18.5294V21H18V18.5294H0Z" fill="black"/>
            </svg>
          </a>
        </p>
        <p>Přihláška k ubytování na DM (strana 2) 
          <a href="../src/assets/Prihlaska-2.jpg" download="../src/assets/Prihlaska-2.jpg"> 
            <svg width="15" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M18 7.41176H12.8571V0H5.14286V7.41176H0L9 16.0588L18 7.41176ZM0 18.5294V21H18V18.5294H0Z" fill="black"/>
            </svg>
          </a>
        </p>
        <h2>Domovní řád ke stažení:</h2>
        <p>Domovní řád DM při SOŠ a SOU JH
          <a href="../src/assets/Domovni-rad-Final-2017.pdf" download="../src/assets/Domovni-rad-Final-2017.pdf"> 
            <svg width="15" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M18 7.41176H12.8571V0H5.14286V7.41176H0L9 16.0588L18 7.41176ZM0 18.5294V21H18V18.5294H0Z" fill="black"/>
            </svg>
          </a>
        </p>
      </div>
      <img src="../assets/domov.png" alt="">
    </div>

    <footer></footer>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.all{
    width: 80%;
    margin: 0 auto;
    text-align: left;
}
h2{
    margin-block: 15px;
    font-size: 2rem;
}
p{
    font-size: 1.25rem;
    margin-block: 10px;
    display: flex;
    gap: 5px;
}
.down{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
img{
  width: 400px;
}
</style>