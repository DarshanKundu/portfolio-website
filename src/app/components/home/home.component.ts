import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(public dataService:DataService){}
  
  position=this.dataService.toolTipPosition;
  toolTip=this.dataService.toolTipTexts;
 
  ngOnInit(): void {
  }
}
