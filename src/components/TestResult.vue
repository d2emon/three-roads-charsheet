<template>
    <v-dialog
        v-model="visible"
        width="500"
    >
        <v-card>
            <v-card-title
                class="headline grey lighten-2"
                primary-title
                v-text="title"
            />
            <v-card-text v-text="result" />
            <v-divider />
            <v-card-actions>
                <v-spacer />
                <v-btn
                    color="primary"
                    @click="hideResult"
                >
                    Ok
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    import { mapState, mapMutations } from 'vuex'

    export default {
        name: 'TestResult',
        computed: {
            ...mapState(
                'roll',
                [
                    'result',
                    'showResult',
                ]
            ),
        },
        props: [
            'title',
        ],
        data: () => ({
            visible: false,
        }),
        methods: {
            ...mapMutations(
                'roll',
                [
                    'hideResult',
                ]
            )
        },
        watch: {
            showResult(value) { this.visible = value }
        }
    }
</script>

<style scoped>
</style>
