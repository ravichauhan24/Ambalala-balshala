import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public static HOST_URL: string = "http://localhost:9000";
  // public static HOST_URL: string = "http://31.220.111.153:5555";
  toasts: any[] = [];
  constructor(
    private http: HttpClient,
  ) { }
  httpOption = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  //authenticate

  public static userLoginURL: string = ApiService.HOST_URL + '/authenticate/UserLogin';

  // User
  public static getInstituteDetailByUrlURL: string = ApiService.HOST_URL + '/admin/GetInstituteDetailByURL/';
  public static getLastUpdateSiteByIdURL: string = ApiService.HOST_URL + '/admin/GetLastUpdateSiteById/';

  // admin

  public static saveInsituteDetailsURL: string = ApiService.HOST_URL + '/admin/SaveInsituteDetails';
  public static getAllInstituteDetailsURL: string = ApiService.HOST_URL + '/admin/GetAllInstituteDetails';
  public static saveGalleryImagesURL: string = ApiService.HOST_URL + '/admin/SaveGalleryImages';
  public static uploadGalleryImagesURL: string = ApiService.HOST_URL + '/admin/UploadGalleryImages';
  public static getImagesByIdDetailsURL: string = ApiService.HOST_URL + '/admin/GetImagesByIdDetails';
  public static updateActiveDeactiveBannersURL: string = ApiService.HOST_URL + '/admin/UpdateActiveDeactiveBanners';
  public static removeImagesByIdDetailsURL: string = ApiService.HOST_URL + '/admin/RemoveImagesByIdDetails';
  public static saveDepartmentListURL: string = ApiService.HOST_URL + '/admin/SaveDepartmentList';
  public static getDepartmentByIdDetailsURL: string = ApiService.HOST_URL + '/admin/GetDepartmentByIdDetails/';
  public static getYearbyGroupDetailsURL: string = ApiService.HOST_URL + '/admin/GetYearbyGroupDetails/';
  public static removeDepartmentByIdDetailsURL: string = ApiService.HOST_URL + '/admin/RemoveDepartmentByIdDetails/';
  public static updateDepartmentListURL: string = ApiService.HOST_URL + '/admin/UpdateDepartmentList';
  public static saveStaffProfileImagesURL: string = ApiService.HOST_URL + '/admin/SaveStaffProfileImages';
  public static saveStaffDetailsListURL: string = ApiService.HOST_URL + '/admin/SaveStaffDetailsList';
  public static getAllStaffDetailsURL: string = ApiService.HOST_URL + '/admin/GetAllStaffDetails/';
  public static removeStaffDetailsByIdURL: string = ApiService.HOST_URL + '/admin/RemoveStaffDetailsById/';
  public static saveDonnerListDetailsURL: string = ApiService.HOST_URL + '/admin/SaveDonnerListDetails';
  public static getAllDonnerListURL: string = ApiService.HOST_URL + '/admin/GetAllDonnerList';
  public static removeDonnerDetailsByIdURL: string = ApiService.HOST_URL + '/admin/RemoveDonnerDetailsById/';
  public static saveBeneficiaryDetailsURL: string = ApiService.HOST_URL + '/admin/SaveBeneficiaryDetails';
  public static getBeneficiaryYearURL: string = ApiService.HOST_URL + '/admin/GetBeneficiaryYear';
  public static getAllBeneficiaryListURL: string = ApiService.HOST_URL + '/admin/GetAllBeneficiaryList';
  public static removeBeneficiaryDetailsByIdURL: string = ApiService.HOST_URL + '/admin/RemoveBeneficiaryDetailsById/';
  public static saveBulkBeneficiaryDetailsURL: string = ApiService.HOST_URL + '/admin/SaveBulkBeneficiaryDetails';
  public static saveBulkDonnersDetailsURL: string = ApiService.HOST_URL + '/admin/SaveBulkDonnersDetails';
  public static saveBlogDetailsURL: string = ApiService.HOST_URL + '/admin/SaveBlogDetails';
  public static getBlogsDetailsByIdURL: string = ApiService.HOST_URL + '/admin/GetBlogsDetailsById/'
  public static uploadBlogImagesURL: string = ApiService.HOST_URL + '/admin/uploadBlogImages';
  public static uploadInfraImageURL: string = ApiService.HOST_URL + '/admin/UploadInfraImage';
  public static saveInfrastructureDetailsURL: string = ApiService.HOST_URL + '/admin/SaveInfrastructureDetails';
  public static getInfraDetailsByIdURL: string = ApiService.HOST_URL + '/admin/GetInfraDetailsById/';
  public static SaveAlumniDetailsURL: string = ApiService.HOST_URL + '/admin/SaveAlumniDetails';
  public static GetAlumniDetailsURL: string = ApiService.HOST_URL + '/admin/GetAlumniDetails';
  public static saveContactUsDetailsURL: string = ApiService.HOST_URL + '/admin/SaveContactUsDetails';
  public static getNewsByIdDetailsURL: string = ApiService.HOST_URL + '/admin/GetNewsByIdDetails/';
  public static getAllBirthdayDetailsURL: string = ApiService.HOST_URL + '/admin/GetAllBirthdayDetails';
  public static getAllNewsDetailsURL: string = ApiService.HOST_URL + '/admin/GetAllNewsDetails/';
  public static getNewsOnlyForCESURL: string = ApiService.HOST_URL + '/admin/GetNewsOnlyForCES/';
  public static getMagazineListURL: string = ApiService.HOST_URL + '/admin/GetMagazineList';
  public static saveCounselingDetailsURL: string = ApiService.HOST_URL + '/admin/SaveCounselingDetails'
  public static getResultDetailsByIdURL: string = ApiService.HOST_URL + '/admin/GetResultDetailsById/';
  public static getOthersByIdDetailsURL: string = ApiService.HOST_URL + '/admin/GetOthersByIdDetails/';
  public static getScholarshipDetailsURL: string = ApiService.HOST_URL + '/admin/GetScholarshipDetails/';
  public static getQuestionPapersDetailsURL: string = ApiService.HOST_URL + '/admin/GetQuestionPapersDetails/';
  public static getStudentListDataURL: string = ApiService.HOST_URL + '/admin/GetStudentListData/';




  public static adminLoginURL: string = ApiService.HOST_URL + '/authenticate/adminLogin';


  //Cashfree APIS
  public static createCashfreeOrderURL: string = ApiService.HOST_URL + '/cashfree/createCashfreeOrder';





}
