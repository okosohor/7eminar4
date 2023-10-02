<script></script>
<template>
  <footer class="footer">
    <div class="footer__background">
      <div class="footer__content">
        <div class="footer__form">
          <TheForm />
        </div>
        <div class="footer__description">
          <h2 class="footer__description-title">З передплатою Академії ви отримаєте:</h2>
          <div class="footer__description-element-container">
            <div class="footer__description-element">
              <p class="footer__description-big-text">8+</p>
              <p class="footer__description-small-text">
                професійних
                <br class="footer__new-line">
                курсів
              </p>
            </div>
            <div class="footer__description-element">
              <p class="footer__description-big-text">12</p>
              <p class="footer__description-small-text">
                Закритих клубних
                <br>
                лекцій
              </p>
            </div>
          </div>
         <div class="footer__description-element-container">
          <div class="footer__description-element">
            <p class="footer__description-big-text">48</p>
            <p class="footer__description-small-text">
              нових
              <br class="footer__new-line">
              вебінарів
              <br>
              та тренінгів
            </p>
          </div>
          <div class="footer__description-element">
            <img src="../assets/images/infinity.svg" alt="infinity" class="footer__description-img">
            <p class="footer__description-small-text">
              Безлімітні відповіді
              <br>
              на запитання протягом
              <br>
              навчання
            </p>
          </div>
         </div>
          <h3 class="footer__description-subtitle">Тестові та практичні</h3>
          <p class="footer__description-text">завдання зі зворотним зв'язком</p>
        </div>
      </div>
    </div>
  </footer >
</template>
<style lang="scss" scoped>
.footer {
  background-color: $backgroundColor;
  padding-bottom: 56px;

  @include onDesktop {
    padding-bottom: 176px;
  }

  &__new-line {
    @include onDesktop {
      display: none;
    }
  }

  &__background {
    background-color: $whiteBackgroundColor;
    padding: 0 16px 32px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 1078px;


    @include onDesktop {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  &__form {
    margin: 0 auto;
  }

  &__description {
    margin: 0 auto;
      color: $blackContentColor;
        font-family: 'Raleway';
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        max-width: 488px;

        @include onDesktop {
          font-size: 17px;
          line-height: 100%;
        }
      &-title {
        color: $blackContentColor;
        text-align: center;
        font-family: 'UkraineHead', sans-serif;
        font-size: 23px;
        font-style: normal;
        font-weight: 700;
        line-height: 140%; 
        margin-bottom: 24px;
        text-align: left;
      }

      &-element {
        // margin-bottom: 16px;

        @include onDesktop {
        }

        &-container {
          display: flex;
          justify-content: space-between;
        }
      }

      &-big-text {
        font-family: 'UkraineHead', sans-serif;
        font-size: 43px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; 
        color: $bluePrimaryColor;

        @include onDesktop {
          font-size: 63px;
        }

      }

      &-small-text {

      }

      &-img {
        height: 58px;
        width: 58px;

        @include onDesktop {
          height: 88px;
          width: 88px;
        }
      }

      &-subtitle {
        color: $bluePrimaryColor;
        font-family: 'Raleway';
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: 150%;

        @include onDesktop {
          font-size: 39px;
          line-height: 120%;
        }
      }

      &-text {

      }
  }
}
</style>