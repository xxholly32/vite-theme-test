import generatedRoutes from 'virtual:generated-pages'
import { createApp } from "vue";
import { setupI18n } from "./modules/i18n";
import { setupLayouts } from 'layouts-generated'
import App from './App.vue'
import { createRouter, createWebHashHistory } from "vue-router";
import 'virtual:windi.css'
import 'virtual:windi-devtools'
import './styles/main.css'

(async () => {
  const app = createApp(App);

  setupI18n(app);

  const routes = setupLayouts(generatedRoutes);
  const router = createRouter({
    history: createWebHashHistory(),
    routes,
  });
  app.use(router);

  app.mount("#app", true);
})();
