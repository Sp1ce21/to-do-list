import { createStore } from "vuex";
import { toDoListModule } from "@/store/toDoList";

export default createStore({
    modules: {
        toDoList: toDoListModule
    }
})