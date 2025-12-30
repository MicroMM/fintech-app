import {defineStore} from 'pinia';

export const useExpensesStore = defineStore('expenses', {
    state: () => ({
        expenses: [],
        totals: {},
    }),
    
    actions: {
        async fetchExpenses () {
            const response = await fetch('http://localhost:3000/expenses');
            this.expenses = await response.json();
        },
        async addExpense(expense) {
            const response = await fetch('http://localhost:3000/expenses' , {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(expense),
            });
            const newExpense = await response.json();
            this.expenses.push(newExpense);
        },
        async fetchTotals() {
            const response = await fetch('http://localhost:3000/expenses/totals');
            this.totals = await response.json();
        },
        // Add sort and search actions calling backend
        async sortExpenses(field) {
            const response = await fetch ('http://localhost:3000/expenses/sort?field=${field}');
            this.expenses = await response.json();
        },
        async searchByCategory(category) {
            const response = await fetch('http://localhost:3000/expenses/search?category=${category}');
            this.expenses = await response.json();
        },
    },
});