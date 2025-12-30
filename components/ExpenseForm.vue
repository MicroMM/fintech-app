<template>

    <form @submit.prevent="addExpense">
        <input v-model="amount" type="number" placeholder="Amount" required/>
        <input v-model="category" type="text" placeholder="Category" required/>
        <input v-model="date" type="date" required/>
        <button type="submit">Add Expense</button>
    </form>
</template>

<script setup>
import { useExpensesStore } from "~/stores/expenses"; 
import { ref } from "vue"; 
const expensesStore = useExpensesStore()

const amount = ref(0);
const category = ref('');
const date = ref('');

const addExpense = async () => {
    await expensesStore.addExpense({amount: amount.value, category: category.value, date: date.value});
    amount.value = 0;
    category.value = '';
    date.value = '';
    
};

</script>

<style scoped>

</style>