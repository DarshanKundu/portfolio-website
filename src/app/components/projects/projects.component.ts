import { Component } from '@angular/core';
import { Awards } from 'src/app/interfaces/awards';
import { Projects } from 'src/app/interfaces/projects';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

    projectTitle:string="Projects";

    awardsTitle:string="Awards";
    
    projectSource:Projects[]=[]

    projectColumns:any[]=[]

    awardsSource:Awards[]=[]

    awardsColumns:any[]=[]


    constructor(public dataService:DataService){}

    ngOnInit(){
      this.projectSource=this.dataService.projects;
      this.projectColumns=this.dataService.projectColumns;
      this.awardsSource=this.dataService.awards;
      this.awardsColumns=this.dataService.awardsColumns;
    }
}
