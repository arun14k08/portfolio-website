import { FormEvent, useEffect, useState } from "react";
import { FailIcon, Spinner, SuccessIcon } from "../assets/SVGAssets";

type FormResponseData = {
    access_key: string;
    email: string;
    name: string;
    message: string;
};

type FormResponse = {
    data?: FormResponseData;
    success: boolean;
    message: string;
};

const Contact = () => {
    const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
    const [formResponse, setFormResponse] = useState<FormResponse | null>();
    const [formLoading, setFormLoading] = useState<boolean>(false);
    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);

        formData.append("access_key", "75f49a45-969d-4cc1-bced-a3c67216a35c");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
        setFormLoading(true);
        await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: json,
        })
            .then((res) => res.json())
            .then((res) => {
                setFormResponse(res);
                setFormSubmitted(true);
            })
            .catch(() => {
                const err: FormResponse = {
                    success: false,
                    message: "Error",
                };
                setFormResponse(err);
            })
            .finally(() => {
                setFormLoading(false);
            });
    };

    useEffect(() => {
        if (!formSubmitted) return;
        setTimeout(() => {
            setFormSubmitted(false);
        }, 3000);
    }, [formSubmitted]);

    return (
        <div
            className="px-6 md:px-12 py-16 flex flex-col gap-8 scroll-mt-12 md:scroll-mt-24"
            id="contact"
        >
            <p className="text-4xl md:text-5xl md:leading-7 font-bold text-[#CCCCCC] text-center">
                Contact Me
            </p>
            {formSubmitted ? (
                <div className="fixed top-24 bg-[#555555] px-4 py-2 rounded-lg right-2 flex items-center justify-center text-xl gap-4 md:mx-auto">
                    {formResponse?.success ? <SuccessIcon /> : <FailIcon />}
                    {formResponse?.message}
                </div>
            ) : (
                ""
            )}
            <form
                action=""
                onSubmit={(event) => handleSubmit(event)}
                className="flex flex-col gap-4 md:w-[700px] md:mx-auto"
            >
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="text-primary"
                />
                <input
                    name="email"
                    type="text"
                    placeholder="Email"
                    className="text-primary"
                />
                <textarea
                    name="message"
                    id=""
                    className="min-h-[200px] md:min-h-[300px]"
                    placeholder="Description"
                ></textarea>
                <button className="button text-xl" type="submit">
                    {formLoading ? <Spinner /> : "Submit"}
                </button>
            </form>
        </div>
    );
};

export default Contact;
