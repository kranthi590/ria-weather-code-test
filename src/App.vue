<template>
    <WeatherCard/>
</template>

<script>
import WeatherCard from "./components/Weather.vue";

export default {
    name: "App",
    components: {
      WeatherCard
    }
};
</script>

<style>
  @import "./styles/style.css";
</style>
