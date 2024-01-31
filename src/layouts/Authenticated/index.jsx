import { Header, Footer } from "../components";

function Authenticated({ children }) {
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

export default Authenticated;
