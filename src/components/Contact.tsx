import React from "react";

const Contact = () => {
    return (
        <div className="px-12 py-16 flex flex-col gap-8">
            <p className="text-5xl leading-7 font-bold text-[#CCCCCC] text-center">
                Contact Me
            </p>
            <form action="" className="flex flex-col gap-4 w-[700px] mx-auto">
                <input
                    type="text"
                    placeholder="Email"
                    className="text-primary"
                />
                <textarea name="" id="" className="min-h-[300px]" placeholder="Description"></textarea>
                <button className="button text-xl" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Contact;
