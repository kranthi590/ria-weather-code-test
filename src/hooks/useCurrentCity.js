import { ref, computed } from "vue";
import store from '../store/index';

export default function useCurrentCity() {

  const currentCity = computed(() => store.getters['currentCity']);

  const updateCurrentCity = async(newLocation) => {
    if (!Object.keys(newLocation).length === 0) {
      return;
    }

    const payload = {
      city: newLocation,
      done: false
    }

    await store.dispatch('UPDATE_CURRENT_CITY', payload)
  }

  return {
    updateCurrentCity,
    currentCity
  };
}