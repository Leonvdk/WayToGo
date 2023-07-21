<script lang="ts" setup>
import { defineComponent } from 'vue';

defineComponent({
  name: 'HomeHero',
});


</script>

<template>
  <div class="home-hero">
    <!-- <div class="video-container" >
      <video id="background-video" autoplay="" loop="" style="background-image:url(&quot;https://assets.website-files.com/56d8a8f1100bc1bb7928eebd/58458c90a39ccfdb4c175922_HECO_LINE_ANIMATION_v04-poster-00001.jpg&quot;)" muted="" playsinline="" data-wf-ignore="true">
        <source src="https://assets.website-files.com/56d8a8f1100bc1bb7928eebd/58458c90a39ccfdb4c175922_HECO_LINE_ANIMATION_v04-transcode.webm" data-wf-ignore="true">
      </video>
    </div> -->
    <div class="bg-front-container">
      <div class="introduction-container">
        <!-- <TestModal /> -->
        <h1> That's me!</h1>
        <img class="bent-arrow" src="@/assets/images/bent-arrow.svg" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .home-hero{
    background: #F7F2F0;
    height: 100vh;
    position: relative;
    overflow-y: hidden;
    .video-container{
      position: absolute;
      display: flex;
      align-items: flex-end;
      height: 100%;
      #background-video{
        position: relative;
        height: 100%;
        width: 100%;
        bottom: -20%;
      }

    }
    .bg-front-container{
      position: relative;
      height: 100%;
      background-image: url(@/assets/images/Leon-dork.svg);
      background-size: 80%;
      background-repeat: no-repeat;
      background-position: 50% 100% ;
      .introduction-container{
        position: absolute;
        left: 60%;
        top: calc(60vh - 15vw);
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        .bent-arrow{
          position: relative;
          max-height: 50vw;
          right: 50%;
          rotate: 50deg;
        }
      }
    }
  }
</style>