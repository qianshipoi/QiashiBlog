<template>
  <div class="comp flex flex-col justify-center items-center">
    <ArticleBox :article="article" />
    <ArticleBox :article="article"
                reverse />
  </div>
</template>

<script setup lang="ts">
import ArticleBox from '@/components/ArticleBox.vue'

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
.article-box {
  @apply w-full h-80 bg-slate-50 my-4 rounded-2xl overflow-hidden;
  box-shadow: 0 0px 16px #999;
}
.article-content {
  font-size: 15px;
  overflow: hidden;
  color: #000000a8;
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>
