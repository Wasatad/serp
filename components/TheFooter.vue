<template>
  <div class="footer">
    <div class="container">
      <img class="footer-logo" src="@/assets/img/serp-logo-white.svg" alt="" />
      <div class="footer-info">
        Copyright 2022 - SERP&МОЛОТ |&nbsp;Все&nbsp;права&nbsp;защищены
      </div>
      <img
        @click="scrollToTop"
        class="up-btn"
        src="@/assets/img/icons/arrow-up.svg"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>

<style lang="scss" scoped>
.footer {
  background-color: black;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .container {
    max-width: 1430px;
    padding: 0 15px;
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
    position: relative;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .footer-logo {
      @media (max-width: 700px) {
        width: 100px;
      }
    }

    .footer-info {
      font-family: "Open Sans";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      color: rgba(157, 157, 157, 1);
      text-align: right;

      @media (max-width: 700px) {
        max-width: 300px;
      }
      @media (max-width: 400px) {
        font-size: 12px;
      }
    }

    .up-btn {
      cursor: pointer;
      @media (max-width: 700px) {
        display: none;
      }
    }
  }
}
</style>
