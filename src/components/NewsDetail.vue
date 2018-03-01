<template>
  <div class="jumbotron">
    <h4>{{detail.title}}</h4>
    <p class="lead">{{detail.source}} {{detail.add_time}}</p>
    <hr class="my-4" />
    <div v-html="detail.content" class="news-con"></div>
    <!--<p>uuid is:{{uuid}}</p>-->
  </div>
</template>

<script>
  export default {
//    props: ['uuid'],
    name: 'NewsDetail',
    data () {
      return {
        uuid: this.$route.params.uuid,
        detail: {}
      }
    },
    mounted: function () {
      this.showDetail()
    },
    methods: {
      showDetail () {
        this.$http.get('http://a.ylot.net/api?m=user.news.getDetail', {
          params: {
            uuid: this.uuid
          }
        }).then(function (response) {
            console.log('detail', response.data);
            this.detail = response.data.info
          })
      }
    }
  }
</script>

<style>
  .news-con img{
    max-width: 100%;
  }
</style>
