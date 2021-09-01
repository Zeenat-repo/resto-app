import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  URL="http://localhost:3000/resto"

  constructor(private _http:HttpClient) { }
  getRestoList(){
    return this._http.get(this.URL);
  }
  addResto(data: any){
    return this._http.post(this.URL, data);
  }
  getCurrentData(id: any){
    return this._http.get(`${this.URL}/${id}`)
    }
    updateResto(id:any,data:any){
      return this._http.get(`${this.URL}/${id}`,data)
    }
    deleteResto(id: any){
      return this._http.delete(`${this.URL}/${id}`)
    }
}
