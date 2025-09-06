import { Metadata } from "next";
import AboutView from "./AboutView";

export const metadata: Metadata = {
  title: "Portfolio | Home",
  description: "About Me",
};

export default function Home() {
  return <AboutView />;
}
