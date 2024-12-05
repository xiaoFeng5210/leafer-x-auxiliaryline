<script setup lang="ts">
import { IApp } from '@leafer-ui/interface'
import { AuxiliaryLine } from '../../package/index'
import { App as LeaferEditorApp, Line, Rect } from 'leafer-editor'
import { onMounted, useTemplateRef, ref } from 'vue';


const canvasRef = useTemplateRef<HTMLCanvasElement>('canvasRef')
const auxiliary = ref<AuxiliaryLine>()

const getAllElementsInViewport = () => {
  auxiliary.value?.getElementsInViewport()
}

onMounted(() => {
  const app = new LeaferEditorApp({
    view: canvasRef.value!,
    editor: {},
    zoom: {
      min: 0.2,
      max: 2,
    },
  })
  app.tree.add(Rect.one({ editable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 100))
  app.tree.add(Rect.one({ editable: true, fill: '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 300, 100))
  auxiliary.value = new AuxiliaryLine(app as unknown as IApp)
})
</script>

<template>
  <div class="container">
    <div class="w-full">
      <button class="" @click="getAllElementsInViewport">获取视口元素</button>
    </div>
    <div class="canvas_box">
      <canvas id="canvas_div" ref="canvasRef"></canvas>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding: 0;
  margin: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.canvas_box {
  flex: 1;
}

.canvas_box canvas {
  width: 100%;
  height: 100%;
}
</style>
