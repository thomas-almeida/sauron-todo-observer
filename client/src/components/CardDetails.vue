<template>
    <v-dialog width="500">
        <template v-slot:activator="{ props }">
            <v-btn v-bind="props" class="top-right-button" icon="mdi-information-outline"></v-btn>
        </template>

        <template v-slot:default="{ isActive }">
            <v-card title="">
                <h1>{{ cardTitle }}</h1>
                <h3>{{ cardDetails }}</h3>
                <span>{{ cardDeadline }}</span>
                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn text="Voltar" @click="isActive.value = false"></v-btn>
                    <v-btn text="Excluir" append-icon="mdi-delete-circle" @click="isActive.value = false"></v-btn>
                    <v-btn text="Editar" append-icon="mdi-alert-circle" @click="isActive.value = false"></v-btn>
                    <v-btn text="Concluir" append-icon="mdi-check-circle" @click="isActive.value = false"></v-btn>
                </v-card-actions>
            </v-card>
        </template>
    </v-dialog>
</template>

<script>

export default {

    props: {
        cardTitle: String,
        cardDetails: String,
        cardDeadline: String
    },

}

</script>
<style>
    .top-right-button {
        position: absolute;
        top: 0;
        right: 0;
        background: transparent;
        box-shadow: none;

        &:hover{
            box-shadow: none;
        };
        
        &:focus{
            box-shadow: none;
        }
    }
</style>