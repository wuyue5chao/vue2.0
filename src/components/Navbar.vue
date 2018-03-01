<template>
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
</template>
