import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompaniesService } from 'src/app/services/companies/companies.service';
import * as L from 'leaflet';
import { CompanyJob, Job, UpdateCompanyRequest } from 'src/app/interface/interfaces';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent {
  companyId!: string;
  companyJobs: string = ""
  jobs!: CompanyJob[]
  company_name: string = ""
  company_type: string = ""
  company_address: string = ""
  company_contact: string = ""
  company_email: string = ""
  company_size: string = ""
  company_website: string = ""
  company_location: string = ""
  latitude!: number
  longitude!: number
  loading: boolean = false;

  private route = inject(ActivatedRoute)
  private companiesService = inject(CompaniesService)

  private map !: L.Map;
  private popup!: L.Popup;
  isEditing = false;

  toogleEdit() {
    this.isEditing = !this.isEditing;
    if (!this.isEditing) {
      this.updateCompany()
    }
  }

  updateCompany() {
    let data: UpdateCompanyRequest = {
      companyId: this.companyId,
      companyName: this.company_name,
      companyemail: this.company_email,
      companySize: this.company_size,
      companyType: this.company_type,
      companyContact: this.company_contact
    }
    this.companiesService.updateCompaniesData(data).subscribe((res) => {
      // console.log(res.body?.message)
    })
  }

  private loadMap() {
    this.map = L.map('map').setView([this.latitude, this.longitude], 13)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(this.map)
    L.marker([this.latitude, this.longitude]).addTo(this.map)
      .bindPopup(this.company_address)
      .openPopup();
    this.popup = L.popup();
    this.map.on('click', (e) => {
      this.popup
        .setLatLng(e.latlng)
        .setContent(`You clicked the map at ${e.latlng.toString()}`)
        .openOn(this.map);
    });
  }
  ngOnInit() {
    this.companyId = this.route.snapshot.paramMap.get('companyId') ?? "";
    this.loading = true;
    this.companiesService.companiesDetails(this.companyId).subscribe((res) => {
      if(res.body){
        this.jobs = res.body.company_jobs;
        this.company_name = res.body.company_detail.company_name;
        this.company_type = res.body.company_detail.company_type
        this.company_address = res.body.company_detail.company_address
        this.company_contact = Array.isArray(res.body.company_detail.company_contact)
          ? res.body.company_detail.company_contact.map((contact: { person_email: string; person_phone: string; person_title: string; }) => {
            const values = [];
            if (contact.person_email) values.push(contact.person_email);
            if (contact.person_phone) values.push(contact.person_phone);
            if (contact.person_title) values.push(contact.person_title);
            return values.join(', ');
          }).join(', ')
          : res.body.company_detail.company_contact;
        this.company_email = res.body.company_detail.company_email
        this.company_size = res.body.company_detail.company_size
        this.company_website = res.body.company_detail.company_website
        this.company_location = res.body.company_detail.company_location ?? ""
        this.jobs = res.body.company_jobs
        this.latitude = res.body.location.latitude;
        this.longitude = res.body.location.longitude;
      }
    
      if (this.latitude && this.longitude) {
        this.loadMap();
      }
      this.loading = false;
    })
  }
}
