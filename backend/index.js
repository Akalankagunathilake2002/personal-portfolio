require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.log("Error with mail transporter:", error);
  } else {
    console.log("Mail server is ready to take messages");
  }
});

app.post("/contact", async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  const mailOptions = {
    from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO,        // your email (fixed)
    replyTo: email,                  // visitor's email (dynamic)
    subject: `New Contact Form Message from ${firstName} ${lastName}`,
    text: `
Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone || "Not provided"}

Message:
${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.json({ code: 200, status: "OK" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ code: 500, status: "ERROR" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Contact server listening on port ${PORT}`);
});
