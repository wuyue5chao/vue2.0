<template>
  <div id="wrapper">
    <nav class="navbar navbar-expand-lg navbar-light bg-light mb-3">
      <a class="navbar-brand" href="#"><i class="glyphicon glyphicon-time"></i>计划版</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link to="/home"><span class="nav-link">首页</span></router-link>
          </li>
          <li class="nav-item">
            <router-link to="/time-entries"><span class="nav-link">计划列表</span></router-link>
          </li>
          <li class="nav-item">
            <router-link to="/news"><span class="nav-link">看新闻</span></router-link>
          </li>
        </ul>
      </div>
    </nav>

    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-3">
          <sidebar></sidebar>
        </div>
        <div class="col-sm-9">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Siderbar from './components/Sidebar.vue'
export default {
  components: {'sidebar': Siderbar}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
