<template>
  <div>
    <fullscreen-menu
      @toggleMenu="toggleFullscreenMenu"
      v-if="fullscreenOpened"
    ></fullscreen-menu>
    <the-header @toggleMenu="toggleFullscreenMenu"></the-header>
    <nuxt />
    <the-footer></the-footer>
  </div>
</template>

<script>
import FullscreenMenu from "../components/FullscreenMenu.vue";
import TheFooter from "../components/TheFooter.vue";
import TheHeader from "../components/TheHeader.vue";
export default {
  components: { TheHeader, FullscreenMenu, TheFooter },
  data() {
    return {
      fullscreenOpened: false,
    };
  },
  methods: {
    toggleFullscreenMenu() {
      this.fullscreenOpened = !this.fullscreenOpened;
      if (this.fullscreenOpened) {
        if (!document.body.classList.contains("no-scroll")) {
          document.body.classList.add("no-scroll");
        }
      } else {
        if (document.body.classList.contains("no-scroll")) {
          document.body.classList.remove("no-scroll");
        }
      }
    },
  },
};
</script>

<style lang="scss">
html {
  -webkit-font-smoothing: antialiased;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  font-family: "source-sans-pro", sans-serif;
}

* {
  box-sizing: border-box;
}

h1 {
  font-weight: 600;
  font-style: normal;
  font-size: 120px;
  color: black;
  @include rodchenko;

  @media (max-width: 1200px) {
    font-size: 90px;
  }
  @media (max-width: 600px) {
    font-size: 70px;
    line-height: 100%;
  }
}

h2 {
  font-weight: 700;
  font-style: normal;
  font-size: 50px;
  color: black;

  @include rodchenko;

  @media (max-width: 600px) {
    font-size: 40px;
    line-height: 130%;
  }
}

h3 {
  font-weight: 600;
  font-style: normal;
  font-size: 32px;
  color: black;
}

//Сбрасываем CSS
ul[class],
ol[class] {
  padding: 0;
}

/* Убираем внешние отступы */
body,
h1,
h2,
h3,
h4,
p,
ul[class],
ol[class],
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}

/* Выставляем основные настройки по-умолчанию для body */
body {
  min-height: 100vh;
  background-color: $lightBG;
}

/* Удаляем стандартную стилизацию для всех ul и il, у которых есть атрибут class*/
ul[class],
ol[class] {
  list-style: none;
}

/* Элементы a, у которых нет класса, сбрасываем до дефолтных стилей */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Упрощаем работу с изображениями */
img {
  display: block;
}

/* Наследуем шрифты для инпутов и кнопок */
input,
button,
textarea,
select {
  font: inherit;
}

textarea:focus,
input:focus {
  outline: none;
}

textarea {
  border: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
}

input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

.no-scroll {
  margin: 0;
  height: 100%;
  overflow: hidden;
}
</style>
