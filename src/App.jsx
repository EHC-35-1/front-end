import { Route, Routes } from "react-router-dom";

import { publicRoutes } from "./routes";

function App() {
    return (
        <Routes>
            {/* To add to page, go to src/routes.jsx */}
            {publicRoutes.map((route, index) => {
                const Layout = route.layout;
                const Page = route.component;

                return (
                    <Route
                        key={index}
                        path={route.path}
                        element={
                            <Layout>
                                <Page />
                            </Layout>
                        }
                    />
                );
            })}
        </Routes>
    );
}

export default App;
