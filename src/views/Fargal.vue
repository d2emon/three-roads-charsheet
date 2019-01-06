<template>
    <v-container>
        <v-layout
                text-xs-center
                wrap
        >
            <v-flex xs12>
                <v-card>
                    <v-card-title><h1>Фаргал</h1></v-card-title>
                    <v-img
                            :src="require('../assets/fargal.jpg')"
                    ></v-img>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "Fargal"
    }
</script>

<style scoped>

</style>