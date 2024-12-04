<script setup lang="ts">
import { IApp } from '@leafer-ui/interface'
import { AuxiliaryLine } from '../../package/index'
import { App as LeaferEditorApp, Line, Rect } from 'leafer-editor'

const app = new LeaferEditorApp({
  view: window,
  editor: {},
  zoom: {
    min: 0.2,
    max: 2,
  },
})

app.tree.add(Rect.one({ editable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 100))
app.tree.add(Rect.one({ editable: true, fill: '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 300, 100))

new AuxiliaryLine(app as unknown as IApp)
</script>

<template>
  <div></div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
