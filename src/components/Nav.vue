<template>
  <nav class="flex justify-between  transition-all duration-500"
       :class="{'bg-slate-50':displayMenu }"
       ref="target">
    <div class="logo mx-6 flex items-center text-4xl">
      LOGO
    </div>
    <ul class="flex animate__animated animate__bounceInRight"
        v-show="displayMenu">
      <li class="px-6 h-full flex items-center font-semibold cursor-pointer text-lg"
          v-for="menu in menus"
          :key="menu.id"> {{ menu.name }} </li>
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
}

const menus = reactive<Array<Menu>>([
  {
    id: 1,
    name: '首页'
  },
  {
    id: 2,
    name: '归档'
  },
  {
    id: 3,
    name: '清单'
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
    name: '关于'
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
    if (newVal[0] > 200) {
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

<style scoped>
nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 75px;
  z-index: 999999;
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
