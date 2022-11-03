<template>
  <div class="for-whom">
    <div class="container">
      <h2 class="for-whom-title">Кому пригодится?</h2>
      <div class="categories-row">
        <div class="category">
          <img
            class="left-abstract"
            src="@/assets/img/left-abstract.svg"
            alt=""
          />
          <img
            class="right-abstract"
            src="@/assets/img/right-abstract.svg"
            alt=""
          />
          <img
            class="category-icon"
            src="@/assets/img/icons/agency.svg"
            alt=""
          />
          <div class="category-title">агентствам</div>
        </div>
        <div class="category">
          <img
            class="category-icon"
            src="@/assets/img/icons/business.svg"
            alt=""
          />
          <div class="category-title">начинающим<br />предпринимателям</div>
        </div>
        <div class="category">
          <img
            class="category-icon"
            src="@/assets/img/icons/inhouse.svg"
            alt=""
          />
          <div class="category-title">in-house отделам</div>
        </div>
        <div class="category">
          <img
            class="category-icon"
            src="@/assets/img/icons/freelance.svg"
            alt=""
          />
          <div class="category-title">фрилансерам</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.for-whom {
  background-color: #fff;

  .container {
    max-width: 1430px;
    width: 100%;
    padding: 115px 15px;
    margin: 0 auto;
    overflow: hidden;
    position: relative;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;

    .left-abstract {
      position: absolute;
      top: 140px;
      left: 40px;
      @media (max-width: 1400px) {
        display: none;
      }
    }

    .right-abstract {
      position: absolute;
      top: 150px;
      right: 40px;
      @media (max-width: 1400px) {
        display: none;
      }
    }

    .for-whom-title {
      margin-bottom: 64px;
      @media (max-width: 600px) {
        margin-bottom: 32px;
        text-align: left;
      }
    }

    .categories-row {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      width: 100%;
      max-width: 820px;
      margin-bottom: 130px;
      @media (max-width: 900px) {
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        gap: 40px;
      }
      .category {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        gap: 14px;
        .category-title {
          font-weight: 400;
          font-size: 24px;
          line-height: 120%;
          text-transform: lowercase;
          text-align: center;
          @include rodchenko;
        }
      }
    }
  }
}
</style>
