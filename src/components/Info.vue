<script>
import useWeather from "../hooks/useWeather";
import useCurrentCity from "../hooks/useCurrentCity";
import useCurrentDate from "../hooks/useCurrentDate";

export default {
  name: "Info",
  props: {
    currentDateWithFormat: String,
    currentTime: String,
  },
  setup() {
    const {weather} = useWeather();
    const {currentCity} = useCurrentCity();
    const {currentDate} = useCurrentDate();
    return {
      weather,
      currentCity,
      currentDate
    }
  }
}
</script>

<template>
  <div class="card mb-2" style="border-radius: 25px;">
    <div class="card-body p-3">
      <div id="demo1" class="carousel slide" data-ride="carousel">
        <!-- Carousel inner -->
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="d-flex justify-content-between mb-2 pb-2">
              <div>
                <h2 class="display-2"><strong>{{ weather.weather }}</strong></h2>
                <p class="text-muted mb-0">{{ currentCity.city }}</p>
                <p class="text-muted mb-0">{{ currentDate.date }} {{ currentDate.time }}</p>
              </div>
              <div>
                <img v-if="weather" v-bind:src="weather.icon" style="width: 100px" alt="weather icon">
                <h6 class="display-10" style="text-transform: capitalize;">{{
                    weather.description
                  }}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>