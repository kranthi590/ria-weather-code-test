<script>
import useWeather from "../hooks/useWeather";

export default {
  name: "Daily",
  setup() {
    const {weather} = useWeather();
    return {
      weather
    }
  }
}
</script>

<template>
  <div class="card" style="border-radius: 25px;">
    <div class="card-body p-4">
      <div id="demo3" class="carousel slide" data-ride="carousel">
        <!-- Indicators -->
        <ul class="carousel-indicators mb-0">
          <li data-target="#demo3" data-slide-to="0"></li>
          <li data-target="#demo3" data-slide-to="1"></li>
          <li data-target="#demo3" data-slide-to="2" class="active"></li>
        </ul>
        <h6 class="display-7"><strong>Daily Forecast</strong></h6>
        <!-- Carousel inner -->
        <div class="carousel-inner">
          <div class="carousel-item active hourly-grid">
            <div class="flex-column" v-for="val in weather.daily">
              <p class="small text-center"><strong>{{ val.min }}°F / {{ val.max }}°F</strong></p>
              <i class="fas fa-sun fa-2x mb-3" style="color: #ddd;"></i>
              <p class="mb-0 text-center"><strong>{{ val.dt }}</strong></p>
              <img v-if="val.image" v-bind:src="val.image" style="width: 80px" alt="weather icon">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>