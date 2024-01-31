function FullScreen({ children }) {
    return (
        <div className="layout__wrapper">
            <div className="layout__inner">
                <div className="layout__content">{children}</div>
            </div>
        </div>
    );
}

export default FullScreen;
