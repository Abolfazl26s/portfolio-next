import { NextResponse } from "next/server";
import { getSkills } from "@/lib/data-service";

export async function GET() {
  try {
    const skills = await getSkills();
    return NextResponse.json({ skills });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
