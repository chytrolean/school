<template>
<ul>
    <li v-for="(item, index) in items" :key="index">
        <div class="text">
            <a :href = item.link :target = item.blank><h2>{{item.nadpis}}</h2></a>
            <p>{{item.txt}}</p>
        </div>

        <img :src="item.img" alt="">
    </li>
</ul>
</template>

<script>
export default {
data() {
    return {
        items: 
        [
            {   
                nadpis: 'O nás',
                link:'/onas',
                txt: 'Jsme moderní vzdělávací instituce s bohatou tradicí a hlubokým závazkem vůči kvalitnímu vzdělání a přípravě mladé generace na profesní dráhu. Naše škola se nachází ve srdci Jindřichova Hradce a poskytuje žákům rozsáhlou nabídku odborných oborů, moderní vybavení a podporu kvalifikovaného pedagogického týmu. Sledujeme nejnovější trendy v oblasti vzdělávání a aktivně spolupracujeme s podnikatelským sektorem, abychom zajistili, že naši studenti získají relevantní dovednosti a znalosti pro úspěšný vstup do pracovního života.', 
                img: './src/assets/my.jpg'
            },
            {   
                nadpis: 'Domov mládeže',
                link:'/domov-mladeze',
                txt: 'Náš Domov mládeže není jen místem k ubytování, ale je to i prostor pro rozvoj a vytváření komunitního ducha. Snažíme se vytvořit příjemné a podporující prostředí, kde se naši studenti mohou cítit jako doma. V našem Domově mládeže klademe důraz na bezpečnost, pohodu a individuální potřeby každého studenta. S moderním vybavením a kvalifikovaným personálem se snažíme poskytovat nejen ubytování, ale i prostor pro výuku, relaxaci a sociální interakce.', 
                img: './src/assets/intr.png'
            },
            {   
                nadpis: 'Školní kuchyně',
                link: '/skolni-kuchyne',
                txt: 'Naše školní kuchyně není jen místem, kde se připravují chutné pokrmy, ale je to i prostor pro sdílení, setkávání a vytváření příjemné atmosféry. Snažíme se nejen o zajištění kvalitní stravy pro naše studenty, ale také o vytváření zážitků spojených s jídlem. Naše školní kuchaři se zaměřují na vyváženou stravu, která podporuje zdravý životní styl našich studentů. Jsme pyšní na širokou nabídku jídel, která reflektuje různorodost chutí a preferencí našich strávníků.', 
                img: './src/assets/kuchyne.jpg'
            },
            {   
                nadpis: 'Školní knihovna',
                link: 'https://superknihovna.cz/',
                blank: '_blank',
                txt: 'Naše knihovna není pouze místem pro studium, ale také prostředím pro rozvoj a vytváření komunitního ducha. Snažíme se vytvořit příjemné a podporující prostředí, kde se naši studenti mohou cítit jako doma. V naší Školní knihovně klademe důraz na bezpečnost, pohodu a individuální potřeby každého studenta. Snažíme se poskytovat nejen prostor pro studium, ale i inspiraci, relaxaci a sociální interakce.', 
                img: './src/assets/knihovna.jpg'
            },

        ]
    }
},
}
</script>

<style scoped>
li{
    display: flex;
    align-items: center;
    justify-content: space-around;
}
li:nth-child(2), li:nth-child(4){
    flex-direction: row-reverse;
}
.text{
    width: 40%;

}
img{
    width: 40%;
    border-radius: 3%;
}
h2{
    font-size: 2vw;
}
p{
    font-size: 1.25vw;
    font-weight: bold;
}
</style>