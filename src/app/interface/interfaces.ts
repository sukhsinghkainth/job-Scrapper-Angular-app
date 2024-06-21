
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

  export interface Idashboard{
    comp_count : string
    emp_count : number
    name: string
    numbers_jobs : string
}

export interface Iremarks {
    date_of_remark?: string,
    remark: string,
    review_by: string
  };

  export interface IFollowJobs{
    jid : string;
    follow_up : boolean;
    not_intrested : boolean
  }
  export interface Ilogin{
    email : string,
    password : string,
    token? : string
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