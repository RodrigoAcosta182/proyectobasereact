import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login"
const routes = [
  {
    path: "/home",
    component: Home,
    title: "Home",
    needsAuth: false,
  },
  {
    path: "/",
    component: Login,
    title: "Login",
    needsAuth: false,
  },
];

export default routes;
