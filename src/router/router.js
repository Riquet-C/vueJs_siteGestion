import {createRouter, createWebHistory} from "vue-router";
import SuppliersList from "@/views/SuppliersList.vue";
import SuppliersMap from "@/views/SuppliersMap.vue";
import SupplierInfo from "@/views/Supplier.vue";
import Supplier from "@/components/Supplier.vue";
import SupplierMap from "@/views/SupplierMap.vue";
import testStore from "@/views/testStore.vue";

const routes = [
    {path: "/suppliers", component: SuppliersList},
    {path: "/map", component: SuppliersMap},
    {path: "/supplier/:id", component: SupplierInfo},
    {path: "/supplierMap/:id", component: SupplierMap},
    {path: "/testStore", component: testStore},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;