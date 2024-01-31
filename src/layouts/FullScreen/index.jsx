function FullScreen({ children }) {
    return (
        <div className="wrapper">
            <div className="inner">
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default FullScreen;
