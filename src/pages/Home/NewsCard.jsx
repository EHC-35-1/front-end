import { useTheme } from "../../layout/ThemeContext";

function NewsCard() {
    // eslint-disable-next-line no-unused-vars
    const { isDarkTheme, toggleTheme } = useTheme();
    const themeClass = isDarkTheme
        ? "text-bg-dark bg-secondary"
        : "text-bg-light bg-light";
    return (
        <>
            <div className={`card ${themeClass}`}>
                <div className="container">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptates repellat repellendus quae sint eius aliquid?
                        Voluptas consequatur itaque ab accusamus officiis
                        molestias eos blanditiis corrupti quam labore, harum
                        provident architecto!
                    </p>
                </div>
            </div>
        </>
    );
}

export default NewsCard;
