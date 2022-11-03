<template>
  <header class="header">
    <div class="container">
      <div class="desktop-header">
        <img
          class="logo"
          @click="scrollToAbout"
          src="@/assets/img/serp-logo.svg"
          alt="logo"
        />
        <ul class="menu">
          <li @click="scrollToAbout">О сервисе</li>
          <li @click="scrollToFeatures">Возможности</li>
          <li @click="scrollToForWhom">Для кого</li>
          <li @click="scrollToForm">Обратная связь</li>
        </ul>
        <div class="phone">
          <img src="@/assets/img/icons/telephone.svg" alt="" />
          <a href="tel:+79999999999">+ 7 (999) 999-99-99</a>
        </div>
      </div>
    </div>
    <div class="mobile-header">
      <div class="container">
        <img class="logo" src="@/assets/img/serp-logo.svg" alt="logo" />
        <img
          @click="openFullscreenMenu"
          class="burger"
          src="@/assets/img/icons/burger.svg"
          alt="logo"
        />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: ["toggleMenu"],
  methods: {
    openFullscreenMenu() {
      this.$emit("toggleMenu");
    },
    scrollToAbout() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    scrollToFeatures() {
      document.querySelector(".features-slider").scrollIntoView({
        behavior: "smooth",
      });
    },

    scrollToForWhom() {
      document.querySelector(".for-whom").scrollIntoView({
        behavior: "smooth",
      });
    },
    scrollToForm() {
      let form = document.querySelector(".form-title");
      function offset(el) {
        var rect = el.getBoundingClientRect(),
          scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return rect.top + scrollTop;
      }
      let verticalPositionOfElement = offset(form);
      window.scrollTo(0, verticalPositionOfElement - 200);
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  z-index: 100;
  top: 0;
  width: 100%;

  background-color: $lightBG;

  @include rodchenko;

  .container {
    width: 100%;
    max-width: 1430px;
    padding: 0 15px;
    margin: 0 auto;
  }

  .desktop-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 100px;
    border-bottom: 1px solid rgba(218, 218, 218, 1);

    @media (max-width: 1000px) {
      display: none;
    }

    .logo {
      cursor: pointer;
    }

    .menu {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 70px;
      color: rgba(64, 64, 64, 1);
      text-transform: uppercase;
      font-weight: 400;
      font-size: 18px;

      @media (max-width: 1200px) {
        gap: 50px;
      }
      li {
        cursor: pointer;
        transition: 0.2 ease-in-out;
        &:hover {
          color: $sovietRed;
        }
      }
    }

    .phone {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 14px;
      color: $sovietRed;
      font-size: 24px;
      font-weight: 700;
      a {
        text-decoration: none;
        color: $sovietRed;
      }
    }
  }

  .mobile-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 70px;

    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.06);

    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .logo {
        height: 32px;
        background-color: $lightBG;
      }
    }

    @media (min-width: 1000px) {
      display: none;
    }
  }
}
</style>
