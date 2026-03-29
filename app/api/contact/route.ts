import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Create transporter once (not on every request)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

// Simple HTML escape to prevent injection
function escapeHtml(str: string) {
  return str.replace(/[&<>"']/g, (match) => {
    const map: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    };
    return map[match];
  });
}

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Sanitize message
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br>');

    // Fire-and-forget (non-blocking)
    transporter.sendMail({
      from: `"Msyntra Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.OUTLOOK_EMAIL,
      replyTo: email,
      subject: `New Contact Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #14B8A6;">New Message via Msyntra Website</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Message:</strong></p>
          <div style="background: #f4f4f4; padding: 15px; border-radius: 8px;">
            ${safeMessage}
          </div>
        </div>
      `,
    }).catch((err) => {
      console.error('Email send error:', err);
    });

    // Respond immediately
    return NextResponse.json(
      { message: 'Message received' },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('Server error:', error);

    return NextResponse.json(
      { error: 'Failed to process request', details: error.message },
      { status: 500 }
    );
  }
}