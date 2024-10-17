<script setup lang="ts">
import dayjs from 'dayjs';
import LinkerLine from 'linkerline';
import { onMounted, reactive } from 'vue';

setTimeout(() => {
  localStorage.setItem('currentView', 'child1设置的');
}, 2000);

const data = reactive<{ parent: any[]; global: any[] }>({
  parent: [],
  global: [],
});

const getDataFromParent = (datas: any) => {
  data.parent.push(datas);
  // alert(JSON.stringify(data));
};

const getDataFromGlobal = () => {
  data.global = window.microApp.getGlobalData();
};

const setDataToParent = () => {
  window.microApp.dispatch({
    content: '嘿嘿嘿，俺是child-app-1',
    dateTime: dayjs().format('YYYY-MM-DD HH:mm:ss'),
  });
};

const setDataToGlobal = () => {
  window.microApp.setGlobalData({
    sys: 'child-app-1',
    content: '全局数据',
    dateTime: dayjs().format('YYYY-MM-DD HH:mm:ss'),
  });
};

onMounted(() => {
  window.microApp?.addDataListener(getDataFromParent, true); // 监听来自父应用的数据，初始化有数据会主动触发
  window.microApp.addGlobalDataListener(getDataFromGlobal); //监听来自父应用的数据，初始化有数据会主动触发
  getDataFromGlobal();

  const line = new LinkerLine({
    parent: document.querySelector('.page-container') as HTMLElement,
    start: document.querySelector('.start'),
    end: document.querySelector('.end'),
  });
});
</script>

<template>
  <div class="page-container">
    <h3>静态资源</h3>
    <div class="logos">
      <img alt="Vue logo" class="logo" src="/svgs/vite.svg" />
      <img alt="Vue logo" class="logo" src="/svgs/vite.svg" />
      <img alt="Vue logo" class="logo" src="/svgs/vite.svg" />
      <img alt="Vue logo" class="logo" src="/svgs/vite.svg" />
      <img alt="Vue logo" class="logo" src="/svgs/vite.svg" />
      <img alt="Vue logo" class="logo" src="/svgs/vite.svg" />
      <video src="/videos/about-banner.webm" autoplay muted></video>
    </div>
    <h3>数据通信</h3>
    <div class="datas-section">
      <h4>主应用传过来的数据</h4>
      <ul>
        <li v-for="item in data.parent">{{ item.content }}</li>
      </ul>
      <button class="start" @click="setDataToParent">给父组件传一个时间戳过去</button>
      <button class="end" @click="setDataToGlobal">给全局传一条数据</button>
      <h4>全局数据</h4>
      <ul>
        {{
          JSON.stringify(data.global)
        }}
      </ul>
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
  /* display: block; */
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.page-container {
  overflow-y: scroll;
  h3 {
    padding: 0 18px;
  }
  video {
    width: 300px;
    object-fit: cover;
  }
  button {
    margin: 20px;
  }
}
</style>
