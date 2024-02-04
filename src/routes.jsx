import { FullScreen, Standard } from "./layouts";
import { Home, Project, NotFound, Trade, Register, Login } from "./pages";
import Profile from "./pages/Profile";

export const publicRoutes = [
    { path: "/", component: Home, layout: Standard },
    { path: "/project", component: Project, layout: Standard },
    { path: "/trade", component: Trade, layout: Standard },
    { path: "/login", component: Login, layout: FullScreen },
    { path: "/register", component: Register, layout: FullScreen },
    { path: "/profile", component: Profile, layout: Standard },
    { path: "/*", component: NotFound, layout: Standard },
];

export const privateRoutes = [];
