import VueRouter from "vue-router";
import FirstComponent from "./components/FirstComponent";
import Bookables from "./bookables/Bookables";
// import ExampleComponent from "./components/ExampleComponent";


const routes = [
    {
        path: "/",
        component: Bookables,
        name: "home",
    },
    {
        path: "/first",
        component: FirstComponent,
        name: "first",
    },
];

const router = new VueRouter({
    routes,
    mode: "history",
});

export default router;
