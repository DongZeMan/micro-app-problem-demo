import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useDataStore = defineStore('data', () => {
  const childrenData = ref<any[]>([]);
  const setData = (data: any[]) => {
    childrenData.value.push(data);
  };

  const getData = () => {
    return childrenData.value;
  };

  return {
    getData,
    setData,
  };
});
