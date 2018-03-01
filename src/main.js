// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import App from './App'
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.bundle.js'

import store from './store'
import TimeEntries from './components/TimeEntries'

import News from './components/News'
//import NewsList from './components/NewsList'
import NewsDetail from './components/NewsDetail'

import axios from 'axios'
Vue.prototype.$http = axios

Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [{
  path: '/',
  component: Home
},{
  path: '/home',
  component: Home
},{
  path: '/time-entries',
  component: TimeEntries,
  children: [{
    path: 'log-time',
    component: resolve => require(['./components/LogTime.vue'], resolve)
  }]
},{
  path: '/news',
  component: News,
  children: [{
    path: 'news-list',
    component: resolve => require(['./components/NewsList.vue'], resolve)
  }]
},{
  path: '/news/news-detail/:uuid',
  name: 'detail',
  component: NewsDetail
}]

const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  ...App
})
