import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Constants} from "../constants";
import {StudentInfo} from "../models/studentInfo";
import {StudentInfoAll} from "../models/studentInfoAll";

@Injectable({
  providedIn: 'root'
})
export class StudentInfoService {

  constructor(
      private  readonly httpClient: HttpClient
  ) {

  }
  getPromotions() : Observable<String[]>{
    return this.httpClient.get<String[]>(Constants.PROMOTIONS_LIST_ENDPOINT);
  }

  uploadStudentInfo(formdata: FormData) : Observable<any>{
    return this.httpClient.post<any>(Constants.UPLOAD_STUDENT_INFO_ENDPOINT, formdata, {
      reportProgress: true,
      observe: 'events'
    });
  }

  getAllStudentsInfos() : Observable<StudentInfoAll[]>{
    return this.httpClient.get<StudentInfoAll[]>(Constants.ALL_STUDENTS_INFOS_ENDPOINT);
  }

  getAllStudentsInfosByPromotion(promotion: String) : Observable<StudentInfoAll[]>{
    return this.httpClient.get<StudentInfoAll[]>(Constants.ALL_STUDENTS_INFOS_ENDPOINT+"/" + promotion);
  }

  removeAPromotion(toRemove: String):Observable<StudentInfoAll[]>{
    return this.httpClient.delete<StudentInfoAll[]>(Constants.REMOVE_PROMOTION_ENDPOINT+"/" + toRemove);
  }

  addStudent(studentinfo: StudentInfoAll) : Observable<any>{
    return this.httpClient.put<any>(Constants.UPDATE_STUDENT_INFO_ENDPOINT, studentinfo);
  }
  deleteStudent(studentNum: number): Observable<any>{
    const params = {"studentNum": studentNum};
    return this.httpClient.delete<any>(Constants.DELETE_STUDENT_INFO_ENDPOINT, {params:params});
  }

  getStudentInfosByNum(studentNum: number) : Observable<StudentInfoAll>{
    return this.httpClient.get<StudentInfoAll>(Constants.STUDENT_INFOS_ENDPOINT + "/"+ studentNum);
  }


}
