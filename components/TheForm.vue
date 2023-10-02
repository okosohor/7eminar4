<script>
export default {
  data () {
    return {
      name: '',
      phone: '',
      email: '',
      nameError: false,
      phoneError: false,
      emailError: false,
    }
  },
  methods: {
    isValidEmail (email) {
      if (email.length < 5) {
        return false
      }
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      return emailPattern.test(email);
      },

    handleSubmit (event) {
      event.preventDefault()

      if (this.name.length < 2) {
        this.nameError = true;
      } else {
        this.nameError = false;
      }

      if (this.phone.length < 10) {
        this.phoneError = true;
      }  else {
        this.phoneError = false;
      }

      if (!this.isValidEmail(this.email)) {
        this.emailError = true;
      } else {
        this.emailError = false;
      }

      const isValidForm = this.nameError === false && this.emailError === false && this.phoneError === false

      if(isValidForm) {
        const data = {
          email: this.email,
          name: this.name,
          phone: this.phone,
        }

        fetch("https://7eminar.ua/api/clients/campaign/test", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((res) => res)
          .then((res) => {
            if (res) {
              alert('Дані відправлені успішно')
            }
          })
          .catch((er) => {
            alert(er.message);
          });

          this.name = '';
          this.phone = '';
          this.email = '';
          this.nameError = false;
          this.phoneError = false;
          this.emailError = false;
      }
    },
  },
};
</script>
<template>
  <form action="" class="form" @submit="handleSubmit">
    <h3 class="form__title">Залиште заявку, і ми підберемо для вас умови зі знижкою</h3>
    <p class="form__input-title">Ваше ім'я</p>
    <input 
      type="text" 
      class="form__input" 
      :class="{'form__input--red': nameError === true}"
      placeholder="Ваше ім’я"
      v-model="name"
    >
    <p v-if="nameError" class="form__input-error">Введіть коректне ім'я</p>
    <p class="form__input-title">Номер телефону</p>
    <input 
      type="text" 
      class="form__input" 
      :class="{'form__input--red': phoneError === true}"
      placeholder="Введіть Ваш номер телефону"
      v-model="phone"
    >
    <p v-if="phoneError" class="form__input-error">Введіть коректний номер телефону</p>
    <p class="form__input-title">Ваш E-mail</p>
    <input 
      type="text" 
      class="form__input" 
      :class="{'form__input--red': emailError === true}"
      placeholder="Введіть Ваш e-mail"
      v-model="email"
      >
    <p v-if="emailError" class="form__input-error">Введіть коректний номер емейл</p>
    <div class="form__button">
      <TheButton type="submit" text="Зареєструватись"/>
    </div>
  </form>
</template>
<style lang="scss" scoped>
.form {
  padding: 0 16px;
  
  color: $blackContentColor;
  font-family: 'Raleway';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: capitalize;
  max-width: 488px;

  @include onDesktop {
    padding: 0 24px;
  }
  
  &__title {
    color: $blackContentColor;
    text-align: center;
    font-family: 'UkraineHead', sans-serif;
    font-size: 23px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; 
    margin-bottom: 24px;
    text-align: left;

  }



  &__input {
    font-family: 'Raleway';
    color: #858585;
    border: 1px solid $blackContentColor;
    background-color: $backgroundColor;
    outline: none;
    width: 100%;
    border-radius: 32px;
    margin-bottom: 16px;
    padding: 15px 24px;

    &--red {
      outline: auto;
      outline-color: red;
    }

    &:last-child {
      margin-bottom: 24px;
    }

    &-title {
    margin-bottom: 7px;
    }

    &-error {
      margin-bottom: 16px;
      color: red;
    }
  }


}
</style>