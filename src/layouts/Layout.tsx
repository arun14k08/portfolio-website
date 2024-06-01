import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface Props {
    children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
    return (
        <div className="bg-primary text-white md:px-12 min-h-screen">
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;
