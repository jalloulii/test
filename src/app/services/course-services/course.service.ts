import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Course } from 'src/app/user/user.module';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private _herokuURL = "https://success-tn.herokuapp.com"
  private _baseLocalUrl = "http://localhost:3000";

  private _allCourses = this._herokuURL + "/ecourse/all";
  private _allTrueCourses = this._herokuURL + "/ecourse/all-true";
  private _allTrueCoursesCategories = this._herokuURL + "/ecourse/all-true-categories";
  private _allFalseCourses = this._herokuURL + "/ecourse/all-false";
  private _getOneCourse = this._herokuURL + "/ecourse/one/";
  private _addOneCourse = this._herokuURL + "/ecourse/add";
  private _updateState = this._herokuURL + "/ecourse/update-state/";

  constructor(private http: HttpClient) { }

  allCourses() {
    return this.http.get<any>(this._allCourses);
  }
  allTrueCourses() {
    return this.http.get<any>(this._allTrueCourses);
  }
  allFalseCourses() {
    return this.http.get<any>(this._allFalseCourses);
  }
  getOneCourse(id) {
    return this.http.get<any>(this._getOneCourse + id);
  }
  addCourse(course: Course) {
    return this.http.post<any>(this._addOneCourse, course);
  }
  updateCourseState(id) {
    let headers_options = new HttpHeaders().set("Authorization", localStorage.getItem("token"));
    return this.http.patch<any>(this._updateState + id, null, { headers: headers_options });
  }
  getCoursesWithCategories() {
    return this.http.get<any>(this._allTrueCoursesCategories);
  }
}
