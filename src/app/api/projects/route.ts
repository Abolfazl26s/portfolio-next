import { NextResponse } from "next/server";

const db = "https://abolfazl26s.github.io/project_data/data/db.json";

export async function GET() {
  try {
    // فقط بخش پروژه‌ها را از فایل db.json برمی‌گردانیم
    const response = await fetch(db);
    const data = await response.json();
    const projects = data.projects;
    return NextResponse.json({ projects });
  } catch (error) {
    console.error("API Error: Failed to fetch projects", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
