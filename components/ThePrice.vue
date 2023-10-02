<script setup>
const finalDate = new Date('2023-10-03 00:00:00'); 
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);

function updateTimer() {
  const currentDate = new Date();
  const timeDifference = finalDate - currentDate;

  if (timeDifference > 0) {
    hours.value = Math.floor(timeDifference / 3600000);
    minutes.value = Math.floor((timeDifference % 3600000) / 60000);
    seconds.value = Math.floor((timeDifference % 60000) / 1000);
  } else {
    hours.value = '00';
    minutes.value = '00';
    seconds.value = '00';
  }
}

function formatNumber(number) {
  return number < 10 ? `0${number}` : number.toString();
}

const formattedHours = computed(() => formatNumber(hours.value));
const formattedMinutes = computed(() => formatNumber(minutes.value));
const formattedSeconds = computed(() => formatNumber(seconds.value));

onMounted(() => {
  updateTimer();
  setInterval(updateTimer, 1000);
});
</script>
<template>
  <div class="price">
   <div class="price__content">
    <h3 class="price__title">
      ПЕРЕДПЛАТА НА
      <br>Вищу Бухгалтерську 
      <br>Онлайн-Академію
    </h3>
    <h2 class="price__title-timer">
      Оберіть свій тарифний пакет:
    </h2>
    <div class="price__timer">
      <p class="price__timer-number">{{ formattedHours }} : {{ formattedMinutes }} : <span class="price__timer-number--blue">{{ formattedSeconds }}</span></p>
      <div class="price__timer-text-container">
        <p class="price__timer-text">год</p>
        <p class="price__timer-text">хв</p>
        <p class="price__timer-text price__timer-text--blue">сек</p>
      </div>
    </div>
      <div class="price__block">
        <div class="price__block-head">
          <img class="price__block-head-img" src="../assets/images/arrow.svg" alt="arrow">
          <p class="price__block-head-title">ХІТ ПРОДАЖУ</p>
          <img class="price__block-head-img" src="../assets/images/arrow.svg" alt="arrow">
        </div>
        <div class="price__block-content">
          <div class="price__block-name">
            <h3 class="price__block-name-text">СУПЕРПРОФЕСІОНАЛ</h3>
            <div class="price__block-name-discount">
              <p class="price__block-name-discount-text">-75%</p>
            </div>
          </div>
            <p class="price__block-about">8 ПРОФЕСІЙНИХ КУРСІВ ЗА ЦІНОЮ 2</p>
            <p class="price__block-old-price">1079 грн/міс. </p>
            <p class="price__block-new-price">679 грн/міс. </p>
          <div class="price__block-button">
            <TheButton text="Оплатити карткою" />
          </div>
          <p class="price__block-additionary">Оплатити частинами</p>
          <div class="price__block-description">
            <div class="price__block-description-section">
              <img src="../assets/images/checked.svg" alt="checked" class="price__block-description-img">
              <p class="price__block-description-text">
                Поглиблені професійні 
                <br>курси підвищення кваліфікації 
                <br><span class="price__block-description-text--blue">(8 курсів/рік)</span>
              </p>
            </div>
            <div class="price__block-description-section">
              <img src="../assets/images/checked.svg" alt="checked" class="price__block-description-img">
              <p class="price__block-description-text">
                <span class="price__block-description-new">new</span>
                Практичні курси автоматизації (робота в BAS, Medoc, Excel, ЕК)
              </p>
            </div>
            <div class="price__block-description-section">
              <img src="../assets/images/checked.svg" alt="checked" class="price__block-description-img">
              <p class="price__block-description-text">
                <span class="price__block-description-new">new</span>
                Закриті клубні лекції з експертами <span class="price__block-description-text--blue">(1 р./ міс.)</span>
              </p>
            </div>
            <div class="price__block-description-section">
              <img src="../assets/images/checked.svg" alt="checked" class="price__block-description-img">
              <p class="price__block-description-text">
                Майстер-класи зі змін у законодавстві  <span class="price__block-description-text--blue">(4+ р./міс.)</span>
              </p>
            </div>
            <div class="price__block-description-section">
              <img src="../assets/images/checked.svg" alt="checked" class="price__block-description-img">
              <p class="price__block-description-text">
                Безлімітні відповіді на запитання 
                <br>під час онлайн-навчання
              </p>
            </div>
            <div class="price__block-description-section">
              <img src="../assets/images/checked.svg" alt="checked" class="price__block-description-img">
              <p class="price__block-description-text">
                Тестові та практичні завдання зі зворотним зв'язком 
              </p>
            </div>
            <div class="price__block-description-section">
              <img src="../assets/images/checked.svg" alt="checked" class="price__block-description-img">
              <p class="price__block-description-text">
                Роздатковий матеріал (корисні файли, брошури, презентації)
              </p>
            </div>
            <div class="price__block-description-section">
              <img src="../assets/images/checked.svg" alt="checked" class="price__block-description-img">
              <p class="price__block-description-text">
                Клуб однодумців у Viber 
                <br> та підтримка куратора 
              </p>
            </div>
            <div class="price__block-description-section">
              <img src="../assets/images/checked.svg" alt="checked" class="price__block-description-img">
              <p class="price__block-description-text">
                Сертифікати після проходження
                курсів 
              </p>
            </div>
            
            
          </div>

          <div class="price__block-price">
            <div class="price__block-price-wrapper">
              <p class="price__block-old-price price__block-old-price--end">1079 грн/міс. </p>
              <p class="price__block-new-price">679 грн/міс. </p>
            </div>
            <div class="price__block-price-discount">
              <p class="price__block-price-discount-text">
                -75%
              </p>
            </div>
          </div>

          <div class="price__block-button">
            <TheButton text="Завантажити рахунок" />
          </div>
          
        </div>
      </div>

      <div class="price__block">
        
        <div class="price__block-content">
          <div class="price__block-name">
            <h3 class="price__block-name-text">ПРЕМІУМ</h3>
            <div class="price__block-name-discount">
              <p class="price__block-name-discount-text">-75%</p>
            </div>
          </div>
            <p class="price__block-about">
              8 ПРОФЕСІЙНИХ КУРСІВ ЗА ЦІНОЮ 2 +
              <br>БУХГАЛТЕРСЬКА ВІДЕОПЛАТФОРМА №1</p>
            <p class="price__block-old-price">1079 грн/міс. </p>
            <p class="price__block-new-price">679 грн/міс. </p>
          <div class="price__block-button">
            <TheButton text="Оплатити карткою" />
          </div>
          <p class="price__block-additionary">Оплатити частинами</p>
          <div class="price__block-description">
            <div class="price__block-description-section">
              <img src="../assets/images/checked.svg" alt="checked" class="price__block-description-img">
              <p class="price__block-description-text">
                Поглиблені професійні 
                <br>курси підвищення кваліфікації 
                <br><span class="price__block-description-text--blue">(8 курсів/рік)</span>
              </p>
            </div>
            <div class="price__block-description-section">
              <img src="../assets/images/checked.svg" alt="checked" class="price__block-description-img">
              <p class="price__block-description-text">
                <span class="price__block-description-new">new</span>
                Практичні курси автоматизації (робота в BAS, Medoc, Excel, ЕК)
              </p>
            </div>
            <div class="price__block-description-section">
              <img src="../assets/images/checked.svg" alt="checked" class="price__block-description-img">
              <p class="price__block-description-text">
                <span class="price__block-description-new">new</span>
                Закриті клубні лекції з експертами <span class="price__block-description-text--blue">(1 р./ міс.)</span>
              </p>
            </div>
            <div class="price__block-description-section">
              <img src="../assets/images/checked.svg" alt="checked" class="price__block-description-img">
              <p class="price__block-description-text">
                Майстер-класи зі змін у законодавстві  <span class="price__block-description-text--blue">(4+ р./міс.)</span>
              </p>
            </div>
            <div class="price__block-description-section">
              <img src="../assets/images/checked.svg" alt="checked" class="price__block-description-img">
              <p class="price__block-description-text">
                Безлімітні відповіді на запитання 
                <br>під час онлайн-навчання
              </p>
            </div>
            <div class="price__block-description-section">
              <img src="../assets/images/checked.svg" alt="checked" class="price__block-description-img">
              <p class="price__block-description-text">
                Тестові та практичні завдання зі зворотним зв'язком 
              </p>
            </div>
            <div class="price__block-description-section">
              <img src="../assets/images/checked.svg" alt="checked" class="price__block-description-img">
              <p class="price__block-description-text">
                Роздатковий матеріал (корисні файли, брошури, презентації)
              </p>
            </div>
            <div class="price__block-description-section">
              <img src="../assets/images/checked.svg" alt="checked" class="price__block-description-img">
              <p class="price__block-description-text">
                Клуб однодумців у Viber 
                <br> та підтримка куратора 
              </p>
            </div>
            <div class="price__block-description-section">
              <img src="../assets/images/checked.svg" alt="checked" class="price__block-description-img">
              <p class="price__block-description-text">
                Сертифікати після проходження
                курсів 
              </p>
            </div>
            <div class="price__block-description-section">
              <img src="../assets/images/checked.svg" alt="checked" class="price__block-description-img">
              <p class="price__block-description-text">
                Доступ до
                <span class="price__block-description-text--bold-blue">
                  Бухгалтерської <br> Відеоплатформи №1:
                </span>
              </p>
            </div>
            <div class="price__block-description-section">
              <img src="../assets/images/checked.svg" alt="checked" class="price__block-description-img">
              <p class="price__block-description-text">
                Бланки та зразки документів  
                <br>
                <span class="price__block-description-text--blue">
                  (2000+ вже та 30+ щомісяця)
                </span>
              </p>
            </div>
            <div class="price__block-description-section">
              <img src="../assets/images/checked.svg" alt="checked" class="price__block-description-img">
              <p class="price__block-description-text">
                Безлімітні швидкі консультації від 
                <br>експертів (сервіс ОК)
              </p>
            </div>
            <div class="price__block-description-section">
              <img src="../assets/images/checked.svg" alt="checked" class="price__block-description-img">
              <p class="price__block-description-text">
                Бланки та зразки документів  
                <br>
                <span class="price__block-description-text--blue">
                  (2000+ вже та 30+ щомісяця)
                </span>
              </p>
            </div>
            <div class="price__block-description-section">
              <img src="../assets/images/checked.svg" alt="checked" class="price__block-description-img">
              <p class="price__block-description-text">
                Калькулятори
              </p>
            </div>
            <div class="price__block-description-section">
              <img src="../assets/images/checked.svg" alt="checked" class="price__block-description-img">
              <p class="price__block-description-text">
                Довідники
              </p>
            </div>
            
            
          </div>

          <div class="price__block-price">
            <div class="price__block-price-wrapper">
              <p class="price__block-old-price price__block-old-price--end">1079 грн/міс. </p>
              <p class="price__block-new-price">679 грн/міс. </p>
            </div>
            <div class="price__block-price-discount">
              <p class="price__block-price-discount-text">
                -75%
              </p>
            </div>
          </div>

          <div class="price__block-button">
            <TheButton text="Завантажити рахунок" />
          </div>
          
        </div>
      </div>

      <p class="price__description">
        <br>Оплачуйте пакети <span class="price__description--bold">частинами без комісії!</span>
        <br>Натискайте на кнопку <span class="price__description--bold">Оплатити карткою </span>
        <br>та оформлюйте розстрочку
        <br>через PrivatBank або Monobank
      </p>
    </div>
   </div>

   <div class="desktop-price">
    <div class="desktop-price__content">
      <h3 class="desktop-price__title">
        ПЕРЕДПЛАТА НА Вищу Бухгалтерську 
      <br>Онлайн-Академію
      </h3>
      <h2 class="desktop-price__title-timer">
        Оберіть свій тарифний пакет:
      </h2>
      <div class="desktop-price__header-block">
        <div class="desktop-price__timer-wrapper">
          <div class="desktop-price__timer">
            <p class="desktop-price__timer-number">{{ formattedHours }} : {{ formattedMinutes }} : <span class="desktop-price__timer-number--blue">{{ formattedSeconds }}</span></p>
            <div class="desktop-price__timer-text-container">
              <p class="desktop-price__timer-text">год</p>
              <p class="desktop-price__timer-text">хв</p>
              <p class="desktop-price__timer-text price__timer-text--blue">сек</p>
            </div>
          </div>
          <p class="desktop-price__timer-about-text">
            (для діючих передплатників <br> додаткова знижка 10%)
          </p>
          
        </div>

        <div class="desktop-price__about-wrapper">
          <div class="desktop-price__about">
            <div class="desktop-price__block-head">
              <img class="desktop-price__block-head-img" src="../assets/images/arrow.svg" alt="arrow">
              <p class="desktop-price__block-head-title">ХІТ ПРОДАЖУ</p>
              <img class="desktop-price__block-head-img" src="../assets/images/arrow.svg" alt="arrow">
            </div>
            <div class="desktop-price__block-name">
              <h3 class="desktop-price__block-name-text">СУПЕРПРОФЕСІОНАЛ</h3>
              <div class="desktop-price__block-name-discount">
                <p class="desktop-price__block-name-discount-text">-75%</p>
              </div>
            </div>
              <p class="desktop-price__block-about">8 ПРОФЕСІЙНИХ КУРСІВ ЗА ЦІНОЮ 2</p>
              <p class="desktop-price__block-old-price">1079 грн/міс. </p>
              <p class="desktop-price__block-new-price">679 грн/міс. </p>
            <div class="desktop-price__block-button">
              <TheButton text="Оплатити карткою" />
            </div>
            <p class="desktop-price__block-additionary">Оплатити частинами</p>
          </div>

          <div class="desktop-price__about desktop-price__about--blue">
            <div class="desktop-price__block-name">
              <h3 class="desktop-price__block-name-text">СУПЕРПРОФЕСІОНАЛ</h3>
              <div class="desktop-price__block-name-discount">
                <p class="desktop-price__block-name-discount-text">-75%</p>
              </div>
            </div>
              <p class="desktop-price__block-about">8 ПРОФЕСІЙНИХ КУРСІВ ЗА ЦІНОЮ 2</p>
              <p class="desktop-price__block-old-price">1079 грн/міс. </p>
              <p class="desktop-price__block-new-price">679 грн/міс. </p>
            <div class="desktop-price__block-button">
              <TheButton text="Оплатити карткою" />
            </div>
            <p class="price__block-additionary">Оплатити частинами</p>
          </div>
        </div>
      </div>
      <div class="desktop-price__block-description">
            <div class="desktop-price__block-description-section">
              <p class="desktop-price__block-description-text">
                Поглиблені професійні курси підвищення
                <br> кваліфікації 
                <span class="desktop-price__block-description-text--blue">(8 курсів/рік)</span>
              </p>
              <div class="desktop-price__block-description-img-wrapper">
                <div class="desktop-price__block-description-img-container">
                <img src="../assets/images/checked.svg" alt="checked" class="desktop-price__block-description-img">
              </div>
              <div class="desktop-price__block-description-img-container desktop-price__block-description-img-container--blue">
                <img src="../assets/images/checked.svg" alt="checked" class="desktop-price__block-description-img desktop-price__block-description-img-blue">
              </div>
              </div>
            </div>
            <div class="desktop-price__block-description-section">
              <p class="desktop-price__block-description-text">
                <span class="desktop-price__block-description-new">new</span>
                Практичні курси автоматизації 
                <br>(робота в BAS, Medoc, Excel, ЕК)
              </p>
              <div class="desktop-price__block-description-img-wrapper">
                <div class="desktop-price__block-description-img-container">
                <img src="../assets/images/checked.svg" alt="checked" class="desktop-price__block-description-img">
              </div>
              <div class="desktop-price__block-description-img-container desktop-price__block-description-img-container--blue">
                <img src="../assets/images/checked.svg" alt="checked" class="desktop-price__block-description-img desktop-price__block-description-img-blue">
              </div>
              </div>
            </div>
            <div class="desktop-price__block-description-section">
              <p class="desktop-price__block-description-text">
                <span class="price__block-description-new">new</span>
                Закриті клубні лекції з експертами 
                <br><span class="price__block-description-text--blue">(1 р./ міс.)</span>
              </p>
              <div class="desktop-price__block-description-img-wrapper">
                <div class="desktop-price__block-description-img-container">
                <img src="../assets/images/checked.svg" alt="checked" class="desktop-price__block-description-img">
              </div>
              <div class="desktop-price__block-description-img-container desktop-price__block-description-img-container--blue">
                <img src="../assets/images/checked.svg" alt="checked" class="desktop-price__block-description-img desktop-price__block-description-img-blue">
              </div>
              </div>
            </div>
            <div class="desktop-price__block-description-section">
              <p class="desktop-price__block-description-text">
                Майстер-класи зі змін у законодавстві  
                <br><span class="desktop-price__block-description-text--blue">(4+ р./міс.)</span>
              </p>
              <div class="desktop-price__block-description-img-wrapper">
                <div class="desktop-price__block-description-img-container">
                <img src="../assets/images/checked.svg" alt="checked" class="desktop-price__block-description-img">
              </div>
              <div class="desktop-price__block-description-img-container desktop-price__block-description-img-container--blue">
                <img src="../assets/images/checked.svg" alt="checked" class="desktop-price__block-description-img desktop-price__block-description-img-blue">
              </div>
              </div>
            </div>
            <div class="desktop-price__block-description-section">
              <p class="desktop-price__block-description-text">
                Безлімітні відповіді на запитання 
                <br>онлайн-навчання
              </p>
              <div class="desktop-price__block-description-img-wrapper">
                <div class="desktop-price__block-description-img-container">
                <img src="../assets/images/checked.svg" alt="checked" class="desktop-price__block-description-img">
              </div>
              <div class="desktop-price__block-description-img-container desktop-price__block-description-img-container--blue">
                <img src="../assets/images/checked.svg" alt="checked" class="desktop-price__block-description-img desktop-price__block-description-img-blue">
              </div>
              </div>
            </div>
            <div class="desktop-price__block-description-section">
              <p class="desktop-price__block-description-text">
                Тестові та практичні завдання зі зворотним
                <br>зв'язком 
              </p>
              <div class="desktop-price__block-description-img-wrapper">
                <div class="desktop-price__block-description-img-container">
                <img src="../assets/images/checked.svg" alt="checked" class="desktop-price__block-description-img">
              </div>
              <div class="desktop-price__block-description-img-container desktop-price__block-description-img-container--blue">
                <img src="../assets/images/checked.svg" alt="checked" class="desktop-price__block-description-img desktop-price__block-description-img-blue">
              </div>
              </div>
            </div>
            <div class="desktop-price__block-description-section">
              <p class="desktop-price__block-description-text">
                Роздатковий матеріал (корисні файли, 
                <br>брошури, презентації)
              </p>
              <div class="desktop-price__block-description-img-wrapper">
                <div class="desktop-price__block-description-img-container">
                <img src="../assets/images/checked.svg" alt="checked" class="desktop-price__block-description-img">
              </div>
              <div class="desktop-price__block-description-img-container desktop-price__block-description-img-container--blue">
                <img src="../assets/images/checked.svg" alt="checked" class="desktop-price__block-description-img desktop-price__block-description-img-blue">
              </div>
              </div>
            </div>
            <div class="desktop-price__block-description-section">
              <p class="desktop-price__block-description-text">
                Клуб однодумців у Viber та 
                <br>підтримка куратора 
              </p>
              <div class="desktop-price__block-description-img-wrapper">
                <div class="desktop-price__block-description-img-container">
                <img src="../assets/images/checked.svg" alt="checked" class="desktop-price__block-description-img">
              </div>
              <div class="desktop-price__block-description-img-container desktop-price__block-description-img-container--blue">
                <img src="../assets/images/checked.svg" alt="checked" class="desktop-price__block-description-img desktop-price__block-description-img-blue">
              </div>
              </div>
            </div>
            <div class="desktop-price__block-description-section">
              <p class="desktop-price__block-description-text">
                Сертифікати після проходження
                <br>курсів 
              </p>
              <div class="desktop-price__block-description-img-wrapper">
                <div class="desktop-price__block-description-img-container">
                <img src="../assets/images/checked.svg" alt="checked" class="desktop-price__block-description-img">
              </div>
              <div class="desktop-price__block-description-img-container desktop-price__block-description-img-container--blue">
                <img src="../assets/images/checked.svg" alt="checked" class="desktop-price__block-description-img desktop-price__block-description-img-blue">
              </div>
              </div>
            </div>
           

            <div class="desktop-price__block-description-section">
              <p class="desktop-price__block-description-text">
                Доступ до
                <br><span class="desktop-price__block-description-text--bold-blue">
                      Бухгалтерської Відеоплатформи №1:
                    </span>
              </p>
              <div class="desktop-price__block-description-img-wrapper">
                <div class="desktop-price__block-description-img-container">
                <img src="../assets/images/checked.svg" alt="checked" class="desktop-price__block-description-img">
              </div>
              <div class="desktop-price__block-description-img-container desktop-price__block-description-img-container--blue">
                <img src="../assets/images/checked.svg" alt="checked" class="desktop-price__block-description-img desktop-price__block-description-img-blue">
              </div>
              </div>
            </div>
            <div class="desktop-price__block-description-section">
              <p class="desktop-price__block-description-text">
                Відеокурси і вебінари
                <br>
                <span class="desktop-price__block-description-text--blue">
                  (1100+ вже та 20+ щомісяця)
                </span>
              </p>
              <div class="desktop-price__block-description-img-wrapper">
                <div class="desktop-price__block-description-img-container">
                <img src="../assets/images/checked.svg" alt="checked" class="desktop-price__block-description-img">
              </div>
              <div class="desktop-price__block-description-img-container desktop-price__block-description-img-container--blue">
                <img src="../assets/images/checked.svg" alt="checked" class="desktop-price__block-description-img desktop-price__block-description-img-blue">
              </div>
              </div>
            </div>
            <div class="desktop-price__block-description-section">
              <p class="desktop-price__block-description-text">
                Безлімітні швидкі консультації від експертів 
                <br>(сервіс ОК)
              </p>
              <div class="desktop-price__block-description-img-wrapper">
                <div class="desktop-price__block-description-img-container">
                <img src="../assets/images/checked.svg" alt="checked" class="desktop-price__block-description-img">
              </div>
              <div class="desktop-price__block-description-img-container desktop-price__block-description-img-container--blue">
                <img src="../assets/images/checked.svg" alt="checked" class="desktop-price__block-description-img desktop-price__block-description-img-blue">
              </div>
              </div>
            </div>
            <div class="desktop-price__block-description-section">
              <p class="desktop-price__block-description-text">
                Бланки та зразки документів  
                <br>
                <span class="desktop-price__block-description-text--blue">
                  (2000+ вже та 30+ щомісяця)
                </span>
              </p>
              <div class="desktop-price__block-description-img-wrapper">
                <div class="desktop-price__block-description-img-container">
                <img src="../assets/images/checked.svg" alt="checked" class="desktop-price__block-description-img">
              </div>
              <div class="desktop-price__block-description-img-container desktop-price__block-description-img-container--blue">
                <img src="../assets/images/checked.svg" alt="checked" class="desktop-price__block-description-img desktop-price__block-description-img-blue">
              </div>
              </div>
            </div>
            <div class="desktop-price__block-description-section">
              <p class="desktop-price__block-description-text">
                Консультант з пошуку та підготовки
                <br>документів 
                <span class="desktop-price__block-description-text--bold-blue">
                    (безлімітно, щодня)
                    </span>
                <br>
              </p>
              <div class="desktop-price__block-description-img-wrapper">
                <div class="desktop-price__block-description-img-container">
                <img src="../assets/images/checked.svg" alt="checked" class="desktop-price__block-description-img">
              </div>
              <div class="desktop-price__block-description-img-container desktop-price__block-description-img-container--blue">
                <img src="../assets/images/checked.svg" alt="checked" class="desktop-price__block-description-img desktop-price__block-description-img-blue">
              </div>
              </div>
            </div>
            <div class="desktop-price__block-description-section">
              <p class="desktop-price__block-description-text">
                Калькулятори
              </p>
              <div class="desktop-price__block-description-img-wrapper">
                <div class="desktop-price__block-description-img-container">
                <img src="../assets/images/checked.svg" alt="checked" class="desktop-price__block-description-img">
              </div>
              <div class="desktop-price__block-description-img-container desktop-price__block-description-img-container--blue">
                <img src="../assets/images/checked.svg" alt="checked" class="desktop-price__block-description-img desktop-price__block-description-img-blue">
              </div>
              </div>
            </div>
            <div class="desktop-price__block-description-section">
              <p class="desktop-price__block-description-text">
                Довідники
              </p>
              <div class="desktop-price__block-description-img-wrapper">
                <div class="desktop-price__block-description-img-container">
                <img src="../assets/images/checked.svg" alt="checked" class="desktop-price__block-description-img">
              </div>
              <div class="desktop-price__block-description-img-container desktop-price__block-description-img-container--blue">
                <img src="../assets/images/checked.svg" alt="checked" class="desktop-price__block-description-img desktop-price__block-description-img-blue">
              </div>
              </div>
            </div>
          </div>
          <div class="desktop-price__block-description-footer">
            <div class="desktop-price__block-description-footer-element">
              <div class="desktop-price__block-price">
                <div class="desktop-price__block-price-wrapper">
                  <p class="desktop-price__block-old-price price__block-old-price--end">1079 грн/міс. </p>
                  <p class="desktop-price__block-new-price">679 грн/міс. </p>
                </div>
                <div class="desktop-price__block-price-discount">
                  <p class="desktop-price__block-price-discount-text">
                    -75%
                  </p>
                </div>
              </div>
              <div class="desktop-price__block-button">
                <TheButton text="Завантажити рахунок" />
              </div>
            </div>
            <div 
            class="
            desktop-price__block-description-footer-element
            desktop-price__block-description-footer-element--blue
            "
            >
              <div class="desktop-price__block-price">
                <div class="desktop-price__block-price-wrapper">
                  <p class="desktop-price__block-old-price price__block-old-price--end">1079 грн/міс. </p>
                  <p class="desktop-price__block-new-price">679 грн/міс. </p>
                </div>
                <div class="desktop-price__block-price-discount">
                  <p class="desktop-price__block-price-discount-text">
                    -75%
                  </p>
                </div>
              </div>
              <div class="desktop-price__block-button">
                <TheButton text="Завантажити рахунок" />
              </div>
            </div>
          </div>
          <p class="desktop-price__description">
            Оплачуйте пакети <span class="desktop-price__description--bold">частинами без комісії!<br></span>
            Натискайте на кнопку <span class="desktop-price__description--bold">Оплатити карткою </span>
            та оформлюйте розстрочку
            <br>через PrivatBank або Monobank
          </p>

    </div>
   </div>

   
</template>
<style scoper lang="scss">
.price {
  background-color: $backgroundColor;
  padding-top: 72px;

  @include onDesktop {
    display: none;
  }

  &__content {
    padding: 0 5px 72px;
    display: flex;
    flex-direction: column;
  }

  &__title {
    text-align: center;
    font-family: 'UkraineHead', sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; 
    margin-bottom: 16px;

    &-timer{
      color: $blackContentColor;
      text-align: center;
      font-family: 'Raleway';
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: 28px;
      margin-bottom: 16px;
    }
  }

  &__timer {
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    margin-bottom: 24px;

    &-number{
      color: $bluePrimaryColor;
      font-variant-numeric: lining-nums proportional-nums;
      font-family: 'Raleway';
      font-size: 30px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
      width: 160px;

      &--blue {
        color: $blueSecondaryColor;
      }
    }

    &-text {

      &-container {
        display: flex;
        justify-content: space-between;
        width: 150px;
      }
  
      color: $bluePrimaryColor;
      font-variant-numeric: lining-nums proportional-nums;
      font-family: Raleway;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;

      &--blue {
        color: $blueSecondaryColor;
      }
    }
  }

  &__block {
    max-width: 750px;
    margin: 0 auto;
    margin-bottom: 24px;

    &-head {
      padding: 5px 74px;
      border-radius: 15px 15px 0px 0px;
      background-color: $yellowSecondaryColor;
      display: flex;
      justify-content: center;

      &-title {
        margin: 0 38px;
        color: $blackContentColor;
        text-align: center;
        font-family: 'Raleway';
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: 110%; 
      }
    }

    &-content {
      background-color: $whiteBackgroundColor;
      padding: 24px 16px;
      border-radius: 0px 0px 15px 15px;
    }

    &-name {
      display: flex;
      justify-content: center;

      &-discount {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 34px;
        height: 34px;
        border-radius: 50%;
        background-color: $bluePrimaryColor;

        &-text {
          color: $whiteBackgroundColor;
          text-align: center;
          font-variant-numeric: lining-nums proportional-nums;
          font-family: 'Inter';
          font-size: 10px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
        }
      }

      &-text {
        margin: auto 0;
        color: $blackContentColor;
        text-align: center;
        font-variant-numeric: lining-nums proportional-nums;
        font-family: 'Raleway';
        font-size: 13px;
        font-style: normal;
        font-weight: 800;
        line-height: 150%; 
        margin-right: 16px;
      }

      
    }

    &-about {
        color: $blackContentColor;
        text-align: center;
        font-variant-numeric: lining-nums proportional-nums;
        font-family: Raleway;
        font-size: 13px;
        font-style: normal;
        font-weight: 500;
        line-height: 150%;
        text-transform: lowercase;
        margin-bottom: 12px;
      }

    &-old-price {
      color: #979797;
      text-align: center;
      font-variant-numeric: lining-nums proportional-nums;
      font-family: 'Raleway';
      font-size: 13px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      text-decoration: line-through;

      &--end {
        text-align: left;
      }

    }

    &-new-price {
      color: $blackContentColor;
      text-align: center;
      font-variant-numeric: lining-nums proportional-nums;
      font-family: 'Raleway';
      font-size: 17px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      margin-bottom: 12px;
    }

    &-button {
      display: flex;
      justify-content: center;

      &--end {
        margin-bottom: 24px;
      }
    }

    &-additionary {
      color: #979797;
      font-variant-numeric: lining-nums proportional-nums;

      text-align: center;
      font-family: 'Raleway';
      font-size: 13px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      text-decoration-line: underline;

      margin-bottom: 24px;
    }

    &-description {

      &-section {
        display: flex;
        margin-bottom: 24px;
        justify-content: center;
        
      }

      &-img {
        height: 24px;
        width: 24px;
        margin-right: 8px;
      }

      &-text {
        color: $blackContentColor;
        font-variant-numeric: lining-nums proportional-nums;
        font-family: 'Raleway';
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 140%;

        margin-bottom: 8px;

        &--blue {
          color: $bluePrimaryColor;
        }

        &--bold-blue {
          color: $bluePrimaryColor;
          font-weight: 700;
        }
      }

      &-new {
        height: max-content;
        background-color: $bluePrimaryColor;
        border-radius: 3px;
        color: $backgroundColor;
        font-variant-numeric: lining-nums proportional-nums;
        font-family: 'Raleway';
        font-size: 16px;
        text-transform: uppercase;
        font-style: normal;
        font-weight: 400;
        line-height: 80%;
        padding: 0 3px;
      }
    }

    &-price {
      display: flex;
      justify-content: center;
      margin-bottom: 12px;

      &-wrapper {
        display: flex;
        flex-direction: column;
        margin-right: 30px;
      }

      &-discount {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 34px;
        height: 34px;
        border-radius: 50%;
        background-color: $bluePrimaryColor;

        &-text {
          color: $whiteBackgroundColor;
          text-align: center;
          font-variant-numeric: lining-nums proportional-nums;
          font-family: 'Inter';
          font-size: 10px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
        }
      }
    }
  }

  &__description {
    color: $blackContentColor;
    text-align: center;
    font-family: 'Raleway';
    font-size: 16px;
    font-style: normal;
    font-weight: 500;

    &--bold {
      font-weight: 700;
    }
  }
}

.desktop-price {
  display: none;

  @include onDesktop {
    display: block;
  }
  
  
  background-color: $backgroundColor;
  padding-top: 104px 0 104px;


  &__content {
    margin: 0 auto;
    max-width: 1078px;
    padding: 0 32px 0;
    display: flex;
    flex-direction: column;
  }

  &__title {
    text-align: center;
    font-family: 'UkraineHead', sans-serif;
    font-size: 42px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; 
    margin-bottom: 16px;

    &-timer{
      color: $blackContentColor;
      text-align: center;
      font-family: 'Raleway';
      font-size: 21px;
      font-style: normal;
      font-weight: 700;
      line-height: 28px;
      margin-bottom: 14px;
      margin: 0 auto;

    }
  }

  &__header-block {
    padding: 0 48px ;
    display: flex;
    justify-content: space-between;
  }

  &__about {
    padding: 17px 31px 48px;
    
    border-top-left-radius: 18px;
    border-top-right-radius: 18px;

    &-wrapper {
    display: flex;
    }

    &--blue {
      background-color: rgba(96, 175, 254, 0.05);
      padding-top: 0px;
      margin-top: 43px;
    }
  }

  &__timer {
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    margin-bottom: 24px;

    &-number{
      color: $bluePrimaryColor;
      font-variant-numeric: lining-nums proportional-nums;
      font-family: 'Raleway';
      font-size: 30px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
      width: 160px;

      &--blue {
        color: $blueSecondaryColor;
      }
    }

    &-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        transform: translateY(-48px);
      }

      &-about-text {
        color: #515154;
        text-align: center;
        font-variant-numeric: lining-nums proportional-nums;
        font-family: 'Raleway';
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        letter-spacing: -0.12px;
      }

    &-text {

      &-container {
        display: flex;
        justify-content: space-between;
        width: 150px;
      }
  
      color: $bluePrimaryColor;
      font-variant-numeric: lining-nums proportional-nums;
      font-family: Raleway;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;

      &--blue {
        color: $blueSecondaryColor;
      }
    }
  }

  &__block {
    max-width: 750px;
    margin: 0 auto;
    margin-bottom: 24px;

    &-head {
      padding: 5px 59px;
      border-radius: 15px 15px 0px 0px;
      background-color: $yellowSecondaryColor;
      display: flex;
      justify-content: center;

      &-title {
        margin: 0 13px;
        color: $blackContentColor;
        text-align: center;
        font-family: 'Raleway';
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: 110%; 
      }
    }

    &-content {
      background-color: $whiteBackgroundColor;
      padding: 24px 16px;
      border-radius: 0px 0px 15px 15px;
    }

    &-name {
      padding-top: 11px;
      display: flex;
      justify-content: center;

      &-discount {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 34px;
        height: 34px;
        border-radius: 50%;
        background-color: $bluePrimaryColor;

        &-text {
          color: $whiteBackgroundColor;
          text-align: center;
          font-variant-numeric: lining-nums proportional-nums;
          font-family: 'Inter';
          font-size: 10px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
        }
      }

      &-text {
        margin: auto 0;
        color: $blackContentColor;
        text-align: center;
        font-variant-numeric: lining-nums proportional-nums;
        font-family: 'Raleway';
        font-size: 13px;
        font-style: normal;
        font-weight: 800;
        line-height: 150%; 
        margin-right: 16px;
      }

      
    }

    &-about {
        color: $blackContentColor;
        text-align: center;
        font-variant-numeric: lining-nums proportional-nums;
        font-family: Raleway;
        font-size: 13px;
        font-style: normal;
        font-weight: 500;
        line-height: 150%;
        text-transform: lowercase;
        margin-bottom: 12px;
      }

    &-old-price {
      color: #979797;
      text-align: center;
      font-variant-numeric: lining-nums proportional-nums;
      font-family: 'Raleway';
      font-size: 13px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      text-decoration: line-through;

      &--end {
        text-align: left;
      }

    }

    &-new-price {
      color: $blackContentColor;
      text-align: center;
      font-variant-numeric: lining-nums proportional-nums;
      font-family: 'Raleway';
      font-size: 17px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      margin-bottom: 12px;
    }

    &-button {
      display: flex;
      justify-content: center;

      &--end {
        margin-bottom: 24px;
      }
    }

    &-additionary {
      color: #979797;
      font-variant-numeric: lining-nums proportional-nums;

      text-align: center;
      font-family: 'Raleway';
      font-size: 13px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      text-decoration-line: underline;

      margin-bottom: 24px;
    }

    &-description {
      padding: 0 48px;

      &-section {
        display: flex;
        
        justify-content: center;
        justify-content: space-between;
        border-bottom: 1px solid rgba(35, 35, 35, 0.10);
        
      }

      &-img {
        height: 32px;
        width: 32px;
        margin-right: 0px;

        &-wrapper {
          display: flex;
        }

        &-container{
          padding-top: 24px;
          width: 267.45px;
          display: flex;
          justify-content: center;
          align-items: center;

          &--blue {
            background-color: rgba(96, 175, 254, 0.05);
          }
        }
      }

      &-text {
        padding-top: 24px;
        color: $blackContentColor;
        font-variant-numeric: lining-nums proportional-nums;
        font-family: 'Raleway';
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 140%;

        margin-bottom: 8px;

        &--blue {
          color: $bluePrimaryColor;
        }

        &--bold-blue {
          color: $bluePrimaryColor;
          font-weight: 700;
        }
      }

      &-new {
        height: max-content;
        background-color: $bluePrimaryColor;
        border-radius: 3px;
        color: $backgroundColor;
        font-variant-numeric: lining-nums proportional-nums;
        font-family: 'Raleway';
        font-size: 16px;
        text-transform: uppercase;
        font-style: normal;
        font-weight: 400;
        line-height: 80%;
        padding: 0 3px;
      }

      &-footer {
        margin-bottom: 40px;
        display: flex;
        justify-content: flex-end;
        padding: 0px 48px;

      &-element {
        width: 267.44px;
        padding: 40px 27px;

        &--blue {
          background-color: rgba(96, 175, 254, 0.05);
          border-bottom-left-radius: 18px;
          border-bottom-right-radius: 18px;
        }
      }
      }
    }

    &-price {
      display: flex;
      justify-content: center;
      margin-bottom: 12px;

      &-wrapper {
        display: flex;
        flex-direction: column;
        margin-right: 30px;
      }

      &-discount {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 34px;
        height: 34px;
        border-radius: 50%;
        background-color: $bluePrimaryColor;

        &-text {
          color: $whiteBackgroundColor;
          text-align: center;
          font-variant-numeric: lining-nums proportional-nums;
          font-family: 'Inter';
          font-size: 10px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
        }
      }
    }
  }

  &__description {
    color: $blackContentColor;
    text-align: center;
    font-family: 'Raleway';
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    margin-bottom: 104px;

    &--bold {
      font-weight: 700;
    }
  }
}
</style>
