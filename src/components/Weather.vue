<template>
  <section class="vh-100" style="background-color: #C1CFEA;">
    <Search :current-city="currentCity" :on-enter="onEnter" :refresh="refresh"/>
    <div class="alert-message" v-if="errorMessage">
      <div class="alert alert-danger" role="alert">
        {{ errorMessage }}
      </div>
    </div>
    <div class="wrapper">
      <div class="tabs_wrap">
        <ul>
          <li v-for="(tab) in tabs" :class="{active : currentCity.city===tab.displayName}"
              @click="onTabClick(tab)">
            {{ tab.displayName }}
          </li>
        </ul>
      </div>
    </div>
    <div class="container py-3">
      <div class="row d-flex justify-content-center align-items-center h-100" style="color: #282828;">
        <div class="col-md-9 col-lg-7 col-xl-5">
          <Info/>
          <Hourly/>
          <Daily/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {onMounted, ref} from "vue";
import axios from "axios";

/* Hooks */
import useCurrentCity from "../hooks/useCurrentCity";
import useTabs from "../hooks/useTabs";
import useWeather from "../hooks/useWeather";
import useCurrentDate from "../hooks/useCurrentDate"

import cities from "../assets/cities.json"

/* Components */
import Info from "./Info.vue";
import Hourly from "./Hourly.vue";
import Daily from "./Daily.vue";
import Search from "./Search.vue";
import {transformDate, transformWeather} from "../utils/transform-data.js";

export default {
  components: {Search, Daily, Hourly, Info},
  setup() {
    const {tabs} = useTabs();
    const {updateCurrentCity, currentCity} = useCurrentCity();
    const {updateWeather} = useWeather();
    const {updateCurrentDate} = useCurrentDate();

    const errorMessage = ref('');

    async function onEnter(event) {
      if (event.key === "Enter") {
        const cityObj = cities.find((city) => city.city.toLowerCase() === event.target.value);
        if (cityObj) {
          errorMessage.value = '';
          const city = {
            city: cityObj.city,
            latitude: cityObj.latitude,
            longitude: cityObj.longitude
          }
          await updateCurrentCity(city);
          await fetchLocation(city);
        } else {
          errorMessage.value = 'Error: City not found, only enter valid city name from USA';
        }
      }
    }

    function refresh() {
      fetchLocation(currentCity.value);
    }

    function onTabClick(tab) {
      const city = {
        city: tab.displayName,
        latitude: tab.coordinates[0],
        longitude: tab.coordinates[1]
      };
      updateCurrentCity(city)
      fetchLocation(city);
    }

    async function fetchLocation(city) {
      try {
        const currentData = await axios.get(
            encodeURI(`https://api.openweathermap.org/data/2.5/onecall?lat=${city.latitude}&lon=${city.longitude}&units=imperial&APPID=1f89da47fe4d0be6bbbf376af70bdb58&exclude=minutely,alerts`)
        );
        await updateWeather(transformWeather(currentData));
        await updateCurrentDate(transformDate());
      } catch (error) {
        errorMessage.value = 'Error: something went wrong, please try again';
      }
    }


    onMounted(async () => {
      const defaultCity = tabs.value[0];
      const city = {
        city: defaultCity.displayName,
        latitude: defaultCity.coordinates[0],
        longitude: defaultCity.coordinates[1]
      };
      await updateCurrentCity(city)
      fetchLocation(city);
    });

    return {
      tabs,
      onEnter,
      refresh,
      onTabClick,
      currentCity,
      errorMessage
    };
  },
};
</script>