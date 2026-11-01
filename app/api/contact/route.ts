import { NextResponse } from "next/server";

// Web3Forms access keys are public client keys by design (they only route to the
// email registered to the key). Kept configurable via env, with the current key
// as a fallback so the form keeps working if the env var is not set.
const ACCESS_KEY = process.env.WEB3FORMS_ACCESS_KEY || "b62c83e5-531b-4b28-a1df-0d71ca63322a";
const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "gomail29@gmail.com";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const cap = (s: string, n: number) => s.slice(0, n);

export async function POST(request: Request) {
  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  const name = cap(String(formData.get("name") || "").trim(), 200);
  const email = cap(String(formData.get("email") || "").trim(), 200);
  const phone = cap(String(formData.get("phone") || "").trim(), 40);
  const type = cap(String(formData.get("type") || "").trim(), 60);
  const honey = String(formData.get("company") || "").trim();

  // Honeypot: real people leave this empty. Pretend success for bots.
  if (honey) {
    return NextResponse.json({ ok: true });
  }

  if (!name || !EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: "Missing or invalid fields" }, { status: 400 });
  }

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      signal: AbortSignal.timeout(10000),
      body: JSON.stringify({
        access_key: ACCESS_KEY,
        to_email: TO_EMAIL,
        subject: `New enquiry from the website - ${type || "General"}`,
        from_name: name,
        from_email: email,
        message: [
          `Name: ${name}`,
          `Email: ${email}`,
          `Phone: ${phone || "Not provided"}`,
          `Inquiry Type: ${type || "General"}`,
          `Submitted: ${new Date().toLocaleString()}`,
          "",
          "Sent from the Property Specialist website contact form.",
        ].join("\n"),
      }),
    });

    if (!res.ok) {
      throw new Error(`Web3Forms responded ${res.status}`);
    }

    return NextResponse.json({
      ok: true,
      message: "Thank you for your inquiry! We'll get back to you soon.",
    });
  } catch (error) {
    console.error("Contact form submission failed:", error);
    return NextResponse.json(
      { ok: false, error: "Failed to process your inquiry. Please try again or contact us directly." },
      { status: 500 },
    );
  }
}
