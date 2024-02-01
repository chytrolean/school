<template>
  <div class="sos">
    <h2>SOŠ</h2>
    <div class="bar">
        <span class="jmeno">Jméno pracovníka</span>
        <span class="poz">Kontakt + pozice</span>
    </div>
    <ul>
        <li v-for="(item, index) in sos" :key="index">
            <div class="sos-child itName">{{item.name}}</div>
            <div class="sos-child svg">
                    <svg width="20" height="20" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.2868 7.8807C24.9693 8.2085 26.5156 9.03021 27.7277 10.2407C28.9399 11.4511 29.7627 12.9952 30.091 14.6754M23.2868 1C26.7824 1.38779 30.042 2.95098 32.5305 5.4329C35.0191 7.91482 36.5885 11.168 36.9813 14.6582M35.2587 28.3852V33.5457C35.2606 34.0248 35.1624 34.499 34.9702 34.9379C34.778 35.3769 34.4961 35.7709 34.1426 36.0948C33.7891 36.4186 33.3717 36.6652 32.9173 36.8187C32.4628 36.9722 31.9813 37.0292 31.5035 36.986C26.2028 36.4109 21.1112 34.6021 16.6377 31.7051C12.4757 29.0641 8.947 25.5403 6.30227 21.3841C3.39109 16.8965 1.5794 11.7872 1.01398 6.47015C0.970935 5.99447 1.02755 5.51504 1.18021 5.0624C1.33287 4.60977 1.57825 4.19383 1.9007 3.84108C2.22316 3.48832 2.61564 3.20648 3.05315 3.0135C3.49065 2.82052 3.96361 2.72062 4.4419 2.72017H9.60961C10.4456 2.71196 11.256 3.00758 11.8899 3.55193C12.5237 4.09629 12.9377 4.85224 13.0548 5.67887C13.2729 7.33035 13.6774 8.95189 14.2606 10.5126C14.4923 11.1283 14.5425 11.7974 14.4051 12.4407C14.2677 13.084 13.9485 13.6744 13.4854 14.1421L11.2977 16.3267C13.7499 20.6333 17.3206 24.199 21.6332 26.6478L23.8208 24.4632C24.2892 24.0007 24.8805 23.682 25.5246 23.5448C26.1688 23.4076 26.8389 23.4577 27.4554 23.6891C29.0183 24.2715 30.6421 24.6754 32.2959 24.8932C33.1326 25.0111 33.8968 25.432 34.4431 26.0758C34.9894 26.7197 35.2796 27.5416 35.2587 28.3852Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
             
                    <svg width="20" height="20" viewBox="0 0 48 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M44.9766 0H2.99844C2.2032 0 1.44054 0.316071 0.878222 0.87868C0.315906 1.44129 0 2.20435 0 3L0 31C0 31.7956 0.315906 32.5587 0.878222 33.1213C1.44054 33.6839 2.2032 34 2.99844 34H44.9766C45.7718 34 46.5345 33.6839 47.0968 33.1213C47.6591 32.5587 47.975 31.7956 47.975 31V3C47.975 2.20435 47.6591 1.44129 47.0968 0.87868C46.5345 0.316071 45.7718 0 44.9766 0ZM44.3369 2L23.9875 17.74L3.63811 2H44.3369ZM1.99896 30.59V3.26L17.4009 15.17L1.99896 30.59ZM3.40823 32L18.9901 16.41L23.3678 19.8C23.5426 19.9346 23.757 20.0076 23.9775 20.0076C24.1981 20.0076 24.4124 19.9346 24.5872 19.8L28.9849 16.41L44.5668 32H3.40823ZM45.9761 30.59L30.5741 15.17L45.9761 3.26V30.59Z" fill="black"/>
                    </svg>
                
            </div>
            <div class="sos-child kont">{{item.kontakt}}</div>
        </li>
    </ul>
  </div>
  <div class="sos">
    <h2>SOU</h2>
    <div class="bar">
        <span class="jmeno">Jméno pracovníka</span>
        <span class="poz">Kontakt + pozice</span>
    </div>
    <ul>
        <li v-for="(item, index) in sou" :key="index">
            <div class="sos-child itName">{{item.name}}</div>
            <div class="sos-child svg">
                    <svg width="20" height="20" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.2868 7.8807C24.9693 8.2085 26.5156 9.03021 27.7277 10.2407C28.9399 11.4511 29.7627 12.9952 30.091 14.6754M23.2868 1C26.7824 1.38779 30.042 2.95098 32.5305 5.4329C35.0191 7.91482 36.5885 11.168 36.9813 14.6582M35.2587 28.3852V33.5457C35.2606 34.0248 35.1624 34.499 34.9702 34.9379C34.778 35.3769 34.4961 35.7709 34.1426 36.0948C33.7891 36.4186 33.3717 36.6652 32.9173 36.8187C32.4628 36.9722 31.9813 37.0292 31.5035 36.986C26.2028 36.4109 21.1112 34.6021 16.6377 31.7051C12.4757 29.0641 8.947 25.5403 6.30227 21.3841C3.39109 16.8965 1.5794 11.7872 1.01398 6.47015C0.970935 5.99447 1.02755 5.51504 1.18021 5.0624C1.33287 4.60977 1.57825 4.19383 1.9007 3.84108C2.22316 3.48832 2.61564 3.20648 3.05315 3.0135C3.49065 2.82052 3.96361 2.72062 4.4419 2.72017H9.60961C10.4456 2.71196 11.256 3.00758 11.8899 3.55193C12.5237 4.09629 12.9377 4.85224 13.0548 5.67887C13.2729 7.33035 13.6774 8.95189 14.2606 10.5126C14.4923 11.1283 14.5425 11.7974 14.4051 12.4407C14.2677 13.084 13.9485 13.6744 13.4854 14.1421L11.2977 16.3267C13.7499 20.6333 17.3206 24.199 21.6332 26.6478L23.8208 24.4632C24.2892 24.0007 24.8805 23.682 25.5246 23.5448C26.1688 23.4076 26.8389 23.4577 27.4554 23.6891C29.0183 24.2715 30.6421 24.6754 32.2959 24.8932C33.1326 25.0111 33.8968 25.432 34.4431 26.0758C34.9894 26.7197 35.2796 27.5416 35.2587 28.3852Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
             
                    <svg width="20" height="20" viewBox="0 0 48 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M44.9766 0H2.99844C2.2032 0 1.44054 0.316071 0.878222 0.87868C0.315906 1.44129 0 2.20435 0 3L0 31C0 31.7956 0.315906 32.5587 0.878222 33.1213C1.44054 33.6839 2.2032 34 2.99844 34H44.9766C45.7718 34 46.5345 33.6839 47.0968 33.1213C47.6591 32.5587 47.975 31.7956 47.975 31V3C47.975 2.20435 47.6591 1.44129 47.0968 0.87868C46.5345 0.316071 45.7718 0 44.9766 0ZM44.3369 2L23.9875 17.74L3.63811 2H44.3369ZM1.99896 30.59V3.26L17.4009 15.17L1.99896 30.59ZM3.40823 32L18.9901 16.41L23.3678 19.8C23.5426 19.9346 23.757 20.0076 23.9775 20.0076C24.1981 20.0076 24.4124 19.9346 24.5872 19.8L28.9849 16.41L44.5668 32H3.40823ZM45.9761 30.59L30.5741 15.17L45.9761 3.26V30.59Z" fill="black"/>
                    </svg>
                
            </div>
            <div class="sos-child kont">{{item.kontakt}}</div>
        </li>
    </ul>
  </div>
  <footer></footer>
</template>

<script>
export default {
    data() {
        return {
            sos: [
                {
                    name: 'Růžena Bednářová',
                    kontakt: 'Sekretariát ředitele školy'
                },
                {
                    name: 'Ing. Gabriela Dvořáková',
                    kontakt: 'Obchodní korespondence, písemná a elektronická korespondence'
                },
                {
                    name: 'Růžena Bednářová',
                    kontakt: 'Sekretariát ředitele školy'
                },
                {
                    name: 'Ing. Gabriela Dvořáková',
                    kontakt: 'Obchodní korespondence, písemná a elektronická korespondence'
                },
                {
                    name: 'Růžena Bednářová',
                    kontakt: 'Sekretariát ředitele školy'
                },
                {
                    name: 'Ing. Gabriela Dvořáková',
                    kontakt: 'Obchodní korespondence, písemná a elektronická korespondence'
                },
                {
                    name: 'Růžena Bednářová',
                    kontakt: 'Sekretariát ředitele školy'
                },
                {
                    name: 'Ing. Gabriela Dvořáková',
                    kontakt: 'Obchodní korespondence, písemná a elektronická korespondence'
                },
                {
                    name: 'Růžena Bednářová',
                    kontakt: 'Sekretariát ředitele školy'
                },
                {
                    name: 'Ing. Gabriela Dvořáková',
                    kontakt: 'Obchodní korespondence, písemná a elektronická korespondence'
                },
                {
                    name: 'Růžena Bednářová',
                    kontakt: 'Sekretariát ředitele školy'
                },
                {
                    name: 'Ing. Gabriela Dvořáková',
                    kontakt: 'Obchodní korespondence, písemná a elektronická korespondence'
                },
            ],
            sou: [
                {
                    name: 'Růžena Bednářová',
                    kontakt: 'Sekretariát ředitele školy'
                },
                {
                    name: 'Ing. Gabriela Dvořáková',
                    kontakt: 'Obchodní korespondence, písemná a elektronická korespondence'
                },
                {
                    name: 'Růžena Bednářová',
                    kontakt: 'Sekretariát ředitele školy'
                },
                {
                    name: 'Ing. Gabriela Dvořáková',
                    kontakt: 'Obchodní korespondence, písemná a elektronická korespondence'
                },
                {
                    name: 'Růžena Bednářová',
                    kontakt: 'Sekretariát ředitele školy'
                },
                {
                    name: 'Ing. Gabriela Dvořáková',
                    kontakt: 'Obchodní korespondence, písemná a elektronická korespondence'
                },
                {
                    name: 'Růžena Bednářová',
                    kontakt: 'Sekretariát ředitele školy'
                },
                {
                    name: 'Ing. Gabriela Dvořáková',
                    kontakt: 'Obchodní korespondence, písemná a elektronická korespondence'
                },
                {
                    name: 'Růžena Bednářová',
                    kontakt: 'Sekretariát ředitele školy'
                },
                {
                    name: 'Ing. Gabriela Dvořáková',
                    kontakt: 'Obchodní korespondence, písemná a elektronická korespondence'
                },
            ],
        }
    },

}
</script>

<style scoped>
    .sos{
        width: 80%;
        margin: 10vh auto 0;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    .bar{
        width: 100%;
        height: 70px;
        display: flex;
        align-items: center;
        background: #ed1c24;
        color: #fff;
        
        font-weight: bold;
    }
    .bar span{
        height: 100%;
    }
    .jmeno, .itName{
        width: 40%;
        border-right: 2px solid #fff;
        display: flex;
        align-items: center;
        padding-left: 15px;
    }
    .poz{
        width: 60%;
        display: grid;
        place-items: center;
    }
    ul{
        width: 100%;
    }
    li{
        font-weight: bold;
        height: 70px;
        margin-top: 15px;
        width: 100%;
        color: #000;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border: 10px solid;
        border-image-slice: 1;
        border-width: 5px;
        border-image-source: linear-gradient(to bottom, #ED1C24, #000);
    }
    .sos-child{
        height: 100%;
    }
    .itName{
        border-color: #000;

    }
    .svg{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        padding: 5px;
    }
    .kont{
        width: 56%;
        display: grid;
        place-items: center;
        border-left: 2px solid #000;
    }
    
</style>