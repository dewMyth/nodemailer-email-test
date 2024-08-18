import { Injectable } from '@nestjs/common';
const nodemailer = require('nodemailer');

@Injectable()
export class AppService {
  async sendEmail() {
    // Using Gmail as the Email Server
    /**
     *
     * To do this,
     * 1. we need a two way authentication enabled gmail account
     * 2. we need create a new app and have app password ( https://knowledge.workspace.google.com/kb/how-to-create-app-passwords-000009237)
     *
     */
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 465,
      auth: {
        user: 'dewmyth.dev@gmail.com', // Use any gmail
        pass: 'qklm neni exwv lzgs', // Replace the app password created for your account
      },
    });

    // Constuct the email options
    const mailOptions = {
      from: '"Dewmith Akalanka 👻" <dewmyth.dev@gmail.com>',
      to: 'akalankadewmith@gmail.com',
      subject: 'First Message',
      text: 'This is a test email sent using Nodemailer.',
    };

    const info = await transporter.sendMail(mailOptions);

    console.log('Message sent: %s', info.messageId);

    return info.messageId
      ? 'Message sent: ' + info.messageId
      : 'Error Sending Message';
  }
}
