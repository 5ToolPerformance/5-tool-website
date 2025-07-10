export const prerender = false;
import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.formData();
    const name = data.get("name");
    const email = data.get("email");
    const subject = data.get("subject");
    const message = data.get("message");

    // Basic validation
    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "All fields are required",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.toString())) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Please enter a valid email address",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Mailgun configuration
    const MAILGUN_API_KEY = import.meta.env.MAILGUN_API_KEY;
    const MAILGUN_DOMAIN = import.meta.env.MAILGUN_DOMAIN;
    const TO_EMAIL = import.meta.env.TO_EMAIL; // Your email where you want to receive messages
    const FROM_EMAIL = import.meta.env.FROM_EMAIL; // Your verified sender email

    if (!MAILGUN_API_KEY || !MAILGUN_DOMAIN || !TO_EMAIL || !FROM_EMAIL) {
      console.error("Missing Mailgun configuration");
      return new Response(
        JSON.stringify({
          success: false,
          error: "Email service configuration error",
        }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    // Send email using Mailgun
    const formData = new FormData();
    formData.append("from", `${name} <${FROM_EMAIL}>`);
    formData.append("to", TO_EMAIL);
    formData.append("subject", `Contact Form: ${subject}`);
    formData.append(
      "text",
      `
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

---
Sent from your website contact form
Time: ${new Date().toISOString()}
    `
    );
    formData.append(
      "html",
      `
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Subject:</strong> ${subject}</p>
<h3>Message:</h3>
<p>${message.toString().replace(/\n/g, "<br>")}</p>
<hr>
<p><small>Sent from your website contact form<br>
Time: ${new Date().toISOString()}</small></p>
    `
    );
    formData.append("h:Reply-To", email.toString());

    const response = await fetch(
      `https://api.mailgun.net/v3/${MAILGUN_DOMAIN}/messages`,
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${btoa(`api:${MAILGUN_API_KEY}`)}`,
        },
        body: formData,
      }
    );

    if (!response.ok) {
      const errorData = await response.text();
      console.error("Mailgun API error:", errorData);
      return new Response(
        JSON.stringify({
          success: false,
          error: "Failed to send email. Please try again later.",
        }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    const result = await response.json();
    console.log("Email sent successfully:", result);

    return new Response(
      JSON.stringify({
        success: true,
        message: "Thank you for your message! We will get back to you soon.",
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error:
          "An error occurred while processing your request. Please try again later.",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
