<template>
  <div class="form-wrapper">
    <img class="hands" src="@/assets/img/hands.svg" alt="" />
    <div class="container">
      <div class="form-title">
        <img class="star" src="@/assets/img/icons/star.svg" alt="" />
        <span>товарищ поможет!</span>
        <img class="star" src="@/assets/img/icons/star.svg" alt="" />
      </div>
      <div class="form-subtitle">
        Для того чтобы отправить вопрос, заполните форму ниже
      </div>
      <form class="feedback-form">
        <div class="contacts">
          <input
            v-model="name"
            class="form-input"
            placeholder="Ваше имя"
            type="text"
            name="name"
            @input="checkIsEmpty"
          />
          <input
            v-model="phone"
            class="form-input"
            placeholder="Ваш телефон"
            type="number"
            name="phone"
            @input="checkIsEmpty"
          />
        </div>

        <textarea
          v-model="comment"
          class="form-input comment"
          placeholder="Ваш вопрос"
          type="text"
          name="comment"
          @input="checkIsEmpty"
        />
        <button
          :class="isAllDataEntered ? 'active-btn' : 'disabled-btn'"
          @click.prevent="validateForm"
        >
          Отправить
        </button>
        <div class="agreement">
          <input
            v-model="agreement"
            type="checkbox"
            name=""
            id="agreement"
            ref="agreement"
          />
          <label for="agreement"
            >Я принимаю условия
            <NuxtLink class="link" to="/policy"
              >политики&nbsp;конфиденциальности</NuxtLink
            ></label
          >
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      phone: "",
      comment: "",
      agreement: false,
    };
  },
  methods: {
    validateForm() {
      // Валидация
      const allInputs = document.querySelectorAll(".form-input");
      for (let i = 0; i < allInputs.length; i++) {
        // Проходим в цикле все инпуты, ищем пустые
        if (!allInputs[i].value) {
          if (!allInputs[i].classList.contains("input-error")) {
            allInputs[i].classList.add("input-error");
          }
        } else {
          if (
            allInputs[i].value &&
            allInputs[i].classList.contains("input-error")
          ) {
            allInputs[i].classList.remove("input-error");
          }
        }
      }

      if (this.isAllDataEntered) {
        this.name = "";
        this.phone = "";
        this.comment = "";
        this.agreement = false;
      }
    },
    checkIsEmpty(e) {
      if (e.target.value && e.target.classList.contains("input-error")) {
        e.target.classList.remove("input-error");
      }
    },
  },
  computed: {
    isAllDataEntered() {
      if (
        this.name === "" ||
        this.phone === "" ||
        this.comment === "" ||
        !this.agreement
      ) {
        return false;
      } else {
        return true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.form-wrapper {
  background-color: $sovietRed;
  background: url("@/assets/img/red-bg.svg");
  background-position: center;
  height: 900px;
  position: relative;

  @media (max-width: 1000px) {
    height: 800px;
  }
  @media (max-width: 700px) {
    height: 700px;
  }

  .hands {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-43%);
    @media (max-width: 1000px) {
      width: 500px;
    }
    @media (max-width: 700px) {
      display: none;
    }
  }
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: $lightBG;

    max-width: 1400px;
    width: 90%;
    padding: 76px 24px 60px;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
    top: -130px;

    .form-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      max-width: 800px;
      margin-bottom: 14px;

      font-weight: 700;
      font-size: 64px;
      line-height: 120%;
      color: $sovietRed;
      text-transform: uppercase;
      text-align: center;

      @include rodchenko;

      @media (max-width: 600px) {
        justify-content: center;
      }

      @media (max-width: 900px) {
        font-size: 40px;
      }
      @media (max-width: 500px) {
        font-size: 32px;
      }

      .star {
        @media (max-width: 600px) {
          display: none;
        }
      }
    }

    .form-subtitle {
      margin-bottom: 42px;

      font-weight: 400;
      font-size: 20px;
      line-height: 24px;
      color: rgba(137, 137, 137, 1);
      text-align: center;
      @include rodchenko;

      @media (max-width: 500px) {
        font-size: 18px;
        margin-bottom: 32px;
      }
    }

    .feedback-form {
      width: 100%;
      max-width: 800px;
      display: flex;
      flex-direction: column;
      justify-items: flex-start;
      align-items: center;
      .contacts {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 24px;
        width: 100%;
        margin-bottom: 24px;
        @media (max-width: 600px) {
          gap: 16px;
          margin-bottom: 16px;
        }
        @media (max-width: 500px) {
          flex-direction: column;
        }
      }
      .form-input {
        height: 58px;
        width: 100%;

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

      .agreement {
        font-family: "Open Sans";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 120%;
        color: rgba(157, 157, 157, 1);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        width: 100%;

        @media (max-width: 500px) {
          font-size: 12px;
          max-width: 250px;
        }

        label {
          margin-left: 6px;

          cursor: pointer;
        }

        .link {
          color: $sovietRed;
          text-decoration: none;
        }
      }

      input[type="checkbox"] {
        position: relative;
        cursor: pointer;
      }
      input[type="checkbox"]:before {
        content: "";
        display: block;
        position: absolute;
        width: 20px;
        height: 20px;
        top: -4px;
        left: 0;
        background-color: $lightBG;
        border: 1px solid rgba(218, 218, 218, 1);
      }
      input[type="checkbox"]:checked:before {
        content: "";
        display: block;
        position: absolute;
        width: 20px;
        height: 20px;
        top: -4px;
        left: 0;
        background-color: $sovietRed;
        border: none;
      }
      input[type="checkbox"]:checked:after {
        content: "";
        display: block;
        width: 4px;
        height: 9px;
        border: solid white;
        border-width: 0 2px 2px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
        position: absolute;
        top: 0;
        left: 7px;
      }
      .comment {
        height: 200px;
        resize: none;
        padding: 16px;
        margin-bottom: 24px;
      }
      .active-btn {
        margin-bottom: 22px;
        @include activeButton;
      }
      .disabled-btn {
        margin-bottom: 22px;
        @include disabledButton;
      }
    }
  }
}

.input-error {
  border: 1px solid $sovietRed !important;
}
</style>
