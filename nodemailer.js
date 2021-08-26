// const nodemailer = require("nodemailer");

// const transporter = nodemailer.createTransport({
//   service: "Gmail",
//   // host: "smtp.gmail.com",
//   // port: 465,
//   // secure: true, // true for 465, false for other ports
//   auth: {
//     type: "OAuth2",
//     user: process.env.EMAIL,
//     accessToken:
//       "ya29.a0ARrdaM9Wj-U0zG_o-r_NAphpwWwoQBENJcZImx8YvxkQFsFzy18-xvmgqommtUO780_1UATWtJyzQbFoyxQWMNEFW-anizCPfb7TNPOLJp8csZKo3bXyic0kQWkLYY_C2OSz2kBK6Bam3tWSP_fhq2twL16m",
//     refreshToken: process.env.EMAIL_REFRECH_TOKEN,
//     clientId: process.env.EMAIL_CLIENT_ID,
//     clientSecret: process.env.EMAIL_CLIENT_SECRET,
//   },
// });

// //Hm6#cWk(kxXqm!8)b%raS
// //hello.vass.kz

// transporter.verify((err, success) => {
//   if (err) {
//     console.log(err);
//   }

//   console.log("Server is ready to take our messages ", success);

//   transporter.on("token", (token) => {
//     console.log("A new access token was generated");
//     console.log("User: %s", token.user);
//     console.log("Access Token: %s", token.accessToken);
//     console.log("Expires: %s", new Date(token.expires));
//   });
// });

// const mailer = (message) => {
//   transporter.sendMail(message, (err, info) => {
//     if (err) {
//       return console.log(err);
//     }
//     console.log("Email.send: ", info);
//   });
// };

// module.exports = mailer;

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport(
  {
    pool: true,
    service: "Gmail",
    auth: {
      type: "OAuth2",
      user: process.env.EMAIL,
      refreshToken: process.env.EMAIL_REFRECH_TOKEN,
      clientId: process.env.EMAIL_CLIENT_ID,
      clientSecret: process.env.EMAIL_CLIENT_SECRET,
    },
  },
  {
    from: `Vass.kz <${process.env.EMAIL}>`,
  }
);

transporter.verify((error, success) => {
  if (error) return console.log(error);
  console.log("Server is ready to take our messages: ", success);
  transporter.on("token", (token) => {
    console.log("A new access token was generated");
    console.log("User: %s", token.user);
    console.log("Access Token: %s", token.accessToken);
    console.log("Expires: %s", new Date(token.expires));
  });
});

const mailer = (message) => {
  transporter.sendMail(message, (err, info) => {
    if (err) return console.log(err);
    console.log("Email sent: ", info);
  });
};

module.exports = mailer;
