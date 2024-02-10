<template>
  <div class="sign">
    <!-- <img src="../assets/Polygon.png" alt="" class="left">
    <form @submit.prevent="loginUser">
        <img src="../assets/admin.png" alt="" class="ico">
        <input v-model="postData.username" type="text" placeholder="name" name="username">
        <input v-model="postData.password" type="password" placeholder="Heslo" name="password">
        <button>Create Post</button>
    </form>
    <img src="../assets/sos.png" alt="" class="logo"> -->
    <h1>{{answer}}</h1>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      //postData: {username: '', password: ''},
      answer: {}
    };
  },
  /*methods: {
    loginUser(){
      axios
        .post("http://localhost/smallUpdate/REST_API/API/uzivatele/login", this.postData)
        .then((Response) => console.log(Response))
      
    //   this.result = this.answer.substring(0, this.answer.indexOf('<'))
    },
  },*/
  methods: {
      async getAnswer() {
        const { data } = await axios.get("http://localhost/smallUpdate/REST_API/API/workers/1");
        this.answer = data;
      },
    },
    beforeMount() {
      this.getAnswer();
  },
};
// export default {
//     data() {
//         return {
//             mess: null
//         }
//     },
//     mounted() {
//         axios
//         .get('http://localhost/REST_API/www/API/uzivatele/login')
//         .then(response => (this.mess = response))
//     }
// }
</script>

<style scoped>
.sign{
    margin: 0 auto;
    max-width: 1000px;
    background: #fff;
    height: 100vh;
    display: flex;
    align-items: center;
    position: relative;
}
.left{
   width: 50%;
   height: 100%;
}
form{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-30%,-50%);
    border: 2px solid black;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background: #e8e8e8;
    height: 250px;
    width: 250px;
}
input{
    border: 2px solid #000;
    outline: none;
    padding: 5px;
}
.sub{
    background: #fff;
    cursor: pointer;
    font-weight: bold;
    transition: .2s;
}
.sub:hover{
    background: #ed1c24;
    color: #fff;
}
::placeholder{
    color: #000;
}
.ico{
    width: 30px;
    aspect-ratio: 1;
}
.logo{
    width: 100px;
    position: absolute;
    bottom: 5px;
    right: 10px;
}

</style>