<script>
export default {
  props: {
    text: String,
  }
}
</script>
<template>
  <button class="button">
    {{ text }}
    <!-- asdasdasdasd -->
  </button>
</template>

<style lang="scss" scoped>
.button {
  border: none;
  border-radius: 100px;
  padding: 18px 32px;
  text-align: center;
  font-family: 'Raleway';
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  background-color: $bluePrimaryColor;
  color: $whiteBackgroundColor;
  margin-bottom: 24px;
  transition: all 0.3s;

  &:hover {
    scale: 1.1;
    background-color: $blueSecondaryColor;
  }

  @include onDesktop {
    font-size: 16px;
    margin-bottom: 40px;
  }
 }
</style>

