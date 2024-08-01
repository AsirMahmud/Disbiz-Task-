import { NextResponse } from "next/server";
import {
  EmailTemplate,
  EmailTemplate2,
} from "../../../components/EmailTemplate";
import { Resend } from "resend";

export async function POST(req) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const dummyData = await req.json();

  try {
    const { name, company, email, phone } = dummyData;

    // Sending the first email
    const { data: data1, error: error1 } = await resend.emails.send({
      from: "info@disbiz.co",
      to: ["info@disbiz.co", "disbiz.official@gmail.com"],
      subject: "New Client Alert",
      react: EmailTemplate({
        name,
        company,
        email,
        phone,
      }),
    });

    // Sending the second email
    const { data: data2, error: error2 } = await resend.emails.send({
      from: "info@disbiz.co",
      to: email,
      subject: "Thanks For Contacting Us",
      react: EmailTemplate2({
        name,
        company,
        email,
        phone,
      }),
    });

    // Handling errors
    if (error1 || error2) {
      return NextResponse.json({ error: error1 || error2 }, { status: 500 });
    }

    return NextResponse.json(dummyData);
  } catch (error) {
    console.error("Error sending emails:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
