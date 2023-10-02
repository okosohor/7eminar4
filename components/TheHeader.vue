
<template>
  <header class="header">
    <div class="header__background">
      <div class="header__content">
      <h1 class="header__title">Вища Бухгалтерська Online-Академія</h1>
      <h2 class="header__secondary-title">
        Підвищення кваліфікації
        та профперепідготовка для бухгалтерів
      </h2>
      <div class="header__button">
        <TheButton :text="'Обрати навчання >>'"/>
      </div>
      <div class="header__slider">
        <TheSwiperCarousel/>
      </div>
      <h3 class="header__subtitle">
        Разом дешевше! Купуйте передплату на Вищу Бухгалтерську Online-Академію 
        <span class="header__subtitle header__subtitle--is-blue" >
          8 професій за ціною 2
        </span>
      </h3>
    </div>
    </div>
  </header>
</template>
<style scoped lang="scss">
.header {
  background-color: $backgroundColor;
  padding: 40px 0 72px;

  &__background {
    background-color: $whiteBackgroundColor;
  }

  &__content {
    margin: 0 auto;
    max-width: 1078px;
  }

  &__title {
    text-align: center;
    font-variant-numeric: lining-nums proportional-nums;
    font-family: 'Raleway';
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 25px;
    margin-bottom: 22px;

    @include onDesktop {
      font-size: 17px;
      margin-bottom: 21px;
    }
  }

  &__secondary-title {
    text-align: center;
    font-family: 'UkraineHead', sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    margin-bottom: 21px;

    @include onDesktop {
      font-size: 42px;
    }
  }

  &__button {
    display: flex;
    justify-content: center;
  }

  &__slider {
    
  }

  &__subtitle {
    // text-align: center;
    // font-family: 'UkraineHead', sans-serif;
    // font-size: 16px;
    // font-style: normal;
    // font-weight: 700;
    // line-height: 150%; 
    // padding-bottom: 24px;

    // @include onDesktop {
    //   font-size: 23px;
    //   padding-bottom: 48px;
    //   max-width: 889px;
    //   margin-left: auto;
    //   margin-right: auto;
    // }

    padding-bottom: 24px;

    @include subtitle;

    @include onDesktop {
      padding-bottom: 48px;
      max-width: 889px;
    }

    &--is-blue {
      color: $bluePrimaryColor;
    }
  }
}
</style>