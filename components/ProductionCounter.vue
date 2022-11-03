<template>
  <div class="counter">
    <div class="counter-title">До запуска сервиса осталось:</div>
    <div class="time-container">
      <div class="time-item">
        <div class="number" id="days">0</div>
        <div class="date-description">дней</div>
      </div>
      <div class="dots">:</div>
      <div class="time-item">
        <div class="number" id="hours">00</div>
        <div class="date-description">часов</div>
      </div>
      <div class="dots">:</div>
      <div class="time-item">
        <div class="number" id="minutes">00</div>
        <div class="date-description">минут</div>
      </div>
    </div>
    <div class="counter-cover"></div>
    <div class="counter-bg"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    let end = new Date("03/01/2023 10:1 AM");

    let _second = 1000;
    let _minute = _second * 60;
    let _hour = _minute * 60;
    let _day = _hour * 24;
    let timer;

    function showRemaining() {
      let now = new Date();
      let distance = end - now;
      if (distance < 0) {
        clearInterval(timer);
        return;
      }
      let days = Math.floor(distance / _day);
      let hours = Math.floor((distance % _day) / _hour);
      let minutes = Math.floor((distance % _hour) / _minute);
      // let seconds = Math.floor((distance % _minute) / _second);

      document.getElementById("days").innerHTML = days;
      document.getElementById("hours").innerHTML = hours;
      document.getElementById("minutes").innerHTML = minutes;
      // document.getElementById("seconds").innerHTML = seconds;
    }

    timer = setInterval(showRemaining, 1000);
  },
};
</script>

<style lang="scss" scoped>
.counter {
  position: relative;
  width: 100%;
  height: 276px;
  padding-top: 47px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  margin-bottom: 115px;

  @media (max-width: 600px) {
    height: 230px;
    margin-bottom: 90px;
  }

  .counter-title {
    margin-bottom: 12px;

    color: #fff;
    font-weight: 400;
    font-size: 22px;
    letter-spacing: 0.12em;
    text-transform: uppercase;

    @include rodchenko;

    @media (max-width: 600px) {
      font-size: 18px;
    }
    @media (max-width: 400px) {
      font-size: 15px;
    }
  }

  .time-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 32px;
    @media (max-width: 600px) {
      gap: 20px;
    }
    @media (max-width: 400px) {
      gap: 14px;
    }
    .time-item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .number {
        margin-bottom: 6px;
        position: relative;
        color: #fff;
        font-weight: 700;
        font-size: 100px;

        @include rodchenko;

        @media (max-width: 600px) {
          font-size: 60px;
        }
        @media (max-width: 400px) {
          font-size: 40px;
        }

        &:after {
          content: "";
          width: 150%;
          border-bottom: solid 1px rgba(71, 71, 71, 1);
          position: absolute;
          left: 0;
          bottom: 0;
          z-index: 1;
          transform: translateX(-15%);
        }
      }
      .date-description {
        color: #fff;
        font-weight: 400;
        font-size: 15px;
        @include rodchenko;
      }
    }
    .dots {
      position: relative;
      top: -14px;
      color: $sovietRed;
      font-weight: 700;
      font-size: 100px;

      @include rodchenko;

      @media (max-width: 600px) {
        font-size: 60px;
      }
      @media (max-width: 400px) {
        font-size: 40px;
      }
    }
  }

  .counter-cover {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(20deg, #090505 0%, rgba(9, 5, 5, 0.58) 250%);
  }

  .counter-bg {
    position: absolute;
    z-index: -2;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background: url("@/assets/img/moscow-bg.png");
    background-position: 35% 45%;
  }
}
</style>
