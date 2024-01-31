import { Header, Footer } from "../components";

function Standard({ children }) {
    return (
        <div className="layout__wrapper">
            <Header />
            <div className="layout__inner">
                <div className="layout__content">{children}</div>
            </div>
            <Footer />
        </div>
    );
}

export default Standard;
