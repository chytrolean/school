<template>
  <div class="bg">
    <h2>PROČ K NÁM? </h2>
    <ul>
        <li v-for="(item, index) in imgs" :key="index">
            <div class="block"> 
                <svg width="50" height="50" viewBox="0 0 85 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M53.125 63.75C70.7291 63.75 85 49.4791 85 31.875C85 14.2709 70.7291 0 53.125 0C35.5209 0 21.25 14.2709 21.25 31.875C21.25 49.4791 35.5209 63.75 53.125 63.75ZM50.3516 43.1402L68.0599 21.8902L66.5234 20.6098L49.5161 41.0186L39.6654 31.1679L38.2512 32.5821L48.8762 43.2071L49.6505 43.9814L50.3516 43.1402Z" fill="#00A524"/>
                </svg>
                <span>
                    <b>Lorem ipsum dolor sit amet consectetur adipisctus expedita maiores soluta!</b>
                    <b>Lorem ipsum dolor sit amet consectetur adipisctus expedita maiores soluta!</b>
                    <b>Lorem ipsum dolor sit amet consectetur adipisctus expedita maiores soluta!</b>
                    <b>Lorem ipsum dolor sit amet consectetur adipisctus expedita maiores soluta!</b>
                </span>

            </div>
        </li>
    </ul>
    <h3 class="onas">VÍCE O NÁS</h3>
  </div>
</template>

<script>
export default {
data() {
    return {
        imgs: [
            '../src/assets/slide/1.jpg',
            '../src/assets/slide/2.jpg',
            '../src/assets/slide/3.jpg',
            ]
    }
},
}
</script>

<style scoped>
.bg{
    margin-top: 5vh;
    width: 100vw;
    padding-block: 15px;
    background: #d9d9d9;

}
ul{
    height: 100%;
    display: flex;
    align-items: center;
    padding-block: 10vh;
}
li{
    flex: 1;
}
.block{
    position: relative;
    width: 80%;
    aspect-ratio: 2;
    background: #f9f9f9;
    margin: 0 auto;
}
svg{
    position: absolute;
    left: 50%;
    transform: translate(-50%, -60%);
    
}
span{
    padding: 10px   ;
    display: flex;
    flex-direction: column;
    align-items: center;
}
h2{
    padding: 10px;
    color: #ED1C24;
    font-weight: bold;
}
.onas{
    background: #ED1C24;
    border: 3px solid #ED1C24;
    color: #f9f9f9;
    padding: 10px;
    width: 150px;
    margin: 0 auto;
    cursor: pointer;
    transition: .2s;
}
.onas:hover{
    background: #d9d9d9;
    color: #ED1C24;
}
</style>