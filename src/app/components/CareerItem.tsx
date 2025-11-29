"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

// تعریف تایپ برای داده‌ها (فقط فیلدهای مورد نیاز)
interface CareerItemProps {
  id: string | number;
  componyName_en: string;
  jobTitle_en: string;
  CooperationStartDate_en: string;
  EndDateOfCooperation_en: string;
  logoSrc: string;
}

const CareerHistory = () => {
  const [careerHistory, setCareerHistory] = useState<CareerItemProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMyCareerHistory = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          "https://abolfazl26s.github.io/project_data/data/db.json"
        );
        const data = await res.json();
        setCareerHistory(data.myCareerHistory);
      } catch (error) {
        console.error("Error fetching career history:", error);
      } finally {
        setLoading(false);
      }
    };

    getMyCareerHistory();
  }, []);

  if (loading) {
    return <div>Loading ...</div>;
  }

  return (
    <>
      {careerHistory.map((item) => (
        <div className="careerHistory__card mr-auto ml-auto" key={item.id}>
          <div className="card">
            <Image
              src={item.logoSrc}
              alt={item.componyName_en}
              width={80}
              height={80}
              className="careerHistory__card_img"
            />

            <div className="careerHistory__card_desc">
              <h5>{item.componyName_en}</h5>
              <h6 className="jobTitle">{item.jobTitle_en}</h6>
              <p className="CooperationStartDate">
                {item.CooperationStartDate_en}
              </p>
              <p className="EndDateOfCooperation ">
                {item.EndDateOfCooperation_en}
              </p>
            </div>
            <h1 className="EndOfDate text-[var(--primary)]">{item.id}</h1>
          </div>
        </div>
      ))}
    </>
  );
};

export default CareerHistory;
