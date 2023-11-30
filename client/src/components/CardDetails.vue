<template>
    <v-dialog width="500">
        <template v-slot:activator="{ props }">
            <v-btn v-bind="props" class="top-right-button" icon="mdi-information-outline"></v-btn>
        </template>

        <template v-slot:default="{ isActive }">
            <v-card class="card-details-content">
                <div class="card-details">
                    <h1>{{ cardTitle }}</h1>
                    <p>{{ cardDetails }}</p>
                    <span class="deadline">{{ `${formatDate(cardDeadline)} - ${getStatusComputed}` }}</span>
                    <v-card-actions>
                        <v-spacer></v-spacer>

                        <v-btn text="Voltar" @click="isActive.value = false"></v-btn>
                        <v-btn text="Excluir" append-icon="mdi-delete-circle" @click="isActive.value = false"></v-btn>
                        <v-btn text="Editar" append-icon="mdi-alert-circle" @click="isActive.value = false"></v-btn>
                        <v-btn text="Concluir" append-icon="mdi-check-circle" @click="isActive.value = false"></v-btn>
                    </v-card-actions>
                </div>
            </v-card>
        </template>
    </v-dialog>
</template>

<script>
import convertDateMod from '@/mods/date';


export default {

    props: {
        cardTitle: String,
        cardDetails: String,
        cardDeadline: String
    },
    data() {
        return {
            taskProgress: {
                inDay: 'Em dia',
                late: 'Atrasada'
            },
        }
    },
    computed: {
        getStatusComputed() {
            const currentDate = new Date();
            const deadlineDate = new Date(this.cardDeadline);

            console.log(currentDate, deadlineDate)

            if (deadlineDate < currentDate) {
                return this.taskProgress.late;
            } else {
                return this.taskProgress.inDay;
            }
        }
    },
    methods: {
        formatDate(date) {
            return convertDateMod(date)
        }
    }
}

</script>
<style>
.top-right-button {
    position: absolute;
    top: 0;
    right: 0;
    background: transparent;
    box-shadow: none;

    &:hover {
        box-shadow: none;
    }

    ;

    &:focus {
        box-shadow: none;
    }
}

.card-details-content {
    padding: 20px;
    height: 40vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.card-details h1 {
    line-height: 120%;
    padding: 10px 0px;
}

.card-details p {
    padding: 10px 0px;
    margin-bottom: 10px;
    font-size: 1.2em;
}

.deadline {
    border: 1px solid #dddd;
    padding: 7px;
    border-radius: 5px;
}
</style>