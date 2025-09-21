import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const formData = await request.formData();
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const phone = String(formData.get("phone") || "").trim();
  const type = String(formData.get("type") || "").trim();
  const honey = String(formData.get("company") || "").trim();

  if (honey) {
    return NextResponse.json({ ok: true });
  }

  if (!name || !email) {
    return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
  }

  try {
    // Using Web3Forms - a free form handling service
    const web3formsResponse = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY", // Get this from web3forms.com
        to_email: "gomail29@gmail.com",
        subject: `New Contact Form Submission - ${type || "General Inquiry"}`,
        from_name: name,
        from_email: email,
        message: `
Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Inquiry Type: ${type || "General"}
Submitted: ${new Date().toLocaleString()}

This email was sent from the Property Specialist website contact form.
        `
      }),
    });

    if (web3formsResponse.ok) {
      console.log("Email sent successfully to gomail29@gmail.com");
      return NextResponse.json({ 
        ok: true, 
        message: "Thank you for your inquiry! We'll get back to you soon." 
      });
    } else {
      throw new Error("Failed to send email");
    }
    
  } catch (error) {
    console.error("Error sending email:", error);
    
    // Fallback: Try alternative free service (Formspree)
    try {
      const formspreeResponse = await fetch(`https://formspree.io/f/${process.env.FORMSPREE_FORM_ID || "YOUR_FORM_ID"}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          phone: phone,
          type: type,
          message: `New inquiry from ${name} (${email}). Phone: ${phone || "Not provided"}. Type: ${type || "General"}`
        }),
      });

      if (formspreeResponse.ok) {
        console.log("Email sent via Formspree fallback");
        return NextResponse.json({ 
          ok: true, 
          message: "Thank you for your inquiry! We'll get back to you soon." 
        });
      }
    } catch (fallbackError) {
      console.error("Fallback email service also failed:", fallbackError);
    }
    
    return NextResponse.json({ 
      ok: false, 
      error: "Failed to process your inquiry. Please try again or contact us directly." 
    }, { status: 500 });
  }
}


