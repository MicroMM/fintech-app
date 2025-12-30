<template>
    <div>
        <button @click="sortBy('amount')">Sort by Amount</button>
        <button @click="sortBy('date')">Sort by Date</button>
        <input v-model="searchCategory" placeholder="Search Category"/>
        <button @click="search">Search</button>
        <ul>
        <li v-for="exp in expenses" :key="exp.id">
            {{ exp.amount }} - {{ exp.category }} - {{ exp.date }}
        </li>
        </ul>
        <div>
            <h3>Totals:</h3>
            <p v-for="(total, cat) in totals" :key="cat"> {{ cat }}: {{ total }}</p>
        </div>

    </div>
</template>

<script setup>
import { useExpensesStore } from "~/stores/expenses";
import {computed, ref} from "vue";
import { onMounted } from 'vue';

const expensesStore = useExpensesStore();

const searchCategory = ref('');
const expenses = computed(() => expensesStore.expenses);
const totals = computed(() => expensesStore.totals);

const sortBy = async (field) => {
    await expensesStore.sortExpenses(field);
};

const search = async () => {
    await expensesStore.searchByCategory(searchCategory.value)
};


//import { useExpensesStore } from "~/stores/expenses";

onMounted (async () => {
    await expensesStore.fetchExpenses();
    await expensesStore.fetchTotals();
    
})

</script>

<style scoped>

</style>