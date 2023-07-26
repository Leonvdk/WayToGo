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
    <n-spin v-if="loading" size="large" stroke="#F9BC23"/>
    <div v-else>
      <a href="/">
        <img class="logo" src="../assets/images/retro-logo-700px.png">
      </a>
      <div class="content-wrapper daniel">
        <section class="hero">
          <div class="hero-left">
            <h1>Are you ready to unleash your inner party animal !?</h1>
          </div>
          <div class="hero-right">
            <h2>Spend a night out in Lisbon and meet local residents and fellow travelers on this pub crawl that introduces you to one of the best nightlife neighborhoods in the city.</h2>
          <div class="button-wrapper">
            <a href="#tours-section">Explore ↓</a>
            <a href="https://waytogopubcrawl.myshopify.com/collections/all" target=”_blank”>Shop →</a>
          </div>
          </div>
        </section>
        <section class="carousel-section">
          <NCarousel id="carousel" show-arrow autoplay class="carousel">
          <img
            class="carousel-img"
            src="../assets/images/photos/pubcrawl1.png"
          >
          <img
            class="carousel-img"
            src="../assets/images/photos/pubcrawl2.png"
          >
          <img
            class="carousel-img"
            src="../assets/images/photos/pubcrawl3.png"
          >
          </NCarousel>
          <NButton class="ticket-button" size="large" @click="openTicketBroker" attr-type="button" type="warning">Get your tickets</NButton>

        </section>
      <!-- <img class="midpage-logo" src="../assets/images/retro-logo-700px.png"> -->
      <section class="tours-section" id="tours-section">
        <div class="left">
          <div class="card" @click="openTicketBroker">
            <div>
              <h2>Pub Crawl</h2>
              <h3>Connect to new people</h3>
            </div>
            <img class="tour-card-image" src="../assets/images/logo-group.png">
            <h3 class="pricing">€18,-</h3>
          </div>
        </div>
        <div class="right">
          <div class="card" @click="openActivitiesOverview">
            <div>
              <h2>Group Activities</h2>
              <h3>Exciting tours around Lisbon</h3>
            </div>
            <img class="tour-card-image wine" src="../assets/images/wine-glasses.png">
            <h3 class="pricing">From €159,-</h3>
          </div>
        </div>
      </section>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../design/variables.scss';

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
  margin: auto;
  box-sizing: border-box;
}
  .content-wrapper.daniel{
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
          font-size: 2em;
          margin: 20px;
          min-width: max-content;
          white-space: nowrap;
          transition: all ease-in-out .3s;

          &:hover{
            color: black;
          }
        }
      }
    }
    .carousel-section{
      flex-direction: column;
    }
    .tours-section{
      display: flex;
      width: 100%;
      min-height: 90vh;
      justify-content: center;
      align-items: center;
      .card{
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
          /* box-shadow: 5px 4px 20px #00000025; */
        }
        
        h2{
          font-family: Barricada;
          font-size: 3rem;
        }
        h3{
          color: #00000065;
          font-size: 1.5rem;
        }
        .tour-card-image{
          max-width: 90%;
          align-self: flex-end;
          position: relative;
          left: 15%;
        }
        .pricing{
          justify-self: flex-end;
          font-weight: 300;
          font-size: 1.8rem;
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
        aspect-ratio: 16/9;
      }
    }
    .midpage-logo{
      width: 50%;
      margin: 80px auto;
    }
    .ticket-button{
      margin-top: 20px;
      background-color: #F9BC23;
      border: none;
      width: 275px;
      height: 75px;
      font-size: 1.5rem;
      align-self: center;
      margin-top: 50px;
      border-radius: .5em;
      &:hover{
        filter: brightness(110%);
      }
      * {
        font-family: Barricada;
      }
    }
  }

  @media only screen and (max-width: 767px){
    .content-wrapper.daniel{
      .hero{
        display: flex;
        flex-direction: column;
  
        .hero-left{
          display: flex;
          align-items: flex-start;
          width: 100%;
  
        }
        .hero-right{
          width: 100%;
          margin-top: 50px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
        }
      }
      .carousel{
        margin-top: 100px;
        width: 100vw;
        aspect-ratio: 9/16;
        .carousel-img {
          width: 100%;
          margin: 0;
          object-fit: cover;
          aspect-ratio: 9/16;
        }
    }
      .tours-section{
        display: flex;
        flex-direction: column;
        width: 100%;
        min-height: 90vh;
        justify-content: center;
        align-items: center;
        .card{
          /* height: 500px; */
          width: 100%;
          background-color: #afb5c165;
          border-radius: 1.5em;
          aspect-ratio: 6/7;
          padding: 10% 10%;
  
          .tour-card-image{
            max-width: 90%;
            align-self: flex-end;
            position: relative;
            left: 15%;
            &.wine{
              height: 60%;
              opacity: 80%;
              margin-top: 20px;
            }
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
          margin-top: 60px;
        }
        }
      }
    }
  }
</style>
