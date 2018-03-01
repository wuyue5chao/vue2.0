<template>
  <div class="card mb-3">
    <div class="card-header">
      <h4 class="text-center">已有时长</h4>
    </div>
    <div class="card-block">
      <h4 class="card-title text-center">{{time}} 小时</h4>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      time () {
        return this.$store.state.totalTime
      }
    }
  }
</script>
