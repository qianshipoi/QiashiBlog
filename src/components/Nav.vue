<template>
  <nav class="flex justify-between  transition-all duration-500 "
       :class="{'bg-slate-50 shadow-2xl':displayMenu }"
       ref="target">
    <div class="logo mx-6 flex items-center text-4xl">
      LOGO
    </div>
    <ul class="flex animate__animated animate__bounceInRight"
        v-show="displayMenu">
      <li class="relative group mx-6 h-full flex items-center font-semibold cursor-pointer text-lg"
          v-for="menu in menus"
          :key="menu.id">
        <a href="javascript:;"
           class="h-full w-full flex items-center group">{{ menu.name }}</a>
        <ul v-if="menu.children"
            class="children-menu animate__animated animate__bounceInUp">
          <li class="py-1 px-4 hover:text-cyan-300"
              v-for="children in menu.children"
              :key="children.id">
            <a class="flex w-full h-full whitespace-nowrap "
               href="javascript:;">{{ children.name }}</a>
          </li>
        </ul>
      </li>
    </ul>
    <div class="flex items-center mx-6">
      <Icon :size="32"
            class="mx-2 cursor-pointer">
        <Search />
      </Icon>
      <Icon :size="32"
            class="mx-2  cursor-pointer">
        <PersonCircleSharp />
      </Icon>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { Icon } from '@vicons/utils'
import { Search, PersonCircleSharp } from '@vicons/ionicons5'
import { useMouseInElement } from '@vueuse/core'
type Menu = {
  id: number
  name: string
  children?: Array<Menu>
}

const menus = reactive<Array<Menu>>([
  {
    id: 1,
    name: '首页'
  },
  {
    id: 2,
    name: '归档',
    children: [
      {
        id: 21,
        name: '极客'
      },
      {
        id: 22,
        name: '文章'
      },
      {
        id: 23,
        name: '随想'
      },
      {
        id: 24,
        name: '笔记'
      }
    ]
  },
  {
    id: 3,
    name: '清单',
    children: [
      {
        id: 31,
        name: '书单'
      },
      {
        id: 32,
        name: '番组'
      },
      {
        id: 33,
        name: '歌单'
      }
    ]
  },
  {
    id: 4,
    name: '留言板'
  },
  {
    id: 5,
    name: '友人帐'
  },
  {
    id: 6,
    name: '关于',
    children: [
      {
        id: 31,
        name: '我'
      },
      {
        id: 32,
        name: '统计'
      },
      {
        id: 33,
        name: '主题'
      }
    ]
  }
])

const displayMenu = ref(false)

const target = ref(null)

const { isOutside } = useMouseInElement(target)

let scrolltop = ref<number>(0)

document.addEventListener('scroll', (e) => {
  scrolltop.value = document.documentElement.scrollTop
})

watch(
  () => [scrolltop.value, isOutside.value],
  (newVal) => {
    if (newVal[0] > 100) {
      displayMenu.value = true
    } else {
      if (!newVal[1]) {
        displayMenu.value = true
      } else {
        displayMenu.value = false
      }
    }
  }
)
</script>

<style lang="postcss" scoped>
nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 75px;
  z-index: 999999;
}
.children-menu {
  @apply absolute top-16 bg-white hidden group-hover:flex rounded-md  flex-col;
  left: -12px;
  box-shadow: 0 0 16px #999999;
}
.children-menu::after {
  content: '';
  position: absolute;
  top: -6px;
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  border-width: 6px;
  border-left-color: white;
  border-top-color: white;
  border-right-color: transparent;
  border-bottom-color: transparent;
}
.logo {
  animation: 0.5s ease-out logoMove;
}
@keyframes logoMove {
  from {
    transform: translateX(-4rem);
    opacity: 0.4;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
