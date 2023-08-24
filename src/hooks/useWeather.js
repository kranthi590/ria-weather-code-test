import { ref, computed } from "vue";
import store from '../store/index';

export default function useWeather() {

  const weather = computed(() => store.getters['weather']);

  const updateWeather = async(newWeather) => {
    if (!Object.keys(newWeather).length === 0) {
      return;
    }

    const payload = {
      weather: newWeather
    }

    await store.dispatch('UPDATE_WEATHER', payload)
  }

  return {
    updateWeather,
    weather
  };
}