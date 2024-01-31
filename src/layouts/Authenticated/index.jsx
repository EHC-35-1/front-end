import { Header, Footer } from "../components";

function Authenticated({ children }) {
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

export default Authenticated;
