<template>
  <div class="comp flex flex-col justify-center items-center">
    <ArticleItem :article="article" />
  </div>
</template>

<script setup lang="ts">
import ArticleItem from '@/components/ArticleItem.vue'
import { Icon } from '@vicons/utils'
import {
  EyeOutline,
  ChatbubbleEllipsesOutline,
  EllipsisHorizontal,
  FolderOpenOutline
} from '@vicons/ionicons5'
const article = reactive({
  id: 1,
  title: '基于 SCSS mixin 的 flex gap polyfill',
  content:
    '一直以来，习惯在 flex 布局中使用 gap 这个属性设置间距，一直以来也都是在最新的 Chrome 上调试，所以从来没有想在 flex gap 在其他',
  publishTime: '2021-07-30',
  hot: 13469,
  commentCount: 49,
  tag: '碎碎念',
  cover: 'https://oss.kuriyama.top/static/nakiri.png'
})
</script>

<style scoped>
.comp {
  margin: 0 auto;
  width: 780px;
  padding-top: 80px;
}
</style>
