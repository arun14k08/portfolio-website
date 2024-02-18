import React from "react";
import Navbar from "./Navbar";

const Header = () => {
    return (
        <div className="flex flex-1 w-full items-center justify-center p-4 border-dashed border-slate-500 border-2 border-l-transparent border-r-transparent">
            <Navbar />
        </div>
    );
};

export default Header;
