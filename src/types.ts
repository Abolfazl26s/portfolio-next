// types.ts
export type Locale = "en" | "fa";

export type ProfileData = {
  name: string;
  title: string;
  email: string;
  imageUrl: string;
  cvUrl: string;
};
export type CareerItem = {
  componyName_fa: string;
  componyName_en: string;
  jobTitle_fa: string;
  jobTitle_en: string;
  CooperationStartDate_fa: string;
  CooperationStartDate_en: string;
  EndDateOfCooperation_fa: string;
  EndDateOfCooperation_en: string;
  logoSrc: string; // مسیر لوگوی شرکت
};