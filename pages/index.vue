<script lang="ts" setup>
import { NButton, NCarousel, NSpin } from 'naive-ui';
import { defineComponent, onMounted, ref } from 'vue';

const openTicketBroker = () => {
  window.open('https://GoldmanSouza.zaui.net/booking/web/#/default/activity/4?', '_blank');
}
const openActivitiesOverview = () => {
  window.open('https://goldmansouza.zaui.net/booking/web/#/default/activities?date=2023-07-24', '_blank');
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
        <!-- <NCarousel id="carousel" show-arrow autoplay class="carousel">
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
        </NCarousel> -->
<!--         <NButton class="ticket-button" ghost size="large" @click="openTicketBroker" attr-type="button">Get your tickets now</NButton> -->
      <img class="midpage-logo" src="../assets/images/LogoNoBG.png">
      <div class="tours-section">
        <div class="left">
          <div class="card" @click="openTicketBroker">
            <div>
              <h2>Pub Crawl</h2>
              <h3>Connect to new people</h3>
            </div>
            <img class="tour-card-image" src="../assets/images/LogoNoBG.png">
            <h3 class="pricing">€18,00</h3>
          </div>
        </div>
        <div class="right">
          <div class="card" @click="openActivitiesOverview">
            <div>
              <h2>Group Activities</h2>
              <h3>Exciting tours around Lisbon</h3>
            </div>
            <img class="tour-card-image" src="../assets/images/LogoNoBG.png">
            <h3 class="pricing">Activities differ in price</h3>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import url(https://db.onlinewebfonts.com/c/0a3950f239bb0d70dc6601d71a7074d9?family=Barricada+W01+Regular);

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
          min-width: max-content;
          white-space: nowrap;
        }
      }
    }
    .tours-section{
      display: flex;
      width: 100%;
      min-height: 90vh;
      justify-content: center;
      align-items: center;
      .card{
        /* height: 500px; */
        width: 80%;
        box-sizing: border-box;
        background-color: #afb5c165;
        border-radius: 1.5em;
        aspect-ratio: 6/9;
        transition: all ease-in-out .2s;
        display: flex;
        flex-direction: column;
        justify-content:space-between;
        padding: 10% 10%;
        cursor: pointer;
        &:hover{
          transform: scale(1.05);
          box-shadow: 5px 4px 20px #00000025;
        }

        
        h2{
          font-family: Barricada;
          font-size: 60px;
        }
        h3{
          color: #00000065
        }
        .tour-card-image{
          max-width: 90%;
          align-self: flex-end;
          position: relative;
          left: 15%;
        }
        .pricing{
          justify-self: flex-end;
          font-weight: 100;
        }
      }
      .left{
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      }
      .right{
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      
      .card{
        margin-top: 150px;
      }
      }
    }

    .carousel{
      margin-top: 100px;
      width: 100%;
      aspect-ratio: 16/9;
      .carousel-img {
        width: 100%;
        margin: 0;
        object-fit: cover;
      }
    }
    .midpage-logo{
      width: 50%;
    }
    .ticket-button{
      margin-top: 20px;
      font-family: Barricada;
    }
  }
</style>
