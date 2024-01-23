<template>
    <div class="all">
        <h2>Školní kuchyně</h2>
        <p>Školní jídelna Střední odborné školy a středního odborného učiliště v Jindřichově Hradci Vás vřele zve k obědu. Nabízíme dvě menu, a to OB1 nebo OB2.</p>
        <p>Pro studenty ubytované v Domově mládeže poskytujeme celodenní stravování, zahrnující snídani, dopolední svačinu, oběd, odpolední svačinu a večeři, případně i večeři 2.</p>
        <p>Studenti ubytovaní v Domově mládeže, kteří navštěvují ostatní školy (Střední zdravotnická škola, Obchodní akademie T.G.M. Gymnázium V. Nováka atd.), obvykle nevyužívají obědy ve školní jídelně SOŠ a SOU kvůli časovým omezením a volbě stravování v jiných školních zařízeních.</p>
        <p>Pro stravování ve školní jídelně SOŠ a SOU je potřeba:</p>
        <ul>
            <li>Vyplnit Přihlášku ke stravování a Souhlas k inkasu a zaslat ji nejlépe e-mailem na adresu lenka.janku@sos-jh.cz, poštou nebo osobně do kanceláře vedoucí školní jídelny v přízemí Domova mládeže.</li>
            <li>Zaplatit zálohu na stravné (ubytování se platí až po "probydlení" na konci daného měsíce inkasem společně s další zálohou na stravné).</li>
            <b>a) Jednorázovým příkazem na účet školy 19-0294260237/0100 + variabilní symbol (bude Vám sdělen prostřednictvím e-mailu) řádně vyplněný v přihlášce a souhlasu s inkasem. K jednorázovým příkazům prosím přidejte poznámku s jménem strávníka, za kterého stravné platíte.</b>
            <b>b) Platbou v hotovosti v kanceláři vedoucí školní jídelny, do pokladny SOŠ a SOU.</b>
            <li>Strávník obdrží přihlašovací údaje ke svému účtu na www.strava.cz a prostřednictvím účtu a e-mailu může sledovat platby, nedoplatky, přihlášenou a odhlášenou stravu.</li>
        </ul>
        <p>Osobně jsme k dispozici pro nové studenty a zástupce v kanceláři vedoucí školní kuchyně od 24. 8. 2023 do 26. 8. 2023 v čase od 9:00 do 13:00 hodin.</p>
        <h2>V přílohách naleznete nezbytné informace týkající se stravování a ubytování v Domově mládeže:</h2>
        <div class="down">
            <div class="prihlasky">
                <p>Strávné - kalkulace
                <a href="../src/assets/stravne.pdf" download="../src/assets/stravne.pdf"> 
                    <svg width="15" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M18 7.41176H12.8571V0H5.14286V7.41176H0L9 16.0588L18 7.41176ZM0 18.5294V21H18V18.5294H0Z" fill="black"/>
                    </svg>
                </a>
                </p>
                <p>Přihláška ke stravování 
                <a href="../src/assets/strava-prihlaska.docx" download="../src/assets/strava-prihlaska.docx"> 
                    <svg width="15" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M18 7.41176H12.8571V0H5.14286V7.41176H0L9 16.0588L18 7.41176ZM0 18.5294V21H18V18.5294H0Z" fill="black"/>
                    </svg>
                </a>
                </p>
                <p>Postup přihlašování na www.strava.cz
                <a href="../src/assets/postup.pdf" download="../src/assets/postup.pdf"> 
                    <svg width="15" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M18 7.41176H12.8571V0H5.14286V7.41176H0L9 16.0588L18 7.41176ZM0 18.5294V21H18V18.5294H0Z" fill="black"/>
                    </svg>
                </a>
                </p>
                <p>Souhlas s inkasem
                <a href="../src/assets/inkaso.docx" download="../src/assets/inkaso.docx"> 
                    <svg width="15" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M18 7.41176H12.8571V0H5.14286V7.41176H0L9 16.0588L18 7.41176ZM0 18.5294V21H18V18.5294H0Z" fill="black"/>
                    </svg>
                </a>
                </p>
                <p>Provozní řád školní jídelny
                <a href="../src/assets/provozni-rad-pdf" download="../src/assets/provozni-rad-pdf"> 
                    <svg width="15" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M18 7.41176H12.8571V0H5.14286V7.41176H0L9 16.0588L18 7.41176ZM0 18.5294V21H18V18.5294H0Z" fill="black"/>
                    </svg>
                </a>
                </p>
            </div>
            <img src="../assets/jidelna.png" alt="">
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
    font-weight: bolder;
}
h2{
    font-size: 2rem;
}
p{
    font-size: 1.25rem;
    margin-block: 10px;
    display: flex;
    gap: 5px;
}

li{
    text-indent: 15px;
    font-size: 1.15rem;
    display: list-item;
    list-style: inside !important;
    margin-block: 10px;
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