
interface AdminAction {
  follow_up: boolean;
  not_interested: boolean;
}


export interface IJob {
  _id: string;
  admin_action: AdminAction;
  company: Company;
  company_id: string;
  date_of_post: string;
  date_of_scrap: string;
  job_id: string;
  job_title: string;
  location: string;
  salary_range: string;
  source_name: string;
  tags: string;
}

export interface Idashboard {
  comp_count: string
  emp_count: number
  name: string
  numbers_jobs: string
}

export interface Iremarks {
  date_of_remark?: string,
  remark: string,
  review_by: string
};

export interface IFollowJobs {
  jid: string;
  follow_up: boolean;
  not_intrested: boolean
}
export interface Ilogin {
  email: string,
  password: string,
  token?: string
}

interface Message {
  companies: Company[];
  items_per_page: number;
  name: string;
  page: number;
  total_companies: number;
}

export interface Company {
  _id: string;
  company_address: string;
  company_contact: string;
  company_email: string;
  company_name: string;
  company_size: string;
  company_type: string;
  company_website: string;
  source_name: string;
  company_location?: string
}

export interface updateJob {
  companyId: string;
  companyContact: string;
  companyName: string;
  companyEmail: string;
  websiteUrl: string;
  numEmployees: string;
  companyType: string;
}

// src/app/interface/interfaces.ts

export interface UpdateCompanyRequest {
  companyId: string;
  companyName: string;
  companyemail: string;
  companySize: string;
  companyType: string;
  companyContact: string;
}

export interface UpdateCompanyResponse {
  success: boolean;
  message: string;
}


export interface Remark {
  date_of_remark: string;
  remark: string;
  review_by: string;
}

export interface remarks {
  remarks: Remark[]
}

interface Message {
  companies: Company[];
  items_per_page: number;
  name: string;
  page: number;
  total_companies: number;
}

export interface comp_lis_res {
  Message: Message;
}




export interface Job {
  _id: string;
  company_id: string;
  date_of_post: string;
  date_of_scrap: string;
  job_description: string;
  job_id: string;
  job_title: string;
  location: string;
  salary_range: string;
  source_name: string;
  tags: string;
  work_experience: string;
}

export interface CompanyJob {
  _id: string;
  company_address: string;
  company_contact: string;
  company_email: string;
  company_name: string;
  company_size: string;
  company_type: string;
  company_website: string;
  source_name: string;
  jobs: Job;
}

interface Location {
  longitude: number;
  latitude: number;
}

export interface CompanyDetailResponse {
  company_detail: Company;
  company_jobs: CompanyJob[];
  location: Location;
  name: string | null;
}





interface Companyy {
  _id: string;
  company_address?: string;
  company_contact?: string | { company_number: string }[];
  company_email?: string;
  company_image?: string;
  company_location?: string[];
  company_name: string;
  company_size?: string;
  company_type?: string;
  company_website?: string;
  source_name: string;
}

export interface Jobb {
  _id: string;
  company: Companyy;
  company_id: string;
  date_of_post: string;
  date_of_scrap: string | number;
  job_id: (string | null)[];
  job_title: string;
  location: string;
  salary_range?: string;
  source_name: string;
  tags: string[];
  admin_action: adminaction
}

interface adminaction {
  follow_up: boolean;
  not_interested: boolean
}

export interface RootObject {
  be_location: string[];
  endpoint: string;
  items_per_page: number;
  jobs: Jobb[];
  name: string;
  page: number;
  pagination_from: string;
  search: number;
  search_value: string;
  skills: string[];
  total_jobs: number;
}


export interface jobDetails {
  JobTitle: string;
  companyContact: string;
  companyEmail: string;
  companyId: string;
  companyName: string;
  companyType: string;
  dateOfPost: string;
  jobDescription: string;
  location: string;
  numEmployees: string;
  salary: string;
  tags: string[];
  websiteUrl: string;
}


export interface RemakrsByuser {
  job_id: string;
  remark: string;
}