const express = require("express");
const cors = require("cors");
require("dotenv").config();
var nodemailer = require("nodemailer");
const app = express();

app.use(
    cors({
        origin: process.env.CLIENT_ORIGIN,
        credentials: true,
    })
);

app.get("/", (req, res) => {
    res.json("ok");
});

var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "arun14k03@gmail.com",
        pass: "Arun@asdf123",
    },
});

var mailOptions = {
    from: "arunk14k05@gmail.com",
    to: "arun14k08@gmail.com",
    subject: "Sending Email using Node.js",
    text: "That was easy!",
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log("Email sent: " + info.response);
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
});
