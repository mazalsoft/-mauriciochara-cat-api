import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class DogApiService {

  image;
  info;
  fulljson;
  myapikey="ea88d668-b380-4077-be34-d5aa441fbdea";
  headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'x-api-key': this.myapikey,
  }

  randomUrl="https://api.thedogapi.com/v1/images/search";
  

  requestOptions = {                                 
    headers: new HttpHeaders (this.headerDict), 
  };
  constructor(
    private http: HttpClient
  ) { }

  getMockData() {
    this.fulljson = this.http.get('/assets/mock-dog-api.json');
    return this.fulljson;
  }

  getDogData(){
    this.fulljson = this.http.get(this.randomUrl, this.requestOptions);
    return this.fulljson;
  }

}