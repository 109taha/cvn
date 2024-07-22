const nodemailer = require("nodemailer");

const sendResetEmail = async (email, subject, html) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    secure: false,
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
  });


  const mailOptions = {
    from: `${process.env.USER}`,
    to: email,
    subject,
    html,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Email error:", error);
    } else {
      console.log("Email sent:", info.response);
    }
  });
};

module.exports = sendResetEmail;
