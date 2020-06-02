import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-homeindex',
  templateUrl: './homeindex.component.html',
  styleUrls: ['./homeindex.component.css']
})
export class HomeindexComponent implements OnInit {

  data = [];
  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.getHomeData();
  }

  getHomeData() {
    // console.log("Hello");
    // this.dataService.getData().subscribe(res=>{
    // console.log(res);
    // })

    this.dataService.getData().subscribe(data => {
      this.data.push(data);
      console.log(this.data);
      }, error => console.error(error));
    }
  
  }
