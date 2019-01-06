<template>
    <v-app>
        <v-toolbar app>
            <v-toolbar-title class="headline text-uppercase">
                <span v-text="title" />
            </v-toolbar-title>
            <v-spacer />
            <v-btn
                flat
                to="/conan"
            >
                Конан
            </v-btn>
            <v-btn
                 flat
                 to="/fargal"
            >
                Фаргал
            </v-btn>
            <v-btn
                flat
                to="/hagen"
            >
                Хаген
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
        title: 'Лист Персонажа'
    })
}
</script>
