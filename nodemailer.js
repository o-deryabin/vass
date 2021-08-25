const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "mail.vass.kz@gmail.com",
    pass: "KfT%6zx2W(p!7cPJbUmVY",
  },
});

const mailer = (message) => {
  transporter.sendMail(message, (err, info) => {
    if (err) {
      return console.log(err);
    }
    console.log("Email.send: ", info);
  });
};

module.exports = mailer;
