<template>
  <div class="fullscreen-menu">
    <div class="full-header">
      <img
        @click="closeFullscreenMenu"
        src="@/assets/img/icons/close.svg"
        alt=""
      />
    </div>
    <ul class="menu">
      <li @click="scrollToAbout">О сервисе</li>
      <li @click="scrollToFeatures">Возможности</li>
      <li @click="scrollToForWhom">Для кого</li>
      <li @click="scrollToForm">Обратная связь</li>
    </ul>

    <a class="phone" href="tel:+79999999999">+ 7 (999) 999-99-99</a>
  </div>
</template>

<script>
export default {
  props: ["toggleMenu"],
  methods: {
    closeFullscreenMenu() {
      this.$emit("toggleMenu");
    },
    scrollToAbout() {
      this.closeFullscreenMenu();
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    scrollToFeatures() {
      this.closeFullscreenMenu();
      document.querySelector(".features-slider").scrollIntoView({
        behavior: "smooth",
      });
    },

    scrollToForWhom() {
      this.closeFullscreenMenu();
      document.querySelector(".for-whom").scrollIntoView({
        behavior: "smooth",
      });
    },
    scrollToForm() {
      this.closeFullscreenMenu();
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
.fullscreen-menu {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 101;

  @include rodchenko;

  .full-header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;

    padding: 0 15px;

    height: 70px;
  }

  .menu {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    gap: 60px;
    color: rgba(64, 64, 64, 1);
    text-transform: uppercase;
    font-weight: 400;
    font-size: 18px;

    margin-top: 50px;
  }

  .phone {
    color: $sovietRed;
    font-size: 24px;
    font-weight: 700;

    position: absolute;
    bottom: 10vh;

    text-decoration: none;
  }
}
</style>
