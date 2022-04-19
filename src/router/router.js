import ToDoList from "@/pages/ToDoList.vue";
import { createWebHistory, createRouter } from "vue-router";

export const routes = [
  {
    path: "/",
    component: ToDoList,
    title: "To Do List",
  },
  {
    path: "/else",
    component: ToDoList,
    title: "Next Page",
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
