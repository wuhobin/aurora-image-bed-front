import Vue from "vue";
import VueRouter from "vue-router";

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history', //去掉url中的#
  routes: [
    {
      path: "/",
      name: "homePage",
      component: () => import("@/views/HomePage"),
    },
    {
      path: "/login",
      name: "loginPage",
      component: () => import("@/views/LoginPage"),
    },
    {
      path: "/signup",
      name: "signUpPage",
      component: () => import("@/views/SignUpPage"),
    },
  ],
});

export default router;
