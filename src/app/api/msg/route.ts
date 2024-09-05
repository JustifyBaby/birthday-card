import { NextResponse } from "next/server";

export const GET = async () =>
  NextResponse.json({ message: "Happy Birthday to you!!" }, { status: 200 });
