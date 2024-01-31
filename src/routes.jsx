import { FullScreen, Standard } from "./layouts";
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
    { path: "/", component: Home, layout: Standard },
    { path: "/about", component: About, layout: Standard },
    { path: "/project", component: Project, layout: Standard },
    { path: "/trade", component: Trade, layout: Standard },
    { path: "/login", component: Login, layout: FullScreen },
    { path: "/*", component: NotFound, layout: Standard },
    { path: "/register", component: Register, layout: Standard },
];

export const privateRoutes = [];
