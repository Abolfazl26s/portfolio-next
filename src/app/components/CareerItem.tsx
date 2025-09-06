"use client";
// import { useLanguage } from "@/context/LanguageContext"; // فرض بر این است که شما یک context برای زبان دارید

// نوع داده‌ای که کامپوننت دریافت می‌کند
// interface CareerItemProps {
//   componyName_fa: string;
//   componyName_en: string;
//   jobTitle_fa: string;
//   jobTitle_en: string;
//   CooperationStartDate_fa: string;
//   CooperationStartDate_en: string;
//   EndDateOfCooperation_fa: string; // می‌تواند "Present" یا تاریخ باشد
//   EndDateOfCooperation_en: string; // می‌تواند "Present" یا تاریخ باشد
//   logoSrc: string; // مسیر لوگوی شرکت
// }

// تابع کمکی برای نمایش "End of Date" به صورت مناسب
// const getEndOfDate = (endDate: string) => {
//   return endDate.toLowerCase() === "present" ? "End of Date" : endDate;
// };

const CareerItem = () => {
  return (
    <div className="card">
      <div className="careerHistory__card_img">
        {/* نام شرکت را بر اساس زبان فعلی در alt قرار می‌دهیم */}
        {/* <img
              src={logoSrc}
              alt={currentLanguage === "fa" ? componyName_fa : componyName_en}
            /> */}
      </div>
      <div className="careerHistory__card_desc">
        <h5 className="componyName">
          {/* نمایش نام شرکت بر اساس زبان */}
          {/* {currentLanguage === "fa" ? componyName_fa : componyName_en} */}
          company name
        </h5>
        <h6 className="jobTitle">
          {/* نمایش عنوان شغل بر اساس زبان */}
          {/* {currentLanguage === "fa" ? jobTitle_fa : jobTitle_en} */}
          job title
        </h6>
        <p className="CooperationStartDate">
          {/* نمایش تاریخ شروع بر اساس زبان */}
          {/* {currentLanguage === "fa"
                ? CooperationStartDate_fa
                : CooperationStartDate_en} */}
          Start Date
        </p>
        <p className="EndDateOfCooperation">
          {/* نمایش تاریخ پایان بر اساس زبان */}
          {/* {currentLanguage === "fa"
                ? EndDateOfCooperation_fa
                : EndDateOfCooperation_en} */}
          Date
        </p>
      </div>
      <h1 className="EndOfDate">
        {/* فراخوانی تابع getEndOfDate با کلید مناسب زبان */}
        {/* {getEndOfDate(
              currentLanguage === "fa"
                ? EndDateOfCooperation_fa
                : EndDateOfCooperation_en
            )} */}
        end of time
      </h1>
    </div>
  );
};

export default CareerItem;
