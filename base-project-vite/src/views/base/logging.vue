<template>
  <div>我是logging页面</div>
  <h3>来自child1应用的数据</h3>
  <ul>
    <li v-for="data in datalist">
      <div>{{ data.content }}</div>
      <div>{{ data.dateTime }}</div>
    </li>
  </ul>
</template>
<script lang="ts" setup>
import { useDataStore } from '@/store/data.store';
import { computed } from 'vue';
interface IDataType {
  content: string;
  dateTime: string;
}

const dataStore = useDataStore();

const datalist = computed(() => {
  return dataStore.getData();
});
// onMounted(() => {
//   microApp.addDataListener(
//     'child-app-1',
//     () => {
//       console.log(dataStore.getData());
//       datalist.value = dataStore.getData();
//     },
//     true,
//   );
// });
</script>
<style lang="scss" scoped></style>
