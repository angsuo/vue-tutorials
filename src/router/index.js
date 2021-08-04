import VueRouter from "vue-router";
import About from "../pages/About";
import Home from "../pages/Home";
import News from "../pages/News";
import Messages from "../pages/Messages";
import Detail from "../pages/Detail";
import MiniDetail from "../pages/MiniDetail";

export default new VueRouter({
    mode:"",
  routes: [
    {
      path: "/about",
      component: About,
    },
    {
      path: "/home",
      component: Home,
      children: [
        {
          path: "news",
          component: News,
        },
        {
          path: "messages",
          component: Messages,
          children: [
            {
              name: "detailView",
              path: "detail/:id/:msg",
              component: Detail,
              // props can be a function which can read the $route object
              props(route) {
                console.log("passed route object:", route);
                return {
                  params: {
                    id: route.params.id,
                    msg: route.params.msg,
                  },
                  query: {
                    toQuery: route.query.toQuery,
                  },
                };
              },
              children: [
                {
                  name: "miniDetailView",
                  path: "minidetail",
                  component: MiniDetail,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
});
