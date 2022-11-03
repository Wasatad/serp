<template>
  <div class="container">
    <div class="content">
      <h1 class="hero-title">
        Serp <span class="red-text">и&nbsp;Молот</span>
      </h1>
      <div class="hero-description">
        <p>Надежный рабочий инструмент для интернет-маркетологов.</p>
        <p>
          С&nbsp;помощью нашего сервиса пятилетка всегда будет сдаваться
          за&nbsp;3 года!
        </p>
      </div>
      <div class="features">
        <div class="feature">
          <img src="@/assets/img/icons/checkmark.svg" alt="" />
          <span>Поиск новой семантики</span>
        </div>
        <div class="feature">
          <img src="@/assets/img/icons/checkmark.svg" alt="" />
          <span>Отслеживание видимости</span>
        </div>
        <div class="feature">
          <img src="@/assets/img/icons/checkmark.svg" alt="" />
          <span>Другие полезные инструменты</span>
        </div>
        <div class="feature">
          <img src="@/assets/img/icons/checkmark.svg" alt="" />
          <span>Технический аудит сайта</span>
        </div>
        <div class="feature">
          <img src="@/assets/img/icons/checkmark.svg" alt="" />
          <span>Отслеживание упоминаний бренда</span>
        </div>
      </div>
      <div class="input-container">
        <input
          @input="toggleBtnState"
          ref="searchInput"
          class="search-input"
          placeholder="Введите запрос"
          type="text"
        />
        <div class="button-container">
          <button
            @click="sendRequest"
            :class="{
              'disabled-btn': isInputEmpty,
              'active-btn': !isInputEmpty,
            }"
          >
            Поиск
          </button>
          <div class="free-label">
            <span>Бесплатно!</span>
            <img
              class="paper-corner"
              src="@/assets/img/icons/paper-corner.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <img class="hero-img" src="@/assets/img/hero-img.svg" alt="serp-molot" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isInputEmpty: true,
    };
  },
  methods: {
    toggleBtnState(e) {
      if (this.$refs.searchInput.classList.contains("input-error")) {
        this.$refs.searchInput.classList.remove("input-error");
      }
      if (e.target.value) {
        this.isInputEmpty = false;
      } else {
        this.isInputEmpty = true;
      }
    },
    sendRequest() {
      if (this.isInputEmpty) {
        this.$refs.searchInput.classList.add("input-error");
      } else {
        console.log("Перенаправляем в личный кабинет");
        this.$refs.searchInput.value = "";
        this.isInputEmpty = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  max-width: 1430px;
  padding: 0 15px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;

  .content {
    margin-top: 160px;
    margin-bottom: 160px;

    @media (max-width: 1200px) {
      margin-top: 150px;
      margin-bottom: 120px;
    }
    @media (max-width: 1000px) {
      margin-top: 110px;
      margin-bottom: 110px;
    }
    @media (max-width: 600px) {
      margin-top: 110px;
      margin-bottom: 90px;
    }

    .hero-title {
      margin-bottom: 20px;
      .red-text {
        color: $sovietRed;
      }
    }
    .hero-description {
      max-width: 780px;
      padding-left: 26px;
      border-left: 2px solid $sovietRed;
      margin-bottom: 50px;

      font-size: 30px;
      font-weight: 400;
      line-height: 129%;
      color: rgba(32, 32, 32, 1);

      @include rodchenko;

      @media (max-width: 1200px) {
        max-width: none;

        font-size: 28px;
      }

      @media (max-width: 900px) {
        max-width: none;

        font-size: 22px;
      }

      @media (max-width: 600px) {
        margin-bottom: 30px;
      }

      p {
        margin-bottom: 18px;
      }
    }

    .features {
      font-family: "Open Sans";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;

      padding-left: 30px;
      margin-bottom: 30px;

      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      flex-wrap: wrap;
      max-height: 150px;
      max-width: 700px;

      @media (max-width: 800px) {
        flex-wrap: nowrap;
        max-height: none;
        max-width: none;
      }
      .feature {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 12px;

        margin-bottom: 18px;
      }
    }
    .input-container {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 15px;
      position: relative;

      @media (max-width: 500px) {
        flex-direction: column;
      }
      .search-input {
        height: 58px;
        width: 100%;
        max-width: 390px;
        border: 1px solid rgba(218, 218, 218, 1);
        border-radius: 0;

        font-family: "Open Sans";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        padding-left: 18px;
        &::placeholder {
          color: rgba(157, 157, 157, 1);
        }
      }
      .button-container {
        position: relative;
        .free-label {
          position: absolute;
          height: 32px;
          background-color: $yellowPaper;
          width: 105px;

          display: flex;
          justify-content: center;
          align-items: center;

          color: rgba(137, 0, 0, 1);
          font-weight: 400;
          font-size: 15px;
          @include rodchenko;

          left: 50%;
          bottom: 0;
          transform: translate(-50%, 93%);
          z-index: -1;
          span {
            margin-top: -5px;
          }
          .paper-corner {
            position: absolute;
            right: 0;
            bottom: 0;
          }
        }
      }
      .active-btn {
        @include activeButton;
      }
      .disabled-btn {
        @include disabledButton;
      }
    }
  }
  .hero-img {
    position: absolute;
    right: 0;
    bottom: -60px;

    @media (max-width: 1300px) {
      display: none;
    }
  }
}

.input-error {
  border: 1px solid $sovietRed !important;
}
</style>
