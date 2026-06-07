import { NextResponse } from "next/server";
import { google } from "googleapis";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      fullName,
      email,
      phone,
      city,
      shippingAddress,
      postalCode,
      quantity,
      productTitle,
      paymentMethod,
      orderSource,
    } = body;

    // Basic validation
    if (
      !fullName ||
      !email ||
      !phone ||
      !city ||
      !shippingAddress ||
      !postalCode ||
      !quantity ||
      !productTitle ||
      !paymentMethod
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    try {
      // Setup Google Sheets API authentication
      const auth = new google.auth.GoogleAuth({
        credentials: {
          client_email: process.env.GOOGLE_CLIENT_EMAIL,
          // Replace escaped newlines so the key parses correctly
          private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
        },
        scopes: [
          "https://www.googleapis.com/auth/drive",
          "https://www.googleapis.com/auth/drive.file",
          "https://www.googleapis.com/auth/spreadsheets",
        ],
      });

      const sheets = google.sheets({ version: "v4", auth });

      // Append row to Google Sheet
      const spreadsheetId = process.env.GOOGLE_SHEET_ID;
      
      await sheets.spreadsheets.values.append({
        spreadsheetId,
        range: "Sheet1!A:K",
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: [
            [
              new Date().toISOString(), // Timestamp
              fullName,
              email,
              phone,
              city,
              shippingAddress,
              postalCode,
              productTitle,
              quantity,
              paymentMethod,
              orderSource || "website",
            ],
          ],
        },
      });

    } catch (sheetError) {
      console.error("Google Sheets API error:", sheetError);
      // For development, it's sometimes helpful to return the sheet error securely or loosely.
      // But we fall back so the UX doesn't completely fail if sheets aren't configured yet.
      return NextResponse.json(
        { error: "Lead received, but Google Sheets integration failed. Check server logs." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Enquiry submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Enquiry submission error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
