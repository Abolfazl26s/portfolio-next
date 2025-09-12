// lib/data-service.ts

import { Project, Skill, ICertificate } from "@/types";

// The single source of truth for your external API URL.
// This is secure because this code only runs on the server.
const EXTERNAL_API_URL =
  "https://abolfazl26s.github.io/project_data/data/db.json";

// A simple in-memory cache to store the fetched data during the server's lifecycle.
interface DbData {
  projectTemplate?: Project[];
  skills?: Skill[];
  certificates?: ICertificate[];
}

let cachedData: DbData | null = null;

// This function fetches data and caches it to avoid repeated external calls.
async function getDbData() {
  if (cachedData) {
    return cachedData;
  }
  try {
    const response = await fetch(EXTERNAL_API_URL, {
      // This tells Next.js to cache the data for 1 hour.
      // After 1 hour, the next request will re-fetch it in the background.
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch data from ${EXTERNAL_API_URL}`);
    }

    cachedData = await response.json();
    return cachedData;
  } catch (error) {
    console.error("Data fetching error in data-service:", error);
    // On error, we return null to prevent crashes and allow graceful failure.
    return null;
  }
}

// --- Service Functions for each data type ---

export async function getProjects(): Promise<Project[]> {
  const data = await getDbData();
  // The key for projects in your JSON is 'projectTemplate'
  return data?.projectTemplate || [];
}

export async function getSkills(): Promise<Skill[]> {
  const data = await getDbData();
  return data?.skills || [];
}

export async function getCertificates(): Promise<ICertificate[]> {
  const data = await getDbData();
  return data?.certificates || [];
}
