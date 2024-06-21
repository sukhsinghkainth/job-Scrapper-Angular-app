import { Component, OnInit } from '@angular/core';
import { Company, UpdateCompanyRequest } from 'src/app/interface/interfaces';
import { CompaniesService } from 'src/app/services/companies/companies.service';

@Component({
    selector: 'app-companies',
    templateUrl: './companies.component.html',
    styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
    loading!: boolean;
    companies!: Company[];
    currentPage = 1;
    totalPages!: number; // This should be dynamic based on the API response
    total_companies!: number;
    onPageChange(newPage: number): void {
        this.currentPage = newPage;
        this.loadCompanies(this.currentPage);
    }
    editingStates: { [key: string]: boolean; } = { companyId: false }; // Map company ID to editing state

    // Method to toggle the editing state
    toggleEditState(companyId: string) {
        this.editingStates[companyId] = !this.editingStates[companyId];
        if (!this.editingStates[companyId]) {

            const companyData = this.companies.find(company => company._id === companyId);

            if (companyData) {
                let data: UpdateCompanyRequest = {
                    companyId: companyData._id,
                    companyName: companyData.company_name,
                    companyemail: companyData.company_email,
                    companySize: companyData.company_size,
                    companyType: companyData.company_type,
                    companyContact: companyData.company_contact
                }
                this.companyService.updateCompaniesData(data).subscribe((res) => {
                    console.log(res.body?.message)
                })
            }
        }
    }

    ngOnInit(): void {
        this.loadCompanies(this.currentPage);
    }
    constructor(private companyService: CompaniesService) {
    }
    loadCompanies(pageNumber: number) {
        this.loading = true;
        this.companyService.companiesData(pageNumber).subscribe(res => {
            this.companies = res.body.Message.companies;
            this.total_companies = res.body.Message.total_companies;
            this.totalPages = Math.ceil(this.total_companies / 10);
            // this.companies.forEach(company => {
            //   this.editingStates[company._id] = false;
            // });
            this.loading = false;
        });
    }
}

