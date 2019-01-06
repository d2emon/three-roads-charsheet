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
            <v-card-text>
                <v-text-field
                    v-model="value"
                    :label="label"
                    required
                />
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="primary"
                    @click="onInput"
                >
                    Ok
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        name: 'InputBox',
        props: [
            'title',
            'label',
            'default',
            'inputBoxId'
        ],
        computed: {
            ...mapState(
                'input',
                [
                    'inputBoxes',
                ]
            )
        },
        data: () => ({
            visible: false,
            value: '',
        }),
        methods: {
            showDialog(value) {
                this.value = this.default
                this.visible = value
            },
            onInput() {
                this.$emit('input', this.value)
                // this.visible = false
                this.$store.commit('input/hideInput', this.inputBoxId)
            }
        },
        watch: {
            inputBoxes(value) {
                this.showDialog(value[this.inputBoxId])
            }
        }
    }
</script>

<style scoped>

</style>