<script setup>
import photo1 from '../assets/images/photo1.png';
import photo2 from '../assets/images/photo2.png';
import photo3 from '../assets/images/photo3.png';


const photos = [photo1, photo2, photo3];

</script>

<template>
  <div>
      <div class="swiper-container">
        <Swiper
      :initial-slide="1"
      :speed="1000"
      :centered-slides="true"
      :height="300"
      :modules="[SwiperAutoplay, SwiperEffectCreative]"
      :slides-per-view="1.2"
      :loop="false"
      :slides-offset-before="0"
      :slides-offset-after="0"
      :creative-effect="{
        prev: {
          shadow: false,
          translate: ['-20%', 0, -1]
        },
        next: {
          translate: ['100%', 0, 0]
        }
      }"

    >
      <SwiperSlide
        v-for="(photo, idx) in photos"
        :key="idx"
      >
        <!-- {{ photo }} -->
        <img class="slider-photo" :src="photo" />
      </SwiperSlide>

      <!-- useSwiper() within a swiper instance -->
      <SwiperControls
      />
    </Swiper>
      </div>
  </div>
  <div class="desktop-photo-container">
    <img  class="desktop-photo" src="../assets/images/desktop-photo.png" alt="phones">
  </div>
</template>

<style lang="scss"
scoped>
.desktop-photo-container {
  display: none;
  justify-content: center;

  @include onDesktop {
    display: flex;
  }
}

.swiper-container {
  @include onDesktop {
    display: none;
  }
}
.slider-photo {
  width: 290px;
  height: 593px;
  margin: 0 auto;
}
.swiper-slide {
  padding-top: 61px;
  display: flex;
  transition: all 0.6s;

  &-active {
    transform: translatey(-61px);

  }
}
.swiper-wrapper {
  min-width: 100vh;
  width: 100vh;
}
.swiper-cards {
  width: 240px;
  height: 240px;
}
.swiper-cards .swiper-slide {
  border-radius: 6px;
  border: 1px solid black;
}

</style>
