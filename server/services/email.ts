import nodemailer from 'nodemailer';

interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Create a transporter (replace with real SMTP credentials in production)
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.example.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER || 'user@example.com',
    pass: process.env.SMTP_PASS || 'password',
  },
});

export async function sendContactEmail(data: EmailData): Promise<boolean> {
  try {
    // For development, log the email instead of sending it
    if (process.env.NODE_ENV === 'development') {
      console.log('Email would be sent:', {
        to: process.env.CONTACT_EMAIL || 'contact@johndoe.com',
        subject: data.subject,
        html: generateEmailTemplate(data)
      });
      return true;
    }
    
    // In production, actually send the email
    const info = await transporter.sendMail({
      from: `"Portfolio Website" <${process.env.SMTP_FROM || 'noreply@johndoe.com'}>`,
      to: process.env.CONTACT_EMAIL || 'contact@johndoe.com',
      replyTo: data.email,
      subject: data.subject,
      html: generateEmailTemplate(data),
    });
    
    console.log('Email sent:', info.messageId);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
}

function generateEmailTemplate(data: EmailData): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
        }
        .container {
          padding: 20px;
          border: 1px solid #e0e0e0;
          border-radius: 5px;
        }
        .header {
          background-color: #0070F3;
          padding: 15px;
          color: white;
          border-radius: 5px 5px 0 0;
          margin: -20px -20px 20px;
        }
        .footer {
          margin-top: 30px;
          font-size: 12px;
          color: #666;
          border-top: 1px solid #e0e0e0;
          padding-top: 15px;
        }
        .info-row {
          margin-bottom: 10px;
        }
        .info-label {
          font-weight: bold;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>New Contact Form Submission</h2>
        </div>
        
        <div class="info-row">
          <span class="info-label">Name:</span> ${data.name}
        </div>
        
        <div class="info-row">
          <span class="info-label">Email:</span> ${data.email}
        </div>
        
        <div class="info-row">
          <span class="info-label">Subject:</span> ${data.subject}
        </div>
        
        <div class="info-row">
          <span class="info-label">Message:</span>
          <p>${data.message.replace(/\n/g, '<br>')}</p>
        </div>
        
        <div class="footer">
          This email was sent from your portfolio contact form.
        </div>
      </div>
    </body>
    </html>
  `;
}
