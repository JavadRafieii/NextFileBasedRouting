export default function MainLayout({ children }) {
    return (
        <div>
            <header style={{ margin: "50px 0" }}>
                <h1 style={{ textAlign: "center" }}>Main Header</h1>
            </header>
            <main>{children}</main>
            <footer style={{ margin: "50px 0" }}>
                <p style={{ textAlign: "center" }}>Main Footer</p>
            </footer>
        </div>
    );
}