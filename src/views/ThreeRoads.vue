<template>
  <v-container>
    <v-layout>
      <v-flex xs12>
        <div v-html="text" />
        <div v-if="theEnd">
          <h1>Игра окончена!</h1>
          <ul>
            <li><RouterLink :to="`/three-roads/${story}/0`">Сначала</RouterLink></li>
            <li><RouterLink to="/three-roads/start/0">Другая история</RouterLink></li>
          </ul>
        </div>
        <template v-else>
          <ul>
            <li
                    v-for="(link, index) in links"
                    :key="index"
            >
              <RouterLink :to="`/three-roads/${link.story || story}/${link.link}`">{{link.text}}</RouterLink>
            </li>
          </ul>
        </template>
        <div v-if="story === 'start'">
          Рассказывайте свою сагу. Воины ждут приключений!
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import {
    mapState,
    mapMutations
  } from 'vuex'
  export default {
    name: 'ThreeRoads',
    computed: {
      ...mapState(
        'threeRoads',
        [
          'story',
          'text',
          'links',
          'theEnd',
        ]
      ),
    },
    methods: {
      loadArticle: function() {
        const { story, articleId } = this.$route.params;
        console.log(story, articleId);
        this.goToArticle({ story, articleId });
      },
      ...mapMutations(
        'threeRoads',
        [
          'goToArticle',
        ]
      )
    },
    watch: {
      '$route': function () { this.loadArticle() }
    },
    mounted() { this.loadArticle() }
  }
</script>

<style scoped>

</style>