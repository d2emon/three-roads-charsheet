<template>
    <v-container>
        <v-layout
            text-xs-center
            wrap
        >
            <v-flex xs12>
                <v-card>
                    <v-card-title><h1>Конан</h1></v-card-title>
                    <v-img
                        :src="require('../assets/conan.jpg')"
                    ></v-img>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "Conan"
    }
</script>

<style scoped>

</style>