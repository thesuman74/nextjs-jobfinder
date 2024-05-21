export interface FeaturedJobsType {
  id: number;
  post: string;
  hours: string;
  salary: number;
  company: string;
  openposition: number;
}

export interface PopularVacanciesType {
  id: number;
  name: string;
  vacancies: number;
}

export interface topCompaniesTypes {
  id: number;
  company: string;
  location: string;
  open_position: number;
}

export interface PopularCategoriesTypes {
  id: number;
  name: string;
  vacancies: number;
}

export interface PopularSectionTypes {
  id: number;
  name: string;
  vacancies: number;
}
