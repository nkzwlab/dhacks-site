<template>
  <div class="header__wrapper">
    <div class="header">
      <img src="@/assets/d-hacks-logo.v4-2.png" alt="D-Hacks Logo" class="header__logo" />
      <div class="header__items">
        <div v-for="item in items" :key="item.path">
          <RouterLink
            :to="item.path"
            class="header__item"
            :class="{ header__item__active: $route.path === item.path }"
            >{{ item.name }}</RouterLink
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Jura:wght@300;400&display=swap');

// reset css
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
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
  height: calc(60px + 20px + 18px);

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
    name: 'Contact',
    path: '/contact'
  }
]
</script>
