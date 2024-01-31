import { Route, Routes } from "react-router-dom";

import { ThemeProvider, Standard } from "./layouts";
import { publicRoutes } from "./routes";

function App() {
    return (
        <ThemeProvider>
            <Routes>
                {/* To add to page, go to src/routes.jsx */}
                {publicRoutes.map((route, index) => {
                    const Layout = route.layout ? route.layout : Standard;
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
        </ThemeProvider>
    );
}

export default App;
