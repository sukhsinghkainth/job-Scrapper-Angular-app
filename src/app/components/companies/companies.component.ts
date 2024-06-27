import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    totalPages!: number; //  dynamic based on the API response
    total_companies!: number;
    onPageChange(newPage: number): void {
        this.currentPage = newPage;
        this.loadCompanies(this.currentPage);
    }
    editingStates: { [key: string]: boolean; } = { companyId: false }; // Map company ID to editing state

    seeMore(id: string) {
        this.router.navigate(['admin/company/company_details', id],)
    }

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
                    // console.log(res.body?.message)
                })
            }
        }
    }

    ngOnInit(): void {
        this.loadCompanies(this.currentPage);
    }
    constructor(private companyService: CompaniesService, private router: Router) {
    }
    loadCompanies(pageNumber: number) {
        this.loading = true;
        this.companyService.companiesData(pageNumber).subscribe(res => {
            if (res.body?.Message) {
                this.companies = res.body.Message.companies.map(company =>({
                    ...company,
                    company_contact: Array.isArray(company.company_contact) ?
                    company.company_contact.map((contact: { person_email: string; person_phone: string; person_title: string; }) => {
                        const values = [];
                        if (contact.person_email) values.push(contact.person_email);
                        if (contact.person_phone) values.push(contact.person_phone);
                        if (contact.person_title) values.push(contact.person_title);
                        console.log(values)
                        return values.join(', ');
                      }).join(', ')
                      : company.company_contact
                }));
                // console.log(this.companies)
                this.total_companies = res.body.Message.total_companies;
                this.totalPages = Math.ceil(this.total_companies / 10);
                this.loading = false;
            }
            // https://admin.fisca-quest.be/api/admin/company/company_details/65c124a90237dac086d2a8bf
        });
    }
}

