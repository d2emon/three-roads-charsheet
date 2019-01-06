<template>
    <v-card>
        <v-toolbar>
            <v-toolbar-title>Время</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn icon flat @click="modifyTime(-1)"><v-icon>fast_rewind</v-icon></v-btn>
                <v-btn icon flat @click="modifyTime(1)"><v-icon>fast_forward</v-icon></v-btn>
                <v-btn icon flat @click="resetTime"><v-icon>replay</v-icon></v-btn>
            </v-toolbar-items>
        </v-toolbar>
        <v-card-text>
            <v-progress-circular
                    :value="(time / 24) * 100"
                    :size="100"
                    :width="15"
            >
                {{time}}
            </v-progress-circular>
        </v-card-text>
    </v-card>
</template>

<script>
    import { mapState, mapMutations } from 'vuex'

    export default {
        name: 'GameTime',
        computed: {
            ...mapState([
                'time'
            ]),
        },
        methods: {
            ...mapMutations([
                'modifyTime',
                'resetTime',
            ])
        }
    }
</script>

<style scoped>

</style>