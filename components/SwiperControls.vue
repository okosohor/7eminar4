<script setup>
const swiper = useSwiper()
</script>

<template>
  <div class="button-group">
    <button class="button" @click="swiper.slidePrev()"><img src="../assets/images/Frame.svg" alt=""></button>
    <button class="button" @click="swiper.slideNext()"><img src="../assets/images/Frame.svg" alt=""></button>
  </div>
</template>

<style lang="scss" scoped>
.button {
  border: none;
  background-color: inherit;
  &:first-child {
    transform: scale(-1,1);
    margin-right: 6px;
  };
};
 
.button-group {
  display: flex;
  justify-content: center;
  margin-bottom: 29px;
}
</style>
