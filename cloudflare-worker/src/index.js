import { EmailMessage } from "cloudflare:email";
import { createMimeMessage } from "mimetext";

export default {
  async fetch(request, env, ctx) {
    // Handle CORS preflight requests
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Max-Age': '86400',
        },
      });
    }

    // Only allow POST requests for form submission
    if (request.method !== 'POST') {
      return new Response('Method not allowed', { 
        status: 405,
        headers: {
          'Access-Control-Allow-Origin': '*',
        }
      });
    }

    try {
      // Parse form data
      const formData = await request.formData();
      
      // Extract form fields
      const name = formData.get('name');
      const email = formData.get('email');
      const subject = formData.get('subject');
      const message = formData.get('message');

      // Validate required fields
      if (!name || !email || !subject || !message) {
        return new Response(JSON.stringify({
          success: false,
          error: 'All fields are required'
        }), {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          }
        });
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return new Response(JSON.stringify({
          success: false,
          error: 'Invalid email format'
        }), {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          }
        });
      }

      // Create MIME message
      const msg = createMimeMessage();
      msg.setSender({ 
        name: "Portfolio Contact Form", 
        addr: env.SENDER_EMAIL || "hello@soufianebelgana.me" 
      });
      msg.setRecipient(env.RECIPIENT_EMAIL || "hello@soufianebelgana.me");
      msg.setSubject(`Portfolio Contact: ${subject}`);
      
      // Create HTML email content
      const htmlContent = `
        <html>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
              <h2 style="color: #1e40af; border-bottom: 2px solid #1e40af; padding-bottom: 10px;">
                New Contact Form Submission
              </h2>
              
              <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="margin-top: 0; color: #495057;">Contact Details</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Subject:</strong> ${subject}</p>
              </div>
              
              <div style="background-color: #ffffff; padding: 20px; border: 1px solid #dee2e6; border-radius: 8px;">
                <h3 style="margin-top: 0; color: #495057;">Message</h3>
                <p style="white-space: pre-wrap;">${message}</p>
              </div>
              
              <div style="margin-top: 30px; padding: 15px; background-color: #e3f2fd; border-radius: 8px;">
                <p style="margin: 0; font-size: 14px; color: #1565c0;">
                  <strong>Reply to:</strong> ${email}<br>
                  <strong>Submitted:</strong> ${new Date().toLocaleString()}
                </p>
              </div>
            </div>
          </body>
        </html>
      `;

      // Create plain text version
      const textContent = `
New Contact Form Submission

Contact Details:
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

Reply to: ${email}
Submitted: ${new Date().toLocaleString()}
      `;

      // Add both HTML and plain text versions
      msg.addMessage({
        contentType: 'text/html',
        data: htmlContent
      });
      
      msg.addMessage({
        contentType: 'text/plain',
        data: textContent
      });

      // Set reply-to header
      msg.setHeader('Reply-To', email);

      // Create EmailMessage
      const emailMessage = new EmailMessage(
        env.SENDER_EMAIL || "hello@soufianebelgana.me",
        env.RECIPIENT_EMAIL || "hello@soufianebelgana.me",
        msg.asRaw()
      );

      // Send email using Cloudflare Email Routing
      try {
        await env.SEND_EMAIL.send(emailMessage);
        
        return new Response(JSON.stringify({
          success: true,
          message: 'Message sent successfully! Thank you for contacting me.'
        }), {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          }
        });
      } catch (emailError) {
        console.error('Email sending error:', emailError);
        
        return new Response(JSON.stringify({
          success: false,
          error: 'Failed to send email. Please try again later.'
        }), {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          }
        });
      }

    } catch (error) {
      console.error('Form processing error:', error);
      
      return new Response(JSON.stringify({
        success: false,
        error: 'An error occurred while processing your request.'
      }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        }
      });
    }
  },
};

