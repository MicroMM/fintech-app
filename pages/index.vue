<template>     
    <div>
        <h1>Expense Tracker App</h1>
        <ExpenseForm />
        <ExpenseList />
    </div>
</template>

<script setup>

//import { onMounted } from 'vue';
//import { useExpensesStore } from "~/stores/expenses";

//const expensesStore = useExpensesStore();

/**onMounted (async () => {
    await expensesStore.fetchExpenses();
    await expensesStore.fetchTotals();
    
    return {};
    
})**/

/**definePageMeta({
    async asyncData() {
        await expensesStore.fetchExpenses();
        await expensesStore.fetchTotals();
        return {};        
    },
}); **/

</script>

<style scoped>
    
    .container { max-width: 1200px; margin: 0 auto; padding: 2rem}
    .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-top: 2rem;}

</style>