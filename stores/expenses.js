import {defineStore} from 'pinia';

export const useExpensesStore = defineStore('expenses', {
    state: () => ({
        expenses: [],
        totals: {},
    }),
    
    actions: {
        async fetchExpenses () {
            const response = await fetch('https://fintechback-app-production.up.railway.app/expenses');
            this.expenses = await response.json();
        },
        async addExpense(expense) {
            const response = await fetch('https://fintechback-app-production.up.railway.app/expenses' , {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(expense),
            });
            const newExpense = await response.json();
            this.expenses.push(newExpense);
        },
        async fetchTotals() {
            const response = await fetch('https://fintechback-app-production.up.railway.app/expenses/totals');
            this.totals = await response.json();
        },
        // Add sort and search actions calling backend
        async sortExpenses(field) {
            const response = await fetch ('https://fintechback-app-production.up.railway.app/expenses/sort?field=${field}');
            this.expenses = await response.json();
        },
        async searchByCategory(category) {
            const response = await fetch('https://fintechback-app-production.up.railway.app/expenses/search?category=${category}');
            this.expenses = await response.json();
        },
    },
});