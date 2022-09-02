<template>
  <article class="article-item w-full flex flex-col items-center"
           style="margin-bottom:8%">
    <div class="post flex w-full">
      <div style="width: 120px;"
           class="flex ">
        <img style="width: 100px;height: 100px; border-radius: 50%; border-width: 2px;border-color: skyblue; border-style:dashed;margin-top: 10px;object-fit: cover;"
             :src="article.cover"
             alt="文章图片">
      </div>
      <div style="width: calc(100% - 120px);">
        <div class="flex justify-between items-center">
          <h1 style="font-size:20px;color:#504e4e;line-height: 50px;">{{ article.title }}</h1>
          <span style="font-size:12px;color:#989898">发布于 {{ article.publishTime }} </span>
        </div>
        <p style="font-size:15px;color:#000000A8;line-height: 30px;">{{ article.content }}</p>
        <div style="text-align: right;color:#404040;margin-top: 12px; ">
          <icon :size="32">
            <EllipsisHorizontal />
          </icon>
        </div>
      </div>
    </div>
    <hr style="width: 30%; height: 1px; color:#efefef; margin-top: 20px;" />
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

<style scoped>
</style>
