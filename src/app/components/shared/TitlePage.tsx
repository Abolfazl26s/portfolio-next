"use client";

interface TitlePageProps {
  title: string;
}

const TitlePage = ({ title }: TitlePageProps) => {
  return <h1 className="mainTitle my-4 text-4xl font-bold">{title}</h1>;
};

export default TitlePage;