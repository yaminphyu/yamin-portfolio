// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const nodemailer = require('nodemailer');
const { OAuth2Client  } = require('google-auth-library');

// Define OAuth2 credentials
const CLIENT_ID = process.env.OAUTH_CLIENT_ID;
const CLIENT_SECRET = process.env.OAUTH_CLIENT_SECRET;
const REFRESH_TOKEN = process.env.OAUTH_REFRESH_TOKEN;
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const EMAIL_USERNAME = process.env.OAUTH_EMAIL_USERNAME;

// Create OAuth2 client
const oAuth2Client = new OAuth2Client(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

export default async function handler(req, res) {
    if (req.method === 'POST') {
      try {
        const accessToken = await oAuth2Client.getAccessToken();
        res.status(200).json({ accessToken });
    
        // const transporter = nodemailer.createTransport({
        //   service: 'gmail',
        //   auth: {
        //     type: 'OAuth2',
        //     user: EMAIL_USERNAME,
        //     clientId: CLIENT_ID,
        //     clientSecret: CLIENT_SECRET,
        //     refreshToken: REFRESH_TOKEN,
        //     accessToken: accessToken.token,
        //   },
        // });
    
        // const mailOptions = {
        //   from: EMAIL_USERNAME,
        //   to: 'yamin2171995@gmail.com',
        //   subject: 'Nodemailer OAuth2 Test',
        //   text: 'Hello from OAuth2!',
        //   html: '<h1>Hello from OAuth2!</h1>',
        // };
    
        // const result = await transporter.sendMail(mailOptions);
        // console.log('Email sent:', result);
    
      } catch (error) {
        console.error('Error sending email:', error);
      }
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
}


// import nodemailer from 'nodemailer';

// export default async function handler(req, res) {
//     if (req.method === 'POST') {
//       const { name, email, message } = req.body;
  
//       const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//           user: process.env.EMAIL_USERNAME,
//           pass: process.env.EMAIL_PASSWORD,
//         },
//       });
  
//       const mailOptions = {
//         from: email,
//         to: process.env.RECEIVER_EMAIL, // Change this to your email address
//         subject: `Contact Form Submission from ${name}`,
//         text: message,
//       };
      
//       try {
//         await transporter.sendMail(mailOptions);
//         res.status(200).json({ success: true });
//       } catch (error) {
//         console.error(error);
//         res.status(500).json({ success: false, error: 'Failed to send email.', mailOptions: mailOptions });
//       }
//     } else {
//       res.status(405).json({ success: false, error: 'Method not allowed' });
//     }
// }

// export default function handler(req, res) {
//     if (req.method === 'POST') {
//         const { name, email, subject, message } = req.body;
//         const transporter = nodemailer.createTransport({
//             service: 'gmail',
//             auth: {
//                 user: process.env.EMAIL,
//                 pass: process.env.PASSWORD
//             }
//         });
//         const mailOptions = {
//             from: email,
//             to: process.env.EMAIL,
//             subject: subject,
//             text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
//         };
//         transporter.sendMail(mailOptions, (error, info) => {
//             if (error) {
//                 console.log(error);
//                 res.status(500).json({ error: 'Failed to send email' });
//             } else {
//                 console.log('Email sent: ' + info.response);
//                 res.status(200).json({ message: 'Email sent successfully' });
//             }
//         });
//     } else {
//         res.status(405).json({ error: 'Method not allowed' });
//     }
//     // res.status(200).json({ name: "Contact...." });
// }