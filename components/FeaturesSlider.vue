<template>
  <div class="features-slider">
    <div class="container">
      <h2 class="features-title">
        Что такое <span>“Serp&nbsp;и&nbsp;Молот”?</span>
      </h2>

      <div class="tab-menu">
        <div @click="changeSlide(0)" class="menu-item active-item">
          Подбор семантики
        </div>

        <div @click="changeSlide(1)" class="menu-item">
          Мониторинг видимости
        </div>
        <div @click="changeSlide(2)" class="menu-item">
          Технический + SEO Аудит
        </div>
        <div @click="changeSlide(3)" class="menu-item">
          Мониторинг упоминаний сайта
        </div>
      </div>
      <div class="slider">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="image-container">
              <div class="swiper-zoom-container">
                <img src="@/assets/img/screenshots/screen-1.png" alt="" />
              </div>
            </div>

            <h3 class="interface-title">1. Подбор семантики</h3>
            <div class="interface-description">
              Находите эффективные ключи своих конкурентов за считанные минуты.
              Более 200 млн. уникальных коммерческих ключевых слов с
              подтвержденной частотностью по Wordstat. 2-уровневый парсинг SERP.
            </div>
          </div>
          <div class="swiper-slide">
            <div class="image-container">
              <div class="swiper-zoom-container">
                <img src="@/assets/img/screenshots/screen-2.png" alt="" />
              </div>
            </div>
            <h3 class="interface-title">2. Мониторинг видимости сайта</h3>
            <div class="interface-description">
              Отслеживайте ключевые фразы, домены и конкурентов в любых регионах
              и поисковых системах. История позиций, анализ изменения сниппетов,
              видимость сайта, снимки выдачи и другие функции, необходимые для
              ежедневной работы SEO.
            </div>
          </div>
          <div class="swiper-slide">
            <div class="image-container">
              <div class="swiper-zoom-container">
                <img src="@/assets/img/screenshots/screen-3.png" alt="" />
              </div>
            </div>
            <h3 class="interface-title">3. Технический + SEO аудит сайта</h3>
            <div class="interface-description">
              Многофункциональный краулер сайтов в облаке. Проверьте свой сайт
              по более чем 100 параметрам, важным для поискового продвижения.
              Поможет найти и исправить большинство ошибок на сайте.
            </div>
          </div>
          <div class="swiper-slide">
            <div class="image-container">
              <div class="swiper-zoom-container">
                <img src="@/assets/img/screenshots/screen-4.png" alt="" />
              </div>
            </div>
            <h3 class="interface-title">
              4. Мониторинг упоминаний бренда в СМИ и соц.сетях
            </h3>
            <div class="interface-description">
              Управляйте репутацией своего бренда в сети, опираясь на реальные и
              актуальные данные. Социальные сети, СМИ, форумы, отзовики - все
              под надежным присмотром. Определение и категоризация тональности
              упоминания.
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import { Swiper, Navigation, Pagination, Zoom } from "swiper";
import "swiper/swiper-bundle.min.css";

export default {
  data() {
    return {
      slider: null,
      activeSlide: 0,

      //CSS
      menuItem: "menu-item",
      activeItem: "active-item",
    };
  },
  methods: {
    changeSlide(slide) {
      this.slider.slideTo(slide);
    },
  },

  mounted() {
    Swiper.use([Navigation, Pagination, Zoom]);

    this.slider = new Swiper(".slider", {
      modules: [Navigation],
      slidesPerView: "1",
      centeredSlides: true,
      direction: "vertical",
      zoom: {
        maxRatio: 3,
        toggle: true,
        containerClass: "swiper-zoom-container",
      },
      spaceBetween: 100,
      speed: 500,
      simulateTouch: true,
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
    });
    this.slider.on("slideChange", function (e) {
      this.activeSlide = e.activeIndex;

      let tabs = document.querySelectorAll(".menu-item");
      for (let i = 0; i < tabs.length; i++) {
        if (
          tabs[i].classList.contains("active-item") &&
          i != this.activeSlide
        ) {
          tabs[i].classList.remove("active-item");
        } else if (
          !tabs[i].classList.contains("active-item") &&
          i == this.activeSlide
        ) {
          tabs[i].classList.add("active-item");
        }
      }
    });
  },
};
</script>

<style lang="scss">
.features-slider {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  .container {
    max-width: 1430px;
    width: 100%;
    padding: 0 15px;
    margin: 0 auto;
    overflow: hidden;
    position: relative;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;

    @media (max-width: 600px) {
      align-items: flex-start;
    }

    .features-title {
      margin-bottom: 46px;
      @media (max-width: 600px) {
        margin-bottom: 32px;
        text-align: left;
      }
      span {
        color: $sovietRed;
      }
    }

    .swiper-pagination {
      top: 475px;
      right: 40px;
      transform: rotate(90deg);
      display: flex;
      gap: 20px;

      @media (max-width: 1400px) {
        display: none;
      }
    }

    .swiper-pagination-bullet-active {
      background-color: $sovietRed !important;
    }

    .tab-menu {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 970px;
      width: 100%;
      margin-bottom: 56px;
      position: relative;

      font-family: rodchenko-cond, Oswald, sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 22px;
      color: rgba(164, 164, 164, 1);
      text-transform: uppercase;

      @media (max-width: 1000px) {
        font-size: 14px;
      }

      @media (max-width: 800px) {
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 24px;
      }

      @media (max-width: 600px) {
        gap: 16px;
      }

      &:after {
        content: "";
        width: 100%;
        max-width: 970px;
        border-bottom: solid 2px rgba(219, 204, 164, 1);
        position: absolute;
        left: 0;
        bottom: -24px;
        z-index: 1;

        @media (max-width: 800px) {
          display: none;
        }
      }
      .menu-item {
        cursor: pointer;
        transition: 0.2s ease-in-out;
        &:hover {
          color: $sovietRed;
        }
      }
      .active-item {
        color: $sovietRed;
        position: relative;
        &:after {
          content: "";
          width: 100%;
          border-bottom: solid 4px $sovietRed;
          position: absolute;
          left: 0;
          bottom: -24px;
          z-index: 2;
          @media (max-width: 800px) {
            bottom: -8px;
            border-bottom: solid 2px $sovietRed;
          }
        }
      }
    }
    .slider {
      width: 100%;
      max-width: 1180px;
      height: 900px;
      overflow: hidden;

      @media (max-width: 800px) {
        height: 840px;
      }
      @media (max-width: 500px) {
        height: 910px;
      }

      .swiper-wrapper {
        width: 100%;

        .swiper-slide {
          .image-container {
            width: 100%;
            height: 570px;

            padding: 26px;
            margin-bottom: 40px;

            background-color: #fff;

            img {
              width: 100%;
              height: 100%;
              object-fit: contain;
            }
          }
          &:nth-of-type(3) {
            .image-container {
              padding: 70px;
            }
          }
          .interface-title {
            font-size: 32px;
            color: $sovietRed;
            font-weight: 700;
            @include rodchenko;

            margin-bottom: 20px;
            margin-left: 100px;
            @media (max-width: 800px) {
              margin-left: 0;
              font-size: 24px;
            }
          }
          .interface-description {
            font-family: "Open Sans";
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            max-width: 1000px;
            margin-bottom: 120px;
            margin-left: 100px;
            @media (max-width: 800px) {
              font-size: 16px;
              margin-left: 0;
            }
          }
        }
      }
    }
  }
}
</style>
