"use client";
import { usePathname } from "next/navigation";
import TitlePage from "./components/shared/TitlePage";
import CareerItem from "@/app/components/CareerItem";
const CertificatesPage = () => {
  const title: string = usePathname().replace("/", "");

  return (
    <div className="pt-5">
      <TitlePage title={title === "" ? "About Me" : ""} />
      <p className="text-lg leading-7 text-left ">
        Hello! As a Front-End Developer with a passion for creating clean,
        accessible, and engaging user experiences, I thrive on bridging the gap
        between design and technology. I love the challenge of transforming
        complex problems into beautiful, intuitive interfaces that users
        genuinely enjoy interacting with.
      </p>
      <h2 className="my-6 font-bold text-2xl">Career History</h2>

      <CareerItem />
    </div>
  );
};

export default CertificatesPage;
