import { FullScreen } from "./layouts";
import {
    Home,
    About,
    Project,
    NotFound,
    Trade,
    Register,
    Login,
} from "./pages";

export const publicRoutes = [
    { path: "/", component: Home },
    { path: "/about", component: About },
    { path: "/project", component: Project },
    { path: "/trade", component: Trade },
    { path: "/login", component: Login, layout: FullScreen },
    { path: "/*", component: NotFound },
    { path: "/register", component: Register },
];

export const privateRoutes = [];
