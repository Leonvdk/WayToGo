<script lang="ts" setup>
import { NButton, NCarousel, NSpin } from 'naive-ui';
import { defineComponent, onMounted, ref } from 'vue';
import { event, pageview } from 'vue-gtag';

onMounted(()=>{
    pageview({ page_path: '/' })
})

const openTicketBroker = () => {
  event('clickedTicketLink', { method: 'Google' })
  window.open('https://GoldmanSouza.zaui.net/booking/web/#/default/activity/4?', '_blank');
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
    <!-- <n-spin v-if="loading" size="large" stroke="#F9BC23"/> -->
    <div >
      <a href="/">
        <img class="logo" src="../assets/images/retro-logo-700px.png">
      </a>
      <div class="content-wrapper daniel">
        <section class="hero">
          <div class="hero-left">
            <h1>Way 2 Go pub crawl</h1>
          </div>
          <div class="hero-right">
            <h2>Are you ready to unleash your inner party animal !?</h2>
            <p>
              Ready to paint Lisbon tipsy? Pub crawl like a pro with;
              <br> 
              <b class="yellow-underline">4 local bars, free club entry, unlimited beer, sangria, and shots.</b><br> 
              Meet internationals, mingle with locals, and dance 
              like there's no tomorrow!
            </p>
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
          <!-- <img class="water-mark" src="../assets/images/retro-logo-700px.png"> -->

        </section>
        <section class="tours-section" id="tours-section">
          <div class="left">
            <div class="card" @click="openTicketBroker">
              <div>
                <h2>Pub Crawl</h2>
                <p class="card-sub-header">Lets paint the town tipsy!</p>
              </div>
              <img class="tour-card-image" src="../assets/images/retro-logo-700px.png">
              <h3 class="pricing">€18 p.p</h3>
            </div>
          </div>
          <div class="right">
            <a class="card" href="#contact-section">
              <div>
                <h2>Private Groups</h2>
                <p class="card-sub-header">Make it yours!</p>
              </div>
              <img class="tour-card-image group" src="../assets/images/logo-group.png">
              <h3 class="pricing">Let's go private</h3>
            </a>
          </div>
      </section>
      <section class="review-section">
        <div class="left">
                        <div class="review">
              <div class="stars">
                <img class="star" src="../assets/images/icons/star-rate.png" />
                <img class="star" src="../assets/images/icons/star-rate.png" />
                <img class="star" src="../assets/images/icons/star-rate.png" />
                <img class="star" src="../assets/images/icons/star-rate.png" />
                <img class="star" src="../assets/images/icons/star-rate.png" />
              </div>
                <h2 class="title">The most fun pub crawl</h2>
                <p class="text">The most fun I have had of all the pubcrawls I have been on. Went it solo and made so many friends and the guide Daniel made it so easy to socialise !! Will defiantly be doing it again when I’m back in Lisbon</p>
                <h3 class="name">- Anna Bowyer</h3>
            </div>
            <div class="review">
              <div class="stars">
                <img class="star" src="../assets/images/icons/star-rate.png" />
                <img class="star" src="../assets/images/icons/star-rate.png" />
                <img class="star" src="../assets/images/icons/star-rate.png" />
                <img class="star" src="../assets/images/icons/star-rate.png" />
                <img class="star" src="../assets/images/icons/star-rate.png" />
              </div>
                <h2 class="title">Best pub crawl in Europe</h2>
                <p class="text">10/10 Pub Crawl with Daniel - honestly the best one I’ve been on so far in Europe. The perfect way to see Lisbon, meet people and have so much fun.</p>
                <h3 class="name">- Ailish Byrne</h3>
            </div>
          </div>
          <div class="right">
            <div class="review">
              <div class="stars">
                <img class="star" src="../assets/images/icons/star-rate.png" />
                <img class="star" src="../assets/images/icons/star-rate.png" />
                <img class="star" src="../assets/images/icons/star-rate.png" />
                <img class="star" src="../assets/images/icons/star-rate.png" />
                <img class="star" src="../assets/images/icons/star-rate.png" />
              </div>
                <h2 class="title">Easily the best pub crawl</h2>
                <p class="text">It was easily the best pubcrawl that we went on after 2 months of traveling in Europe. Daniel who ran it was so nice and really cared about the people, not just a go here go here Pubcrawl. He wanted to be friends with everyone there. So much fun would recommend it to everyone. Will absolutely go again if I’m back in Lisbon.</p>
                <h3 class="name">- Eli Lemieux</h3>
            </div>
            <div class="review">
              <div class="stars">
                <img class="star" src="../assets/images/icons/star-rate.png" />
                <img class="star" src="../assets/images/icons/star-rate.png" />
                <img class="star" src="../assets/images/icons/star-rate.png" />
                <img class="star" src="../assets/images/icons/star-rate.png" />
                <img class="star" src="../assets/images/icons/star-rate.png" />
              </div>
                <h2 class="title">The most fun pub crawl</h2>
                <p class="text">Absolutely loved my pub crawl with Daniel! His high energy created such a fun environment for all - can't wait to do this again !!!</p>
                <h3 class="name">- Olivia Owens</h3>
            </div>
          </div>
      </section>
      <section class="contact-section" id="contact-section">
        <h2>Get in touch</h2>
        <p>
          We're happy to help with any questions you have. For private pub crawls and other inquiries, feel free to reach out !
        </p>
        <div class="contact-buttons">
          <div class="button">
            <a href="https://www.instagram.com/way2go_pubcrawl/" target=”_blank”>
              <img src="../assets/images/icons/instagram.svg" />
            </a>
          </div>
          <div class="button">
            <a href="https://wa.me/+351934516277" target=”_blank”>
              <img src="../assets/images/icons/whatsapp.svg" />
            </a>
          </div>
          <div class="button">
            <a href="https://www.tiktok.com/@way2go.pubcrawl?_t=8eN5jB0iOiI&_r=1" target=”_blank”>
              <img src="../assets/images/icons/tiktok.svg" />
            </a>
          </div>
          <div class="button">
            <a href="mailto:waytogolisbontours@gmail.com" target=”_blank”>
              <img id="email" src="../assets/images/icons/email.svg" />
            </a>
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
  position: sticky;
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
          font-weight: 700;

        }

      }
      .hero-right{
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-end;
        /* padding-left: 15%; */
        h2{
          margin-bottom: 15px;
          max-width: 80%;
          font-weight: 600;
        }
        p{
          margin-bottom: 40px;
          line-height: 1.3rem;
          max-width: 80%;
          font-size: 1.2rem;
        }
        .button-wrapper{
          align-self: flex-end;
          margin-right: 20%;
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
        width: 90%;
        max-height: 90vh;
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
        text-decoration: none;
        color: black;
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
          .tour-card-image{
            margin-bottom: 10px;
          }
        }
      }
    }

    .carousel{
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
      background: $primary-color;
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
    .review-section{
      padding: 30px 9vw;
      gap: 50px;
      .review{
        width: 100%;
        max-width: 400px;
        margin-top: 50px;
        .stars{
          display: flex;
          margin-bottom: 10px;
          .star{
            height: 15px;
            width: 15px;
          }
        }
        .title{
          margin-bottom: 10px;
          font-family: Barricada;
          font-size: 1.5rem;
        }
        .text{
          margin-bottom: 15px;
        }
        .name{
          font-size: 1rem;
          margin-bottom: 15px;
        }
      }
      .left{
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: column;
      }
      .right{
        margin-top: 60px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
      
      }
    }
    .contact-section{
  flex-direction: column;
  h2{
    font-family: Barricada;
    font-size: 2.5rem;
    margin-bottom: 15px;
  }
  p{
    max-width: 400px;
  }
  .contact-buttons{
    display: flex;
    gap: 20px;
    margin-top: 30px;
    .button{
      height: 50px;
      width: 50px;
      border-radius: 10rem;
      background-color: $primary-color;
      cursor: pointer;
      transition: all ease-in-out .2s;
      box-shadow: inset -5px -5px 5px #00000025, inset 2px 2px 5px #00000010;
      padding: 12px;
      &:hover{
        transform: scale(1.01);
        filter:brightness(105%);
        box-shadow: inset -5px -5px 5px #00000045, inset 2px 2px 5px #00000020;
      }
      a{
        height: 110%;
        width: 110%;
        border-radius: 15rem;
        text-decoration: none;
        color: black;
        #email{
          filter:invert(100%);
        }
      }
      p{
        font-size: 20px;
        text-align: center;
        width: 100;
        font-weight: 800;
        font-family: Barricada;
      }
      img{
        max-height: 100%;
      }
    }
  }
}
  }
//-------------------------------------------MOBILE-----------------------------
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
          .button-wrapper{
            align-self: center;
            margin-right: 0;
          }
          p{
            font-size: 1.5rem;
            line-height: 1.6rem;

          }
        }
      }
      .carousel{
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
          background: $primary-color;
          background: linear-gradient(13deg, rgba(249,188,35,1) 0%, rgba(240,240,240,1) 60%);

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
      .review-section{
        flex-direction: column;
          gap: 0;
        .review{
          margin-top: 20px;
        }
        .right{
          margin-top: 0;
        }
      }
    }
  }
</style>
