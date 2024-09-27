import {defineStore} from 'pinia';
import axios from "axios";

export const useStore = defineStore('myStore', {
    state: () => ({
        suppliers: [],
        loading: false,
        error: null
    }),
    actions: {
        async fetchSuppliers() {
            this.loading = true;
            this.error = null;

            if (this.suppliers.length) {
                this.loading = false;  // Assurer que loading est réinitialisé
                return;
            }

            try {
                const response = await axios.get('https://suppliers.depembroke.fr/api/suppliers');
                this.suppliers = response.data.data.map(supplier => ({
                    id: supplier.id,
                    name: supplier.name,
                    status: supplier.status,
                    checkedAt: supplier.checkedAt,
                    latitude: supplier.latitude,
                    longitude: supplier.longitude,
                    resellers: supplier.resellers,
                }));
            } catch (error) {
                this.error = error.message;
            } finally {
                this.loading = false;
            }
            console.log(this.loading);
        }
    }
})