import React from "react";

const Contact = () => {
    return (
        <div
            className="px-6 md:px-12 py-16 flex flex-col gap-8 scroll-mt-12 md:scroll-mt-24"
            id="contact"
        >
            <p className="text-4xl md:text-5xl md:leading-7 font-bold text-[#CCCCCC] text-center">
                Contact Me
            </p>
            <form
                action=""
                className="flex flex-col gap-4 md:w-[700px] md:mx-auto"
            >
                <input
                    type="text"
                    placeholder="Email"
                    className="text-primary"
                />
                <textarea
                    name=""
                    id=""
                    className="min-h-[200px] md:min-h-[300px]"
                    placeholder="Description"
                ></textarea>
                <button className="button text-xl" type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Contact;
