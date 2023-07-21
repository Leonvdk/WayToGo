<script lang="ts" setup>
import { NButton, NCarousel, NSpin } from 'naive-ui';
import { defineComponent, onMounted, ref } from 'vue';

const openTicketBroker = () => {
  window.open('https://www.linkedin.com/in/leonvdk', '_blank');
}
const loading = ref(true);
onMounted(() => {
  setTimeout(() => loading.value = false, 1000)
  
})

defineComponent({
  name: 'Home',
});

</script>

<template>
  <div class="page-wrapper">
    <n-spin v-if="loading" size="large" />
    <div v-else>
      <a href="/">
        <img class="logo" src="../assets/images/LogoNoBG400px.png">
      </a>
      <div class="content-wrapper daniel">
        <div class="hero">
          <div class="hero-left">
            <h1>Are you ready to unleash your inner party animal !?</h1>
          </div>
          <div class="hero-right">
            <h2>Spend a night out in Lisbon and meet local residents and fellow travelers on this pub crawl that introduces you to one of the best nightlife neighborhoods in the city.</h2>
          <div class="button-wrapper">
            <a href="#carousel">Explore ↓</a>
            <a href="https://waytogopubcrawl.myshopify.com/" target=”_blank”>Shop →</a>
          </div>
          </div>
        </div>
        <NCarousel id="carousel" show-arrow autoplay class="carousel">
        <img
          class="carousel-img"
          src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
        >
        <img
          class="carousel-img"
          src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
        >
        <img
          class="carousel-img"
          src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
        >
        <img
          class="carousel-img"
          src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
        >
        </NCarousel>
        <!-- <NButton class="ticket-button" ghost size="large" @click="openTicketBroker" attr-type="button">Get your tickets now</NButton> -->
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import url(https://db.onlinewebfonts.com/c/0a3950f239bb0d70dc6601d71a7074d9?family=Barricada+W01+Regular);
@font-face {
    font-family: "Barricada";
    src: url("https://db.onlinewebfonts.com/t/0a3950f239bb0d70dc6601d71a7074d9.eot");
    src: url("https://db.onlinewebfonts.com/t/0a3950f239bb0d70dc6601d71a7074d9.eot?#iefix")format("embedded-opentype"),
    url("https://db.onlinewebfonts.com/t/0a3950f239bb0d70dc6601d71a7074d9.woff2")format("woff2"),
    url("https://db.onlinewebfonts.com/t/0a3950f239bb0d70dc6601d71a7074d9.woff")format("woff"),
    url("https://db.onlinewebfonts.com/t/0a3950f239bb0d70dc6601d71a7074d9.ttf")format("truetype"),
    url("https://db.onlinewebfonts.com/t/0a3950f239bb0d70dc6601d71a7074d9.svg#Barricada W01 Regular")format("svg");
}
.logo{
  margin: 30px;
  height: 70px;
  width: auto;
}
.page-wrapper{
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
  .content-wrapper.daniel{
    padding: 70px 25px;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    .hero{
      display: flex;
      min-height: 500px;
      height: 100%;
      box-sizing: border-box;

      .hero-left{
        display: flex;
        align-items: flex-start;
        width: 50%;

      }
      .hero-right{
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: flex-end;
        h2{
          max-width: 80%;
          margin-bottom: 40px;
        }
        a{
          text-decoration: none;
          color: #888888;
          font-size: 30px;
          margin: 20px;
        }
      }
    }

    .carousel{
      margin-top: 100px;
      width: 100%;
      /* max-width: 900px; */
      aspect-ratio: 16/9;
      .carousel-img {
        width: 100%;
        margin: 0;
        object-fit: cover;
      }
    }

    .ticket-button{
      margin-top: 20px;
      font-family: Barricada;
    }
  }
</style>