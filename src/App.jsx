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
        <div className="w-full overflow-x-hidden sm:px-[100px] p-0">
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
