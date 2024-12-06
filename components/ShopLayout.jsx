export default function ShopLayout({ children }) {
    return (
        <div>
            <header style={{ margin: "50px 0" }}>
                <h1 style={{ textAlign: "center" }}>Shop Header</h1>
            </header>
            <main>{children}</main>
            <footer style={{ margin: "50px 0" }}>
                <p style={{ textAlign: "center" }}>Shop Footer</p>
            </footer>
        </div>
    );
}