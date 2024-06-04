import Layout from "./layouts/Layout";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
    return (
        <div>
            <Layout>
                <Hero />
                <Skills />
                <Projects />
                <Contact />
            </Layout>
        </div>
    );
};

export default App;
