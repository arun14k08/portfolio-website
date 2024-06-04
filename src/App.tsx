import React from "react";
import Layout from "./layouts/Layout";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
    return (
        <div>
            <Layout>
                <Hero />
                <TechStack />
                <Projects />
                <Contact />
            </Layout>
        </div>
    );
};

export default App;
