import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class M49sSQLserviceService {
  vidSQL='0';
  vSQL='';
  DatiPost = {
    idSQL : this.vidSQL,
    sql: this.vSQL,
  };
  //url = `http://httpbin.org/post`;
  url = `http://localhost:1909/m49s`;


  constructor(private http: HttpClient) {

  }
  inviaPost(){
    this.DatiPost.idSQL=this.vidSQL;
    this.DatiPost.sql=this.vSQL; //assegna i valori
    console.log(this.DatiPost.sql);
    return this.http.post<any>(this.url, this.DatiPost);
  }
}//end
