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

  // TODO: Send email via provider like Resend using env variables.
  console.log("Contact submission", { name, email, phone, type });
  return NextResponse.json({ ok: true });
}


