import { PERSONAL_INFO } from "@/config";
import nodemailer from "nodemailer";

interface ContactInfo {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendContactEmail(contactInfo: ContactInfo): Promise<void> {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: PERSONAL_INFO.email,
    subject: contactInfo.subject || "New Contact Form Submission",
    html: `
      <h1>New Contact Form Submission</h1>
      <p><strong>Name:</strong> ${contactInfo.name}</p>
      <p><strong>Email:</strong> ${contactInfo.email}</p>
      <p><strong>Message:</strong> ${contactInfo.message}</p>
    `,
  };

  await transporter.sendMail(mailOptions);
}