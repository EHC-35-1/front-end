import { Header, Footer } from "../components";

function Standard({ children }) {
    return (
        <div className="wrapper">
            <Header />
            <div className="inner">
                <div className="content">{children}</div>
            </div>
            <Footer />
        </div>
    );
}

export default Standard;
