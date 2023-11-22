<template>
  <ConfigProvider>
    <router-view />
  </ConfigProvider>
</template>

<script setup lang='ts'>
import { ConfigProvider } from 'ant-design-vue'
import { useUserTheme } from './hooks/useTheme'

useUserTheme()

const test = async () => {
  try {
    // @ts-ignore (define in dts)
    const replyMessage = await window.api.zhiwang("火药固钉器活塞复位过程动力学分析");
    console.log('replyMessage', replyMessage); // 处理返回值
  } catch (error) {
    console.error('Error in sending sync message:', error);
  }
}
test()
</script>

<style>
#app {
  height: 100%;
}

.ant-pro-sider {
  z-index: 20;
}

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition-duration: 0.5s;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
  overflow: hidden;
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(2em, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-2em, 0);
}

.zoom-enter-active,
.zoom-leave-active {
  animation-duration: 0.3s;
  animation-fill-mode: both;
  animation-name: zoomIn;
}

.zoom-leave-active {
  animation-direction: reverse;
}

@keyframes zoomIn {
  from {
    opacity: 0;
    transform: scale3d(0.95, 0.95, 0.95);
  }

  100% {
    opacity: 1;
  }
}
@keyframes zoomOut {
  0% {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: scale3d(0.95, 0.95, 0.95);
  }
}
</style>
