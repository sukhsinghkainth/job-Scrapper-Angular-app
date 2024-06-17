import { AfterViewChecked, Component, OnInit, isDevMode } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as $ from 'jquery'
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { IFollowJobs, IJob } from 'src/app/interface/interfaces';
import { JoblistService } from 'src/app/services/joblisting/joblist.service';
@Component({
  selector: 'app-joblisting',
  templateUrl: './joblisting.component.html',
  styleUrls: ['./joblisting.component.css']
})
export class JoblistingComponent implements AfterViewChecked, OnInit {

  constructor(private joblistService: JoblistService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  skills!: string[]
  jobbsdata!: IJob[]
  location!: string[]
  totalJobs!: number
  isEditing = false;
  Jobtitle: string = "Please click cards to see job descriptions";
  companyEmail!: string
  companyName!: string
  companyType!: string
  dateOfPost!: string
  clocation!: string
  salary!: string
  tags!: string
  websiteUrl!: string
  employees!: string
  loading: boolean = false
  currentPage: number = 1;
  totalPages!: number;
  jobDescription!: string;
  companyContact!: any;
  companyId!: string
  followUp!: boolean
  notInstrested!: boolean;
  jobId!: string;
  remarks!: any;
  remarksbyuser!: string;
  selectedLocations: string[] = [];
  selectedSkills: string[] = [];
  selectedJobs: string[] = [];
  selectedTags: string[] = [];

  searchTerm: string = '';

  submitted!: string;
  toogleEdit() {
    this.isEditing = !this.isEditing;
    const data = {
      companyId: this.companyId,
      companyContact: this.companyContact,
      companyName: this.companyName,
      companyEmail: this.companyEmail,
      websiteUrl: this.websiteUrl,
      numEmployees: this.employees,
      companyType: this.companyType,
    };
    if (!this.isEditing) {
      this.joblistService.jobUpdate(data).subscribe((res) => {
        const updatedJob = this.jobbsdata.find(job => job._id === this.jobId);
        if (updatedJob) {
          updatedJob.company.company_name = this.companyName;
          updatedJob.company.company_contact = this.companyContact;
          updatedJob.company.company_email = this.companyEmail;
          updatedJob.company.company_website = this.websiteUrl;
          updatedJob.company.company_type = this.companyType;
        }
      })
    }
  }

  actionFilter() {
    let data: IFollowJobs = {
      jid: this.jobId,
      follow_up: this.followUp,
      not_intrested: this.notInstrested
    }
    this.joblistService.jobFollow(data).subscribe((res) => {
      const updatedJob = this.jobbsdata.find(job => job._id === this.jobId);
      if (updatedJob) {
        updatedJob.admin_action = {
          follow_up: this.followUp,
          not_interested: this.notInstrested
        };
        updatedJob.admin_action.not_interested = this.notInstrested;
      }
    })
  }

  updateFilterArray(event: Event, array: string[]) {
    const checkbox = event.target as HTMLInputElement;
    if (checkbox.checked) {
      array.push(checkbox.value);
    } else {
      const index = array.indexOf(checkbox.value);
      if (index > -1) {
        array.splice(index, 1);
      }
    }
  }

  skillFilter(event: Event) {
    this.updateFilterArray(event, this.selectedSkills);
  }

  tagFilter(event: Event) {
    this.updateFilterArray(event, this.selectedTags)
  }

  locationFilter(event: Event) {
    this.updateFilterArray(event, this.selectedLocations);
  }

  jobfilter(event: Event) {
    this.updateFilterArray(event, this.selectedJobs)
  }

  submitFilter(filterType: string, resetCheckboxes: string[]) {
    this.currentPage = 1;
    this.submitted = filterType;
    this.DropDownfilters(filterType);
    resetCheckboxes.forEach(checkbox => this.resetCheckboxes(checkbox));
    // Clear query parameters
    this.router.navigate(['admin/job_listing'])
  }

  submitJobFilter() {
    this.submitFilter('jobs', ['skills', 'locations', 'tags'],);
  }

  submitLoc() {
    this.submitFilter('location', ['skills', 'job_type', 'tags']);
  }

  submitSkill() {
    this.submitFilter('skill', ['locations', 'job_type', 'tags']);
  }

  submitTags() {
    this.submitFilter('tags', ['locations', 'job_type', 'skills']);
  }

  resetCheckboxes(groupName: string) {
    const checkboxes = document.querySelectorAll(`input[name=${groupName}]`);
    checkboxes.forEach((element) => {
      const checkbox = element as HTMLInputElement;
      checkbox.checked = false;
    });
  }
  createQuery(selectedFilter: string[], query: string): string {
    let queryString = selectedFilter.map(loc => `${query}=${encodeURIComponent(loc).replace(/%20/g, '+')}`)
      .join('&');
    return queryString;
  }
  emptyArrays(...arrays: string[][]): void {
    arrays.forEach(array => array.length = 0);
  }
  DropDownfilters(filter: string) {
    let queryString = ''
    let queryFilter = "filters"
    if (filter === 'skill') {
      // this.selectedLocations = []; this.selectedJobs = []; this.selectedTags = [];
      this.emptyArrays(this.selectedLocations, this.selectedJobs, this.selectedTags);
      // queryString = this.selectedSkills.map(loc => `skills=${encodeURIComponent(loc).replace(/%20/g, '+')}`)
      //   .join('&');
      queryString = this.createQuery(this.selectedSkills, "skills")
    }
    else if (filter === 'location') {
      // this.selectedSkills = []; this.selectedJobs = []; this.selectedTags = [];
      this.emptyArrays(this.selectedSkills, this.selectedJobs, this.selectedTags);
      // queryString = this.selectedLocations.map(loc => `location=${encodeURIComponent(loc).replace(/%20/g, '+')}`)
      //   .join('&');
      queryString = this.createQuery(this.selectedLocations, 'location')
    }
    else if (filter === 'jobs') {
      // this.selectedSkills = []; this.selectedLocations = []; this.selectedTags = [];
      this.emptyArrays(this.selectedSkills, this.selectedLocations, this.selectedTags);
      // queryString = this.selectedJobs.map(loc => `job_type=${encodeURIComponent(loc).replace(/%20/g, '+')}`)
      //   .join('&');
      queryString = this.createQuery(this.selectedJobs, "job_type")
      queryFilter = "job_type_filter"
    }
    else {
      // this.selectedSkills = []; this.selectedLocations = []; this.selectedJobs = [];
      this.emptyArrays(this.selectedSkills, this.selectedLocations, this.selectedJobs);
      // https://admin.fisca-quest.be/admin/filters?page=2&tags=Follow+up&tags=not+interested
      // queryString = this.selectedTags.map(loc => `tags=${encodeURIComponent(loc).replace(/%20/g, '+')}`)
      //   .join('&');
      queryString = this.createQuery(this.selectedTags, "tags")
      //  tags 
    }
    this.loading = true;
    console.log(queryString)
    this.joblistService.getFilters(`${queryFilter}?page=${this.currentPage}&${queryString}`).subscribe(res => {
      console.log(res.body)
      this.totalJobs = res.body.total_jobs;
      this.jobbsdata = res.body.jobs;
      this.location = res.body.be_location;
      this.skills = res.body.skills;
      this.totalPages = Math.ceil(this.totalJobs / 10)
      this.loading = false;
    })
  }


  ngOnInit(): void {
    this.route.queryParams
      .pipe(
        debounceTime(900),
      )
      .subscribe(params => {
        this.searchTerm = params['job_search'];
        if (this.searchTerm) {
          this.submitted = ''
          this.currentPage = 1
          this.searchJobs();
        }
        else {
          if (!this.submitted) {
            this.getjobdata(this.currentPage)
          }
        }
      });
  }
  // page=2&job_search=you+can+say+what+ever
  searchJobs() {
    if (this.searchTerm) {
      console.log(this.searchTerm)
      // removig spaces 
      let str = this.searchTerm.trim().replace(/\s+/g, ' ').split(' ').join('+');
      this.loading = true;
      let query = `page=${this.currentPage}&job_search=${str}`
      this.joblistService.getSearch(query).subscribe(res => {
        console.log(res.body)
        this.totalJobs = res.body.total_jobs;
        this.jobbsdata = res.body.jobs;
        this.location = res.body.be_location;
        this.skills = res.body.skills;
        this.totalPages = Math.ceil(this.totalJobs / 10)
        this.loading = false;
      })
    }
  }

  submitRemark() {
    let data = {
      job_id: this.jobId,
      remark: this.remarksbyuser
    }
    this.joblistService.addRemarks(data).subscribe((res) => {
      this.getRemarks();
    })
  }



  getRemarks() {
    this.joblistService.remarkData(this.jobId).subscribe((res) => {
      console.log(res.body.remarks)
      this.remarks = res.body.remarks
    })
  }

  getjobdata(pageNumber: number) {
    this.loading = true;
    this.joblistService.jobData(pageNumber).subscribe((res) => {
      this.loading = false
      this.totalJobs = res.body.total_jobs;
      this.jobbsdata = res.body.jobs;
      this.location = res.body.be_location;
      this.skills = res.body.skills;
      this.totalPages = Math.ceil(this.totalJobs / 10)
    })
  }

  changePage(page: number): void {
    this.currentPage = page;
  }

  onPageChange(newPage: number): void {
    this.currentPage = newPage;
    let resetCheckboxes: Array<string>
    if (this.submitted) {
      if (this.submitted === 'location') {
        resetCheckboxes = ['skills', 'job_type', 'tags']
        resetCheckboxes.forEach(checkbox => this.resetCheckboxes(checkbox));
        this.DropDownfilters('location')
      }
      else if (this.submitted === 'skill') {
        resetCheckboxes = ['locations', 'job_type', 'tags']
        resetCheckboxes.forEach(checkbox => this.resetCheckboxes(checkbox));
        this.DropDownfilters('skill')
      }
      else if (this.submitted === 'jobs') {
        resetCheckboxes = ['locations', 'skills', 'tags']
        resetCheckboxes.forEach(checkbox => this.resetCheckboxes(checkbox));
        this.DropDownfilters('jobs')
      }
      else if (this.submitted === 'tags') {
        resetCheckboxes = ['locations', 'skills', 'job_type']
        resetCheckboxes.forEach(checkbox => this.resetCheckboxes(checkbox));
        this.DropDownfilters('tag')
      }
    }
    else if (this.searchTerm) {
      this.searchJobs()
    }
    else {
      this.getjobdata(this.currentPage)
    }
  }

  jodDetails(id: number) {
    this.isEditing = false;
    this.jobId = String(id);
    this.getRemarks();
    const updatedJob = this.jobbsdata.find(job => job._id === this.jobId);
    if (updatedJob?.admin_action) {
      this.followUp = updatedJob.admin_action.follow_up
      this.notInstrested = updatedJob.admin_action.not_interested
    }
    else {
      this.followUp = false;
      this.notInstrested = false;
    }
    this.joblistService.jobDetails(id).subscribe((res) => {
      this.companyName = res.body.companyName;
      this.companyType = res.body.companyType;
      this.jobDescription = res.body.jobDescription
      this.salary = res.body.salary
      this.companyEmail = res.body.companyEmail;
      this.websiteUrl = res.body.websiteUrl;
      this.clocation = res.body.location;
      this.tags = res.body.tags;
      this.dateOfPost = res.body.dateOfPost;
      this.employees = res.body.numEmployees;
      this.companyContact = res.body.companyContact
      this.companyId = res.body.companyId;
      if (Array.isArray(this.companyContact)) {
        this.companyContact = this.companyContact.map((contact: any) => contact.company_number)
          .filter(number => number).join(', ')
      }
    })
  }


  ngAfterViewChecked() {
    // Function to hide all dropdowns
    function hideAllDropdowns() {
      $(".dropdown_location, .dropdown_skills, .dropdown_job_type, .dropdown_menu4, .dropdown_menu5").slideUp();
    }
    $(".dropdown1").off("click");
    $("#locationCancel").off("click");
    $(".dropdown2").off("click");
    $(".dropdown3").off("click");
    $(".dropdown4").off("click");
    $(".dropdown5").off("click");

    // Click event for dropdown1
    $(".dropdown1").click(function () {
      $(".dropdown_location").slideToggle("");
      $('.drop_down').not('.dropdown_location').slideUp();
    });
    // Click event for locationCancel
    $("#locationCancel").click(function () {
      $(".dropdown_location").slideToggle("");
      $('.drop_down').not('.dropdown_location').slideUp();
    });
    // Click event for dropdown2
    $(".dropdown2").click(function () {
      $(".dropdown_skills").slideToggle("");
      $('.drop_down').not('.dropdown_skills').slideUp();
    });
    // Click event for dropdown3
    $(".dropdown3").click(function () {
      $(".dropdown_job_type").slideToggle("");
      $('.drop_down').not('.dropdown_job_type').slideUp();
    });
    // Click event for dropdown4
    $(".dropdown4").click(function () {
      $(".dropdown_menu4").slideToggle("");
      $('.drop_down').not('.dropdown_menu4').slideUp();
    });
    // Click event for dropdown5
    $(".dropdown5").click(function () {
      $(".dropdown_menu5").slideToggle("");
      $('.drop_down').not('.dropdown_menu5').slideUp();
    });
  }
}