<template>
    <v-card>
        <InputBox
                input-box-id="spell"
                title="Spell Name"
                label="Enter Spell"
                default="Spell"
                @input="addSpell"
        />

        <v-toolbar>
            <v-toolbar-title>Заклинания</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn icon flat @click="showInput('spell')"><v-icon>add</v-icon></v-btn>
                <v-btn icon flat @click="resetSpells"><v-icon>clear</v-icon></v-btn>
            </v-toolbar-items>
        </v-toolbar>
        <v-card-text>
            <v-list>
                <v-list-tile
                        v-for="(item, index) in spells"
                        :key="index"
                >
                    <v-list-tile-content>
                        <v-list-tile-title v-html="item"></v-list-tile-title>
                    </v-list-tile-content>
                    <v-list-tile-action>
                        <v-btn icon flat @click="deleteSpell(index)"><v-icon>remove</v-icon></v-btn>
                    </v-list-tile-action>
                </v-list-tile>
            </v-list>
        </v-card-text>
    </v-card>
</template>

<script>
    import { mapState, mapMutations } from 'vuex'
    import InputBox from './InputBox'

    export default {
        name: 'GameSpells',
        components: {
            InputBox,
        },
        computed: {
            ...mapState([
                'spells'
            ]),
        },
        methods: {
            ...mapMutations( 'input', [ 'showInput', ] ),
            ...mapMutations([
                'addSpell',
                'deleteSpell',
                'resetSpells',
            ])
        }
    }
</script>

<style scoped>

</style>