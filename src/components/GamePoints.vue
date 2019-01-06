<template>
    <v-card>
        <InputBox
            input-box-id="points"
            title="Add Points"
            label="How Many"
            :default="0"
            @input="addPoints"
        />

        <v-toolbar>
            <v-toolbar-title>Метки</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn icon flat @click="addPoints(1)"><v-icon>done</v-icon></v-btn>
                <v-btn icon flat @click="showInput('points')"><v-icon>done_all</v-icon></v-btn>
                <v-btn icon flat @click="deletePoint"><v-icon>remove</v-icon></v-btn>
                <v-btn icon flat @click="clearPoints"><v-icon>clear</v-icon></v-btn>
                <v-btn icon flat @click="resetPoints"><v-icon>replay</v-icon></v-btn>
            </v-toolbar-items>
        </v-toolbar>
        <v-card-text>
            <v-checkbox
                v-for="index in points"
                :label="`${index}`"
                v-model="checkboxes"
                :value="index"
            />
        </v-card-text>
    </v-card>
</template>

<script>
    import { mapState, mapMutations } from 'vuex'
    import InputBox from './InputBox'

    export default {
        name: 'GamePoints',
        components: {
            InputBox,
        },
        computed: {
            ...mapState([
                'points',
                'pointsValues',
            ]),
        },
        data: () => ({
            checkboxes: []
        }),
        methods: {
            ...mapMutations( 'input', [ 'showInput', ] ),
            ...mapMutations([
                'addPoints',
                'deletePoint',
                'clearPoints',
                'resetPoints',
            ])
        },
        watch: {
            pointsValues(value) {
                this.checkboxes = value
            },
        }
    }
</script>

<style scoped>

</style>