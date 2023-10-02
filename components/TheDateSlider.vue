<script setup>
      

      const currentDate = new Date();
      const maxDate = new Date('2023-10-03');
      const markerDates = [new Date('2023-08-10'), new Date('2023-08-15'), new Date('2023-09-01'), new Date('2023-09-15'), new Date('2023-10-03')];
      const dateText = ['', '21 серпня', '1 вересня', '15 вересня', '3 жовтня']

      const minDate = new Date('2023-08-10');
      const totalDays = (maxDate - minDate) / (24 * 60 * 60 * 1000);
      const passedDays = (currentDate - minDate) / (24 * 60 * 60 * 1000);
      const percent = (passedDays / totalDays) * 100;

      const progress = percent + '%'

      const marker = (date) => {
          const totalDays = (maxDate - minDate) / (24 * 60 * 60 * 1000);
          const passedDays = (date - minDate) / (24 * 60 * 60 * 1000);
          const percent = (passedDays / totalDays) * 100;
          return percent + '%';
    }
      
</script>
<template>
  <div class="date-slider">
    <div class="date-slider__content">
      <h3 class="date-slider__title">Навчання, яке працює! <br> Відкрийте для себе найпопулярніші курси</h3>
      <div class="date-slider__wrapper">
        <div class="date-slider__dates">
        <p class="date-slider__dates-text" v-for="(text, index) in dateText" :key="index" :style="{ top: marker(markerDates[index]) }">{{ text }}</p>
      </div>
      <div class="date-slider__container">
        <div class="date-slider__line"></div>
        <div class="date-slider__progress-bar" :style="{ height: progress }"></div>
        <div class="date-slider__progress-marker" v-for="(mDate, index) in markerDates" :key="index" :style="{ top: marker(mDate) }"></div>
        <div class="date-slider__progress-circle" :style="{ top: progress }">
          <div class="date-slider__progress-circle-2"></div>
        </div>
      </div>
      <div class="date-slider__description">
        <p class="date-slider__text">
          Ціни раннього
          <br>
          бронювання
        </p>
        <p class="date-slider__text">
          Подорожчання
          <br>
          на 10%
        </p>
        <p class="date-slider__text">
          Подорожчання
          <br>
          на 15%
        </p>
        <p class="date-slider__text">
          Можливо квитки
          <br>
          вже закінчаться
        </p>
      </div>
      </div>


      <div class="desktop-date-slider__wrapper">
        <div class="desktop-date-slider__description">
        <p class="desktop-date-slider__text">
          Ціни раннього
          <br>
          бронювання
        </p>
        <p class="desktop-date-slider__text">
          Подорожчання
          <br>
          на 10%
        </p>
        <p class="desktop-date-slider__text">
          Подорожчання
          <br>
          на 15%
        </p>
        <p class="desktop-date-slider__text">
          Можливо квитки
          <br>
          вже закінчаться
        </p>
      </div>
      <div class="desktop-date-slider__container">
        <div class="desktop-date-slider__line"></div>
        <div class="desktop-date-slider__progress-bar" :style="{ width: progress }"></div>
        <div class="desktop-date-slider__progress-marker" v-for="(mDate, index) in markerDates" :key="index" :style="{ left: marker(mDate) }"></div>
        <div class="desktop-date-slider__progress-circle" :style="{ left: progress }">
          <div class="desktop-date-slider__progress-circle-2"></div>
        </div>
      </div>
      <div class="desktop-date-slider__dates">
        <p class="desktop-date-slider__dates-text" v-for="(text, index) in dateText" :key="index" :style="{ left: marker(markerDates[index]) }">{{ text }}</p>
      </div>
      
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.date-slider {
  background-color: $whiteBackgroundColor;
  padding: 24px 16px;
  
  &__title {
    color: $blackContentColor;
    text-align: center;
    font-family: 'UkraineHead', sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    margin-bottom: 40px;
  }

  &__content {
    margin: 0 auto;
    max-width: 1078px;
    display: flex;
    flex-direction: column;
  }

  &__wrapper {
    justify-content: center;
    display: flex;
    
    @include onDesktop {
      display: none;
    }
  }

  &__container{
    display: flex;
    justify-content: center;
    position: relative;
    margin-right: 15px;
    
  }

  &__dates {
    width: 128px;
    position: relative;
    margin-right: 15px;
    &-text {
      transform: translateY(-50%);
      position: absolute;
      right: 0;
      color: $blackContentColor;
      font-variant-numeric: lining-nums proportional-nums;
      font-family: 'Raleway';
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: 130%;
          }
  }

  &__progress-bar {
    position: absolute;
    width: 6px;
    height: 0px;
    background-color: $blackContentColor;
    transition: width 0.3s ease;
  }

  &__progress-marker {
    position: absolute;
    background-color: black;
    height: 3px;
    width: 17px;
    
  }

  &__progress-circle{
    position: absolute;
    height: 33px;
    width: 33px;
    background-color: yellow;
    border-radius: 50%;
    border: 3px solid black;

    &-2{
      height: 13px;
      width: 13px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      background-color: black;
    }
  }

  &__line {
    width: 6px;
    height: 678px;
    background-color: $backgroundColor;
  }

  &__description{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__text{
    color: $blackContentColor;
    font-variant-numeric: lining-nums proportional-nums;
    font-family: 'Raleway';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
}

.desktop-date-slider {
  background-color: $whiteBackgroundColor;
  padding: 24px 16px;

  
  &__title {
    color: $blackContentColor;
    text-align: center;
    font-family: 'UkraineHead', sans-serif;
    font-size: 42px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    margin-bottom: 58px;
  }

  &__content {
    margin: 0 auto;
    max-width: 1078px;
    display: flex;
    flex-direction: column;

    @include onDesktop {
      display: flex;
    }
  }

  &__wrapper {
    justify-content: center;
    display: none;
    
    @include onDesktop {
      display: flex;
      flex-direction: column;
    }
  }

  &__container{
    display: flex;
    justify-content: center;
    position: relative;
    width: 100%;
    margin-bottom: 45px;
    
  }

  &__dates {
    height: 40px;
    position: relative;
    margin-right: 15px;
    &-text {
      transform: translateX(-75%);
      width: max-content;
      position: absolute;
      color: $blackContentColor;
      font-variant-numeric: lining-nums proportional-nums;
      font-family: 'Raleway';
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: 130%;
          }
  }

  &__progress-bar {
    left: 0;
    position: absolute;
    width: 0px;
    height: 6px;
    background-color: $blackContentColor;
    transition: width 0.3s ease;
    transform: translateY(-50%);
  }

  &__progress-marker {
    position: absolute;
    background-color: black;
    height: 17px;
    width: 3px;
    transform: translateY(-50%);
    
  }

  &__progress-circle{
    position: absolute;
    height: 33px;
    width: 33px;
    background-color: yellow;
    border-radius: 50%;
    border: 3px solid black;
    transform: translate(-50%, -50%);

    &-2{
      height: 13px;
      width: 13px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      background-color: black;
    }
  }

  &__line {
    width: 100%;
    height: 6px;
    background-color: $backgroundColor;
    transform: translateY(-50%);
  }

  &__description{
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
  }

  &__text{
    color: $blackContentColor;
    font-variant-numeric: lining-nums proportional-nums;
    font-family: 'Raleway';
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
}
</style>