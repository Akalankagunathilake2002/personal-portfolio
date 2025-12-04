// api/contact.js
const nodemailer = require("nodemailer");

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { firstName, lastName, email, phone, message } = req.body || {};

  if (!firstName || !lastName || !email || !message) {
    return res.status(400).json({ code: 400, status: "INVALID_INPUT" });
  }

  // Transporter config – uses env vars from Vercel
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO,
    replyTo: email,
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
    return res.status(200).json({ code: 200, status: "OK" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ code: 500, status: "ERROR" });
  }
};
