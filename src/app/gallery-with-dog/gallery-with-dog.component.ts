import { Component, OnInit } from '@angular/core';
import { DogApiService } from '../dog-api.service';

@Component({
  selector: 'app-gallery-with-dog',
  templateUrl: './gallery-with-dog.component.html',
  styleUrls: ['./gallery-with-dog.component.css']
})
export class GalleryWithDogComponent implements OnInit {

  fulljson;
  fulljsonStr;
  image;
  breedinfo;

  constructor(
    private dogapi : DogApiService
  ) { }

  ngOnInit() {
    this.requestData();
  }

  requestData(){
    this.dogapi.getDogData().subscribe((data) => {
      this.fulljson = data;
      this.fulljsonStr = JSON.stringify(data, undefined, 2);
      this.image = data[0].url;
      this.breedinfo = data[0].breeds[0];
      console.log(this.fulljsonStr);
      console.log(this.breedinfo.name);
      }
    );
  }

}