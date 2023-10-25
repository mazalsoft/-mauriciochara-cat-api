import { Component, OnInit } from '@angular/core';

import { CatApiService } from '../cat-api.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  // images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  
  image;
  fulljson;
  fulljsonStr;

  constructor(
    private catapi: CatApiService
    ) { }

  ngOnInit() {
    this.image = "http://placekitten.com/g/500/600"; // placeholder
  }

  requestData() {
    this.catapi.getRandomCat().subscribe((data) => {
      this.fulljson = data;
      this.fulljsonStr = JSON.stringify(data, undefined, 2);
      this.image = data[0].url;
    }
    );
    
  }

}