<template>
    <v-card>
        <v-textarea
            label="Заметки"
            v-model="memo"
            rows="7"
        />
    </v-card>
</template>

<script>
    export default {
        name: 'GameMemo',
        data: () => ({
            memo: '',
        })
    }
</script>

<style scoped>

</style>