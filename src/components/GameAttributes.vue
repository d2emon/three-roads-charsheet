<template>
    <v-layout>
        <v-flex xs4
            v-for="(item, index) in attrib"
            :key="index"
        >
            <v-card>
                <v-card-title primary-title>
                    <h3 v-html="names[index]" />
                </v-card-title>
                <v-card-text>
                    <h4>{{item.current}} / {{item.max}}</h4>
                </v-card-text>
                <v-card-actions>
                    <v-btn @click="doTest(index)">Проверить</v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
    import { mapState, mapMutations, mapActions } from 'vuex'

    export default {
        name: 'GameAttributes',
        props: [
            'names'
        ],
        computed: {
            ...mapState([
                'attrib',
            ]),
        },
        methods: {
            doTest(index) {
                this.testAttrib(index)
                    .then(result => {
                        this.setResult(result ? 'Успех!' : 'Провал!')
                        this.modifyAttrib({ index, value: -1 })
                    });
            },
            ...mapActions([ 'testAttrib', ]),
            ...mapMutations([ 'modifyAttrib', ]),
            ...mapMutations( 'roll', [ 'setResult', ] ),
        },
    }
</script>

<style scoped>

</style>