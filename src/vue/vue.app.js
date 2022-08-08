import Vue from "vue";
import singleSpaVue from "single-spa-vue";
import App from "./main.vue";
import VueRouter from "vue-router";
const Hellos = {
  template: "<div>Vue Hello</div>",
};

const Hello2 = {
  template: "<div>Vue Hello2</div>",
};

const Empty = {
  template: "<div></div>",
};

const routes = [
  { path: "/vue/main", component: Hellos },
  { path: "/vue/hello", component: Hello2 },
  { path: "*", component: Empty },
];
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes,
});
const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    el: "#vue",
    router,
    render(h) {
      return h(App);
    },
  },
});

export const bootstrap = [vueLifecycles.bootstrap];

export const mount = [vueLifecycles.mount];

export const unmount = [vueLifecycles.unmount];
