import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { WebNavbar } from 'src/core/model/web-navbar.model';
import { HomeService } from 'src/core/services/home.services';
import { StaffService } from 'src/core/services/staff.services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public isCollapsed = true;
  isSticky: boolean = false;
  public collapsed = true;
  readMore = false;

  public navDetails: WebNavbar[] = [];
  staffDataTable: any = [];
  siteUpdate: any = {};
  public webNavbarModel: WebNavbar = new WebNavbar;
  navContact: any;
  navEmail: any;
  navLogo: any;
  
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 250;
  }
  constructor(
    private router:Router,
    config: NgbModalConfig,
    private modalService: NgbModal,
    private staffService: StaffService,
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.getStaffDetails();
    this.getLastUpdateSite();
  }
  
  moreOpen(){
    this.readMore=true;
  }

  searchSchool(id:any){
    this.router.navigate(['/more/search',id]);
  }
  open(content: any) {
    this.modalService.open(content, { size: 'lg', scrollable: true },);
  }
  openLinks(id:any){
    this.router.navigate(['/more/links', id]);
  }
  getStaffDetails() {
    this.staffService.getBirthdayListData().subscribe((res: any) => {
      this.staffDataTable = res;
    })
  }
  getLastUpdateSite() {
    this.homeService.getLastUpdateSiteByIdURL(localStorage.getItem('InstituteId')).subscribe((res: any) => {
      this.siteUpdate = res[0];
    })
  }
}
