import VueRouter from "vue-router"
import About from "../pages/About"
import Home from "../pages/Home"
import News from "../pages/News"
import Messages from "../pages/Messages"

export default new VueRouter({
    routes:[
        {
            path: "/about",
            component: About
        },
        {
            path: "/home",
            component: Home,
            children:[
                {
                    path: "news",
                    component: News
                },
                {
                    path:"messages",
                    component: Messages
                }
            ]
        }
    ]
})