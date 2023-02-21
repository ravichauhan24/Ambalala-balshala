import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/core/services/home.services';

@Component({
  selector: 'app-scholarships',
  templateUrl: './scholarships.component.html',
  styleUrls: ['./scholarships.component.css']
})
export class ScholarshipsComponent implements OnInit {

  moreData: any = [];
  scholarship: any = [];
  pa: number = 1;

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.getScholarshipData();
  }
  getScholarshipData() {
    this.homeService.getScholarshipData(localStorage.getItem('InstituteId')).subscribe((res: any) => {
      this.moreData = res;
      
      this.scholarship = [];
      this.moreData.forEach((element: any) => {
        if (element.purpose == 'scholarship') {
          this.scholarship.push(element);
        }
      });
    })
  }

}
