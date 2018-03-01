<template>
  <div>
    <!--<router-link
      v-if="$route.path !== '/news/news-list'"
      to="/news/news-list">
      Go to News List
    </router-link>

    <div v-if="$route.path === '/news/news-list'">
      <h4>I am news list</h4>
    </div>

    <router-view></router-view>-->

    <h4 class="text-center">Vue News</h4>
    <div class="container">
      <div class="row">
        <div class="col-sm-4 mb-3" v-for="result in results">
          <div class="card">
            <div class="card-header">
              {{result.title}}
            </div>
            <div class="card-body">
              <p class="card-text">
                {{result.description}}
              </p>

              <!--<NewsDetail v-if="$route.path === '/news/news-detail'" :uuid="result.uuid"></NewsDetail>-->
              <!--<router-link v-bind:uuid="result.uuid" to="/news/news-detail" class="card-link">Details</router-link>-->
              <a href="#" class="card-link" @click="goDetail(result.uuid)">Details</a>

            </div>
          </div>
        </div>
      </div>
    </div>



  </div>
</template>

<script>
  import NewsDetail from './NewsDetail.vue'
  export default {
    name: 'News',
    data () {
      return {
        results: [
//          {title: '第一条新闻', description: '我是第一条新闻'},
//          {title: '接着是第二条', description: '我是第二条新闻'},
//          {title: '然后是第三条', description: '我是第三条新闻'},
//          {title: '我是最后一条了', description: '我是第四条新闻'}
        ]
      }
    },
    components: {
      NewsDetail
    },
    mounted: function () {
      var self = this;
      this.$http.get('http://a.ylot.net/api?m=user.news.getList')
        .then(function (response) {
          console.log('news', response.data.list)
          self.results = response.data.list
        })
    },
    methods: {
      goDetail (id) {
        console.log(id);
        this.$router.push({name: 'detail', params: {uuid: id}})
      }
    }

  }
</script>
