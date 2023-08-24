import { computed } from "vue";
import store from '../store';

export default function useCurrentDate() {

  const currentDate = computed(() => store.getters['currentDate']);

  const updateCurrentDate = async(newDate) => {
    if (!Object.keys(newDate).length === 0) {
      return;
    }

    const payload = {
      date: newDate
    }

    await store.dispatch('UPDATE_CURRENT_DATE', payload)
  }

  return {
    updateCurrentDate,
    currentDate
  };
}