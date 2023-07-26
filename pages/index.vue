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

({
  title: 'My App',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ]})



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
            <a href="https://waytogopubcrawl.myshopify.com/collections/all" target=”_blank”>T-shirts →</a>
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
          <NButton class="ticket-button" size="large" @click="openTicketBroker" attr-type="button" type="warning" :bordered="false">Get your tickets</NButton>
          <img class="water-mark" src="../assets/images/retro-logo-700px.png">

        </section>
        <section class="tours-section" id="tours-section">
          <div class="left">
            <div class="card" @click="openTicketBroker">
              <div>
                <h2>Pub Crawl</h2>
                <p class="card-sub-header">Connect to new people</p>
              </div>
              <img class="tour-card-image" src="../assets/images/retro-logo-700px.png">
              <h3 class="pricing">€18,- p.p</h3>
            </div>
          </div>
          <div class="right">
            <div class="card" @click="openActivitiesOverview">
              <div>
                <h2>Private Groups</h2>
                <p class="card-sub-header">Go party with your friends</p>
              </div>
              <img class="tour-card-image group" src="../assets/images/logo-group.png">
              <h3 class="pricing">From €159,-</h3>
            </div>
          </div>
      </section>
      <!-- <section class="review-section">
        <div class="left">
            <div class="review" @click="openTicketBroker">
              <div>
                <h2>Best pub crawl in Lisbon</h2>
                <h3>Connect to new people</h3>
              </div>
              <h3 class="review-name">Jane Doe</h3>
            </div>
          </div>
          <div class="right">
            <div class="review" @click="openTicketBroker">
              <div>
                <h2>Best pub crawl in Lisbon</h2>
                <h3>Connect to new people</h3>
              </div>
              <h3 class="review-name">Jane Doe</h3>
            </div>
          </div>
      </section> -->
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../design/variables.scss';

.review-section{

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
        h1{
                    max-width: 80%;

        }

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
          font-size: 1.7em;
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
      justify-content: flex-start;
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
        /* background-color: #F0F0F0; */
        background: rgb(249,188,35);
        background: linear-gradient(13deg, rgba(249,188,35,1) 0%, rgba(240,240,240,1) 47%);
        border-radius: 1em;
        aspect-ratio: 6/9;
        transition: all ease-in-out .2s;
        display: flex;
        flex-direction: column;
        justify-content:space-between;
        padding: 10% 8%;
        cursor: pointer;
        box-shadow: inset -5px -5px 5px #00000025, inset 2px 2px 5px #00000010;

        &:hover{
          transform: scale(1.01);
          filter:brightness(105%);
        box-shadow: inset -5px -5px 5px #00000045, inset 2px 2px 5px #00000020;
        }
        
        h2{
          font-family: Barricada;
          font-size: 2.3rem;
        }
        .card-sub-header{
          color: #00000065;
          font-size: 1.1rem;
        }
        .tour-card-image{
          max-width: 90%;
          align-self: flex-end;
          position: relative;
          left: 5%;
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
      border-radius: .5em;
      
      
      .carousel-img {
        width: 100%;
        margin: 0;
        object-fit: cover;
        aspect-ratio: 16/9;
      }
    }
    .water-mark{
      width: 10%;
      margin: 80px auto;
      filter: grayscale(100);
      opacity: 40%;
      position: absolute;
      top: 100px;
      left: 45%;

    }
    .ticket-button{
      margin-top: 20px;
      /* background-color: #F9BC23; */
      background: rgb(249,188,35);
      background: linear-gradient(13deg, rgba(249,188,35,1) 0%, rgba(240,240,240,1) 120%);
      border: none;
      width: 275px;
      height: 75px;
      font-size: 1.5rem;
      align-self: center;
      margin-top: 50px;
      border-radius: .5em;
      transition: all .2s ease-out;
      box-shadow: inset -5px -5px 5px #00000025,  inset 2px 2px 5px #00000010;
      &:hover{
        filter: brightness(105%);
        transform: scale(1.01);
        box-shadow: inset -5px -5px 5px #00000045,  inset 2px 2px 5px #00000020;
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
          justify-content: center;
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
        width: 100%;
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
          width: 100%;
          aspect-ratio: 6/6;
          padding: 10% 10%;

          .tour-card-image{
            max-width: 50%;
            justify-self: center;
            align-self: center;
            left: 0;
            &.group{
              max-width: 80%;
            }
          }
          .pricing{
            /* font-size: 1rem; */
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
