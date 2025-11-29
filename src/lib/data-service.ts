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

const CACHE_TTL_MS = 1000 * 60 * 60; // 1 hour
let cachedData: { data: DbData; fetchedAt: number } | null = null;

// This function fetches data and caches it to avoid repeated external calls.
async function getDbData() {
  if (cachedData) {
    const isFresh = Date.now() - cachedData.fetchedAt < CACHE_TTL_MS;
    if (isFresh) {
      return cachedData.data;
    }
  }

  const response = await fetch(EXTERNAL_API_URL, {
    // This tells Next.js to cache the data for 1 hour.
    // After 1 hour, the next request will re-fetch it in the background.
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch data from ${EXTERNAL_API_URL}`);
  }

  const data: DbData = await response.json();
  cachedData = { data, fetchedAt: Date.now() };
  return data;
}

// --- Service Functions for each data type ---

export async function getProjects(): Promise<Project[]> {
  const data = await getDbData();
  if (!data) {
    throw new Error("No project data available");
  }
  const projects = data.projectTemplate || [];
  return [...projects].reverse();
}

export async function getSkills(): Promise<Skill[]> {
  const data = await getDbData();
  if (!data) {
    throw new Error("No skills data available");
  }
  return data.skills || [];
}

export async function getCertificates(): Promise<ICertificate[]> {
  const data = await getDbData();
  if (!data) {
    throw new Error("No certificates data available");
  }
  return data.certificates || [];
}
