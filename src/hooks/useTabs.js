import {computed} from "vue";
import store from '../store';

export default function useTabs() {

    const tabs = computed(() => store.getters['tabs']);

    return {
        tabs
    };
}