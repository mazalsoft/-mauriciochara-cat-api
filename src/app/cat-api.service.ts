import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


@Injectable()
export class CatApiService {
  image;
  info;
  fulljson;
  myapikey="bda53789-d59e-46cd-9bc4-2936630fde39";
  headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'x-api-key': this.myapikey,
  }

  randomCatUrl="https://api.thecatapi.com/v1/images/search";
  

  requestOptions = {                                 
    headers: new HttpHeaders (this.headerDict), 
  };
  constructor(
    private http: HttpClient
  ) { }

  getRandomCat() {
    // this.fulljson = this.http.get("https://api.thecatapi.com/v1/images/search");
    // this.http.get<any>("https://api.thecatapi.com/v1/images/search").subscribe(data => {
    //   this.fulljson = data;
    // })
    this.fulljson = this.http.get("https://api.thecatapi.com/v1/images/search", this.requestOptions);
    return this.fulljson;
  }
}