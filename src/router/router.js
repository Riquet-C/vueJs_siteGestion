import { createRouter, createWebHistory } from "vue-router";
import SuppliersList from "@/views/SuppliersList.vue";
import SuppliersMap from "@/views/SuppliersMap.vue";
import SupplierInfo from "@/views/SupplierInfo.vue";
import Supplier from "@/components/Supplier.vue";

const routes = [
    { path: "/suppliers", component: SuppliersList },
    { path: "/map", component: SuppliersMap },
     { path: "/supplier/:id", component: SupplierInfo },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;