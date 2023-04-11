<template>
  <div class="header__wrapper">
    <div
      class="header"
      :class="{
        header__normal: !(displaySizeUnder700 && showMenu)
      }"
    >
      <img
        src="@/assets/d-hacks-logo.v4-2.png"
        alt="D-Hacks Logo"
        class="header__logo"
        v-if="!(displaySizeUnder700 && showMenu)"
      />
      <div
        class="header__items"
        v-if="!displaySizeUnder700 || showMenu"
        :class="{
          header__items__vertical: displaySizeUnder700
        }"
      >
        <div v-for="item in items" :key="item.path">
          <RouterLink
            :to="item.path"
            class="header__item"
            :class="{ header__item__active: $route.path === item.path }"
            >{{ item.name }}</RouterLink
          >
        </div>
      </div>
      <div class="header__items" v-if="displaySizeUnder700 && !showMenu">
        <!-- ハンバーガーメニューボタン -->
        <div class="header__item" @click="toggleMenu()">
          <i class="fas fa-bars"></i>
        </div>
      </div>
      <div class="header__items" v-else-if="displaySizeUnder700 && showMenu">
        <!-- ハンバーガーメニューボタン -->
        <div class="header__item" @click="toggleMenu()">
          <i class="fas fa-times"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Jura:wght@300;400&display=swap');
// Font Awesome 5 Free
@import url('https://use.fontawesome.com/releases/v5.15.3/css/all.css');
// reset css
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

// fas fa-bars
.fas {
  font-family: 'Font Awesome 5 Free';
  font-weight: 900;
}
.fa-bars {
  font-size: 1.5rem;
}
// cross
.fa-times {
  font-size: 1.5rem;
}

.header {
  font-family: 'Jura', sans-serif;

  max-width: 1170px;
  padding: 20px 15px 18px;
  margin-bottom: 0;
  min-height: 46px;
  margin: auto;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  &__normal {
    height: calc(60px + 20px + 18px);
  }

  &__wrapper {
    width: 100%;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }

  &__logo {
    max-height: 50px;
    widows: auto;
  }

  &__items {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
    &__vertical {
      flex-direction: column;
      align-items: flex-start;
      gap: 15px;
    }
  }

  &__item {
    padding: 10px 15px;
    color: #464646;
    line-height: 23.1px;
    text-decoration: none;
    font-size: 14px;
    // &:hover {
    //   color: #000;
    //   background-color: #f5f5f5;
    // }

    &__active {
      border-bottom: 1px solid #337ab7;
    }
  }
}

// if min-width: 992

/* element.style {
    padding-top: 20px;
    padding-bottom: 18px;
}
@media (min-width: 992px)
.siteHeader .container {
    padding-top: 20px;
    padding-bottom: 18px;
}
.siteHeader .container {
    padding-top: 5px;
    padding-bottom: 4px;
}
@media (min-width: 1200px)
.container {
    width: 1170px;
}
@media (min-width: 992px)
.container {
    width: 970px;
}
@media (min-width: 768px)
.container {
    width: 750px;
}
.container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
} */
</style>
<script setup lang="ts">
import { ref } from 'vue'
// const items = ['Home', 'About', 'Contact']
const items: {
  name: string
  path: string
}[] = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'About',
    path: '/about'
  },
  {
    name: 'Members',
    path: '/members'
  },
  {
    name: 'Joinus',
    path: '/joinus'
  },
  {
    name: 'Contact',
    path: '/contact'
  }
]

const displaySizeUnder700 = ref(window.innerWidth < 700)
const showMenu = ref(false)

// on display width change
window.addEventListener('resize', () => {
  displaySizeUnder700.value = window.innerWidth < 700
})

function toggleMenu() {
  showMenu.value = !showMenu.value
}
</script>
