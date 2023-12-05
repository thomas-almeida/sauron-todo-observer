<template>
    <v-navigation-drawer class="bordered-special" :width="400">

        <div>
            <div class="heading">
                <h1>History <CreateModal /></h1>
            </div>
        </div>

        <div>
            <TaskList />
        </div>

    </v-navigation-drawer>
</template>

<script setup>
import CreateModal from './CreateModal.vue';
import TaskList from './TaskList.vue';

</script>

<style>
.v-navigation-drawer__content {
    border-right: 1px solid #dddd;
    box-shadow: 2px 2px 4px #dddd;
}

.float-rigth {
    position: absolute;
    cursor: pointer;
    top: 10px;
    right: 10px;
}

h1{
    display: flex;
    align-items: center;
    gap: 16px;
}

</style>