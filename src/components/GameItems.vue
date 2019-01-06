<template>
    <v-card>
        <InputBox
                input-box-id="item"
                title="Item Name"
                label="Enter Item"
                default="Item"
                @input="addItem"
        />

        <v-toolbar>
            <v-toolbar-title>Предметы</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn icon flat @click="showInput('item')"><v-icon>add</v-icon></v-btn>
                <v-btn icon flat @click="resetItems"><v-icon>clear</v-icon></v-btn>
            </v-toolbar-items>
        </v-toolbar>
        <v-card-text>
            <v-list>
                <v-list-tile
                        v-for="(item, index) in items"
                        :key="index"
                >
                    <v-list-tile-content>
                        <v-list-tile-title v-html="item"></v-list-tile-title>
                    </v-list-tile-content>
                    <v-list-tile-action>
                        <v-btn icon flat @click="deleteItem(index)"><v-icon>remove</v-icon></v-btn>
                        <v-btn icon flat @click="eatItem(index)"><v-icon>restaurant</v-icon></v-btn>
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
        name: 'GameItems',
        components: {
            InputBox,
        },
        computed: {
            ...mapState([
                'items'
            ]),
        },
        methods: {
            eatItem(index) {
                this.deleteItem(index)
                this.modifyAttrib({ index: 1, value: 1 })
            },

            ...mapMutations( 'input', [ 'showInput', ] ),
            ...mapMutations([
                'addItem',
                'deleteItem',
                'resetItems',
                'modifyAttrib',
            ])
        }
    }
</script>

<style scoped>

</style>