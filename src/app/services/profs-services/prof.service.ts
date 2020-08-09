import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './../../user/user.module';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class ProfService {
  private _herokuURL = "https://success-tn.herokuapp.com";
  private _baseLocalUrl = "http://localhost:3000";
//https://afternoon-ravine-05962.herokuapp.com
  private _addProf = this._herokuURL + "/eprof/add";
  private _loginProf = this._herokuURL + "/eprof/login";
  private _allProfUrl = this._herokuURL + "/eprof/all";
  private _deleteProf = this._herokuURL + "/eprof/delete";
  private _getOneProf = this._herokuURL + "/eprof/one";
  private _getProfUniqueCourses = this._herokuURL + "/eprof/prof-courses-added/";
  private _updateForm = this._herokuURL + "/eprof/update-form";
  constructor(private http: HttpClient) { }

  addProf(prof: User) {
    let headers_options = new HttpHeaders().set("Authorization", localStorage.getItem("token"));
    return this.http.post<any>(this._addProf, prof, { headers: headers_options });
  }
  getUniqueProfsCourses(id) {
    return this.http.get<any>(this._getProfUniqueCourses + id);
  }
  loginProf(prof: User) {
    return this.http.post<any>(this._loginProf, prof);
  }
  allProfs() {
    let headers_options = new HttpHeaders().set("Authorization", localStorage.getItem("token"));

    return this.http.get<any>(this._allProfUrl, { headers: headers_options });
  }
  deletProf(id) {
    let headers_options = new HttpHeaders().set("Authorization", localStorage.getItem("token"));
    return this.http.delete<any>(this._deleteProf + "/" + id, { headers: headers_options });
  }

  getOneProf(id) {
    let headers_options = new HttpHeaders().set("Authorization", localStorage.getItem("token"));
    return this.http.get<any>(this._getOneProf + "/" + id, { headers: headers_options });
  }
  updateForm(id, user) {
    let headers_options = new HttpHeaders().set("Authorization", localStorage.getItem("token"));
    return this.http.patch<any>(this._updateForm + "/" + id, user, { headers: headers_options });
  }
}
