<template>
    <v-app>
        <v-toolbar app>
            <v-toolbar-title class="headline text-uppercase">
                <span v-text="title" />
            </v-toolbar-title>
            <v-spacer />
            <v-btn
              flat
              v-for="(link, index) in links"
              :key="index"
              :to="link.link"
            >
              {{link.text}}
            </v-btn>
        </v-toolbar>

        <v-content>
            <router-view />
        </v-content>
    </v-app>
</template>

<script>
export default {
    name: 'App',
    data: () => ({
        title: 'Лист Персонажа',
        links: [
          { link: '/three-roads', text: 'Три дороги' },
          { link: '/conan', text: 'Конан' },
          { link: '/fargal', text: 'Фаргал' },
          { link: '/hagen', text: 'Хаген' },
        ],
    })
}
</script>
