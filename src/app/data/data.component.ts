import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  data: any;
  searchtext:any;
  pageActual: number=1;
  constructor(private DataService:DataService) { }

  ngOnInit(): void {
    let response=this.DataService.getall();
    response.subscribe(data=>this.data=data)
    
  }

}
