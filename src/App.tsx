import React from "react";
import Layout from "./layouts/Layout";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";

const App = () => {
    return (
        <div>
            <Layout>
                <Hero/>
                <TechStack/>
            </Layout>
        </div>
    );
};

export default App;
