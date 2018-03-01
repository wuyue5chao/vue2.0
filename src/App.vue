<template>
  <div id="wrapper">
    <navbar></navbar>

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
  import Navbar from './components/Navbar.vue'
  import Siderbar from './components/Sidebar.vue'
  export default {
    components: {
      'sidebar': Siderbar,
      'navbar': Navbar
    }
  }
</script>
