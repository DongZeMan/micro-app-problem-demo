<template>
  <div class="layout-container">
    <div class="menu-section">
      <el-menu :default-active="currentRoute" router @select="handleMenuChange">
        <el-menu-item index="/child-app-1">demo子项目</el-menu-item>
        <el-menu-item index="/child-app-2">大屏</el-menu-item>
        <el-menu-item index="/child-app-3">子系统3</el-menu-item>
        <el-menu-item index="/logging">父子应用数据传输日志</el-menu-item>
      </el-menu>
    </div>
    <div class="pages-section">
      <router-view></router-view>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useDataStore } from '@/store/data.store';
import microApp from '@micro-zoe/micro-app';
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const currentRoute = computed(() => {
  return router.currentRoute.value.path;
});

const handleMenuChange = (index: string) => {
  // microApp.setData(index.replace('/', ''), { content: '我是父应用向子应用发送的数据' });
};

microApp.setGlobalData({ sys: 'primary' });
microApp.setGlobalData({ content: '全局数据' });
const dataStore = useDataStore();

microApp.addDataListener('child-app-1', (data: { dateTime: string }) => {
  dataStore.setData(microApp.getData('child-app-1') as unknown as any[]);
  microApp.setData('child-app-1', { content: '我已经收到数据-' + data.dateTime });
});
</script>
<style lang="scss" scoped>
.layout-container {
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
  .menu-section {
    width: 240px;
    height: 100%;
    .el-menu {
      height: 100%;
    }
  }
  .pages-section {
    flex: 1;
    width: calc(100% - 240px);
  }
}
</style>
