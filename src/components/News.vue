<template>
  <div>
    <router-link v-if="$route.path !== 'news/news-list'" to="news/news-list">Go to News List</router-link>

    <div v-if="$route.path === 'news/news-list'">
      <h4>I am news list</h4>
    </div>

    <router-view></router-view>

    <h4 class="text-center">Vue News</h4>

  </div>
</template>
