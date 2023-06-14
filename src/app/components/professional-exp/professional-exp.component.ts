import { Component } from '@angular/core';
import { ProfessionalExperience } from 'src/app/interfaces/professional-experience';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-professional-exp',
  templateUrl: './professional-exp.component.html',
  styleUrls: ['./professional-exp.component.css']
})
export class ProfessionalExpComponent {
    title="professional-experience"

    dataSource:any;
    displayedColumns:string[]=[];
    constructor(public dataService:DataService){}

    ngOnInit(){
       this.dataSource = this.dataService.professionalExp;
       this.displayedColumns = this.dataService.professionalExpColumns;
    }
}
