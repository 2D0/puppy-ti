import React from 'react';
import { Footer, Header } from "@components/organisms/index.jsx";

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export { Layout };