import React from "react";
import "./index.css";
import {
    Header,
    Navbar,
    Hero,
    Projects,
    AboutMe,
    Contact,
    Footer,
} from "./components/index";

const App = () => {
    return (
        <div className="w-full overflow-x-hidden bg-slate-200 px-[100px]">
            <Header />
            <Hero />
            <AboutMe />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;
