<template>
    <v-dialog
        v-model="visible"
        width="300"
    >
        <v-card>
            <v-card-title
                class="headline grey lighten-2"
                primary-title
            >
                Бросок
            </v-card-title>
            <v-card-text>
                <v-container grid-list-md>
                    <v-layout wrap>
                        <v-flex xs4>
                            <v-text-field
                                label="Костей"
                                v-model="dices"
                            />
                        </v-flex>
                        <v-flex xs4><h1>d</h1></v-flex>
                        <v-flex xs4>
                            <v-text-field
                                label="Граней"
                                v-model="sides"
                            />
                        </v-flex>
                        <v-flex xs12><h1>{{result}}</h1></v-flex>
                    </v-layout>
                </v-container>
            </v-card-text>
            <v-divider />
            <v-card-actions>
                <v-spacer />
                <v-btn @click="doRoll">Бросить</v-btn>
                <v-btn
                    color="primary"
                    @click="hideRollBox"
                >
                    Ok
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    import { mapState, mapMutations } from 'vuex'
    import dice from '../dice'

    export default {
        name: 'RollBox',
        computed: {
            ...mapState(
                'roll',
                [
                    // 'result',
                    'showRollBox',
                ]
            ),
        },
        props: [
            'title',
        ],
        data: () => ({
            visible: false,
            dices: 1,
            sides: 6,
            result: '',
        }),
        methods: {
            doRoll() { this.result = dice(this.dices, this.sides) },
            ...mapMutations(
                'roll',
                [
                    'hideRollBox',
                ]
            )
        },
        watch: {
            showRollBox(value) { this.visible = value }
        }
    }
</script>

<style scoped>

</style>