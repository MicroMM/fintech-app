<template>
    <div>
        <h1> Pinia Test</h1>
        <p> Expenses count: {{ expensesStore.expenses.length }}</p>
        <button @click="expensesStore.fetchExpenses">Load</button>

         <ExpenseForm />
        <ExpenseList />

    </div>
</template>

<script setup>
    const expensesStore = useExpensesStore()

</script>

<style scoped>

</style>