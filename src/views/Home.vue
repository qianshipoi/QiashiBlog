<template>
  <div class="home">
    <div class="banner h-screen">
      <img class="w-screen h-screen object-cover"
           src="https://oss.kuriyama.top/static/nakiri.png"
           alt="头图">
    </div>

    <div class="main">
      <h4 class="title">
        <Icon :size="28">
          <GiftOutline />
        </Icon>
        START:DASH!!
      </h4>

      <ul class="flex justify-between">
        <li v-for="item in topLinks"
            class="rounded-lg overflow-hidden shadow-lg cursor-pointer"
            :key="item.id"
            style="width:256px; height: 160px;">
          <a class="group block h-full relative">
            <div class="hidden group-hover:flex flex-col items-center justify-around w-full h-full absolute z-10 "
                 style="background-color: #000000af;">
              <h1 class="animate__animated  animate__fadeInLeft text-cyan-50 w-full text-center bg-black py-4">{{ item.title }}</h1>
              <p class="animate__animated animate__bounceInRight text-cyan-50">{{ item.subtitle }}</p>
            </div>
            <img :src="item.cover"
                 class="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover group-hover:scale-125 transition-all duration-500 "
                 :alt="item.title">
          </a>
        </li>
      </ul>

      <h4 class="title">
        <Icon :size="28">
          <GiftOutline />
        </Icon>
        START:DASH!!
      </h4>

      <ArticleBox v-for="(article, index) in articles"
                  :key="article.id"
                  :reverse="index % 2 === 1"
                  :article="article"></ArticleBox>

    </div>
  </div>
</template>

<script setup lang="ts">
import { GiftOutline } from '@vicons/ionicons5'
import { Icon } from '@vicons/utils'
import ArticleBox from '../components/ArticleBox.vue'

type Link = {
  id: number
  title: string
  subtitle: string
  cover: string
}
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

const topLinks = ref<Array<Link>>([
  {
    id: 1,
    title: 'QianshiBlog',
    subtitle: '本站前端',
    cover: 'https://oss.kuriyama.top/static/nakiri.png'
  },
  {
    id: 2,
    title: 'QianshiBlog',
    subtitle: '本站前端',
    cover: 'https://oss.kuriyama.top/static/nakiri.png'
  },
  {
    id: 3,
    title: 'QianshiBlog',
    subtitle: '本站前端',
    cover: 'https://oss.kuriyama.top/static/nakiri.png'
  }
])

const articles = ref<Array<Article>>([])

for (let index = 0; index < 5; index++) {
  articles.value.push({
    id: index + 1,
    title: '基于 SCSS mixin 的 flex gap polyfill',
    content:
      '一直以来，习惯在 flex 布局中使用 gap 这个属性设置间距，一直以来也都是在最新的 Chrome 上调试，所以从来没有想在 flex gap 在其他',
    publishTime: '2021-07-30',
    hot: 13469,
    commentCount: 49,
    tag: '碎碎念',
    cover: 'https://oss.kuriyama.top/static/nakiri.png'
  })
}
</script>

<style lang="postcss" scoped>
.title {
  @apply flex items-center my-8 font-semibold border-b border-dotted border-gray-300 border-t-0 border-l-0 border-r-0;
}
.main {
  margin: 80px auto;
  width: 780px;
}
.banner {
  position: relative;
}
.banner::before {
  content: '';
  background-image: url('https://oss.kuriyama.top/static/apps/blog/dot.gif');
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 3;
  background-attachment: fixed;
}
.animate__animated.animate__fadeInLeft {
  --animate-duration: 0.5s;
}
</style>
