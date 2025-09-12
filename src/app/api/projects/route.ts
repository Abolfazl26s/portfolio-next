import { NextResponse } from "next/server";
import { getProjects } from "@/lib/data-service";

export async function GET() {
  try {
    const projects = await getProjects();
    // Your JSON has a key "projectTemplate", let's be consistent
    return NextResponse.json({ projectTemplate: projects });
  } catch {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
