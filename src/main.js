import { createApp } from "vue";
import App from "./App.vue";
import VFocus from "@/directives/VFocus";
import components from "@/components/UI/index";
import router from "@/router/router";
import store from "@/store";
const app = createApp(App);

components.forEach((component) => {
  app.component(component.name, component);
});

app.directive("focus", VFocus);

app.use(router).use(store).mount("#app");
