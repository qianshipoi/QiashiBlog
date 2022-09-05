<template>
  <article class="article-box group flex"
           :class="{ 'flex-row-reverse': reverse }">
    <div class="flex flex-col"
         :class="{ 'items-end' : reverse}"
         style="width:calc(100% - 430px); padding: 20px 40px">
      <span style="font-size: 12px; line-height: 24px;color:#888888"
            :style="{'text-align': reverse ? 'right':'left' }">发布于 {{ article.publishTime }} </span>
      <h3 class="font-semibold my-4"
          style="font-size:18px; color:#504e4e">{{ article.title }}</h3>
      <div class="flex my-2"
           style="font-size:12px; color:#888888">
        <span class="flex items-center mr-2">
          <icon :size="16">
            <EyeOutline />
          </icon> {{ article.hot }}热度
        </span>
        <span class="flex items-center mr-2 cursor-pointer">
          <icon :size="16">
            <ChatbubbleEllipsesOutline />
          </icon> {{ article.commentCount }}评论
        </span>
        <span class="flex items-center mr-2 cursor-pointer">
          <icon :size="16">
            <FolderOpenOutline />
          </icon> {{ article.tag }}
        </span>
      </div>
      <p class="article-content">{{ article.content }}</p>
      <icon style="color:#000000A8"
            class="cursor-pointer"
            :size="32">
        <EllipsisHorizontal />
      </icon>
    </div>
    <div style="width:430px"
         class=" overflow-hidden cursor-pointer">
      <img class="w-full h-full object-cover group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 "
           :src="article.cover"
           alt="封面">
    </div>
  </article>
</template>

<script setup lang="ts">
import { Icon } from '@vicons/utils'
import {
  EyeOutline,
  ChatbubbleEllipsesOutline,
  EllipsisHorizontal,
  FolderOpenOutline
} from '@vicons/ionicons5'
type Article = {
  id: number
  title: string
  content: string
  publishTime: string
  hot: number
  commentCount: number
  tag: string
  cover: string
}

defineProps<{
  article: Article
  reverse?: boolean
}>()
</script>

<style lang="postcss" scoped>
.article-box {
  @apply w-full h-80 bg-slate-50 my-4 rounded-2xl overflow-hidden;
  box-shadow: 0 0 8px #999;
  transition: box-shadow 0.3s ease-in;
}
.article-box:hover {
  box-shadow: 0 0 16px #999;
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
